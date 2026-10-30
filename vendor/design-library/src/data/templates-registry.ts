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
    name: "System 95 // A Personal Desktop",
    category: "authentication",
    categoryLabel: "Authentication & Security",
    style: "retro-90s-desktop",
    styleLabel: "Retro Computing",
    description:
      "A moss-green personal computing tribute with a physical CRT, an explorable desktop, a local welcome note and a tiny mines game.",
    tags: ["Retro Computing","3D Objects","Interactive Study"],
    supportedTheme: "light",
    pageType: "Auth Suite",
    features: ["3D CRT and power switch","Desktop apps and local welcome note","Playable nine-tile minefield","Responsive retro workstation"],
    dependencies: ["three"],
    sourcePath: "src/templates/authentication/retrospective-os/index.tsx",
    previewRoute: "/templates/auth-retrospective-os",
    customizationNotes: ["Edit the source component for copy and interactions.","Shared 3D geometry and materials are in src/redesign/Scene.tsx.","Scoped appearance and responsive layouts are in src/redesign/redesign.css."],
    component: RetroSystem95AuthTemplate,
    accentColor: "#367870",
  },
  {
    id: "portfolio-dieter-industrial",
    name: "form / function // Object Studies",
    category: "portfolios",
    categoryLabel: "Portfolios & Personal",
    style: "dieter-rams-functionalism",
    styleLabel: "Industrial Exactness",
    description:
      "An industrial object archive in chalk and signal orange, with a physical radio, a tunable frequency panel and three selectable design studies.",
    tags: ["Industrial Exactness","3D Objects","Interactive Study"],
    supportedTheme: "light",
    pageType: "Portfolio",
    features: ["3D radio with physical controls","Selectable object studies","Frequency slider and power state","Five expandable design principles"],
    dependencies: ["three"],
    sourcePath: "src/templates/portfolios/dieter-industrial/index.tsx",
    previewRoute: "/templates/portfolio-dieter-industrial",
    customizationNotes: ["Edit the source component for copy and interactions.","Shared 3D geometry and materials are in src/redesign/Scene.tsx.","Scoped appearance and responsive layouts are in src/redesign/redesign.css."],
    component: DieterIndustrialMonographTemplate,
    accentColor: "#e5652d",
  },
  {
    id: "ecom-streetwear-drop",
    name: "SHIBUYA 00 // The City Runner",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Marketplaces",
    style: "shibuya-cyber-drop",
    styleLabel: "Cobalt Streetwear",
    description:
      "A cobalt streetwear collection with a sculptural runner, size and color selection, a local shopping bag and material detail tabs.",
    tags: ["Cobalt Streetwear","3D Objects","Interactive Study"],
    supportedTheme: "light",
    pageType: "Marketplace",
    features: ["3D runner with selectable colors","Size selection and local shopping bag","Selection review and remove-from-bag control","Construction and material tabs"],
    dependencies: ["three"],
    sourcePath: "src/templates/ecommerce/streetwear-drop/index.tsx",
    previewRoute: "/templates/ecom-streetwear-drop",
    customizationNotes: ["Edit the source component for copy and interactions.","Shared 3D geometry and materials are in src/redesign/Scene.tsx.","Scoped appearance and responsive layouts are in src/redesign/redesign.css."],
    component: ShibuyaStreetwearDropTemplate,
    accentColor: "#2753eb",
  },
  {
    id: "dash-aerospace-telemetry",
    name: "AeroTrack // A Clearer Picture",
    category: "dashboards",
    categoryLabel: "Dashboards & Applications",
    style: "avionics-radar-cockpit",
    styleLabel: "Observation Console",
    description:
      "A forest-green observation console with a three-dimensional parabolic antenna, selectable simulated flights and a pausable radar sweep.",
    tags: ["Observation Console","3D Objects","Interactive Study"],
    supportedTheme: "dark",
    pageType: "Dashboard",
    features: ["3D parabolic antenna","Selectable simulated flight vectors","Radar sweep pause and range controls","Local training-mode review flags"],
    dependencies: ["three"],
    sourcePath: "src/templates/dashboards/aerospace-telemetry/index.tsx",
    previewRoute: "/templates/dash-aerospace-telemetry",
    customizationNotes: ["Edit the source component for copy and interactions.","Shared 3D geometry and materials are in src/redesign/Scene.tsx.","Scoped appearance and responsive layouts are in src/redesign/redesign.css."],
    component: AeroTrackTelemetryTemplate,
    accentColor: "#a6bf82",
  },
  {
    id: "luxury-haute-horlogerie",
    name: "Æthelgard // Time Well Spent",
    category: "ecommerce",
    categoryLabel: "Haute Horlogerie & Luxury",
    style: "haute-horlogerie-celestial",
    styleLabel: "Quiet Watch Atelier",
    description:
      "A watch atelier in forest and antique gold, with a physical watch, selectable case metals, an exploded dial study and an adjustable lunar disc.",
    tags: ["Quiet Watch Atelier","3D Objects","Interactive Study"],
    supportedTheme: "dark",
    pageType: "Marketplace",
    features: ["3D watch with legible procedural dial","Case metal and layer selection","Interactive moon-phase study","Local introduction note with engraving"],
    dependencies: ["three"],
    sourcePath: "src/templates/ecommerce/haute-horlogerie/index.tsx",
    previewRoute: "/templates/luxury-haute-horlogerie",
    customizationNotes: ["Edit the source component for copy and interactions.","Shared 3D geometry and materials are in src/redesign/Scene.tsx.","Scoped appearance and responsive layouts are in src/redesign/redesign.css."],
    component: HauteHorlogerieTemplate,
    accentColor: "#d2b786",
  },
  {
    id: "hosp-komorebi-pavilion",
    name: "Komorebi // A Little Time Away",
    category: "hospitality",
    categoryLabel: "Hospitality & Spatial Architecture",
    style: "kyoto-wabi-sabi-sukiya",
    styleLabel: "Pavilion Light Studies",
    description:
      "An imagined timber pavilion retreat with a physical architectural model, adjustable daylight, five tea rituals and a touch-responsive water basin.",
    tags: ["Pavilion Light Studies","3D Objects","Interactive Study"],
    supportedTheme: "light",
    pageType: "Booking Engine",
    features: ["3D timber pavilion","Time-of-day light study","Five selectable tea rituals and water ripples","Room selection and local stay note"],
    dependencies: ["three"],
    sourcePath: "src/templates/hospitality/komorebi-pavilion/index.tsx",
    previewRoute: "/templates/hosp-komorebi-pavilion",
    customizationNotes: ["Edit the source component for copy and interactions.","Shared 3D geometry and materials are in src/redesign/Scene.tsx.","Scoped appearance and responsive layouts are in src/redesign/redesign.css."],
    component: KomorebiPavilionTemplate,
    accentColor: "#a16e4d",
  },
  {
    id: "dev-vektorform-synth",
    name: "Vektorform // Make Some Noise",
    category: "developer",
    categoryLabel: "Developer & Creative Audio",
    style: "brutalist-analog-modular",
    styleLabel: "Modular Sound Laboratory",
    description:
      "A modular sound laboratory with a physical synthesizer, eight playable notes, four oscillator waveforms and a sixteen-step sequencer.",
    tags: ["Modular Sound Laboratory","3D Objects","Interactive Study"],
    supportedTheme: "dark",
    pageType: "Interactive Portal",
    features: ["3D modular synthesizer","Eight-note Web Audio keyboard","Waveform, cutoff and volume controls","Sixteen-step pattern sequencer and tempo"],
    dependencies: ["three"],
    sourcePath: "src/templates/developer/vektorform-synth/index.tsx",
    previewRoute: "/templates/dev-vektorform-synth",
    customizationNotes: ["Edit the source component for copy and interactions.","Shared 3D geometry and materials are in src/redesign/Scene.tsx.","Scoped appearance and responsive layouts are in src/redesign/redesign.css."],
    component: VektorformSynthTemplate,
    accentColor: "#d2e052",
  },
  {
    id: "fashion-atelier-venus",
    name: "Atelier Vénus // Form Is a Feeling",
    category: "ecommerce",
    categoryLabel: "Haute Couture & Avant-Garde Fashion",
    style: "surrealist-haute-couture",
    styleLabel: "Sculptural Couture",
    description:
      "A rose-toned couture presentation with a physical pleated silhouette, three look studies, construction view and interactive fabric light.",
    tags: ["Sculptural Couture","3D Objects","Interactive Study"],
    supportedTheme: "light",
    pageType: "Marketplace",
    features: ["3D pleated silhouette with construction view","Three selectable collection looks","Fabric choice and light-angle study","Local private-salon fitting note"],
    dependencies: ["three"],
    sourcePath: "src/templates/ecommerce/atelier-venus/index.tsx",
    previewRoute: "/templates/fashion-atelier-venus",
    customizationNotes: ["Edit the source component for copy and interactions.","Shared 3D geometry and materials are in src/redesign/Scene.tsx.","Scoped appearance and responsive layouts are in src/redesign/redesign.css."],
    component: AtelierVenusTemplate,
    accentColor: "#a7466b",
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
