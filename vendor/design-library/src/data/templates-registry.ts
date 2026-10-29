import React from "react";
import { AetherMeshTemplate } from "@/templates/developer/cloud-mesh";
import { LuminaAcademyTemplate } from "@/templates/education/lumina-academy";
import { CyberForgeTemplate } from "@/templates/hackathons/cyber-forge";
import { BentoCraftPortfolioTemplate } from "@/templates/portfolios/bento-craft";
import { AuraAtelierTemplate } from "@/templates/ecommerce/aura-minimal";
import { NordicTechSummitTemplate } from "@/templates/hackathons/nordic-summit";
import { RetroSystem95AuthTemplate } from "@/templates/authentication/retrospective-os";
import { DieterIndustrialMonographTemplate } from "@/templates/portfolios/dieter-industrial";
import { ShibuyaStreetwearDropTemplate } from "@/templates/ecommerce/streetwear-drop";
import { AeroTrackTelemetryTemplate } from "@/templates/dashboards/aerospace-telemetry";

// Batch 3 Imports: Rare Typography & Master Animation Templates
import { HauteHorlogerieTemplate } from "@/templates/ecommerce/haute-horlogerie";
import { KomorebiPavilionTemplate } from "@/templates/hospitality/komorebi-pavilion";
import { VektorformSynthTemplate } from "@/templates/developer/vektorform-synth";
import { AtelierVenusTemplate } from "@/templates/ecommerce/atelier-venus";

export interface TemplateMetadata {
  id: string;
  name: string;
  category:
    | "ai"
    | "developer"
    | "education"
    | "hackathons"
    | "authentication"
    | "portfolios"
    | "saas"
    | "dashboards"
    | "ecommerce"
    | "hospitality";
  categoryLabel: string;
  style: string;
  styleLabel: string;
  description: string;
  tags: string[];
  supportedTheme: "dark" | "light" | "dual";
  pageType:
    | "Landing Page"
    | "Dashboard"
    | "Interactive Portal"
    | "Auth Suite"
    | "Portfolio"
    | "Marketplace"
    | "Chat Interface"
    | "Booking Engine"
    | "Academic Monograph";
  features: string[];
  dependencies: string[];
  sourcePath: string;
  previewRoute: string;
  customizationNotes: string[];
  component: React.ComponentType;
  accentColor: string;
}

export const templatesRegistry: TemplateMetadata[] = [
  {
    id: "cloud-mesh-api",
    name: "AetherMesh // Swiss International Typographic Style",
    category: "developer",
    categoryLabel: "Developer Tools",
    style: "swiss-international",
    styleLabel: "Cobalt & Precision",
    description:
      "A precise infrastructure website with a physical chrome network lattice, five-region explorer, five-language code examples and a restrained cobalt identity.",
    tags: [
      "3D Network",
      "Region Explorer",
      "Code Playground",
      "Swiss Typography",
    ],
    supportedTheme: "light",
    pageType: "Landing Page",
    features: [
      "Interactive 3D network lattice with drag rotation",
      "Five-region explorer",
      "Five-language code switcher and copy",
      "Responsive editorial layout",
    ],
    dependencies: ["three"],
    sourcePath: "src/templates/developer/cloud-mesh/index.tsx",
    previewRoute: "/templates/cloud-mesh-api",
    customizationNotes: [
      "Edit the source component for copy and interactions.",
      "Shared 3D geometry and materials are in src/redesign/Scene.tsx.",
      "Scoped appearance and responsive layouts are in src/redesign/redesign.css.",
    ],
    component: AetherMeshTemplate,
    accentColor: "#002fa7",
  },
  {
    id: "edu-lumina-academy",
    name: "Lumina Academy // Oxford Literature Antiquarian",
    category: "education",
    categoryLabel: "Education & Learning",
    style: "oxford-antiquarian",
    styleLabel: "Bookish Editorial",
    description:
      "A warm independent academy with a three-dimensional open book, readable art and design lessons, optional spoken passages and a working three-question reflection.",
    tags: ["3D Book", "Warm Editorial", "Open Lessons", "Interactive Quiz"],
    supportedTheme: "light",
    pageType: "Interactive Portal",
    features: [
      "Layered 3D clothbound book",
      "Three original reading lessons",
      "Browser speech reading with text fallback",
      "Three-question scored reflection",
    ],
    dependencies: ["three"],
    sourcePath: "src/templates/education/lumina-academy/index.tsx",
    previewRoute: "/templates/edu-lumina-academy",
    customizationNotes: [
      "Edit the source component for copy and interactions.",
      "Shared 3D geometry and materials are in src/redesign/Scene.tsx.",
      "Scoped appearance and responsive layouts are in src/redesign/redesign.css.",
    ],
    component: LuminaAcademyTemplate,
    accentColor: "#b89230",
  },
  {
    id: "hack-cyber-forge",
    name: "CyberForge '26 // Raw Neo-Brutalism",
    category: "hackathons",
    categoryLabel: "Hackathons & Events",
    style: "neo-brutalist",
    styleLabel: "Maker Poster",
    description:
      "A bold maker-weekend website with a kinetic modular sculpture, large poster typography, selectable challenge tracks, local team shortlists and a maker-pass generator.",
    tags: ["3D Sculpture", "Poster Typography", "Team Shortlist", "Maker Pass"],
    supportedTheme: "light",
    pageType: "Interactive Portal",
    features: [
      "Kinetic modular 3D sculpture",
      "Selectable challenge tracks",
      "Role-filtered team shortlist",
      "Local maker-pass generator",
    ],
    dependencies: ["three"],
    sourcePath: "src/templates/hackathons/cyber-forge/index.tsx",
    previewRoute: "/templates/hack-cyber-forge",
    customizationNotes: [
      "Edit the source component for copy and interactions.",
      "Shared 3D geometry and materials are in src/redesign/Scene.tsx.",
      "Scoped appearance and responsive layouts are in src/redesign/redesign.css.",
    ],
    component: CyberForgeTemplate,
    accentColor: "#d4ff00",
  },
  {
    id: "portfolio-bento-craft",
    name: "Kenji Takahashi // Tokyo Wabi-Sabi Creative Tech",
    category: "portfolios",
    categoryLabel: "Portfolios & Personal",
    style: "tokyo-wabi-sabi",
    styleLabel: "Quiet Material Portfolio",
    description:
      "A quiet Tokyo designer portfolio with physical brass chimes, real synthesized notes, three detailed case studies, a visitor stamp and an email-draft contact form.",
    tags: ["3D Chimes", "Audio", "Case Studies", "Editorial Portfolio"],
    supportedTheme: "dark",
    pageType: "Portfolio",
    features: [
      "Interactive 3D brass chimes",
      "Five synthesized chime notes",
      "Three project case studies",
      "Visitor stamp and mailto draft",
    ],
    dependencies: ["three"],
    sourcePath: "src/templates/portfolios/bento-craft/index.tsx",
    previewRoute: "/templates/portfolio-bento-craft",
    customizationNotes: [
      "Edit the source component for copy and interactions.",
      "Shared 3D geometry and materials are in src/redesign/Scene.tsx.",
      "Scoped appearance and responsive layouts are in src/redesign/redesign.css.",
    ],
    component: BentoCraftPortfolioTemplate,
    accentColor: "#df3b2b",
  },
  {
    id: "ecom-aura-minimal",
    name: "Atelier Aura // Architectural Travertine Atelier",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Marketplaces",
    style: "architectural-travertine",
    styleLabel: "Sculptural Commerce",
    description:
      "A tactile object shop with a physically rendered lamp, three selectable material finishes, a light switch, product filters, monogram studies and a working local shopping bag.",
    tags: ["3D Product", "Material Finishes", "Shopping Bag", "Quiet Luxury"],
    supportedTheme: "light",
    pageType: "Marketplace",
    features: [
      "3D sculptural lamp with procedural stone texture",
      "Three priced material finishes and light switch",
      "Product filters and detail dialogs",
      "Bag quantities, subtotal and local request review",
    ],
    dependencies: ["three"],
    sourcePath: "src/templates/ecommerce/aura-minimal/index.tsx",
    previewRoute: "/templates/ecom-aura-minimal",
    customizationNotes: [
      "Edit the source component for copy and interactions.",
      "Shared 3D geometry and materials are in src/redesign/Scene.tsx.",
      "Scoped appearance and responsive layouts are in src/redesign/redesign.css.",
    ],
    component: AuraAtelierTemplate,
    accentColor: "#1c1815",
  },
  {
    id: "hack-nordic-summit",
    name: "Nordic Tech Summit '26 // Copenhagen Architecture",
    category: "hackathons",
    categoryLabel: "Hackathons & Events",
    style: "copenhagen-modern",
    styleLabel: "Nordic Typographic Poster",
    description:
      "A typographic Copenhagen conference website with a layered 3D architectural sculpture, day and stage programme filters, session details and a local ticket-pass generator.",
    tags: [
      "3D Architecture",
      "Programme Filters",
      "Session Details",
      "Ticket Pass",
    ],
    supportedTheme: "light",
    pageType: "Interactive Portal",
    features: [
      "Layered architectural 3D sculpture",
      "Three-day programme and stage filters",
      "Speaker/session dialogs",
      "Two-tier local ticket-pass generator",
    ],
    dependencies: ["three"],
    sourcePath: "src/templates/hackathons/nordic-summit/index.tsx",
    previewRoute: "/templates/hack-nordic-summit",
    customizationNotes: [
      "Edit the source component for copy and interactions.",
      "Shared 3D geometry and materials are in src/redesign/Scene.tsx.",
      "Scoped appearance and responsive layouts are in src/redesign/redesign.css.",
    ],
    component: NordicTechSummitTemplate,
    accentColor: "#ea580c",
  },
  {
    id: "auth-retrospective-os",
    name: "System 95 Auth // Retro 1990s Desktop Workstation",
    category: "authentication",
    categoryLabel: "Authentication & Security",
    style: "retro-90s-desktop",
    styleLabel: "Retro 1995 Desktop Workstation",
    description:
      "Authentic 1995 vintage desktop OS with classic grey plastic bevels (#c0c0c0), Windows blue titlebars (#000080), 56k V.90 dial-up modem handshake simulation with hardware LEDs, and Start taskbar.",
    tags: [
      "Retro 90s OS",
      "Windows 95 Bevels",
      "56k Modem Handshake",
      "Pixel Aesthetics",
      "Retro Dialog",
    ],
    supportedTheme: "dual",
    pageType: "Auth Suite",
    features: [
      "Authentic 1995 3D inset/outset beveled borders and Windows blue titlebars",
      "56K V.90 dial-up modem handshake simulator with blinking hardware LEDs (CD, RX, TX, OH)",
      "3-step logon wizard (Credentials -> Dial-up Handshake -> Lease Confirmed)",
      "Classic retro Start taskbar with active desktop clock",
    ],
    dependencies: ["lucide-react", "clsx"],
    sourcePath: "src/templates/authentication/retrospective-os/index.tsx",
    previewRoute: "/templates/auth-retrospective-os",
    customizationNotes: [
      "Replace dial-up handshake with actual authentication backend.",
      "Customize workstation domain and username defaults.",
      "Add retro desktop shortcut icons in the background stage.",
    ],
    component: RetroSystem95AuthTemplate,
    accentColor: "#008080",
  },
  {
    id: "portfolio-dieter-industrial",
    name: "Braun & Rams Atelier // Industrial Design Monograph",
    category: "portfolios",
    categoryLabel: "Portfolios & Personal",
    style: "dieter-rams-functionalism",
    styleLabel: "Dieter Rams Braun Functionalism",
    description:
      "Pure Dieter Rams functionalist industrial monograph with matte chalk (#eae8e3) and signal orange (#ff5500) palette, interactive aluminum rotary dial knob with detent click, and 10 Principles of Good Design drawer.",
    tags: [
      "Dieter Rams",
      "Braun Functionalism",
      "Rotary Dial Knob",
      "Signal Orange",
      "10 Principles",
    ],
    supportedTheme: "light",
    pageType: "Portfolio",
    features: [
      "Interactive aluminum rotary dial knob with detent angle calculation and frequency readout",
      "Curated product monograph archive: T3 Pocket Radio (1958), SK 4 (1956), ET 66 (1987)",
      "10 Principles of Good Design (Weniger, aber besser) interactive thesis drawer",
      "Pure matte chalk and signal orange functionalist aesthetic",
    ],
    dependencies: ["lucide-react", "clsx"],
    sourcePath: "src/templates/portfolios/dieter-industrial/index.tsx",
    previewRoute: "/templates/portfolio-dieter-industrial",
    customizationNotes: [
      "Replace monograph pieces with your portfolio industrial or digital products.",
      "Adjust rotary dial frequency range in the math helper.",
      "Customize bio and thesis statements.",
    ],
    component: DieterIndustrialMonographTemplate,
    accentColor: "#ff5500",
  },
  {
    id: "ecom-streetwear-drop",
    name: "SHIBUYA 00 // Cyber Streetwear Drop Engine",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Marketplaces",
    style: "shibuya-cyber-drop",
    styleLabel: "Shibuya Cyber Streetwear Drop",
    description:
      "High-contrast Tokyo streetwear drop engine with pitch black and solar acid yellow (#fff000) palette, live millisecond countdown ticker, scarcity size inventory selector, and slide-over checkout bag.",
    tags: [
      "Tokyo Streetwear",
      "Acid Solar Yellow",
      "Millisecond Ticker",
      "Size Scarcity",
      "High-Hype",
    ],
    supportedTheme: "dark",
    pageType: "Marketplace",
    features: [
      "Live millisecond countdown clock (00:04:18.42) simulating hyper-limited drop windows",
      "Interactive size selector with live inventory scarcity badges (2 Left, Sold Out)",
      "Technical garment substrate spec cards (Cordura 500D, GORE-TEX 3L Pro, Vibram Megagrip)",
      "High-contrast caution hazard ribbon with animated Japanese typography",
    ],
    dependencies: ["lucide-react", "clsx"],
    sourcePath: "src/templates/ecommerce/streetwear-drop/index.tsx",
    previewRoute: "/templates/ecom-streetwear-drop",
    customizationNotes: [
      "Replace VOID RUNNER product details with your sneaker or apparel drop.",
      "Adjust millisecond countdown duration in the timer state.",
      "Hook raffle queue button to your Shopify or Stripe checkout flow.",
    ],
    component: ShibuyaStreetwearDropTemplate,
    accentColor: "#fff000",
  },
  {
    id: "dash-aerospace-telemetry",
    name: "AeroTrack // Global Flight Radar & ATC Deck",
    category: "dashboards",
    categoryLabel: "Dashboards & Applications",
    style: "avionics-radar-cockpit",
    styleLabel: "Avionics Oceanic Radar Cockpit",
    description:
      "Oceanic air traffic control radar deck with flight navy (#020611) and aviation emerald palette, live interactive rotating radar canvas with selectable flight vectors, altitude tape gauges, and METAR weather decoder.",
    tags: [
      "Aviation Radar",
      "Avionics Telemetry",
      "Altitude Tape",
      "ADS-B Transponder",
      "ATC Cockpit",
    ],
    supportedTheme: "dark",
    pageType: "Dashboard",
    features: [
      "Interactive radar scope with rotating sweep beam and selectable transatlantic flights (AFR447, BAW117, DLH400)",
      "Primary flight display altitude and ground speed tape meters",
      "Mode S squawk transponder indicator and range ring selector (200nm, 500nm, 1000nm)",
      "Aviation METAR weather observation decoder for international hubs",
    ],
    dependencies: ["lucide-react", "clsx"],
    sourcePath: "src/templates/dashboards/aerospace-telemetry/index.tsx",
    previewRoute: "/templates/dash-aerospace-telemetry",
    customizationNotes: [
      "Bind flights array to OpenSky Network or FlightAware live API.",
      "Customize radar center coordinates and FIR oceanic boundaries.",
      "Add live audio ATC stream integration.",
    ],
    component: AeroTrackTelemetryTemplate,
    accentColor: "#22c55e",
  },
  {
    id: "luxury-haute-horlogerie",
    name: "Æthelgard Horlogerie // Master Celestial Tourbillon Atelier",
    category: "ecommerce",
    categoryLabel: "Haute Horlogerie & Luxury",
    style: "haute-horlogerie-celestial",
    styleLabel: "Haute Horlogerie & Celestial Obsidian",
    description:
      "Geneva master watchmaker atelier with Cinzel and Cinzel Decorative typography, oscillating tourbillon balance wheel with acoustic metronome synthesizer, synodic lunar complication dial, 4-tier layer dissection, and bespoke metallurgy configurator.",
    tags: [
      "Cinzel Decorative",
      "Tourbillon Escapement",
      "Moonphase Complication",
      "Web Audio Metronome",
      "18K Rose Gold",
    ],
    supportedTheme: "dark",
    pageType: "Marketplace",
    features: [
      "Animated triple-axis tourbillon balance wheel with frequency calibration (21,600 to 36,000 vph)",
      "Acoustic escapement tick simulator using Web Audio API",
      "Interactive synodic moonphase dial with sidereal day calculation",
      "4-tier exploded movement caliper layer inspector (Dial -> Guilloché -> Movement -> Exhibition Rotor)",
      "Bespoke alloy metallurgy commissioner with 18k Rose Gold, Platinum 950, Titanium, DLC Obsidian",
    ],
    dependencies: ["lucide-react"],
    sourcePath: "src/templates/ecommerce/haute-horlogerie/index.tsx",
    previewRoute: "/templates/luxury-haute-horlogerie",
    customizationNotes: [
      "Adjust base watch price points in caseMaterials record.",
      "Configure escapement audio volume and default frequency.",
      "Connect commission button to your boutique CRM booking form.",
    ],
    component: HauteHorlogerieTemplate,
    accentColor: "#d4af37",
  },
  {
    id: "hosp-komorebi-pavilion",
    name: "Komorebi Sukiya // Kyoto Zen Tea Pavilion & Spatial Sanctuary",
    category: "hospitality",
    categoryLabel: "Hospitality & Spatial Architecture",
    style: "kyoto-wabi-sabi-sukiya",
    styleLabel: "Kyoto Sukiya & Chiaroscuro Naturalism",
    description:
      "Kyoto Higashiyama architectural hermitage featuring Syne and Fraunces typography, dynamic time-of-day sun dial casting real chiaroscuro shadows through shoji louvers, interactive water basin ripple pond, and 5-stage Chado tea liturgy.",
    tags: [
      "Syne Sculptural",
      "Fraunces Serif",
      "Chiaroscuro Sun Dial",
      "Zen Stone Basin",
      "Wabi-Sabi Joinery",
    ],
    supportedTheme: "dark",
    pageType: "Booking Engine",
    features: [
      "Dynamic sunlight and shadow angle dial (Asa-ake Dawn to Tsukiyo Moonlit) shifting cast rays through shoji screens",
      "Interactive stone basin ripple pond with surface tension physics and floating autumn leaves",
      "5-stage interactive Chado tea ceremony liturgical progression with artifact monographs",
      "Nail-free timber joinery (Kigumi) architectural analysis",
      "Private pavilion seclusion booking engine with single-cultivar matcha harvest selector",
    ],
    dependencies: ["lucide-react"],
    sourcePath: "src/templates/hospitality/komorebi-pavilion/index.tsx",
    previewRoute: "/templates/hosp-komorebi-pavilion",
    customizationNotes: [
      "Customize time-of-day shadow colors and opacity thresholds.",
      "Update tea cultivar descriptions and origins.",
      "Connect pavilion booking to your reservation calendar.",
    ],
    component: KomorebiPavilionTemplate,
    accentColor: "#c29b6f",
  },
  {
    id: "dev-vektorform-synth",
    name: "Vektorform Modular // Analog Waveform Synthesis & Acid Engine",
    category: "developer",
    categoryLabel: "Developer & Creative Audio",
    style: "brutalist-analog-modular",
    styleLabel: "Brutalist Modular Sound Architecture",
    description:
      "Hardware analog waveform synthesizer with Unbounded and Bricolage Grotesque typography, REAL browser Web Audio API oscillator keyboard, live CRT phosphor oscilloscope canvas, 16-step modular drum grid, and Eurorack patch bay.",
    tags: [
      "Unbounded Display",
      "Bricolage Grotesque",
      "Web Audio API Synth",
      "CRT Oscilloscope",
      "16-Step Sequencer",
    ],
    supportedTheme: "dark",
    pageType: "Interactive Portal",
    features: [
      "Playable 13-key tactile keyboard generating real synthesized audio via Web Audio API",
      "Real-time HTML5 Canvas CRT phosphor oscilloscope and vector Lissajous monitor",
      "Resonant low-pass ladder filter (200 Hz to 12 kHz) with Q resonance and ADSR envelope",
      "16-step modular trigger grid sequencer with running LED clock playhead and tempo BPM dial",
      "Virtual Eurorack CV modulation patch bay with reactive cables",
    ],
    dependencies: ["lucide-react"],
    sourcePath: "src/templates/developer/vektorform-synth/index.tsx",
    previewRoute: "/templates/dev-vektorform-synth",
    customizationNotes: [
      "Add custom sample banks or oscillator waveforms.",
      "Tweak default sequencer patterns and master BPM.",
      "Map physical MIDI keyboard inputs via Web MIDI API.",
    ],
    component: VektorformSynthTemplate,
    accentColor: "#d8ff00",
  },
  {
    id: "fashion-atelier-venus",
    name: "Atelier Vénus // Metamorphic Haute Couture & Kinetic Runway",
    category: "ecommerce",
    categoryLabel: "Haute Couture & Avant-Garde Fashion",
    style: "surrealist-haute-couture",
    styleLabel: "Surrealist Metamorphic Runway",
    description:
      "Parisian haute couture atelier with Fraunces italic and Syne typography, 360° rotational silhouette drapery metrology with cut architecture wireframes, interactive fabric sheen shader, and private fitting salon booking.",
    tags: [
      "Fraunces Italic",
      "Syne Sculptural",
      "360° Draping Wireframe",
      "Textile Sheen Shader",
      "Paris Haute Couture",
    ],
    supportedTheme: "dark",
    pageType: "Marketplace",
    features: [
      "Runway collection lookbook with hand-artisan hours and bead metrology (up to 44,000 crystals)",
      "360° rotational drapery simulator with internal titanium ribcage and cut architecture toggle",
      "Interactive incident illumination sheen angle tester for liquid lamé, duchesse satin, and organza",
      "Three-tier runway atmosphere switcher (Nocturne Opéra, Hyper-Chrome, Abyssal Phosphor)",
      "Bespoke salon fitting appointment engine for Paris and Tokyo salons",
    ],
    dependencies: ["lucide-react"],
    sourcePath: "src/templates/ecommerce/atelier-venus/index.tsx",
    previewRoute: "/templates/fashion-atelier-venus",
    customizationNotes: [
      "Add new seasonal looks with custom cut architecture points.",
      "Update textile mill provenance and composition percentages.",
      "Integrate fitting calendar with private client concierge.",
    ],
    component: AtelierVenusTemplate,
    accentColor: "#c084fc",
  },
];

export const templateCategories = [
  { id: "all", label: "All Templates" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "developer", label: "Developer Tools" },
  { id: "education", label: "Education & Learning" },
  { id: "hackathons", label: "Hackathons & Events" },
  { id: "authentication", label: "Authentication & Security" },
  { id: "portfolios", label: "Portfolios & Personal" },
  { id: "saas", label: "Business & SaaS" },
  { id: "ecommerce", label: "E-Commerce & Marketplaces" },
  { id: "dashboards", label: "Dashboards & Applications" },
  { id: "hospitality", label: "Hospitality & Sanctuary" },
];

export const templateStyles = [
  { id: "all", label: "All Styles" },
  { id: "optical-obsidian", label: "Optical Physics / Deep Obsidian" },
  { id: "telemetry-hud", label: "Mission Control Telemetry HUD" },
  { id: "dec-crt-terminal", label: "1980s DEC CRT Terminal" },
  { id: "swiss-international", label: "Swiss Modernism Grid" },
  { id: "oxford-antiquarian", label: "Oxford Literature Antiquarian" },
  { id: "neo-brutalist", label: "Raw Neo-Brutalism" },
  { id: "titanium-hardware", label: "Matte Titanium Zero-Trust" },
  { id: "tokyo-wabi-sabi", label: "Tokyo Wabi-Sabi Creative Tech" },
  { id: "mayfair-institutional", label: "Mayfair Sovereign Treasury" },
  { id: "architectural-travertine", label: "Architectural Travertine Atelier" },
  { id: "nordic-scholarly", label: "Nordic Scholarly Research" },
  { id: "neon-circuit-dag", label: "Neon Circuit Git DAG" },
  { id: "monokai-pro-ide", label: "Monokai Pro Zen IDE" },
  { id: "copenhagen-modern", label: "Copenhagen Architectural" },
  { id: "retro-90s-desktop", label: "Retro 1995 Desktop OS" },
  { id: "dieter-rams-functionalism", label: "Dieter Rams Functionalism" },
  { id: "linear-keyboard-first", label: "Linear Keyboard-First SaaS" },
  { id: "shibuya-cyber-drop", label: "Shibuya Cyber Streetwear" },
  { id: "avionics-radar-cockpit", label: "Avionics Radar Cockpit" },
  { id: "quartzite-thermal-sanctuary", label: "Quartzite Alpine Sanctuary" },
  {
    id: "haute-horlogerie-celestial",
    label: "Haute Horlogerie & Celestial Obsidian",
  },
  {
    id: "kyoto-wabi-sabi-sukiya",
    label: "Kyoto Sukiya & Chiaroscuro Naturalism",
  },
  {
    id: "brutalist-analog-modular",
    label: "Brutalist Modular Sound Architecture",
  },
  { id: "surrealist-haute-couture", label: "Surrealist Metamorphic Runway" },
  {
    id: "deep-space-astrophysics",
    label: "SETI Radiotelescope & Interstellar Monograph",
  },
];
