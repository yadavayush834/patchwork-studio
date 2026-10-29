import React from 'react';
import { MinimalistWebsite } from './minimalist';
import { ModernWebsite } from './modern';
import { BrutalistWebsite } from './brutalist';
import { NeoBrutalistWebsite } from './neo-brutalist';
import { MaximalistWebsite } from './maximalist';
import { SwissWebsite } from './swiss';
import { EditorialWebsite } from './editorial';
import { LuxuryWebsite } from './luxury';
import { CorporateWebsite } from './corporate';
import { OrganicWebsite } from './organic';

// Batch 2 Imports (Websites 11 - 20)
import { ScandinavianWebsite } from './scandinavian';
import { JapaneseMinimalismWebsite } from './japanese-minimalism';
import { BauhausWebsite } from './bauhaus';
import { ArtDecoWebsite } from './art-deco';
import { RetroFuturismWebsite } from './retro-futurism';
import { ContemporaryArtWebsite } from './contemporary-art';
import { BentoGridWebsite } from './bento-grid';
import { AsymmetricalWebsite } from './asymmetrical';
import { SwissGridWebsite } from './swiss-grid';
import { BrokenGridWebsite } from './broken-grid';

// Batch 3 Imports: Immersive Motion Web Collection (Websites 21 - 28)
import { HorizontalScrollWebsite } from './horizontal-scroll';
import { ScrollytellingWebsite } from './scrollytelling';
import { MotionFirstWebsite } from './motion-first';
import { Immersive3dWebsite } from './immersive-3d';
import { ParallaxWebsite } from './parallax';
import { InfiniteMotionWebsite } from './infinite-motion';
import { KineticTypographyWebsite } from './kinetic-typography';
import { ExperimentalWebsite } from './experimental';

export interface WebsiteStyleMetadata {
  id: string;
  number: number;
  batch: 1 | 2 | 3;
  name: string;
  style: string;
  styleLabel: string;
  concept: string;
  route: string;
  hashRoute: string;
  description: string;
  palette: { name: string; hex: string }[];
  typography: string;
  keyFeatures: string[];
  component: React.ComponentType<{ onBackToGallery?: () => void }>;
}

export const websitesRegistry: WebsiteStyleMetadata[] = [
  // ==========================================
  // BATCH 1: CORE WEB DESIGN STYLES (1 - 10)
  // ==========================================
  {
    id: 'minimalist',
    number: 1,
    batch: 1,
    name: 'Kaelen Vance // Systems & Interface Engineering',
    style: 'minimalist',
    styleLabel: 'Minimalist Design',
    concept: 'Personal developer portfolio with disciplined restraint',
    route: '/minimalist',
    hashRoute: '#/minimalist',
    description:
      'Refined developer portfolio showcasing distributed systems works, principles of restraint, selected essays, and an understated contact module. Built with generous whitespace, stark black & white contrast, and a single muted warm stone accent.',
    palette: [
      { name: 'Stark Obsidian', hex: '#0a0a0a' },
      { name: 'Pure White', hex: '#fafafa' },
      { name: 'Warm Stone', hex: '#737373' },
      { name: 'Hairline Divider', hex: '#e5e5e5' },
    ],
    typography: 'Plus Jakarta Sans & System Grotesk',
    keyFeatures: [
      'Generous whitespace and unadorned typographic hierarchy',
      'Selected Works table with expandable case study drawers',
      'Principles of Restraint (4 philosophical axioms)',
      'Understated contact module with one-click email copy',
    ],
    component: MinimalistWebsite,
  },
  {
    id: 'modern',
    number: 2,
    batch: 1,
    name: 'Synapse AI // Autonomous Agent Swarm Platform',
    style: 'modern',
    styleLabel: 'Modern SaaS Design',
    concept: 'AI-powered enterprise software platform',
    route: '/modern',
    hashRoute: '#/modern',
    description:
      'Contemporary SaaS landing page with deep graphite backgrounds, electric cobalt accents, interactive prompt-to-workflow execution simulator, transparent pricing matrix with billing toggle, and enterprise architectural pillars.',
    palette: [
      { name: 'Deep Graphite', hex: '#080c15' },
      { name: 'Electric Cobalt', hex: '#2563eb' },
      { name: 'Icy Cyan', hex: '#38bdf8' },
      { name: 'Steel Border', hex: '#1e293b' },
    ],
    typography: 'Plus Jakarta Sans & Space Grotesk',
    keyFeatures: [
      'Live interactive WebAssembly multi-agent workflow simulator',
      'Cryptographic Proof of Inference & zero-knowledge security pillars',
      'Interactive pricing matrix with annual 20% discount switcher',
      'Instant trial provisioning with email dispatch verification',
    ],
    component: ModernWebsite,
  },
  {
    id: 'brutalist',
    number: 3,
    batch: 1,
    name: 'Atelier NO-SPEC // Experimental Division',
    style: 'brutalist',
    styleLabel: 'Brutalist Design',
    concept: 'Independent digital art & speculative media studio',
    route: '/brutalist',
    hashRoute: '#/brutalist',
    description:
      'Raw, unvarnished digital art studio website with thick 4px black borders, oversized unscaled headline typography, exposed viewport coordinate tracker, ASCII kinetic marquee, interactive glitch shader simulator, and anti-template manifesto.',
    palette: [
      { name: 'Absolute Black', hex: '#000000' },
      { name: 'Blinding White', hex: '#ffffff' },
      { name: 'Raw Warning Red', hex: '#ff3b00' },
      { name: 'Hazard Yellow', hex: '#fde047' },
    ],
    typography: 'Space Mono & JetBrains Mono',
    keyFeatures: [
      'Real-time mouse coordinate tracker (X/Y) & viewport diagnostics',
      'Instant screen color inversion mode (Light / Void)',
      'Interactive ASCII shader noise density cycler',
      'Raw manifesto signature registration engine',
    ],
    component: BrutalistWebsite,
  },
  {
    id: 'neo-brutalist',
    number: 4,
    batch: 1,
    name: 'Hack//Pulse 2026 // World Student Hackathon',
    style: 'neo-brutalist',
    styleLabel: 'Neo-Brutalist Design',
    concept: 'High-energy student hackathon platform',
    route: '/neo-brutalist',
    hashRoute: '#/neo-brutalist',
    description:
      'Vibrant hackathon platform with high-contrast color blocking (acid lime, hyper pink, cyan), 4px black outlines with solid offset drop shadows (4px 4px 0px #000), tactile pressed buttons, 48-hour schedule tabs, and instant hacker pass generator.',
    palette: [
      { name: 'Acid Lime', hex: '#d4ff00' },
      { name: 'Hyper Pink', hex: '#ff5caa' },
      { name: 'Electric Cyan', hex: '#00f0ff' },
      { name: 'Sunshine Yellow', hex: '#ffe600' },
    ],
    typography: 'Bricolage Grotesque & Space Mono',
    keyFeatures: [
      'Tactile neo-brutalist buttons with physical press offset mechanics',
      'Live millisecond countdown clock (Days, Hours, Minutes, Seconds)',
      'Interactive 3-day hackathon schedule timeline switcher',
      'Hacker pass application modal with instant verified ticket badge',
    ],
    component: NeoBrutalistWebsite,
  },
  {
    id: 'maximalist',
    number: 5,
    batch: 1,
    name: 'Chromalux // World Festival of Digital Excess',
    style: 'maximalist',
    styleLabel: 'Maximalist Design',
    concept: 'Creative design and digital arts festival in Amsterdam',
    route: '/maximalist',
    hashRoute: '#/maximalist',
    description:
      'Visually dense, multi-layered chromatic celebration with overlapping graphic stickers, expressive colliding typography (Playfair Display & Bricolage), interactive stage filter, ambient audio status toggle, and multi-tier reality pass studio.',
    palette: [
      { name: 'Electric Tangerine', hex: '#ff6b35' },
      { name: 'Acid Chartreuse', hex: '#e2f952' },
      { name: 'Vivid Lilac', hex: '#c77dff' },
      { name: 'Midnight Violet', hex: '#11052c' },
    ],
    typography: 'Playfair Display, Bricolage Grotesque, Space Mono',
    keyFeatures: [
      'Multi-layered collage poster composition with overlapping ribbons',
      'Curated stage lineup grid with interactive filter (Holo-Dome, Sonic, Void)',
      'Interactive ambient sound toggle (140BPM active)',
      'Tiered festival reality pass selector with instant reservation state',
    ],
    component: MaximalistWebsite,
  },
  {
    id: 'swiss',
    number: 6,
    batch: 1,
    name: 'Atelier Helvetia // Büro für Architektur & Systeme',
    style: 'swiss',
    styleLabel: 'Swiss / International Style',
    concept: 'Architecture and design consultancy in Zürich',
    route: '/swiss',
    hashRoute: '#/swiss',
    description:
      'Josef Müller-Brockmann inspired architectural practice with strict 12-column modular grid overlay, stark bone white, International Klein Blue (#002fa7), numbered sections (01 to 04), structured architectural metadata tables, and Max Bill tenets.',
    palette: [
      { name: 'Bone White', hex: '#f5f5f7' },
      { name: 'Matte Carbon', hex: '#111111' },
      { name: 'Internat. Klein Blue', hex: '#002fa7' },
      { name: 'Hairline Grid', hex: '#d4d4d8' },
    ],
    typography: 'Space Grotesk & Helvetica Arch',
    keyFeatures: [
      'Toggleable architectural 12-column modular grid guide overlay',
      'Asymmetric numbered section layout (01 Philosophy, 02 Works, 03 Tenets)',
      'Interactive architectural realizations inspector with technical specs',
      'Structured material canon & structural engineering records',
    ],
    component: SwissWebsite,
  },
  {
    id: 'editorial',
    number: 7,
    batch: 1,
    name: 'Folio // Magazine of Contemporary Thought',
    style: 'editorial',
    styleLabel: 'Editorial Design',
    concept: 'Independent culture, technology, and creative magazine',
    route: '/editorial',
    hashRoute: '#/editorial',
    description:
      'Sophisticated digital culture and philosophy magazine featuring warm newsprint paper (#fdfbf7), lead feature story with large drop cap and dramatic pull quotes, secondary article triad, and Sunday dispatch newsletter subscription.',
    palette: [
      { name: 'Archival Newsprint', hex: '#fdfbf7' },
      { name: 'Printing Ink', hex: '#1b1917' },
      { name: 'Editorial Sienna', hex: '#8a4f3d' },
      { name: 'Lead Gray', hex: '#6b665f' },
    ],
    typography: 'Cormorant Garamond, Playfair Display, Space Mono',
    keyFeatures: [
      'Classical literary newspaper masthead with issue folio and price lines',
      'Two-column lead feature essay with drop caps and italic pull quote banner',
      'Interactive bookmarking state for long-form reading lists',
      'Sunday literary dispatch email subscription with wax-stamp aesthetic',
    ],
    component: EditorialWebsite,
  },
  {
    id: 'luxury',
    number: 8,
    batch: 1,
    name: 'Maison Vendôme // Haute Joaillerie & Couture',
    style: 'luxury',
    styleLabel: 'Luxury / Premium Design',
    concept: 'High-end jewelry and lifestyle maison in Paris',
    route: '/luxury',
    hashRoute: '#/luxury',
    description:
      'Elite luxury maison website featuring obsidian noir (#0a0908), warm alabaster, brushed champagne bronze (#c5a880), generous letterspacing, curated lookbook piece selector (unheated sapphires, vicuña coats), and private salon booking concierge.',
    palette: [
      { name: 'Obsidian Noir', hex: '#0a0908' },
      { name: 'Warm Alabaster', hex: '#f7f5f0' },
      { name: 'Champagne Bronze', hex: '#c5a880' },
      { name: 'Hairline Slate', hex: '#22201d' },
    ],
    typography: 'Playfair Display & Understated Sans',
    keyFeatures: [
      'Discreet hairline navigation with central Place Vendôme brand seal',
      'Cinematic campaign hero with delicate letterspacing tracking',
      'Curated Haute Joaillerie piece selector with gemstone provenance',
      'Interactive private salon appointment booking modal (Paris, Milan, Tokyo, NY)',
    ],
    component: LuxuryWebsite,
  },
  {
    id: 'corporate',
    number: 9,
    batch: 1,
    name: 'Strata Cloud Systems // Enterprise Architecture Advisory',
    style: 'corporate',
    styleLabel: 'Corporate Design',
    concept: 'Enterprise cloud and software architecture consultancy',
    route: '/corporate',
    hashRoute: '#/corporate',
    description:
      'Authoritative technology consultancy serving Fortune 500 institutions. Features enterprise deep navy (#0b192c), precision cobalt, practice areas blueprints, interactive cloud migration ROI calculator, multi-industry case studies, and compliance trust badges.',
    palette: [
      { name: 'Executive Navy', hex: '#0b192c' },
      { name: 'Precision Cobalt', hex: '#1e3e62' },
      { name: 'Trustworthy Slate', hex: '#334155' },
      { name: 'Verified Emerald', hex: '#059669' },
    ],
    typography: 'Plus Jakarta Sans & System UI',
    keyFeatures: [
      'Interactive cloud modernization ROI calculator with dynamic sliders',
      'Multi-industry case study tab switcher (Financial Services, Health, Aerospace)',
      'Institutional compliance trust badges (SOC2 Type II, ISO 27001, FedRAMP)',
      'Executive architecture briefing request form with rapid response protocol',
    ],
    component: CorporateWebsite,
  },
  {
    id: 'organic',
    number: 10,
    batch: 1,
    name: 'Botanica Terra // Cellular Phyto-Botanical Nutrition',
    style: 'organic',
    styleLabel: 'Organic / Natural Design',
    concept: 'Sustainable lifestyle and cold-pressed skincare brand',
    route: '/organic',
    hashRoute: '#/organic',
    description:
      'Warm botanical skincare brand with earthy terracotta (#c26e55), sage green (#5a7359), oatmeal cream (#f7f4ed), interactive botanical active encyclopedia (Blue Tansy, Bakuchiol, Sea Kelp), circadian ritual switcher, and circular Miron glass refill program.',
    palette: [
      { name: 'Oatmeal Cream', hex: '#f7f4ed' },
      { name: 'Wild Sage Green', hex: '#5a7359' },
      { name: 'Sun Terracotta', hex: '#c26e55' },
      { name: 'Deep Forest Pine', hex: '#263629' },
    ],
    typography: 'Playfair Display & Approachable Sans',
    keyFeatures: [
      'Interactive botanical actives encyclopedia with phyto-chemical profiles',
      'Circadian skincare ritual switcher (Morning Awakening vs Evening Restoration)',
      'Sustainable Miron violet glass & circular compostable refill program',
      'Soil circle membership sign-up with immediate confirmation',
    ],
    component: OrganicWebsite,
  },

  // ========================================================
  // BATCH 2: HISTORICAL, STRUCTURAL & AVANT-GARDE (11 - 20)
  // ==========================================
  {
    id: 'scandinavian',
    number: 11,
    batch: 2,
    name: 'Nordisk Forma // Handcrafted Furniture & Interiors',
    style: 'scandinavian',
    styleLabel: 'Scandinavian Design',
    concept: 'Premium furniture and home interiors brand (Copenhagen 1958)',
    route: '/scandinavian',
    hashRoute: '#/scandinavian',
    description:
      'Warm Nordic design exploring organic minimalism, functional woodcraft, tactile boucle fabrics, interactive ambient daylight vs hygge lighting toggle, physical material swatch inspector, and clothbound folio request form.',
    palette: [
      { name: 'Warm Cream White', hex: '#faf8f5' },
      { name: 'Nordic White Oak', hex: '#c49a6c' },
      { name: 'Smoked Ash', hex: '#695444' },
      { name: 'Muted Wool Gray', hex: '#e8e4dc' },
    ],
    typography: 'Plus Jakarta Sans & System Grotesk',
    keyFeatures: [
      'Ambient lighting mode toggle (Nordic Daylight vs Evening Hygge)',
      'Interactive tactile material swatch switcher (Oak, Smoked, Bouclé)',
      'Archive piece dossiers with designer provenance and pricing',
      'Clothbound print catalogue requisition module',
    ],
    component: ScandinavianWebsite,
  },
  {
    id: 'japanese-minimalism',
    number: 12,
    batch: 2,
    name: 'KISA 喫茶 // Higashiyama Ceramics & Chado Studio',
    style: 'japanese-minimalism',
    styleLabel: 'Japanese Minimalism',
    concept: 'Independent Japanese tea house and ceramics studio in Kyoto',
    route: '/japanese-minimalism',
    hashRoute: '#/japanese-minimalism',
    description:
      'Contemplative spatial design exploring the concept of Ma (間—meaningful negative space), unadorned paper white, ink black, stone tones, Black Raku chawan vessels, interactive 2-minute Gyokuro steeping timer, and private chakai sitting reservations.',
    palette: [
      { name: 'Paper White (Washi)', hex: '#f9f7f2' },
      { name: 'Sumi Ink Black', hex: '#1a1918' },
      { name: 'River Stone Gray', hex: '#636058' },
      { name: 'Charred Wood', hex: '#2b2723' },
    ],
    typography: 'Cormorant Garamond, Serif, Space Mono',
    keyFeatures: [
      'Disciplined spatial composition embodying Ma (間) negative space',
      'Hand-crafted Black Raku & Nanbu Tekki iron kettle showcase',
      'Interactive 2-minute Gyokuro contemplation timer with live steeping steps',
      'Private Chakai morning sitting reservation form',
    ],
    component: JapaneseMinimalismWebsite,
  },
  {
    id: 'bauhaus',
    number: 13,
    batch: 2,
    name: 'Staatliches Bauhaus // Schule für Gestaltung',
    style: 'bauhaus',
    styleLabel: 'Bauhaus Design',
    concept: 'Creative school for art, architecture, and design (Dessau / Weimar)',
    route: '/bauhaus',
    hashRoute: '#/bauhaus',
    description:
      'Radical modernist functionalism featuring fundamental geometric shapes (circle, square, triangle), stark primary colors (red #d62828, blue #003049, yellow #fcbf49), Vorkurs preliminary course curriculum, Gropius 1919 manifesto, and student enrollment dossier.',
    palette: [
      { name: 'Bauhaus Red', hex: '#d62828' },
      { name: 'Bauhaus Blue', hex: '#003049' },
      { name: 'Bauhaus Yellow', hex: '#fcbf49' },
      { name: 'Concrete White', hex: '#f8f9fa' },
    ],
    typography: 'Space Grotesk & Heavy Geometric Sans',
    keyFeatures: [
      'Asymmetric diagonal compositional bars and geometric fundamental shapes',
      'Vorkurs Preliminary Foundation Course curriculum table',
      'Interactive workshop piece inspector (Breuer Chair, Wagenfeld Lamp)',
      'Formal student apprentice application dossier engine',
    ],
    component: BauhausWebsite,
  },
  {
    id: 'art-deco',
    number: 14,
    batch: 2,
    name: 'The Majestic Hotel & Salon // Lexington Ave NYC 1928',
    style: 'art-deco',
    styleLabel: 'Art Deco Design',
    concept: 'Historic luxury hotel and evening salon on Lexington Avenue',
    route: '/art-deco',
    hashRoute: '#/art-deco',
    description:
      '1920s Roaring Twenties glamour featuring stepped geometric fan arches, gilded polished brass (#d4af37), obsidian midnight noir (#08090c), Chrysler Suite showcase, Palm Court Conservatory tea, and white-glove butler concierge reservations.',
    palette: [
      { name: 'Midnight Obsidian', hex: '#08090c' },
      { name: 'Gilded Brass', hex: '#d4af37' },
      { name: 'Antique Ivory', hex: '#f7f4ea' },
      { name: 'Verdigris Emerald', hex: '#1b4332' },
    ],
    typography: 'Playfair Display & Geometric Luxury Serif',
    keyFeatures: [
      'Bespoke stepped chevron, geometric sunbursts, and fan borders',
      'Chrysler Penthouse Suite & Obsidian Evening Salon showcases',
      '1928 speakeasy cocktail repertoire & jazz orchestra salon calendar',
      'White-glove butler concierge reservation booking module',
    ],
    component: ArtDecoWebsite,
  },
  {
    id: 'retro-futurism',
    number: 15,
    batch: 2,
    name: 'Solaris Aero-Astronomics // 1968 Space Initiative',
    style: 'retro-futurism',
    styleLabel: 'Retro-Futurism Design',
    concept: 'Mid-century space exploration and civilian transport company',
    route: '/retro-futurism',
    hashRoute: '#/retro-futurism',
    description:
      'Optimistic 1960s space-age vision featuring cream paper (#faf5eb), atomic orange (#ff5a1f), orbit teal (#1a7578), deep navy (#121c2b), Orion-VII luxury shuttle blueprints, Vanguard space ring habitat, historical roadmap, and civilian flight manifest booking.',
    palette: [
      { name: 'Orbital Orange', hex: '#ff5a1f' },
      { name: 'Atomic Teal', hex: '#1a7578' },
      { name: 'Cream Newsprint', hex: '#faf5eb' },
      { name: 'Deep Space Navy', hex: '#121c2b' },
    ],
    typography: 'Space Grotesk & Vintage Technical Sans',
    keyFeatures: [
      'Mid-century aerospace blueprint schematics and orbital telemetry rings',
      'Spacecraft fleet dossier (Orion-VII Shuttle, Vanguard Orbital Ring)',
      '1968–1984 historical interplanetary expansion roadmap',
      'Civilian lunar passage manifest reservation terminal',
    ],
    component: RetroFuturismWebsite,
  },
  {
    id: 'contemporary-art',
    number: 16,
    batch: 2,
    name: 'Kunsthalle Vakuum // Berlin-Kreuzberg Contemporary Art',
    style: 'contemporary-art',
    styleLabel: 'Contemporary Art Design',
    concept: 'Independent contemporary art gallery representing emerging artists',
    route: '/contemporary-art',
    hashRoute: '#/contemporary-art',
    description:
      'Curated museum-quality digital gallery with Elena Voronova solo exhibition, interactive gallery atmosphere switcher (Titanium, Obsidian, Sepia), viewing room piece inspector, audio guide player, artist index, and private viewing room RSVP.',
    palette: [
      { name: 'Titanium White', hex: '#f7f6f2' },
      { name: 'German Slate', hex: '#2b2b29' },
      { name: 'Beeswax Amber', hex: '#d6d2c4' },
      { name: 'Charred Bog Oak', hex: '#1f2022' },
    ],
    typography: 'Cormorant Garamond, Serif, Space Mono',
    keyFeatures: [
      'Interactive gallery atmosphere switcher (Titanium White vs Obsidian Void vs Sepia)',
      'Featured solo exhibition canvas visualizer with curatorial analysis',
      'Digital Viewing Room piece inspector with mineral pigment breakdowns',
      'Represented artist directory and private salon RSVP engine',
    ],
    component: ContemporaryArtWebsite,
  },
  {
    id: 'bento-grid',
    number: 17,
    batch: 2,
    name: 'Kronos OS // Cognitive Workspace & Second Brain',
    style: 'bento-grid',
    styleLabel: 'Bento Grid Design',
    concept: 'Personal productivity and digital workspace operating canvas',
    route: '/bento-grid',
    hashRoute: '#/bento-grid',
    description:
      'Modern modular Bento Grid layout organizing active computing surfaces: interactive Pomodoro focus stopwatch, real-time local scratchpad note capture, interactive task matrix, 7-day velocity chart, and modular pricing grid.',
    palette: [
      { name: 'Obsidian Void', hex: '#090d16' },
      { name: 'Electric Cyan', hex: '#06b6d4' },
      { name: 'Hyper Indigo', hex: '#6366f1' },
      { name: 'Emerald Spark', hex: '#10b981' },
    ],
    typography: 'Plus Jakarta Sans & Space Grotesk',
    keyFeatures: [
      'Disciplined asymmetric Bento Grid layout with varying column/row spans',
      'Live interactive deep work Pomodoro stopwatch with mode switcher',
      'Instant scratchpad capture buffer with real-time state list',
      'Task pipeline matrix with interactive toggleable completion states',
    ],
    component: BentoGridWebsite,
  },
  {
    id: 'asymmetrical',
    number: 18,
    batch: 2,
    name: 'Axis & Void // Architectural Practice & Spatial Laboratory',
    style: 'asymmetrical',
    styleLabel: 'Asymmetrical Layout',
    concept: 'Multidisciplinary architecture and spatial laboratory (Zürich & Tokyo)',
    route: '/asymmetrical',
    hashRoute: '#/asymmetrical',
    description:
      'Deliberate architectural asymmetry exploring gravitational tension, 72/28 and 58/42 unequal columns, staggered project realisations, CAD elevation blueprint drawings, asymmetric studio axioms (30% vs 70%), and spatial commission dossier.',
    palette: [
      { name: 'Raw Basalt Dark', hex: '#141517' },
      { name: 'Burnt Sienna', hex: '#c96245' },
      { name: 'Alpine Granite', hex: '#b0ada4' },
      { name: 'Board Concrete', hex: '#2c2f38' },
    ],
    typography: 'Space Grotesk & Architectural Technical Mono',
    keyFeatures: [
      'Asymmetry as primary compositional law with intentional offset tension',
      'Cantilever elevation CAD blueprints and structural overhang simulations',
      'Staggered project showcases with unequal column widths and vertical shifts',
      'Asymmetric studio philosophy manifesto (30% axioms / 70% thesis)',
    ],
    component: AsymmetricalWebsite,
  },
  {
    id: 'swiss-grid',
    number: 19,
    batch: 2,
    name: 'IMV Basel // Institut für Mathematische Visualisierung',
    style: 'swiss-grid',
    styleLabel: 'Swiss Grid Design',
    concept: 'Data visualization and mathematical research institute in Basel',
    route: '/swiss-grid',
    hashRoute: '#/swiss-grid',
    description:
      'Rigorous 12-column Swiss grid system with interactive toggleable hairline guide overlay, vector Calabi-Yau topology diagrams, structured laboratory tables, open-science publication repository with DOI accordions, and researcher accreditation.',
    palette: [
      { name: 'Laboratory White', hex: '#fafaf9' },
      { name: 'Swiss Crimson', hex: '#e63946' },
      { name: 'Precision Black', hex: '#111215' },
      { name: 'Hairline Rule', hex: '#e2e2df' },
    ],
    typography: 'Space Grotesk, Plus Jakarta Sans, Space Mono',
    keyFeatures: [
      'Interactive 12-column hairline guide overlay toggle across the entire page',
      'Calabi-Yau variety high-dimensional topological vector diagram',
      '12-column structured table of research laboratories and director index',
      'Peer-reviewed publication archive with citation stats and download drawers',
    ],
    component: SwissGridWebsite,
  },
  {
    id: 'broken-grid',
    number: 20,
    batch: 2,
    name: 'Deviant Lab // Creative Computation & Radical Code',
    style: 'broken-grid',
    styleLabel: 'Broken Grid Design',
    concept: 'Independent digital agency showcasing experimental web projects',
    route: '/broken-grid',
    hashRoute: '#/broken-grid',
    description:
      'Experimental broken-grid design deliberately defying standard boundaries: scale-breaking typography, overlapping canvas preview cards with 3D shadows, interactive Grid Chaos Factor slider (0–100%), staggered capabilities, and cantilevered buttons.',
    palette: [
      { name: 'Pitch Void', hex: '#070709' },
      { name: 'Acid Volt Yellow', hex: '#ccff00' },
      { name: 'Electric Violet', hex: '#a855f7' },
      { name: 'Neon Green', hex: '#22c55e' },
    ],
    typography: 'Space Grotesk, Bricolage Grotesque, Space Mono',
    keyFeatures: [
      'Scale-breaking typography extending intentionally beyond column boundaries',
      'Interactive Grid Destruction Chaos Factor slider adjusting UI skew in real time',
      'Overlapping project showcases with cantilevered asset stickers',
      'Rule-breaking contact terminal with boundary-piercing action button',
    ],
    component: BrokenGridWebsite,
  },

  // ========================================================
  // BATCH 3: IMMERSIVE MOTION WEB COLLECTION (21 - 28)
  // ========================================================
  {
    id: 'horizontal-scroll',
    number: 21,
    batch: 3,
    name: 'Aura & Monolith // Spatial Architecture & Horizontal Exhibition',
    style: 'horizontal-scroll',
    styleLabel: 'Horizontal Scroll Storytelling',
    concept: 'Experimental creative agency and project portfolio explored along a continuous horizontal axis',
    route: '/horizontal-scroll',
    hashRoute: '#/horizontal-scroll',
    description:
      'Immersive horizontal journey spanning 6 full-screen visual panels with trackpad/wheel translation, oversized typography, cantilevered blueprint projections, and technical project dossiers.',
    palette: [
      { name: 'Obsidian Noir', hex: '#07080b' },
      { name: 'Cyan Laser', hex: '#00f0ff' },
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Graphite', hex: '#161b26' },
    ],
    typography: 'Unbounded, Cormorant Garamond, Space Mono',
    keyFeatures: [
      'Multi-viewport horizontal traverse with passive wheel-to-horizontal conversion',
      'Oversized typographic compositions with cantilevered structural projections',
      'Deep technical project dossiers with modal inspection drawers',
      'Interactive bottom scrub scrubber and keyboard arrow navigation',
    ],
    component: HorizontalScrollWebsite,
  },
  {
    id: 'scrollytelling',
    number: 22,
    batch: 3,
    name: 'Chronos Neural Lattice // The Quantum Synthesis Engine',
    style: 'scrollytelling',
    styleLabel: 'Scroll-Driven Storytelling',
    concept: 'Editorial narrative tracing the evolution of a fictional quantum hardware architecture across 5 pinned chapters',
    route: '/scrollytelling',
    hashRoute: '#/scrollytelling',
    description:
      'Pinned sticky stage where scrolling evolves an abstract technology narrative: isolated singularity -> tripartite entanglement -> optical ring resonator -> tensor matrix -> global synthesis mesh.',
    palette: [
      { name: 'Deep Space', hex: '#050609' },
      { name: 'Superconducting Cyan', hex: '#00f0ff' },
      { name: 'Entanglement Purple', hex: '#a855f7' },
      { name: 'Laser Emerald', hex: '#10b981' },
    ],
    typography: 'Unbounded, JetBrains Mono, Plus Jakarta Sans',
    keyFeatures: [
      'Pinned apparatus stage with progressive 5-phase visual metamorphosis',
      'Bi-directional scroll progression tracking with chapter quick-jump buttons',
      'Interactive cryogenic temperature & decoherence boundary slider',
      'Detailed phase telemetry with Bell inequality & Q-factor ratings',
    ],
    component: ScrollytellingWebsite,
  },
  {
    id: 'motion-first',
    number: 23,
    batch: 3,
    name: 'VOLT & FLUX // Motion Design & Brand Choreography Atelier',
    style: 'motion-first',
    styleLabel: 'Motion-First Design',
    concept: 'Digital creative agency where movement defines the visual and structural identity',
    route: '/motion-first',
    hashRoute: '#/motion-first',
    description:
      'Coordinated transitions, magnetic cursor-following buttons with physics spring easing, live choreography easing calibrator (Expo Out, Spring, Cubic Bezier), and award-winning case study showcases.',
    palette: [
      { name: 'Basalt Noir', hex: '#07080c' },
      { name: 'Hyper Crimson', hex: '#ff0055' },
      { name: 'Warning Orange', hex: '#ff5500' },
      { name: 'Clean White', hex: '#f0f3f8' },
    ],
    typography: 'Unbounded, Cormorant Garamond, Space Mono',
    keyFeatures: [
      'Magnetic cursor response buttons with physics spring easing curves',
      'Real-time choreography studio controls adjusting UI easing and velocity',
      'Expanding layout cards with synchronized kinetic typography',
      'Case study simulation monitors with live easing response feedback',
    ],
    component: MotionFirstWebsite,
  },
  {
    id: 'immersive-3d',
    number: 24,
    batch: 3,
    name: 'Solaria // Procedural Spatial Sculptures & Generative Void',
    style: 'immersive-3d',
    styleLabel: 'Immersive WebGL / Three.js',
    concept: 'Experimental digital art exhibition centered around interactive procedural 3D sculpture in WebGL',
    route: '/immersive-3d',
    hashRoute: '#/immersive-3d',
    description:
      'Genuine Three.js WebGL experience featuring procedural Torus Knots, Möbius Ribbons, and Icosahedrons with real-time ACES Filmic tone mapping, metallic PBR metallurgy, particle starfields, and pointer orbit controls.',
    palette: [
      { name: 'Void Black', hex: '#06070a' },
      { name: 'Liquid Chrome', hex: '#e2e8f0' },
      { name: 'Electric Cyan', hex: '#00f0ff' },
      { name: 'Amethyst Violet', hex: '#a855f7' },
    ],
    typography: 'Unbounded, Plus Jakarta Sans, JetBrains Mono',
    keyFeatures: [
      'Genuine Three.js WebGL scene with ACES Filmic PBR lighting & shadows',
      'Procedural morphology switcher (Torus Knot, Möbius, Icosahedron, Gyro)',
      'PBR material metallurgy toggle (Liquid Chrome, Obsidian, Gold, Wire)',
      'Interactive drag-to-orbit and pointer parallax camera controls',
    ],
    component: Immersive3dWebsite,
  },
  {
    id: 'parallax',
    number: 25,
    batch: 3,
    name: 'Aethelgard Fjord & Volcanic Monograph // Deep Earth Expeditions',
    style: 'parallax',
    styleLabel: 'Parallax & Layered Depth',
    concept: 'Sub-arctic landscape expedition journal built with multi-plane 2.5D visual depth',
    route: '/parallax',
    hashRoute: '#/parallax',
    description:
      'Cinematic layered depth with 5 distinct planes (aurora canopy, far basalt mountains, floating typography, glacial mist, foreground spires) reacting dynamically to both scroll and mouse movement.',
    palette: [
      { name: 'Deep Basalt', hex: '#05070a' },
      { name: 'Aurora Emerald', hex: '#10b981' },
      { name: 'Glacial Ice', hex: '#e2e8f0' },
      { name: 'Obsidian Black', hex: '#040608' },
    ],
    typography: 'Unbounded, Cormorant Garamond, Space Mono',
    keyFeatures: [
      'Multi-plane 2.5D depth parallax responding to both scroll and pointer tilt',
      'Distant aurora wave SVG, midground glacial mist, and foreground silhouette spires',
      'Accessible reduced-motion toggle softening depth movement',
      'Geological expedition log dossiers with live seismograph vector plots',
    ],
    component: ParallaxWebsite,
  },
  {
    id: 'infinite-motion',
    number: 26,
    batch: 3,
    name: 'NEO-CADENCE // Cyber Couture & Cultural Monolith',
    style: 'infinite-motion',
    styleLabel: 'Infinite Marquee / Continuous Motion',
    concept: 'Independent avant-garde fashion brand website driven by perpetual rhythmic movement',
    route: '/infinite-motion',
    hashRoute: '#/infinite-motion',
    description:
      'Dynamic composition of interlocking multi-speed, multi-directional continuous marquees with pause-on-hover, velocity speed changer, direction inverter, and seasonal drop allocation cards.',
    palette: [
      { name: 'Pitch Black', hex: '#07080c' },
      { name: 'Phosphor Green', hex: '#00ff66' },
      { name: 'Neon Pink', hex: '#ff0055' },
      { name: 'Laser Cyan', hex: '#00f0ff' },
    ],
    typography: 'Unbounded, Cormorant Garamond, JetBrains Mono',
    keyFeatures: [
      'Interlocking multi-directional infinite marquees with seamless vector loops',
      'Tactile motion controls: play/pause, reverse direction, velocity multiplier',
      'High-contrast typography tapes with technical garment metrology',
      'Interactive allocation drop cards with detailed textile modal dossiers',
    ],
    component: InfiniteMotionWebsite,
  },
  {
    id: 'kinetic-typography',
    number: 27,
    batch: 3,
    name: 'TYPE-LAB // Radical Variable Typography & Kinetic Form',
    style: 'kinetic-typography',
    styleLabel: 'Kinetic Typography',
    concept: 'Typographic experimentation studio where letterforms are the primary interactive medium',
    route: '/kinetic-typography',
    hashRoute: '#/kinetic-typography',
    description:
      'Radical kinetic typography playground with real-time variable font-weight sliders, italic slant distortion, character scatter dynamics, circular SVG path text animation, and glitch displacement trigger.',
    palette: [
      { name: 'Type Black', hex: '#07080b' },
      { name: 'Acid Citron', hex: '#ccff00' },
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Laser Crimson', hex: '#ff0055' },
    ],
    typography: 'Unbounded, Fraunces, Bricolage Grotesque, Space Mono',
    keyFeatures: [
      'Interactive variable font-weight (200-900), tracking, and slant calibration',
      'Magnetic character scatter dynamics dispersing letter glyphs on proximity',
      'Continuous circular kinetic text rotating along radial SVG paths',
      'Typographic poster repertoire with Constructivist and Baroque themes',
    ],
    component: KineticTypographyWebsite,
  },
  {
    id: 'experimental',
    number: 28,
    batch: 3,
    name: 'NEXUS // The Shapeshifter Studio — Multidisciplinary Digital Art',
    style: 'experimental',
    styleLabel: 'Experimental Interactive Web Design',
    concept: 'Personal portfolio of an experimental digital artist featuring organic liquid morphing and discovery states',
    route: '/experimental',
    hashRoute: '#/experimental',
    description:
      'Surprising, non-traditional web experience with organic SVG liquid morphing, polygonal clip-path view transitions, floating interactive artifacts, cursor follower, and a secret wireframe sketch mode.',
    palette: [
      { name: 'Void Matrix', hex: '#060608' },
      { name: 'Electric Cyan', hex: '#00f0ff' },
      { name: 'Hyper Pink', hex: '#ff0055' },
      { name: 'Acid Lime', hex: '#ccff00' },
    ],
    typography: 'Unbounded, Cormorant Garamond, JetBrains Mono',
    keyFeatures: [
      'Continuous organic liquid metaball morphing along mathematical bezier curves',
      'Polygonal clip-path transitions shifting the visual aperture geometry',
      'Floating interactive artifact nodes with coordinates and detail modals',
      'Secret discovery trigger unlocking raw hardware wireframe mode',
    ],
    component: ExperimentalWebsite,
  },
];
