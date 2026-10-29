# 🏛️ Website Design Template Library

A centralized, local-first collection of **production-ready website templates** and **modular UI components** for high-velocity engineers, designers, and founders.

Every template has a unique visual aesthetic, interactive state machines, realistic copy and telemetry, responsive layouts (desktop, tablet, mobile), and is completely self-contained for easy 60-second extraction into future projects.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the local preview server
npm run dev

# 3. Compile optimized production build
npm run build
```

Open **`http://localhost:5173`** in your browser.

---

## 🧭 Live Catalog Architecture

The application provides three views:

1. **Template Gallery (`/`)**: Discover and search templates with live preview cards featuring **interactive hover video previews** (smooth top-to-down automated page scrolling with full live animations, 60 FPS telemetry, and play/pause controls), tag filtering, category counts, design style badges, and a favorites system persisted to `localStorage`.
2. **Interactive Preview Shell (`#/preview/:id`)**: Full-screen preview with realistic responsive viewport toggles (**Desktop 100%**, **Tablet 768px**, **Mobile 375px**), step-by-step export instructions, copyable import snippets, and next/previous keyboard shortcuts.
3. **UI Components Explorer (`#/components`)**: Interactive catalog of reusable primitives (Buttons, Badges, Cards, Inputs, Tabs, Modals, Accordions, StatsCards, Skeletons) with live state toggles and 1-click copyable TSX snippets.
4. **Architecture Documentation (`#/docs`)**: Detailed guidelines on directory structure, tokens, and expanding towards 100+ templates.

---

## 📦 Master Templates Collection: 25 Production Templates

The collection features 25 completely self-contained, interactive master templates with dedicated design aesthetics, real copy, and realistic telemetry:

- **Batch 1 (Templates 01–10)**: AI Latent Vector Lab, Mission Control HUD, DEC VT-220 Terminal, Swiss Cloud Mesh, Lumina Academy, CyberForge Hackathon, VaultGuard Auth, BentoCraft Portfolio, FinPulse SaaS, Aura Atelier Minimal E-Commerce.
- **Batch 2 (Templates 11–20)**: Episteme Research Chat, Chronos Git DAG Graph, AlgoArena Competitive IDE, Nordic Tech Summit, Retro Windows 95 OS, Dieter Rams Industrial Monograph, Velocity Linear Tracker, Shibuya Streetwear Drop, AeroTrack Avionics Radar, Alpine Sanctuary Thermal Baths.
- **Batch 3 (Templates 21–25 — Rare Typography & Master Motion Suite)**:
  - **Æthelgard Horlogerie** (`/templates/luxury-haute-horlogerie`): Geneva master watchmaker atelier with *Cinzel* and *Cinzel Decorative* typography, oscillating 3-axis tourbillon balance wheel, Web Audio acoustic escapement metronome, synodic moonphase dial, and 4-tier layer dissection.
  - **Komorebi Sukiya** (`/templates/hosp-komorebi-pavilion`): Kyoto spatial sanctuary with *Syne* and *Fraunces* typography, interactive chiaroscuro sun dial casting realistic light rays through shoji screens, interactive stone basin ripple pond, and 5-stage Chado tea ritual.
  - **Vektorform Modular** (`/templates/dev-vektorform-synth`): Hardware sound synthesis laboratory with *Unbounded* and *Bricolage Grotesque*, real Web Audio API synthesizer keyboard, real-time CRT phosphor oscilloscope canvas, and 16-step modular trigger sequencer.
  - **Atelier Vénus** (`/templates/fashion-atelier-venus`): Parisian haute couture runway with *Fraunces* italic and *Syne*, 360° rotational drapery simulator with cut architecture wireframes, and dynamic incident illumination fabric sheen shader.
  - **ExoChronicle** (`/templates/edu-exochronicle-seti`): Deep space radio astronomy observatory with *Unbounded* and *Cormorant Garamond*, real-time scrolling radio waterfall spectrogram canvas, interactive Dispersion Measure (DM) plasma calculator, and SETI semiprime bitstream matrix decoder.

---

## 🎨 PROJECT: 28 Distinct Websites — 28 Different Web Design & Motion Styles

A dedicated collection of **28 complete, visually distinct websites** demonstrating the true characteristics of classic, historical, avant-garde, and contemporary motion design philosophies. Zero shared layouts, zero generic card tropes, and dedicated color palettes, typography stacks, and bespoke animation languages for each.

Accessible directly via the **"28 Websites"** tab or via standalone deep-link routes:

### 📦 Batch 1: Core Web Design Styles (Websites 01 – 10)

| # | Design Style | Concept & Name | Dedicated Route | Typography Stack | Signature Palette | Core Interactions |
|---|---|---|---|---|---|---|
| **01** | **Minimalist Design** | *Kaelen Vance* — Personal Systems Developer Portfolio | [`/minimalist`](src/websites/minimalist/index.tsx) (`#/minimalist`) | *Plus Jakarta Sans* | Stark Obsidian `#0a0a0a`, Pure White `#fafafa`, Warm Stone `#737373` | Generous whitespace, unadorned selected works list with expanding case study drawers, 4 Principles of Restraint, 1-click email copy. |
| **02** | **Modern Design** | *Synapse AI* — Autonomous Agent Swarm Platform | [`/modern`](src/websites/modern/index.tsx) (`#/modern`) | *Plus Jakarta Sans* & *Space Grotesk* | Deep Graphite `#080c15`, Electric Cobalt `#2563eb`, Icy Cyan `#38bdf8` | Live interactive WebAssembly multi-agent swarm runner, cryptographic attestation pillars, annual/monthly pricing switcher, trial provisioning. |
| **03** | **Brutalist Design** | *Atelier NO-SPEC* — Independent Digital Art Studio | [`/brutalist`](src/websites/brutalist/index.tsx) (`#/brutalist`) | *Space Mono* & *JetBrains Mono* | Absolute Black `#000000`, Blinding White `#ffffff`, Raw Warning Red `#ff3b00` | Real-time cursor coordinates tracker (X/Y), screen color inversion mode (Light / Void), interactive ASCII shader density cycler, raw manifesto signer. |
| **04** | **Neo-Brutalist Design** | *Hack//Pulse 2026* — World Student Hackathon | [`/neo-brutalist`](src/websites/neo-brutalist/index.tsx) (`#/neo-brutalist`) | *Bricolage Grotesque* & *Space Mono* | Acid Lime `#d4ff00`, Hyper Pink `#ff5caa`, Cyan `#00f0ff`, Yellow `#ffe600` | Thick 4px black borders with solid offset shadows (`4px 4px 0px #000`), tactile pressed buttons, live countdown ticker, 3-day schedule switcher, hacker badge generator. |
| **05** | **Maximalist Design** | *Chromalux* — Festival of Digital Excess | [`/maximalist`](src/websites/maximalist/index.tsx) (`#/maximalist`) | *Playfair Display* & *Bricolage Grotesque* | Tangerine `#ff6b35`, Chartreuse `#e2f952`, Lilac `#c77dff`, Violet `#11052c` | Multi-layered poster collage composition, overlapping artist lineup cards with stage filters, ambient audio mode toggle, tiered reality pass studio. |
| **06** | **Swiss / International** | *Atelier Helvetia* — Architecture & Design Practice | [`/swiss`](src/websites/swiss/index.tsx) (`#/swiss`) | *Space Grotesk* | Bone White `#f5f5f7`, Matte Carbon `#111111`, Klein Blue `#002fa7` | Toggleable 12-column modular grid guide overlay, asymmetric numbered section hierarchy (01 to 04), interactive architectural realization dossiers with engineering specs. |
| **07** | **Editorial Design** | *Folio* — Magazine of Contemporary Thought | [`/editorial`](src/websites/editorial/index.tsx) (`#/editorial`) | *Cormorant Garamond* & *Playfair Display* | Newsprint `#fdfbf7`, Printing Ink `#1b1917`, Editorial Sienna `#8a4f3d` | Traditional literary masthead, two-column lead feature essay with drop cap and dramatic pull quote, reading list bookmarks, Sunday dispatch newsletter subscription. |
| **08** | **Luxury / Premium** | *Maison Vendôme* — Haute Joaillerie & Couture | [`/luxury`](src/websites/luxury/index.tsx) (`#/luxury`) | *Playfair Display* | Obsidian Noir `#0a0908`, Alabaster `#f7f5f0`, Champagne Bronze `#c5a880` | Discreet hairline navigation with brand hallmark, cinematic full-bleed campaign hero, curated Haute Joaillerie piece dossiers, interactive private salon booking concierge. |
| **09** | **Corporate Design** | *Strata Cloud Systems* — Enterprise Architecture | [`/corporate`](src/websites/corporate/index.tsx) (`#/corporate`) | *Plus Jakarta Sans* | Executive Navy `#0b192c`, Precision Cobalt `#1e3e62`, Emerald `#059669` | Interactive enterprise cloud modernization ROI calculator with dynamic sliders, multi-industry case study tab switcher, SOC2/ISO/FedRAMP trust badges, executive briefing form. |
| **10** | **Organic / Natural** | *Botanica Terra* — Cellular Phyto-Botanical Nutrition | [`/organic`](src/websites/organic/index.tsx) (`#/organic`) | *Playfair Display* & *Warm Sans* | Oatmeal Cream `#f7f4ed`, Sage `#5a7359`, Terracotta `#c26e55`, Forest `#263629` | Botanical active encyclopedia with phyto-chemical profiles, circadian skincare ritual switcher (Morning vs Evening), circular Miron glass refill program. |

### 📦 Batch 2: Historical, Structural & Avant-Garde Styles (Websites 11 – 20)

| # | Design Style | Concept & Name | Dedicated Route | Typography Stack | Signature Palette | Core Interactions |
|---|---|---|---|---|---|---|
| **11** | **Scandinavian Design** | *Nordisk Forma* — Handcrafted Furniture & Interiors (Copenhagen 1958) | [`/scandinavian`](src/websites/scandinavian/index.tsx) (`#/scandinavian`) | *Plus Jakarta Sans* | Warm Cream `#faf8f5`, Nordic Oak `#c49a6c`, Smoked Ash `#695444` | Ambient lighting switcher (*Nordic Daylight* vs *Evening Hygge*), tactile material swatch selector (Oak, Smoked, Bouclé), archive dossiers, print folio form. |
| **12** | **Japanese Minimalism** | *KISA 喫茶* — Higashiyama Tea House & Ceramics Studio | [`/japanese-minimalism`](src/websites/japanese-minimalism/index.tsx) (`#/japanese-minimalism`) | *Cormorant Garamond* & *Space Mono* | Washi White `#f9f7f2`, Sumi Ink `#1a1918`, River Stone `#636058` | Spatial composition demonstrating *Ma* (間), Black Raku chawan & Nanbu Tekki iron kettle showcases, interactive 2-minute Gyokuro steeping timer, Chakai reservation. |
| **13** | **Bauhaus Design** | *Staatliches Bauhaus* — Schule für Gestaltung (Dessau/Weimar) | [`/bauhaus`](src/websites/bauhaus/index.tsx) (`#/bauhaus`) | *Space Grotesk* | Bauhaus Red `#d62828`, Blue `#003049`, Yellow `#fcbf49`, White `#f8f9fa` | Fundamental shapes (circle, square, triangle), Vorkurs preliminary course curriculum, Breuer Chair & Wagenfeld Lamp dossiers, Gropius manifesto, apprentice dossier form. |
| **14** | **Art Deco Design** | *The Majestic Hotel & Salon* — Lexington Ave NYC 1928 | [`/art-deco`](src/websites/art-deco/index.tsx) (`#/art-deco`) | *Playfair Display* | Midnight Obsidian `#08090c`, Gilded Brass `#d4af37`, Antique Ivory `#f7f4ea` | Stepped geometric fan arches, Chrysler Suite showcase, Palm Court tea salon, 1928 speakeasy cocktail menu, white-glove butler concierge reservation module. |
| **15** | **Retro-Futurism** | *Solaris Aero-Astronomics* — 1968 Lunar & Mars Initiative | [`/retro-futurism`](src/websites/retro-futurism/index.tsx) (`#/retro-futurism`) | *Space Grotesk* | Orbital Orange `#ff5a1f`, Atomic Teal `#1a7578`, Cream Newsprint `#faf5eb` | Mid-century aerospace blueprint schematics, Orion-VII shuttle & Vanguard orbital ring dossiers, 1968–1984 historical roadmap, civilian lunar flight booking terminal. |
| **16** | **Contemporary Art Design** | *Kunsthalle Vakuum* — Berlin-Kreuzberg Contemporary Art Gallery | [`/contemporary-art`](src/websites/contemporary-art/index.tsx) (`#/contemporary-art`) | *Cormorant Garamond* & *Space Mono* | Titanium White `#f7f6f2`, Slate `#2b2b29`, Beeswax `#d6d2c4` | Interactive gallery atmosphere switcher (Titanium White vs Obsidian Void vs Sepia), Elena Voronova solo exhibition canvas visualizer, viewing room inspector, audio guide, private viewing RSVP. |
| **17** | **Bento Grid Design** | *Kronos OS* — Cognitive Workspace & Second Brain | [`/bento-grid`](src/websites/bento-grid/index.tsx) (`#/bento-grid`) | *Plus Jakarta Sans* & *Space Grotesk* | Obsidian Void `#090d16`, Electric Cyan `#06b6d4`, Indigo `#6366f1` | Modular Bento Grid with varying column/row spans, live interactive Pomodoro focus stopwatch, real-time local scratchpad note capture, interactive task matrix, velocity sparklines. |
| **18** | **Asymmetrical Layout** | *Axis & Void* — Architectural Practice & Spatial Lab (Zürich & Tokyo) | [`/asymmetrical`](src/websites/asymmetrical/index.tsx) (`#/asymmetrical`) | *Space Grotesk* | Raw Basalt `#141517`, Burnt Sienna `#c96245`, Alpine Granite `#b0ada4` | Deliberate structural asymmetry with unequal columns (72/28, 58/42), CAD cantilever elevation blueprints, staggered project realisations, asymmetric manifesto (30% axioms / 70% thesis), commissioning dossier. |
| **19** | **Swiss Grid Design** | *IMV Basel* — Institut für Mathematische Visualisierung | [`/swiss-grid`](src/websites/swiss-grid/index.tsx) (`#/swiss-grid`) | *Space Grotesk* & *Space Mono* | Laboratory White `#fafaf9`, Swiss Crimson `#e63946`, Black `#111215` | Interactive 12-column hairline guide overlay toggle, Calabi-Yau variety topological vector visualizer, strict 12-column structured lab tables, open-science paper repository with DOI drawers. |
| **20** | **Broken Grid Design** | *Deviant Lab* — Creative Computation & Radical Code | [`/broken-grid`](src/websites/broken-grid/index.tsx) (`#/broken-grid`) | *Space Grotesk* & *Bricolage Grotesque* | Pitch Void `#070709`, Acid Volt `#ccff00`, Electric Violet `#a855f7` | Scale-breaking typography extending beyond column boundaries, interactive Grid Destruction Chaos Factor slider adjusting UI skew in real time, overlapping project showcases, rule-breaking terminal. |
 
### 📦 Batch 3: Immersive Motion Web Collection (Websites 21 – 28)

| # | Animation Style | Concept & Name | Dedicated Route | Typography Stack | Signature Palette | Core Motion & Interactions |
|---|---|---|---|---|---|---|
| **21** | **Horizontal Scroll Storytelling** | *Aura & Monolith* — Spatial Architecture & Horizontal Exhibition | [`/horizontal-scroll`](src/websites/horizontal-scroll/index.tsx) (`#/horizontal-scroll`) | *Unbounded* & *Cormorant Garamond* | Obsidian Noir `#07080b`, Laser Cyan `#00f0ff`, Pure White `#ffffff` | Multi-viewport horizontal traverse with passive wheel-to-horizontal conversion, cantilevered isometric vector blueprints, technical modal dossiers, and bottom progress scrubber. |
| **22** | **Scroll-Driven Storytelling** | *Chronos Neural Lattice* — The Quantum Synthesis Engine | [`/scrollytelling`](src/websites/scrollytelling/index.tsx) (`#/scrollytelling`) | *Unbounded* & *JetBrains Mono* | Deep Space `#050609`, Cyan `#00f0ff`, Purple `#a855f7`, Emerald `#10b981` | Pinned apparatus stage with progressive 5-phase visual metamorphosis (Singularity &rarr; Entanglement &rarr; Resonator &rarr; Tensor &rarr; Mesh), bi-directional chapter steppers, cryogenic sliders. |
| **23** | **Motion-First Design** | *VOLT & FLUX* — Motion Design & Brand Choreography Atelier | [`/motion-first`](src/websites/motion-first/index.tsx) (`#/motion-first`) | *Unbounded* & *Space Mono* | Basalt Noir `#07080c`, Hyper Crimson `#ff0055`, Warning Orange `#ff5500` | Magnetic cursor response buttons with physics spring easing, real-time choreography studio controls adjusting UI easing and velocity live, expanding layout cards with kinetic choreography. |
| **24** | **Immersive WebGL / Three.js** | *Solaria* — Procedural Spatial Sculptures & Generative Void | [`/immersive-3d`](src/websites/immersive-3d/index.tsx) (`#/immersive-3d`) | *Unbounded* & *JetBrains Mono* | Void Black `#06070a`, Liquid Chrome `#e2e8f0`, Cyan `#00f0ff`, Amethyst `#a855f7` | Genuine Three.js WebGL scene with ACES Filmic PBR lighting, procedural morphology switcher (Torus Knot, Möbius, Icosahedron, Gyro), drag-to-orbit pointer controls, and particle starfield. |
| **25** | **Parallax & Layered Depth** | *Aethelgard Fjord* — Volcanic Monograph & Deep Earth Transits | [`/parallax`](src/websites/parallax/index.tsx) (`#/parallax`) | *Unbounded* & *Cormorant Garamond* | Deep Basalt `#05070a`, Aurora Emerald `#10b981`, Glacial Ice `#e2e8f0` | Multi-plane 2.5D depth parallax across 5 distinct planes responding to scroll and mouse gyroscope tilt, reduced-motion toggle, and expedition dossiers with live seismograph vector plots. |
| **26** | **Infinite Marquee Motion** | *NEO-CADENCE* — Cyber Couture & Cultural Monolith | [`/infinite-motion`](src/websites/infinite-motion/index.tsx) (`#/infinite-motion`) | *Unbounded* & *JetBrains Mono* | Pitch Black `#07080c`, Phosphor Green `#00ff66`, Neon Pink `#ff0055` | Interlocking multi-directional infinite marquees with seamless vector loops, tactile play/pause, reverse direction, velocity multiplier, and interactive allocation drop cards. |
| **27** | **Kinetic Typography** | *TYPE-LAB* — Radical Variable Typography & Kinetic Form | [`/kinetic-typography`](src/websites/kinetic-typography/index.tsx) (`#/kinetic-typography`) | *Unbounded*, *Fraunces*, *Bricolage* | Type Black `#07080b`, Acid Citron `#ccff00`, Laser Crimson `#ff0055` | Variable font-weight (200-900), tracking, and slant calibration, magnetic character scatter dispersing glyphs on proximity, continuous radial SVG path text rotation, and glitch displacement trigger. |
| **28** | **Experimental Interactive** | *NEXUS* — The Shapeshifter Studio & Multidisciplinary Art | [`/experimental`](src/websites/experimental/index.tsx) (`#/experimental`) | *Unbounded* & *JetBrains Mono* | Void Matrix `#060608`, Cyan `#00f0ff`, Hyper Pink `#ff0055`, Acid Lime `#ccff00` | Continuous organic liquid metaball morphing along mathematical bezier curves, polygonal clip-path aperture transitions, floating artifact cards, and secret wireframe discovery trigger. |

---

## 🏆 PROJECT: Best-in-Class Website UI Recreation Lab
### 10 High-Quality Website Recreations with Signature Interactive Demos

A dedicated collection of **10 faithful reverse-engineered website recreations** modeled on the internet's most celebrated engineering, design, and fintech marketing platforms. Each recreation reproduces the brand's visual language, authentic typography hierarchy, color tokens, and signature interactive product demonstrations.

Accessible directly via the **"UI Lab"** tab (`#/designs`) or via dedicated routes:

| # | Reference Brand | Original Live Site | Dedicated Route | Primary Theme | Accent | Signature Interactive Demonstration | Key Techniques |
|---|---|---|---|---|---|---|---|
| **01** | **Linear** | [`linear.app`](https://linear.app) | [`/designs/linear`](src/designs/linear/index.tsx) (`#/designs/linear`) | Obsidian Dark `#08090a` | Indigo `#5E6AD2` | Interactive keyboard-first issue tracker, cycle velocity tracker, and ⌘K Command Palette. | Keyboard listeners (`C`, `⌘K`), radial ambient glows, dual list/kanban view, status & priority badges. |
| **02** | **Stripe** | [`stripe.com`](https://stripe.com) | [`/designs/stripe`](src/designs/stripe/index.tsx) (`#/designs/stripe`) | Crisp White `#ffffff` | Indigo `#635bff` | Signature tilted gradient mesh canvas hero, interactive Apple Pay & credit card checkout simulator, and multi-language API code toggle. | CSS skew transform mesh, live payment intent simulation, multi-language SDK switcher (Node, Python, Ruby, Go, cURL), revenue calculator slider. |
| **03** | **Vercel** | [`vercel.com`](https://vercel.com) | [`/designs/vercel`](src/designs/vercel/index.tsx) (`#/designs/vercel`) | Pure Black `#000000` | White `#ffffff` | Framework code selector (Next.js, SvelteKit, Nuxt, Astro, Remix), live simulated edge deploy terminal pipeline, and global edge latency matrix. | Monochrome high-contrast grid, Turbopack rollout simulation, edge region latency table, CLI copy commands. |
| **04** | **Framer** | [`framer.com`](https://www.framer.com) | [`/designs/framer`](src/designs/framer/index.tsx) (`#/designs/framer`) | Canvas Dark `#0a0a0a` | Electric Blue `#0055ff` | Responsive viewport breakpoint switcher (Desktop 1200px / Tablet 810px / Mobile 390px) and AI prompt layout generator. | Dynamic responsive canvas frame resizing, dot matrix grid backdrop, theme preset cycler, auto-layout hints. |
| **05** | **Raycast** | [`raycast.com`](https://www.raycast.com) | [`/designs/raycast`](src/designs/raycast/index.tsx) (`#/designs/raycast`) | Deep Acrylic `#07080a` | Coral Crimson `#ff6363` | Floating Spotlight command HUD (`⌘Space`), real-time inline math evaluator, and extension store catalog. | Frosted glassmorphism modal, hotkey listener (`⌘+Space`), live math parser, extension installation state machine. |
| **06** | **Figma** | [`figma.com`](https://www.figma.com) | [`/designs/figma`](src/designs/figma/index.tsx) (`#/designs/figma`) | Clean Light `#f8f9fa` | Purple `#a259ff` | Live multiplayer collaborative cursors with user avatar tags and chat bubbles, interactive artboard canvas, and Dev Mode CSS code inspector. | Simulated ambient collaborator presence, vector toolbar (Select, Frame, Pen, Text), clickable node selection, live CSS output drawer. |
| **07** | **Attio** | [`attio.com`](https://attio.com) | [`/designs/attio`](src/designs/attio/index.tsx) (`#/designs/attio`) | Obsidian Slate `#090b10` | Cobalt Blue `#3b82f6` | Relational CRM pipeline table with clickable lifecycle stages, health bars, and visual workflow automation builder. | Interactive table filtering, deal stage cycling (Discovery &rarr; Closed Won), connected node automation runner with execution logs. |
| **08** | **Ramp** | [`ramp.com`](https://ramp.com) | [`/designs/ramp`](src/designs/ramp/index.tsx) (`#/designs/ramp`) | Modern Ivory `#f7f8f6` | Emerald `#16a34a` | Metallic Visa corporate card render with dynamic spend limit slider, category policy toggles, one-click card freeze/unfreeze, and receipt OCR simulator. | Card reflection lighting, policy checkboxes, simulated Delta Airlines OCR matching in 0.4s, annual headcount savings calculator. |
| **09** | **Supabase** | [`supabase.com`](https://supabase.com) | [`/designs/supabase`](src/designs/supabase/index.tsx) (`#/designs/supabase`) | Console Dark `#121212` | Emerald Green `#3ecf8e` | Real interactive SQL query runner with latency timer and formatted database rows, auth provider toggles, and realtime CDC event stream console. | Live SQL query evaluation, tabbed console switching (SQL / Auth / Realtime), WebSocket change data capture simulator with broadcast trigger. |
| **10** | **Resend** | [`resend.com`](https://resend.com) | [`/designs/resend`](src/designs/resend/index.tsx) (`#/designs/resend`) | High-Contrast Black `#000000` | White `#ffffff` | Side-by-side React Email JSX editor with live rendered email client preview and simulated test email dispatch. | Dual-pane split view, live email client render with styled container and button, simulated HTTP 200 delivery receipt, deliverability metrics. |

---

## 🚀 How to Extract a Template Into a New Project

Every template is designed to be **completely modular and self-contained**. You can extract any template in 3 simple steps:

### Step 1: Copy the Template Folder
Copy the directory for the desired template into your new project's `src/` directory:
```bash
# Example: Copying the AI Neural Canvas template
cp -r src/templates/ai/neural-canvas/ ~/my-project/src/components/neural-canvas/
```

### Step 2: Install Core Dependencies
All templates share minimal, ubiquitous dependencies:
```bash
npm install lucide-react clsx tailwind-merge
```

### Step 3: Import and Render
```tsx
import { CognitiveStudioTemplate } from './components/neural-canvas';

export default function Page() {
  return <CognitiveStudioTemplate />;
}
```

---

## 🧩 Reusable UI Primitives

The library includes self-contained UI primitives located under `src/components/ui/`:

- **`Button`**: Primary, Secondary, Outline, Ghost, Glow, Neo-Brutalist, Danger, Loading spinners, Left/Right icon slots.
- **`Badge`**: Colored indicator pills with optional pulsing live telemetry dots.
- **`Card`**: Default, Glassmorphic, Elevated, Neo-Brutalist offset shadow, and Glow variants.
- **`Input`**: Accessible input fields with floating labels, error text, prefix and suffix icons.
- **`Tabs`**: Segmented pill controls and underline border tabs with active badges.
- **`Modal`**: Accessible backdrop dialog with keyboard `Escape` listeners and scroll locking.
- **`Accordion`**: Collapsible drawers with chevron rotation and single/multiple expand support.
- **`StatsCard`**: Metric cards with trend badges, percentage shifts, and icon indicators.
- **`Skeleton`**: Animated pulse loaders for cards, circles, and text lines.

---

## 🛠️ How to Add a New Template to the Library

To expand towards the **100+ template library goal**:

1. **Create the Template Directory**:
   Add a new folder under `src/templates/<category>/<template-name>/index.tsx`.
2. **Implement the Template**:
   Build the self-contained component with responsive Tailwind styling and interactive states.
3. **Register Metadata**:
   Open `src/data/templates-registry.ts` and add an entry to `templatesRegistry`:
   ```ts
   {
     id: 'my-new-template',
     name: 'My New Template',
     category: 'ai',
     categoryLabel: 'AI & Machine Learning',
     style: 'futuristic-dark',
     styleLabel: 'Futuristic Dark Neon',
     description: 'Short overview of the design...',
     tags: ['Tag1', 'Tag2'],
     supportedTheme: 'dark',
     pageType: 'Landing Page',
     features: ['Feature 1', 'Feature 2'],
     dependencies: ['lucide-react', 'clsx'],
     sourcePath: 'src/templates/ai/my-new-template/index.tsx',
     previewRoute: '/templates/my-new-template',
     customizationNotes: ['Point 1', 'Point 2'],
     component: MyNewTemplate,
     accentColor: '#06b6d4'
   }
   ```
The central gallery, search index, style chips, and responsive preview shell will discover and render the new template automatically.

---

## 🧪 PROJECT: Color Palette Laboratory (105 Master Color Systems)

A dedicated, local-first web application that generates, organizes, previews, customizes, and exports production-grade color palettes for websites, integrated directly into the top navigation (**"Color Lab"** or `#/colors`).

### 🌟 Core Capabilities
1. **105 Curated Master Palettes across 15 Families**:
   - *Minimalist & Monochromatic* (Architect's Slate, Pure Void, Alabaster Editorial, Stark Obsidian, Cloud Cashmere, Monolith Charcoal, Titanium Fog)
   - *Luxury & Premium* (Maison Vendôme, Royal Imperial, Champagne Bronze, Midnight Caviar, Cognac Reserve, Sovereign Emerald, Velvet Bordeaux)
   - *Scandinavian & Japanese* (Nordisk Hygge, Copenhagen Birch, Wabi-Sabi Sumi, Kyoto Bamboo, Washi Paper & Indigo, Oslo Fjord, Enso Charcoal)
   - *Earthy, Organic & Botanical* (Botanica Terra, Terracotta Clay, Olive Grove, Desert Sandstone, Highland Moss, Raw Ochre, Ancient Amber)
   - *Cyberpunk & Futuristic* (Neo-Tokyo Hologram, Cyber Matrix, Acid Overdrive, Void Runner, Quantum Synth, Glitch Circuit, Laser Hex)
   - *Bauhaus & Geometric* (Dessau Master, Primary Constructivism, Weimar De Stijl, Kandinsky Balance, Graphic Suprematism)
   - *Brutalist & Neo-Brutalist* (Atelier NO-SPEC, Acid Hyper-Pop, Electric Citron, High-Voltage Cyan, Concrete & Hazard Orange, Blueprint Monochrome)
   - *Editorial & Swiss* (Folio Ink & Paper, Neue Helvetica Klein, Zurich Red & Ash, Literary Espresso, Broadside Charcoal, Basel Monotype)
   - *Pastel & Soft Modern* (Gelato Whisper, Lavender Mist, Peach Sorbet, Seafoam Cloud, Buttercup Breeze, Powder Dusk)
   - *Retro, Vintage & Y2K* (1970s Groove, 1980s Sunset Boulevard, Y2K Cyber Bubble, 1990s Grunge Plaid, Memphis Pop, 1960s Polaroid)
   - *Nature (Ocean, Forest, Desert, Sunset)* (Pacific Abyssal, Alpine Evergreen, Mojave Dune, Mediterranean Aqua, Nordic Tundra, Sedona Canyon)
   - *Playful & Experimental* (Electric Candy, Arcade Joy, Pop Art Bubblegum, Rainbow Prism, Cosmic Sorbet, Neo-Grotesque Funk, Carnival Vivid)
   - *Technology, AI & Developer Tools* (Synapse AI Cobalt, Terminal Hacker Amber, Rust & Cargo, Pythonic Emerald, Solana Aurora, GraphQL Magenta, Cloudflare Amber)
   - *Finance, Healthcare & Commerce* (Fintech Trust Navy, Digital Asset Cyan, Clinical Sage, Biotech Heliotrope, High-End Commerce Gold, Sustainable Thrift)
   - *Dark Mode & High Contrast* (OLED Obsidian Blue, Midnight Emerald, Deep Space Purple, Tactical Red OLED, High-Contrast AAA Yellow, Polar AAA White, Supernova Gold)

2. **Semantic Design Token Architecture**:
   - Each palette defines 18+ semantic roles: `primary`, `secondary`, `accent`, `background`, `surface`, `surfaceElevated`, `textPrimary`, `textSecondary`, `textMuted`, `border`, `borderHover`, `buttonPrimaryBg`, `buttonPrimaryText`, `buttonSecondaryBg`, `buttonSecondaryText`, `success`, `warning`, `error`, `info`.
   - Complete 11-step tonal scale (`50` through `950`) generated mathematically for the primary brand color.

3. **Live Preview Studio (11 Real HTML/CSS UI Patterns)**:
   - Preview every palette on real, dynamic UI components: Navigation Bar, Hero Section, Feature Cards, Pricing Matrix, Analytics Dashboard (with SVG trendlines), Auth Form, Modal Dialog, Editorial Layout, E-Commerce Product Card, Footer, and Full Landing Page.
   - Interactive responsive viewport switcher: **Desktop (100%)**, **Tablet (768px)**, **Mobile (390px)**.

4. **WCAG 2.1 Contrast Matrix Audit**:
   - Mathematically calculates relative luminance and audits 10 critical UI pairings.
   - Clear AA and AAA compliance badges for normal and large text.
   - 1-click **Auto-Fix** suggestions to instantly calibrate failing combinations to 4.5:1.
   - Ad-hoc custom contrast sandbox calculator.

5. **Token Editor & Harmony Generator**:
   - Interactive color pickers with hex inputs.
   - Color locking to protect chosen colors during generation.
   - 1-click mathematical harmonies: Complementary, Analogous, Triadic, Split-Complementary, Monochromatic.
   - Global sliders for Hue rotation (-180° to +180°), Saturation multiplier, and Lightness offset.
   - Local-first persistence to `localStorage`.

6. **Export Studio**:
   - Instant copy and download as **CSS Custom Properties** (`.css`), **Tailwind CSS Config** (`tailwind.config.js`), **W3C Design Tokens JSON** (`.tokens.json`), **SCSS Variables** (`.scss`), and **Ready-to-use CSS**.

---

## ⚡ Living UI & Motion Laboratory (40 Creative Components across Batches 1 & 2)

A permanent, expandable visual playground of original, reusable animated website components, creative coding experiments, procedural 3D sculptures, and physics simulations.

Accessible directly via the **"Motion Lab"** tab (`#/motion`) with live parameter tweak controls, FPS target telemetry, copy-paste React snippets, and fullscreen preview.

### 🔬 Batch 1: Core Creative Categories (Components 01 – 30)

| Category | # | Component | Tech Stack | Description & Mathematical Foundation |
|---|---|---|---|---|
| **ASCII Art & Terminal** | 01 | **3D Raymarched ASCII Sphere** | ASCII / Canvas | Real-time raymarched sphere with cursor light tracking and luminance character mapping. |
| | 02 | **Mathematical Donut Torus** | ASCII / Math | Dual-axis rotation matrix donut with surface normal luminance calculations. |
| | 03 | **Ascii Particle Text Dissolve** | ASCII / Canvas | Typography rasterized into character grid with spring return and cursor scatter physics. |
| | 04 | **Ascii Wave Interference** | ASCII / Procedural | 2D harmonic wave equation ripple interference field with mouse emitter. |
| | 05 | **Cyberpunk Matrix Rain** | ASCII / Canvas | Authentic digital streams with Katakana symbols, glowing heads, and mouse deflection. |
| | 06 | **Retro Terminal Boot Sequencer** | ASCII / CLI | Cyberpunk computer boot sequencer with interactive command console (`help`, `scan`, `status`). |
| | 07 | **Ascii Radar Elevation Scanner** | ASCII / Radar | Monospace elevation radar scanner with multi-octave terrain waves and cursor probe. |
| **Three.js & 3D Sculptures** | 08 | **Parametric Moebius Ribbon** | Three.js / WebGL | Procedural 3D Moebius twisting sculpture with dynamic vertex displacement and orbit response. |
| | 09 | **Kinetic Gyroscope Rings** | Three.js / WebGL | Concentric 3-axis gimbal rings with metallic sheen and pulsing core star. |
| | 10 | **Harmonic Noise Morph Blob** | Three.js / WebGL | Subdivided icosahedron morphing via multi-octave harmonic noise vertex displacement. |
| | 11 | **Platonic Polyhedron Network** | Three.js / WebGL | Orbiting Platonic solids cluster connected via dynamic synapse line segments. |
| | 12 | **Floating Monolith Diorama** | Three.js / WebGL | Isometric architectural diorama with PCF soft shadows, floating monolith, and beacon ring. |
| **GLSL & Procedural Shaders** | 13 | **WebGL Liquid Chrome Metal** | GLSL / WebGL | Liquid mercury surface simulated via fBm domain warping and cursor ripples. |
| | 14 | **Iridescent Optical Oil Slick** | GLSL / WebGL | Thin-film optical wave interference reproducing rainbow iridescence with velocity swirl. |
| | 15 | **Animated Voronoi Bio-Mosaic** | GLSL / WebGL | Dynamic cellular automata with glowing Euclidean cell boundaries and pointer attraction. |
| | 16 | **Chromatic Glitch & RGB Split** | Canvas / Shaders | Color channel displacement with horizontal scanlines and glitch slice bursts. |
| | 17 | **Luminescent Fluid Gradient Mesh** | Canvas / Fluid | Multi-point fluid gradient color mesh with additive screen blending and sinusoidal drift. |
| **Micro-Interactions** | 18 | **Magnetic Elastic Button** | CSS / Springs | Magnetic cursor attraction vector, spring damping, internal light beacon, and shockwave. |
| | 19 | **3D Directional Tilt Card** | CSS / 3D | Card calculating entry coordinates to tilt organically with dynamic specular glare reflection. |
| | 20 | **Organic Morphing Menu Icon** | SVG / Web Audio | Cubic Bezier hamburger-to-cross morph with magnetic snap and synthetic audio click. |
| | 21 | **Cryptographic Scramble Decoder** | CSS / Typography | Hacker text decryption cycler with random glyph resolution and customizable charsets. |
| | 22 | **Spatial Kinetic Typography** | CSS / Inertia | Split-word typography with staggered physical overshoot and character wave physics. |
| | 23 | **Hydrodynamic Liquid Gauge** | Canvas / Hydro | Fluid-filled progress reservoir with sloshing wave physics and floating bubbles. |
| **Canvas & Verlet Physics** | 24 | **Boids Autonomous Flocking Swarm**| Canvas / Boids | Craig Reynolds flocking simulation (separation, alignment, cohesion) with cursor predator/attractor. |
| | 25 | **Verlet Elastic Cloth Mesh** | Canvas / Verlet | Interactive Verlet spring-mass cloth mesh that can be dragged, tugged, and wind-rippled. |
| | 26 | **N-Body Celestial Orbital Gravity**| Canvas / Orbital | N-body gravitational mechanics sandbox with primary solar well and decaying trails. |
| | 27 | **Magnetic Elastic Dot Matrix** | Canvas / Spring | Dense grid of dots magnetically repelling and warping with tensile web strands. |
| **Scroll & Depth** | 28 | **Staggered Slice Curtain Reveal**| CSS / Parallax | Multi-layer staggered slice curtain transition revealing underlying architectural media. |
| | 29 | **Multi-Plane 3D Parallax Stack** | CSS / 3D Stack | Spatial depth stack with focal plane shifting, 3D gyro tracking, and depth-of-field blur. |
| **Generative Decorative** | 30 | **Procedural Ornamental Border** | SVG / Vector | Mathematical SVG geometric frame with animated stroke dashoffset pulses and corner rosettes. |

### 🔬 Batch 2: Advanced Quantum, Non-Euclidean & Chaos Experiments (Components 31 – 40)

| Category | # | Component | Tech Stack | Description & Mathematical Foundation |
|---|---|---|---|---|
| **Quantum Physics** | 31 | **Quantum Wavepacket Collapse** | Canvas / Quantum | 1D Schrödinger complex wavepacket $|\psi(x,t)|^2$ tunneling through a potential barrier with pointer-triggered collapse. |
| **Differential Chaos** | 32 | **Lorenz Strange Attractor Chaos** | Three.js / WebGL | 3D non-linear chaotic convection system ($\sigma=10, \rho=28, \beta=8/3$) with 2,200 integrated trajectory points and 3D orbit. |
| **Acoustic Physics** | 33 | **Chladni Plate Cymatics Resonance** | Canvas / Acoustics | 5,000 sand grains on a vibrating square plate migrating to standing wave $(m,n)$ nodal lines under variable modal frequencies. |
| **Non-Euclidean Math** | 34 | **Hyperbolic Poincaré Disk Model** | Canvas / Non-Euclidean | $\{7,3\}$ heptagonal hyperbolic tiling in the Poincaré unit disk with geodesic arcs, horocycles, and Möbius isometry pan. |
| **Neuromorphic Systems**| 35 | **Cortical Neural Synapse Spiking** | Canvas / Neuro | Spiking biological neural cortex with Hodgkin-Huxley style action potential axon propagations, synapses, and probe. |
| **Magnetohydrodynamics**| 36 | **Ferrofluid Rosensweig Spikes** | Canvas / Physics | Rosensweig normal-field instability simulation where magnetic liquid iron spikes erupt and follow cursor magnetic dipoles. |
| **Instanced 3D Voxel** | 37 | **Voxel Topography Matrix Waves** | Three.js / Instancing | 1,024 3D instanced voxel columns undulating to multi-octave harmonic simplex heightmap waves with orbit camera. |
| **Interactive Physics** | 38 | **Kinetic Voronoi Crystal Shatter** | CSS / Canvas Physics | Tactile crystalline glass card fracturing into 24 physics Voronoi shards on click with spring restitution. |
| **Monospace Raymarching**| 39 | **Raymarched Monospace Wormhole** | ASCII / Raymarching | Monospace terminal raymarched distance field tunnel with surface lighting normals, spiral distortion, and variable caliber. |
| **Turbulent Fluids** | 40 | **Curl Noise Fluid Smoke Advection**| Canvas / Fluid | Grid-free turbulent curl noise smoke advection generating phosphorescent expanding smoke plumes trailing behind cursor velocity. |

---

## 🎨 SVG Motion Laboratory (40 Master Vector Experiments across Batches 1 & 2)

A dedicated, local-first library of original, visually sophisticated, reusable SVG animations and vector art. Accessible directly via the **"SVG Lab"** tab (`#/svg`) with live parameter controls, responsive `viewBox` architecture, backdrop switcher (Dark, Light, Grid), and one-click React JSX / SVG export.

### 📐 Batch 1: Core Vector Techniques (Components 01 – 30)

| Category | # | Component | Technique | Description & Mathematical Foundation |
|---|---|---|---|---|
| **Line Art & Strokes** | 01 | **Editorial Continuous-Line Face** | `stroke-dash` | Picasso single-stroke continuous blind contour face with editorial color wash. |
| | 02 | **Orthographic Temple Blueprint** | `stroke-dash` | Classical temple elevation drawing itself in engineering phases with dimension witness lines. |
| | 03 | **Phyllotaxis Botanical Frond** | `stroke-dash` | Botanical fern frond growing upward with primary curving rachis and alternating leaflets. |
| | 04 | **Ecliptic Celestial Map** | `stroke-dash` | Astrometric star chart (Ursa Major & Cassiopeia) with rotating declination rings and star nodes. |
| **Shape Morphing** | 05 | **Continuous Polygon Morph** | `morph` | Circle deformed into triangle, quad, pentagon, hexagon, and dodecagon with smooth vertex interpolation. |
| | 06 | **Sacred Geometric Lotus Bloom** | `transform` | Concentric rings of sacred geometry lotus petals unfurling into full bloom with golden bindu. |
| | 07 | **Viscous Harmonic Fluid Blob** | `morph` | Organic fluid contour using procedural spline interpolation with harmonic time displacement. |
| | 08 | **Monogram to Isometric Cube** | `transform` | Minimalist brand glyph ("A") transforming cleanly into an isometric 3D wireframe cube. |
| **Organic Nature** | 09 | **Aerodynamic Monarch Butterfly** | `transform` | Monarch butterfly with animated dual-plane wings fluttering with 3D scale/skew perspective. |
| | 10 | **Hydrodynamic Ocean Swells** | `transform` | Multi-layered rolling ocean swells with undulating vector bezier crests and breaking froth lip. |
| | 11 | **Astronomical Moon Phase Cycle** | `mask` | Lunar orb with Maria craters cycling through 8 moon phases via dynamic elliptical shadow mask. |
| | 12 | **Recursive Fractal Tree** | `stroke-dash` | Organic tree trunk germinating from ground, splitting into 5 levels of recursive bifurcating branches. |
| **Generative Math** | 13 | **Harmonic Lissajous Oscillations** | `parametric` | Parametric Lissajous figure with configurable frequency ratios ($a:b$) and phase shifts. |
| | 14 | **Hypotrochoid Spirograph** | `parametric` | Mathematical roulette curve where circle $r$ rolls inside radius $R$ with pen offset $d$. |
| | 15 | **16-Fold Sacred Yantra Mandala** | `transform` | 16-fold rotational symmetry mandala with interlocking sacred geometry rings and rotating gears. |
| | 16 | **Optical Moiré Fringes** | `interactive` | Dual overlaid concentric circular grids producing dynamic optical moiré fringes under mouse hover. |
| **Masks & Reveals** | 17 | **Dynamic Mask Liquid Wipe** | `mask` | Fluid wave SVG mask wiping across a viewport to unveil underlying vibrant multi-tone artwork. |
| | 18 | **Mechanical 8-Blade Iris Shutter** | `transform` | Camera shutter polygon aperture with 8 interlocking blades expanding from center. |
| | 19 | **Halftone Matrix Aperture Mask** | `mask` | Dynamic halftone dot grid where circular apertures scale along a sine wave gradient. |
| **Typography** | 20 | **Calligraphic Cursive Font Tracer** | `stroke-dash` | Elegant cursive calligraphy lettering writing itself stroke-by-stroke with animated pen nib. |
| | 21 | **textPath Kinetic Orbital Stamp** | `transform` | Kinetic circular text rotating along an SVG `<textPath>` circle with directional toggle. |
| | 22 | **3D Isometric Block Typography** | `transform` | 3D isometric letterforms ("VECTOR") with oscillating extrusion depths and shadows. |
| **Micro Icons** | 23 | **Search to Close Elastic Morph** | `morph` | Magnifying glass search icon organically extending handle into an "X" close icon. |
| | 24 | **Cyberpunk Shield Progress Meter** | `stroke-dash` | Hexagonal shield progress indicator with rotating tick markers, percentage display, and dashoffset arc. |
| | 25 | **Viscoelastic Fluid Toggle Switch**| `morph` | Organic liquid toggle switch where the thumb stretches elastically with fluid surface tension. |
| **Scenes & Systems**| 26 | **Isometric Cyberpunk Metropolis** | `transform` | Layered isometric city with skyscraper window lights, floating maglev pods, and blinking towers. |
| | 27 | **Horological Clockwork Orrery** | `transform` | Astronomical clockwork mechanism with interlocking rotating brass gears and orbiting planets. |
| | 28 | **Floating Aerostat Biosphere** | `transform` | Floating airborne island with levitation, cascading vector waterfall, and rotating wind turbine. |
| **Experimental Art**| 29 | **Penrose Tribar Paradox** | `transform` | Animated Penrose impossible tribar with an optical photon traveling continuously along its planes. |
| | 30 | **Viscoelastic String Cat's Cradle** | `interactive` | Interactive string network that bends and vibrates elastically with cursor pluck physics. |

### 📐 Batch 2: Advanced Sacred, Mechanical & Natural Vectors (Components 31 – 40)

| Category | # | Component | Technique | Description & Mathematical Foundation |
|---|---|---|---|---|
| **Sacred Geometry** | 31 | **3D Sacred Merkaba Star Tetrahedron** | `stroke-dash` | 8-pointed star tetrahedron (Merkaba) rendered in SVG with isometric wireframe projection, counter-rotating tetrahedra, and harmonic energy rings. |
| **Historical Mechanical**| 32 | **Renaissance Mechanical Astrolabe** | `transform` | 16th-century brass celestial astrolabe with rotating zodiac rete star pointers, stereographic tympan coordinate curves, and sighting alidade. |
| **Paper Folding Physics**| 33 | **Kinetic Origami Crane Unfolding** | `morph` | Multi-stage continuous origami crane metamorphosis from flat square paper through triangle and bird base to flapping 3D winged bird. |
| **Abyssal Bioluminescence**| 34 | **Abyssal Bioluminescent Anglerfish** | `transform` | Deep-sea bathypelagic anglerfish with undulating pectoral/caudal fins and glowing photophore esca lure casting volumetric conical light cones. |
| **Security Cryptography**| 35 | **Parametric Banknote Guilloche Rosette** | `parametric` | Security banknote guilloche pattern generated via high-order parametric epitrochoid equations with phase shifts and moiré rings. |
| **Quantum Cryogenics** | 36 | **Cryogenic Quantum Refrigerator Cryostat** | `transform` | Isometric dilution refrigerator cryostat with golden coaxial microwave wiring stages, cooling conduits, and 15mK qubit core canister. |
| **Optical Interference**| 37 | **Hypnotic Optical Moiré Spheres** | `transform` | Dual counter-rotating latitude line spheres generating hypnotic optical moiré caustics and interference fringe patterns. |
| **Tactical Avionics** | 38 | **Tactical Cyberpunk HUD Target Reticle** | `transform` | Avionics combat HUD with rotating pitch ladder, segmented bearing rings, tracking crosshairs, and dynamic weapon lock bracket animation. |
| **Spencerian Penmanship**| 39 | **Spencerian Penmanship Calligraphic Flourish** | `stroke-dash` | 18th-century Spencerian off-hand penmanship calligraphy flourishing bird drawn with variable-width pen pressure strokes and gilded gold ink. |
| **High-Speed Hydrodynamics**| 40 | **Edgerton High-Speed Crown Splash & Rebound** | `morph` | Harold Edgerton stroboscopic splash sequence: falling droplet impact, Rayleigh crown splash with spires, Worthington vertical geyser rebound, and capillary ripples. |

---

## 🎨 Design System & Customization Tokens

Design tokens, color palettes, and theme variables are defined in:
- `src/color-lab/`: Master collection of 105 palettes, token exporters, WCAG algorithms, and interactive studio tools.
- `src/design-system/tokens.ts`: Structured color palettes for Cyber Dark, Neon Violet, Swiss Monochrome, Warm Editorial, and Neo-Brutalist themes.
- `src/index.css`: Global baseline styles, font declarations, and sleek custom scrollbars.

---

## 📋 Quality & Testing Checklist

- [x] **0 broken imports or missing packages**: All 10 templates compile cleanly.
- [x] **Vite 8 production build verified**: `npm run build` succeeds in ~400ms with zero errors.
- [x] **Local-first execution**: 100% functional without external paid APIs or database keys.
- [x] **Responsive Viewport Controls**: Verified across Desktop (100%), Tablet (768px), and Mobile (375px) in the preview shell.
- [x] **Visual Diversity**: 10 distinct design styles (Dark Neon Glass, Observability Technical, Retro CRT Hacker, Swiss Minimalist, Warm Editorial, Neo-Brutalism, Frosted Glass, Bento-Grid, Corporate High-Trust, and Luxury Editorial).
- [x] **Interactivity**: Fully functioning in-browser terminals, live countdown clocks, interactive quiz widgets, pricing calculators, OTP PIN advance inputs, slide-over cart drawers, and prompt synthesis simulators.

<!-- Note: Responsive design verified across mobile (375px), tablet (768px), and desktop (100%) -->

<!-- Note: 100% functional locally without third-party API dependencies -->

<!-- Tip: Check export modal in preview shell for instant code extraction snippets -->

<!-- Verified build: tsc -b && vite build in <500ms -->

<!-- Phase 1: Foundation (Complete) | Phase 2: 10 Templates (Complete) -->

<!-- Release v1.0.0 -->
