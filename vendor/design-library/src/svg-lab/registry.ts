import type { SvgComponent } from './types';

// Line Art
import { ContinuousLineFace } from './components/line-art/ContinuousLineFace';
import { ArchitecturalBlueprint } from './components/line-art/ArchitecturalBlueprint';
import { BotanicalFernStem } from './components/line-art/BotanicalFernStem';
import { CelestialConstellation } from './components/line-art/CelestialConstellation';

// Morphing
import { GeometricPolygonMorph } from './components/morphing/GeometricPolygonMorph';
import { BloomingSacredLotus } from './components/morphing/BloomingSacredLotus';
import { FluidOrganicBlobMorph } from './components/morphing/FluidOrganicBlobMorph';
import { LogoToIconMorph } from './components/morphing/LogoToIconMorph';

// Nature
import { FlutteringMonarchButterfly } from './components/nature/FlutteringMonarchButterfly';
import { OceanSwellShoreline } from './components/nature/OceanSwellShoreline';
import { MoonPhaseCycle } from './components/nature/MoonPhaseCycle';
import { BranchingFractalTree } from './components/nature/BranchingFractalTree';

// Math
import { LissajousCurveHarmonics } from './components/math/LissajousCurveHarmonics';
import { HypotrochoidSpirograph } from './components/math/HypotrochoidSpirograph';
import { RadialGeometricMandala } from './components/math/RadialGeometricMandala';
import { MoireInterferenceRings } from './components/math/MoireInterferenceRings';

// Masks
import { OrganicLiquidWipe } from './components/masks/OrganicLiquidWipe';
import { GeometricIrisReveal } from './components/masks/GeometricIrisReveal';
import { HalftoneDotMatrixMask } from './components/masks/HalftoneDotMatrixMask';

// Typography
import { SelfDrawingScriptText } from './components/typography/SelfDrawingScriptText';
import { CircularOrbitingTypography } from './components/typography/CircularOrbitingTypography';
import { KineticIsometricBlockType } from './components/typography/KineticIsometricBlockType';

// Icons
import { MorphingSearchToClose } from './components/icons/MorphingSearchToClose';
import { RadialProgressShield } from './components/icons/RadialProgressShield';
import { ElasticToggleSwitch } from './components/icons/ElasticToggleSwitch';

// Scenes
import { IsometricCyberCity } from './components/scenes/IsometricCyberCity';
import { ClockworkOrreryMechanism } from './components/scenes/ClockworkOrreryMechanism';
import { FloatingEcoIsland } from './components/scenes/FloatingEcoIsland';

// Experimental
import { ImpossiblePenroseTriangle } from './components/experimental/ImpossiblePenroseTriangle';
import { ElasticStringTangle } from './components/experimental/ElasticStringTangle';

// Batch 2: Advanced Sacred, Mechanical & Natural Vectors
import { SacredMerkabaTetrahedron } from './components/batch2/SacredMerkabaTetrahedron';
import { MechanicalAstrolabeDial } from './components/batch2/MechanicalAstrolabeDial';
import { KineticOrigamiCraneFold } from './components/batch2/KineticOrigamiCraneFold';
import { BioluminescentAnglerfish } from './components/batch2/BioluminescentAnglerfish';
import { GuillocheSecurityRosette } from './components/batch2/GuillocheSecurityRosette';
import { QuantumSupercomputerCryostat } from './components/batch2/QuantumSupercomputerCryostat';
import { OpticalMoireSpheres } from './components/batch2/OpticalMoireSpheres';
import { CyberpunkHudTargetReticle } from './components/batch2/CyberpunkHudTargetReticle';
import { CalligraphicFlourishBird } from './components/batch2/CalligraphicFlourishBird';
import { LiquidCrownSplashRebound } from './components/batch2/LiquidCrownSplashRebound';

export const SVG_COMPONENTS: SvgComponent[] = [
  // 1. ContinuousLineFace
  {
    id: 'continuous-line-face',
    name: 'Editorial Continuous-Line Face',
    category: 'line-art',
    technique: 'stroke-dash',
    description: 'Single-stroke continuous blind-contour abstract Picasso face drawing progressively via stroke-dashoffset with editorial color accent.',
    tags: ['line-art', 'face', 'picasso', 'minimal', 'editorial'],
    viewBox: '0 0 360 500',
    component: ContinuousLineFace,
    controlsSchema: [
      { id: 'strokeColor', label: 'Contour Color', type: 'color', default: '#f8fafc' },
      { id: 'accentColor', label: 'Wash Accent Color', type: 'color', default: '#f43f5e' },
      { id: 'strokeWidth', label: 'Stroke Width', type: 'number', min: 1, max: 6, step: 0.5, default: 2.5 },
      { id: 'duration', label: 'Draw Duration (s)', type: 'number', min: 2, max: 10, step: 0.5, default: 5 },
    ],
    defaultControls: { strokeColor: '#f8fafc', accentColor: '#f43f5e', strokeWidth: 2.5, duration: 5 },
    svgSource: `<svg viewBox="0 0 360 500">...</svg>`,
    reactUsage: `import { ContinuousLineFace } from './components/line-art/ContinuousLineFace';\n\n<ContinuousLineFace strokeColor="#f8fafc" accentColor="#f43f5e" />`,
    a11yNote: 'Decorative vector line art; includes aria-hidden by default.',
    perfNote: 'Pure SVG stroke-dashoffset CSS animation; low CPU load.',
  },

  // 2. ArchitecturalBlueprint
  {
    id: 'architectural-blueprint',
    name: 'Orthographic Temple Blueprint',
    category: 'line-art',
    technique: 'stroke-dash',
    description: 'Classical temple portico, stylobate, 4 fluted columns, and pediment drawing in sequential engineering phases with dimension annotations.',
    tags: ['architecture', 'blueprint', 'columns', 'elevation', 'technical'],
    viewBox: '0 0 500 380',
    component: ArchitecturalBlueprint,
    controlsSchema: [
      { id: 'blueprintColor', label: 'Ink Blueprint Color', type: 'color', default: '#38bdf8' },
      { id: 'gridColor', label: 'CAD Grid Color', type: 'color', default: '#0f2744' },
      { id: 'strokeWidth', label: 'CAD Pen Width', type: 'number', min: 1, max: 3, step: 0.5, default: 1.5 },
      { id: 'showDimensions', label: 'Show Dimensions', type: 'boolean', default: true },
    ],
    defaultControls: { blueprintColor: '#38bdf8', gridColor: '#0f2744', strokeWidth: 1.5, showDimensions: true },
    svgSource: `<svg viewBox="0 0 500 380">...</svg>`,
    reactUsage: `import { ArchitecturalBlueprint } from './components/line-art/ArchitecturalBlueprint';\n\n<ArchitecturalBlueprint blueprintColor="#38bdf8" />`,
    a11yNote: 'Technical elevation diagram with accessible labels.',
    perfNote: 'Staggered CSS animations on lightweight grouped paths.',
  },

  // 3. BotanicalFernStem
  {
    id: 'botanical-fern-stem',
    name: 'Phyllotaxis Botanical Frond',
    category: 'line-art',
    technique: 'stroke-dash',
    description: 'Botanical fern frond growing upward with primary curving rachis and alternating pinnae leaflets drawing progressively with breeze sway.',
    tags: ['botanical', 'fern', 'nature', 'leaf', 'growth'],
    viewBox: '0 0 400 480',
    component: BotanicalFernStem,
    controlsSchema: [
      { id: 'leafColor', label: 'Leaflet Color', type: 'color', default: '#34d399' },
      { id: 'stemColor', label: 'Rachis Stem Color', type: 'color', default: '#059669' },
      { id: 'growthSpeed', label: 'Growth Speed (s)', type: 'number', min: 2, max: 8, step: 0.5, default: 4 },
      { id: 'sway', label: 'Wind Sway', type: 'boolean', default: true },
    ],
    defaultControls: { leafColor: '#34d399', stemColor: '#059669', growthSpeed: 4, sway: true },
    svgSource: `<svg viewBox="0 0 400 480">...</svg>`,
    reactUsage: `import { BotanicalFernStem } from './components/line-art/BotanicalFernStem';\n\n<BotanicalFernStem leafColor="#34d399" />`,
    a11yNote: 'Reduced-motion friendly through optional sway toggle.',
    perfNote: 'Minimal transform matrix overhead on root SVG group.',
  },

  // 4. CelestialConstellation
  {
    id: 'celestial-constellation',
    name: 'Ecliptic Celestial Astrometric Map',
    category: 'line-art',
    technique: 'stroke-dash',
    description: 'Mythological star chart (Ursa Major & Cassiopeia) with pulsating star coordinates, rotating declination circles, and tracing vector arcs.',
    tags: ['celestial', 'astronomy', 'stars', 'map', 'constellation'],
    viewBox: '0 0 460 460',
    component: CelestialConstellation,
    controlsSchema: [
      { id: 'lineColor', label: 'Star Vector Color', type: 'color', default: '#60a5fa' },
      { id: 'starColor', label: 'Stellar Node Color', type: 'color', default: '#fef08a' },
      { id: 'rotationSpeed', label: 'Sky Rotation (s)', type: 'number', min: 10, max: 60, step: 5, default: 35 },
      { id: 'showCelestialGrid', label: 'Celestial Ring Grid', type: 'boolean', default: true },
    ],
    defaultControls: { lineColor: '#60a5fa', starColor: '#fef08a', rotationSpeed: 35, showCelestialGrid: true },
    svgSource: `<svg viewBox="0 0 460 460">...</svg>`,
    reactUsage: `import { CelestialConstellation } from './components/line-art/CelestialConstellation';\n\n<CelestialConstellation lineColor="#60a5fa" />`,
    a11yNote: 'Accessible astronomical chart representation.',
    perfNote: 'Continuous GPU transform rotation with static SVG coordinates.',
  },

  // 5. GeometricPolygonMorph
  {
    id: 'geometric-polygon-morph',
    name: 'Continuous Polygon Morph',
    category: 'morphing',
    technique: 'morph',
    description: 'Mathematical polygon morpher calculating continuous vertex positions to transition between triangle, square, pentagon, hexagon, and dodecagon.',
    tags: ['geometry', 'morph', 'polygon', 'math', 'vertices'],
    viewBox: '0 0 400 400',
    component: GeometricPolygonMorph,
    controlsSchema: [
      { id: 'strokeColor', label: 'Polygon Stroke', type: 'color', default: '#06b6d4' },
      { id: 'fillColor', label: 'Mesh Wash Color', type: 'color', default: '#06b6d4' },
      { id: 'strokeWidth', label: 'Stroke Line Width', type: 'number', min: 1, max: 5, step: 0.5, default: 2.5 },
      { id: 'autoMorph', label: 'Auto Cycle Shapes', type: 'boolean', default: true },
    ],
    defaultControls: { strokeColor: '#06b6d4', fillColor: '#06b6d4', strokeWidth: 2.5, autoMorph: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { GeometricPolygonMorph } from './components/morphing/GeometricPolygonMorph';\n\n<GeometricPolygonMorph strokeColor="#06b6d4" />`,
    a11yNote: 'Interactive polygon explorer with button accessibility.',
    perfNote: '60 FPS requestAnimationFrame parametric circle deformation.',
  },

  // 6. BloomingSacredLotus
  {
    id: 'blooming-sacred-lotus',
    name: 'Sacred Geometric Lotus Bloom',
    category: 'morphing',
    technique: 'transform',
    description: 'Concentric rings of sacred geometry lotus petals unfurling from a tight core into full bloom with harmonic rotation and golden center.',
    tags: ['lotus', 'bloom', 'mandala', 'sacred-geometry', 'flora'],
    viewBox: '0 0 440 440',
    component: BloomingSacredLotus,
    controlsSchema: [
      { id: 'petalColor', label: 'Petal Filigree Color', type: 'color', default: '#f43f5e' },
      { id: 'coreColor', label: 'Golden Core Color', type: 'color', default: '#fbbf24' },
      { id: 'bloomSpeed', label: 'Bloom Interval (s)', type: 'number', min: 2, max: 10, step: 1, default: 5 },
      { id: 'strokeWidth', label: 'Petal Outline Width', type: 'number', min: 1, max: 4, step: 0.2, default: 1.8 },
    ],
    defaultControls: { petalColor: '#f43f5e', coreColor: '#fbbf24', bloomSpeed: 5, strokeWidth: 1.8 },
    svgSource: `<svg viewBox="0 0 440 440">...</svg>`,
    reactUsage: `import { BloomingSacredLotus } from './components/morphing/BloomingSacredLotus';\n\n<BloomingSacredLotus petalColor="#f43f5e" />`,
    a11yNote: 'Calming rhythmic breath-like pulsation.',
    perfNote: 'Pure SVG CSS transform-origin scale & rotate.',
  },

  // 7. FluidOrganicBlobMorph
  {
    id: 'fluid-organic-blob-morph',
    name: 'Viscous Harmonic Fluid Blob',
    category: 'morphing',
    technique: 'morph',
    description: 'Viscous organic vector fluid contour using procedural spline interpolation with harmonic time displacement and cursor hover tug physics.',
    tags: ['blob', 'fluid', 'organic', 'spline', 'interactive'],
    viewBox: '0 0 400 400',
    component: FluidOrganicBlobMorph,
    controlsSchema: [
      { id: 'fillColor', label: 'Fluid Color', type: 'color', default: '#8b5cf6' },
      { id: 'strokeColor', label: 'Contour Border', type: 'color', default: '#c084fc' },
      { id: 'viscosity', label: 'Viscosity Factor', type: 'number', min: 0.5, max: 3, step: 0.2, default: 1.2 },
      { id: 'interactive', label: 'Cursor Elastic Tug', type: 'boolean', default: true },
    ],
    defaultControls: { fillColor: '#8b5cf6', strokeColor: '#c084fc', viscosity: 1.2, interactive: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { FluidOrganicBlobMorph } from './components/morphing/FluidOrganicBlobMorph';\n\n<FluidOrganicBlobMorph fillColor="#8b5cf6" />`,
    a11yNote: 'Interactive fluid contour responsive to pointer.',
    perfNote: 'Cardinal spline calculation on 8 control nodes.',
  },

  // 8. LogoToIconMorph
  {
    id: 'logo-to-icon-morph',
    name: 'Monogram to Isometric Cube Morph',
    category: 'morphing',
    technique: 'transform',
    description: 'Minimalist brand monogram glyph ("A") transforming cleanly into an isometric 3D wireframe cube and back with cubic-bezier transitions.',
    tags: ['logo', 'cube', 'isometric', 'morph', 'branding'],
    viewBox: '0 0 400 400',
    component: LogoToIconMorph,
    controlsSchema: [
      { id: 'primaryColor', label: 'Facet Line Color', type: 'color', default: '#38bdf8' },
      { id: 'accentColor', label: 'Spine Node Color', type: 'color', default: '#f59e0b' },
      { id: 'strokeWidth', label: 'Line Weight', type: 'number', min: 2, max: 6, step: 0.5, default: 3 },
      { id: 'duration', label: 'Morph Duration (s)', type: 'number', min: 0.3, max: 1.5, step: 0.1, default: 0.6 },
    ],
    defaultControls: { primaryColor: '#38bdf8', accentColor: '#f59e0b', strokeWidth: 3, duration: 0.6 },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { LogoToIconMorph } from './components/morphing/LogoToIconMorph';\n\n<LogoToIconMorph primaryColor="#38bdf8" />`,
    a11yNote: 'Accessible state toggle button.',
    perfNote: 'Hardware accelerated SVG line coordinate transitions.',
  },

  // 9. FlutteringMonarchButterfly
  {
    id: 'fluttering-monarch-butterfly',
    name: 'Aerodynamic Monarch Butterfly',
    category: 'nature',
    technique: 'transform',
    description: 'Detailed monarch butterfly with animated dual-plane vector wings fluttering around a central thorax axis with 3D scale/skew perspective.',
    tags: ['butterfly', 'nature', 'wings', 'flapping', 'insects'],
    viewBox: '0 0 400 360',
    component: FlutteringMonarchButterfly,
    controlsSchema: [
      { id: 'primaryWingColor', label: 'Wing Membrane Color', type: 'color', default: '#f97316' },
      { id: 'veinColor', label: 'Vein & Border Color', type: 'color', default: '#18181b' },
      { id: 'flapSpeed', label: 'Flapping Frequency (s)', type: 'number', min: 0.3, max: 1.2, step: 0.05, default: 0.55 },
      { id: 'flightPath', label: 'Hovering Trajectory', type: 'boolean', default: true },
    ],
    defaultControls: { primaryWingColor: '#f97316', veinColor: '#18181b', flapSpeed: 0.55, flightPath: true },
    svgSource: `<svg viewBox="0 0 400 360">...</svg>`,
    reactUsage: `import { FlutteringMonarchButterfly } from './components/nature/FlutteringMonarchButterfly';\n\n<FlutteringMonarchButterfly primaryWingColor="#f97316" />`,
    a11yNote: 'Biomimetic animation; transform-origin pinned to thorax.',
    perfNote: 'ScaleX and SkewY transforms avoid repaint cycles.',
  },

  // 10. OceanSwellShoreline
  {
    id: 'ocean-swell-shoreline',
    name: 'Hydrodynamic Ocean Swells',
    category: 'nature',
    technique: 'transform',
    description: 'Multi-layered rolling ocean swells with undulating vector bezier crests, breaking foam fringe, and translucent aqua depth gradients.',
    tags: ['ocean', 'waves', 'water', 'swell', 'marine'],
    viewBox: '0 0 600 340',
    component: OceanSwellShoreline,
    controlsSchema: [
      { id: 'primaryAqua', label: 'Front Crest Aqua', type: 'color', default: '#06b6d4' },
      { id: 'deepBlue', label: 'Deep Ocean Blue', type: 'color', default: '#0c4a6e' },
      { id: 'foamColor', label: 'Foam Spray Color', type: 'color', default: '#f0fdfa' },
      { id: 'swellSpeed', label: 'Swell Period (s)', type: 'number', min: 2, max: 8, step: 0.5, default: 4 },
    ],
    defaultControls: { primaryAqua: '#06b6d4', deepBlue: '#0c4a6e', foamColor: '#f0fdfa', swellSpeed: 4 },
    svgSource: `<svg viewBox="0 0 600 340">...</svg>`,
    reactUsage: `import { OceanSwellShoreline } from './components/nature/OceanSwellShoreline';\n\n<OceanSwellShoreline primaryAqua="#06b6d4" />`,
    a11yNote: 'Peaceful rolling wave ambiance; aria-hidden.',
    perfNote: 'Triple layer translate interpolation; zero layout shift.',
  },

  // 11. MoonPhaseCycle
  {
    id: 'moon-phase-cycle',
    name: 'Astronomical Moon Phase Cycle',
    category: 'nature',
    technique: 'mask',
    description: 'Lunar orb with vector craters, Maria basalt plains, cycling through 8 moon phases via dynamic SVG elliptical shadow terminator mask.',
    tags: ['moon', 'astronomy', 'lunar', 'phases', 'crater'],
    viewBox: '0 0 400 400',
    component: MoonPhaseCycle,
    controlsSchema: [
      { id: 'moonColor', label: 'Lunar Regolith Color', type: 'color', default: '#f1f5f9' },
      { id: 'shadowColor', label: 'Shadow Void Color', type: 'color', default: '#0f172a' },
      { id: 'cycleDuration', label: 'Cycle Period (s)', type: 'number', min: 4, max: 20, step: 1, default: 8 },
      { id: 'autoCycle', label: 'Auto Orbit Cycle', type: 'boolean', default: true },
    ],
    defaultControls: { moonColor: '#f1f5f9', shadowColor: '#0f172a', cycleDuration: 8, autoCycle: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { MoonPhaseCycle } from './components/nature/MoonPhaseCycle';\n\n<MoonPhaseCycle moonColor="#f1f5f9" />`,
    a11yNote: 'Interactive phase buttons labeled with percentage illumination.',
    perfNote: 'Clipped lunar disc with SVG path terminator update.',
  },

  // 12. BranchingFractalTree
  {
    id: 'branching-fractal-tree',
    name: 'Recursive Arboriform Fractal Tree',
    category: 'nature',
    technique: 'stroke-dash',
    description: 'Organic tree trunk growing from ground, splitting into recursive bifurcating branches, and budding vector leaves with wind physics.',
    tags: ['tree', 'fractal', 'recursive', 'growth', 'nature'],
    viewBox: '0 0 460 460',
    component: BranchingFractalTree,
    controlsSchema: [
      { id: 'trunkColor', label: 'Bark Trunk Color', type: 'color', default: '#78350f' },
      { id: 'leafColor', label: 'Bud Leaf Color', type: 'color', default: '#10b981' },
      { id: 'growthDuration', label: 'Growth Speed (s)', type: 'number', min: 2, max: 8, step: 0.5, default: 4 },
      { id: 'windIntensity', label: 'Wind Sway Amplitude', type: 'number', min: 0.5, max: 2.5, step: 0.5, default: 1 },
    ],
    defaultControls: { trunkColor: '#78350f', leafColor: '#10b981', growthDuration: 4, windIntensity: 1 },
    svgSource: `<svg viewBox="0 0 460 460">...</svg>`,
    reactUsage: `import { BranchingFractalTree } from './components/nature/BranchingFractalTree';\n\n<BranchingFractalTree trunkColor="#78350f" leafColor="#10b981" />`,
    a11yNote: 'Button provided to re-trigger botanical germination.',
    perfNote: 'Chained CSS animation delays on hierarchically grouped branches.',
  },

  // 13. LissajousCurveHarmonics
  {
    id: 'lissajous-curve-harmonics',
    name: 'Harmonic Lissajous Oscillations',
    category: 'math',
    technique: 'parametric',
    description: 'Mathematical Lissajous figure with configurable frequency ratios (a:b), phase shifts, and animated trajectory drawing.',
    tags: ['lissajous', 'math', 'harmonics', 'physics', 'parametric'],
    viewBox: '0 0 400 400',
    component: LissajousCurveHarmonics,
    controlsSchema: [
      { id: 'freqX', label: 'Frequency X', type: 'number', min: 1, max: 8, step: 1, default: 3 },
      { id: 'freqY', label: 'Frequency Y', type: 'number', min: 1, max: 8, step: 1, default: 4 },
      { id: 'strokeColor', label: 'Curve Beam Color', type: 'color', default: '#38bdf8' },
      { id: 'speed', label: 'Phase Speed', type: 'number', min: 0.5, max: 3, step: 0.5, default: 1 },
    ],
    defaultControls: { freqX: 3, freqY: 4, strokeColor: '#38bdf8', speed: 1 },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { LissajousCurveHarmonics } from './components/math/LissajousCurveHarmonics';\n\n<LissajousCurveHarmonics freqX={3} freqY={4} />`,
    a11yNote: 'Mathematical educational visualization of harmonic curves.',
    perfNote: 'Computed in JS and rendered into a single SVG path element.',
  },

  // 14. HypotrochoidSpirograph
  {
    id: 'hypotrochoid-spirograph',
    name: 'Hypotrochoid Guilloche Spirograph',
    category: 'math',
    technique: 'parametric',
    description: 'Mathematical spirograph roulette curve where a circle of radius r rolls inside radius R with pen offset d generating intricate guilloche patterns.',
    tags: ['spirograph', 'math', 'guilloche', 'geometry', 'roulette'],
    viewBox: '0 0 400 400',
    component: HypotrochoidSpirograph,
    controlsSchema: [
      { id: 'strokeColor', label: 'Pen Stroke Color', type: 'color', default: '#ec4899' },
      { id: 'strokeWidth', label: 'Line Width', type: 'number', min: 0.5, max: 3, step: 0.5, default: 1.5 },
      { id: 'rotationSpeed', label: 'Orbit Spin (s)', type: 'number', min: 10, max: 50, step: 5, default: 25 },
    ],
    defaultControls: { strokeColor: '#ec4899', strokeWidth: 1.5, rotationSpeed: 25 },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { HypotrochoidSpirograph } from './components/math/HypotrochoidSpirograph';\n\n<HypotrochoidSpirograph strokeColor="#ec4899" />`,
    a11yNote: 'Interactive geometric generator with preset buttons.',
    perfNote: '600-segment continuous bezier roulette path.',
  },

  // 15. RadialGeometricMandala
  {
    id: 'radial-geometric-mandala',
    name: '16-Fold Sacred Yantra Mandala',
    category: 'math',
    technique: 'transform',
    description: '16-fold rotational symmetry mandala with interlocking sacred geometry rings, rotating concentric gears, and pulsation.',
    tags: ['mandala', 'sacred-geometry', 'symmetry', 'yantra', 'rotation'],
    viewBox: '0 0 400 400',
    component: RadialGeometricMandala,
    controlsSchema: [
      { id: 'primaryColor', label: 'Outer Ring Gold', type: 'color', default: '#f59e0b' },
      { id: 'secondaryColor', label: 'Inner Vesica Cyan', type: 'color', default: '#06b6d4' },
      { id: 'coreColor', label: 'Center Star Rosette', type: 'color', default: '#ec4899' },
      { id: 'rotationDuration', label: 'Cycle Duration (s)', type: 'number', min: 15, max: 60, step: 5, default: 40 },
    ],
    defaultControls: { primaryColor: '#f59e0b', secondaryColor: '#06b6d4', coreColor: '#ec4899', rotationDuration: 40 },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { RadialGeometricMandala } from './components/math/RadialGeometricMandala';\n\n<RadialGeometricMandala primaryColor="#f59e0b" />`,
    a11yNote: 'Mesmerizing rotational sacred geometric art; aria-hidden.',
    perfNote: 'Counter-rotating concentric SVG groups.',
  },

  // 16. MoireInterferenceRings
  {
    id: 'moire-interference-rings',
    name: 'Optical Moiré Fringes',
    category: 'math',
    technique: 'interactive',
    description: 'Dual overlaid concentric circular grids producing dynamic optical moiré fringes under pointer movement and speed oscillation.',
    tags: ['moire', 'optics', 'illusion', 'interference', 'rings'],
    viewBox: '0 0 400 400',
    component: MoireInterferenceRings,
    controlsSchema: [
      { id: 'ringCount', label: 'Concentric Density', type: 'number', min: 20, max: 50, step: 4, default: 36 },
      { id: 'ringColor', label: 'Ring Line Color', type: 'color', default: '#e2e8f0' },
      { id: 'speed', label: 'Oscillation Speed (s)', type: 'number', min: 2, max: 8, step: 1, default: 4 },
      { id: 'interactiveShift', label: 'Cursor Parallax Shift', type: 'boolean', default: true },
    ],
    defaultControls: { ringCount: 36, ringColor: '#e2e8f0', speed: 4, interactiveShift: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { MoireInterferenceRings } from './components/math/MoireInterferenceRings';\n\n<MoireInterferenceRings ringColor="#e2e8f0" />`,
    a11yNote: 'Optical interference demonstration with hover response.',
    perfNote: 'Uses SVG group transform offset; zero layout reflows.',
  },

  // 17. OrganicLiquidWipe
  {
    id: 'organic-liquid-wipe',
    name: 'Dynamic SVG Mask Liquid Wipe',
    category: 'masks',
    technique: 'mask',
    description: 'Fluid wave SVG mask wiping across a viewport to unveil underlying vibrant multi-tone artwork or landscape.',
    tags: ['mask', 'wipe', 'transition', 'reveal', 'liquid'],
    viewBox: '0 0 500 320',
    component: OrganicLiquidWipe,
    controlsSchema: [
      { id: 'duration', label: 'Wipe Period (s)', type: 'number', min: 2, max: 8, step: 0.5, default: 4 },
      { id: 'autoLoop', label: 'Continuous Loop', type: 'boolean', default: true },
    ],
    defaultControls: { duration: 4, autoLoop: true },
    svgSource: `<svg viewBox="0 0 500 320">...</svg>`,
    reactUsage: `import { OrganicLiquidWipe } from './components/masks/OrganicLiquidWipe';\n\n<OrganicLiquidWipe duration={4} />`,
    a11yNote: 'Standard SVG <mask> element with accessible content.',
    perfNote: 'Hardware accelerated translate on mask container.',
  },

  // 18. GeometricIrisReveal
  {
    id: 'geometric-iris-reveal',
    name: 'Mechanical 8-Blade Iris Shutter',
    category: 'masks',
    technique: 'transform',
    description: 'Camera shutter / origami iris polygon aperture with 8 interlocking blades expanding from center to reveal content.',
    tags: ['iris', 'shutter', 'camera', 'reveal', 'aperture'],
    viewBox: '0 0 400 400',
    component: GeometricIrisReveal,
    controlsSchema: [
      { id: 'bladeColor', label: 'Aperture Blade Ink', type: 'color', default: '#0f172a' },
      { id: 'duration', label: 'Action Duration (s)', type: 'number', min: 0.4, max: 1.5, step: 0.1, default: 0.8 },
      { id: 'bladeCount', label: 'Number of Blades', type: 'number', min: 6, max: 12, step: 2, default: 8 },
    ],
    defaultControls: { bladeColor: '#0f172a', duration: 0.8, bladeCount: 8 },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { GeometricIrisReveal } from './components/masks/GeometricIrisReveal';\n\n<GeometricIrisReveal bladeCount={8} />`,
    a11yNote: 'Interactive camera shutter with button controls.',
    perfNote: 'Cubic-bezier transforms on 8 polygon elements.',
  },

  // 19. HalftoneDotMatrixMask
  {
    id: 'halftone-dot-matrix-mask',
    name: 'Halftone Matrix Aperture Mask',
    category: 'masks',
    technique: 'mask',
    description: 'Dynamic halftone dot grid where circular apertures scale along a sine wave gradient to dynamically reveal underlying graphic.',
    tags: ['halftone', 'dots', 'screen', 'mask', 'pop-art'],
    viewBox: '0 0 400 400',
    component: HalftoneDotMatrixMask,
    controlsSchema: [
      { id: 'waveSpeed', label: 'Wave Frequency', type: 'number', min: 1, max: 4, step: 0.5, default: 2 },
      { id: 'accentColor', label: 'Accent Tone', type: 'color', default: '#f43f5e' },
    ],
    defaultControls: { waveSpeed: 2, accentColor: '#f43f5e' },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { HalftoneDotMatrixMask } from './components/masks/HalftoneDotMatrixMask';\n\n<HalftoneDotMatrixMask waveSpeed={2} />`,
    a11yNote: 'High contrast graphic screen effect.',
    perfNote: 'Harmonic radius modulation on 256 circle elements.',
  },

  // 20. SelfDrawingScriptText
  {
    id: 'self-drawing-script-text',
    name: 'Calligraphic Cursive Font Tracer',
    category: 'typography',
    technique: 'stroke-dash',
    description: 'Elegant cursive calligraphy script lettering writing itself stroke-by-stroke with animated pen nib accent.',
    tags: ['calligraphy', 'script', 'typography', 'handwritten', 'cursive'],
    viewBox: '0 0 400 260',
    component: SelfDrawingScriptText,
    controlsSchema: [
      { id: 'strokeColor', label: 'Ink Flow Color', type: 'color', default: '#f59e0b' },
      { id: 'strokeWidth', label: 'Nib Line Width', type: 'number', min: 2, max: 6, step: 0.5, default: 3.5 },
      { id: 'duration', label: 'Writing Duration (s)', type: 'number', min: 2, max: 8, step: 0.5, default: 4.5 },
    ],
    defaultControls: { strokeColor: '#f59e0b', strokeWidth: 3.5, duration: 4.5 },
    svgSource: `<svg viewBox="0 0 400 260">...</svg>`,
    reactUsage: `import { SelfDrawingScriptText } from './components/typography/SelfDrawingScriptText';\n\n<SelfDrawingScriptText strokeColor="#f59e0b" />`,
    a11yNote: 'Accessible title text preserved in aria-label.',
    perfNote: 'Continuous single-path stroke-dashoffset loop.',
  },

  // 21. CircularOrbitingTypography
  {
    id: 'circular-orbiting-typography',
    name: 'textPath Kinetic Orbital Stamp',
    category: 'typography',
    technique: 'transform',
    description: 'Kinetic circular text rotating along an SVG <textPath> circle with directional toggle, radius controls, and center emblem.',
    tags: ['textPath', 'typography', 'circular', 'stamp', 'kinetic'],
    viewBox: '0 0 400 400',
    component: CircularOrbitingTypography,
    controlsSchema: [
      { id: 'textColor', label: 'Lettering Color', type: 'color', default: '#38bdf8' },
      { id: 'coreColor', label: 'Center Seal Color', type: 'color', default: '#f59e0b' },
      { id: 'rotationDuration', label: 'Orbit Speed (s)', type: 'number', min: 10, max: 40, step: 5, default: 20 },
      { id: 'reverseDirection', label: 'Reverse Spin', type: 'boolean', default: false },
    ],
    defaultControls: { textColor: '#38bdf8', coreColor: '#f59e0b', rotationDuration: 20, reverseDirection: false },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { CircularOrbitingTypography } from './components/typography/CircularOrbitingTypography';\n\n<CircularOrbitingTypography textColor="#38bdf8" />`,
    a11yNote: 'Accessible readable SVG text preserved for assistive readers.',
    perfNote: 'GPU accelerated transform-origin spin.',
  },

  // 22. KineticIsometricBlockType
  {
    id: 'kinetic-isometric-block-type',
    name: '3D Isometric Block Typography',
    category: 'typography',
    technique: 'transform',
    description: '3D isometric letterforms ("VECTOR") with oscillating extrusion depths, shadows, and staggered spring entrance.',
    tags: ['isometric', 'typography', '3d', 'block', 'extrusion'],
    viewBox: '0 0 520 280',
    component: KineticIsometricBlockType,
    controlsSchema: [
      { id: 'topColor', label: 'Top Face Color', type: 'color', default: '#38bdf8' },
      { id: 'leftColor', label: 'Left Face Color', type: 'color', default: '#0284c7' },
      { id: 'rightColor', label: 'Right Shadow Face', type: 'color', default: '#0369a1' },
      { id: 'bounceHeight', label: 'Bounce Amplitude (px)', type: 'number', min: 6, max: 24, step: 2, default: 14 },
    ],
    defaultControls: { topColor: '#38bdf8', leftColor: '#0284c7', rightColor: '#0369a1', bounceHeight: 14 },
    svgSource: `<svg viewBox="0 0 520 280">...</svg>`,
    reactUsage: `import { KineticIsometricBlockType } from './components/typography/KineticIsometricBlockType';\n\n<KineticIsometricBlockType topColor="#38bdf8" />`,
    a11yNote: 'Monospaced block characters legible on dark substrates.',
    perfNote: 'Staggered CSS keyframes with individual character offsets.',
  },

  // 23. MorphingSearchToClose
  {
    id: 'morphing-search-to-close',
    name: 'Search to Close Elastic Morph Icon',
    category: 'icons',
    technique: 'morph',
    description: 'Magnifying glass search icon organically extending its handle and splitting into an "X" close icon with elastic spring bounce.',
    tags: ['icon', 'search', 'close', 'morph', 'micro-interaction'],
    viewBox: '0 0 48 48',
    component: MorphingSearchToClose,
    controlsSchema: [
      { id: 'strokeColor', label: 'Resting State Color', type: 'color', default: '#f8fafc' },
      { id: 'activeColor', label: 'Close Active Color', type: 'color', default: '#f43f5e' },
      { id: 'strokeWidth', label: 'Line Stroke Weight', type: 'number', min: 2, max: 5, step: 0.5, default: 3.5 },
      { id: 'size', label: 'Button Size', type: 'number', min: 48, max: 96, step: 8, default: 64 },
    ],
    defaultControls: { strokeColor: '#f8fafc', activeColor: '#f43f5e', strokeWidth: 3.5, size: 64 },
    svgSource: `<svg viewBox="0 0 48 48">...</svg>`,
    reactUsage: `import { MorphingSearchToClose } from './components/icons/MorphingSearchToClose';\n\n<MorphingSearchToClose strokeColor="#f8fafc" />`,
    a11yNote: 'Accessible toggle icon with state labels.',
    perfNote: 'Instant cubic-bezier path coordinate transitions.',
  },

  // 24. RadialProgressShield
  {
    id: 'radial-progress-shield',
    name: 'Cyberpunk Shield Progress Meter',
    category: 'icons',
    technique: 'stroke-dash',
    description: 'Cyberpunk hexagonal shield progress indicator with rotating tick markers, percentage display, and dynamic dashoffset fill.',
    tags: ['progress', 'shield', 'cyberpunk', 'meter', 'hud'],
    viewBox: '0 0 140 140',
    component: RadialProgressShield,
    controlsSchema: [
      { id: 'progress', label: 'Charge Percentage', type: 'number', min: 0, max: 100, step: 1, default: 74 },
      { id: 'accentColor', label: 'Charge Arc Color', type: 'color', default: '#22d3ee' },
      { id: 'trackColor', label: 'Track Base Color', type: 'color', default: '#1e293b' },
    ],
    defaultControls: { progress: 74, accentColor: '#22d3ee', trackColor: '#1e293b' },
    svgSource: `<svg viewBox="0 0 140 140">...</svg>`,
    reactUsage: `import { RadialProgressShield } from './components/icons/RadialProgressShield';\n\n<RadialProgressShield progress={74} />`,
    a11yNote: 'Includes numeric progress readouts and aria status.',
    perfNote: 'Pure SVG stroke-dashoffset transition.',
  },

  // 25. ElasticToggleSwitch
  {
    id: 'elastic-toggle-switch',
    name: 'Viscoelastic Fluid Toggle Switch',
    category: 'icons',
    technique: 'morph',
    description: 'Organic liquid toggle switch where the thumb stretches elastically with fluid droplet surface tension during toggle.',
    tags: ['toggle', 'switch', 'elastic', 'liquid', 'ui'],
    viewBox: '0 0 100 55',
    component: ElasticToggleSwitch,
    controlsSchema: [
      { id: 'isOn', label: 'Initial State', type: 'boolean', default: false },
      { id: 'activeColor', label: 'Active Green', type: 'color', default: '#10b981' },
      { id: 'inactiveColor', label: 'Inactive Slate', type: 'color', default: '#334155' },
    ],
    defaultControls: { isOn: false, activeColor: '#10b981', inactiveColor: '#334155' },
    svgSource: `<svg viewBox="0 0 100 55">...</svg>`,
    reactUsage: `import { ElasticToggleSwitch } from './components/icons/ElasticToggleSwitch';\n\n<ElasticToggleSwitch activeColor="#10b981" />`,
    a11yNote: 'Accessible interactive switch with keyboard space/enter support.',
    perfNote: 'Ellipse radius modulation during state change.',
  },

  // 26. IsometricCyberCity
  {
    id: 'isometric-cyber-city',
    name: 'Isometric Cyberpunk Metropolis',
    category: 'scenes',
    technique: 'transform',
    description: 'Layered isometric metropolis with animated skyscraper window lights, floating transit pods, and blinking radio towers.',
    tags: ['city', 'isometric', 'cyberpunk', 'skyline', 'scifi'],
    viewBox: '0 0 520 340',
    component: IsometricCyberCity,
    controlsSchema: [
      { id: 'neonCyan', label: 'Cyan Window Lights', type: 'color', default: '#38bdf8' },
      { id: 'neonPink', label: 'Pink Spire Beacon', type: 'color', default: '#ec4899' },
      { id: 'trafficSpeed', label: 'Maglev Pod Speed (s)', type: 'number', min: 1.5, max: 6, step: 0.5, default: 3 },
    ],
    defaultControls: { neonCyan: '#38bdf8', neonPink: '#ec4899', trafficSpeed: 3 },
    svgSource: `<svg viewBox="0 0 520 340">...</svg>`,
    reactUsage: `import { IsometricCyberCity } from './components/scenes/IsometricCyberCity';\n\n<IsometricCyberCity neonCyan="#38bdf8" />`,
    a11yNote: 'Complex isometric scene; aria-hidden.',
    perfNote: 'Hardware accelerated CSS translate animation on pod.',
  },

  // 27. ClockworkOrreryMechanism
  {
    id: 'clockwork-orrery-mechanism',
    name: 'Horological Clockwork Orrery',
    category: 'scenes',
    technique: 'transform',
    description: 'Antique astronomical clockwork mechanism with interlocking rotating brass gears, escapement wheel, and orbiting planets.',
    tags: ['clockwork', 'gears', 'steampunk', 'orrery', 'mechanism'],
    viewBox: '0 0 400 400',
    component: ClockworkOrreryMechanism,
    controlsSchema: [
      { id: 'brassColor', label: 'Antique Brass Tone', type: 'color', default: '#d97706' },
      { id: 'steelColor', label: 'Pinion Steel Tone', type: 'color', default: '#94a3b8' },
      { id: 'gemColor', label: 'Ruby Pivot Gem', type: 'color', default: '#38bdf8' },
      { id: 'speed', label: 'Escapement Period (s)', type: 'number', min: 4, max: 24, step: 2, default: 12 },
    ],
    defaultControls: { brassColor: '#d97706', steelColor: '#94a3b8', gemColor: '#38bdf8', speed: 12 },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { ClockworkOrreryMechanism } from './components/scenes/ClockworkOrreryMechanism';\n\n<ClockworkOrreryMechanism speed={12} />`,
    a11yNote: 'Decorative mechanical clockwork animation.',
    perfNote: 'Rotations calculated to maintain proper gear ratio meshing.',
  },

  // 28. FloatingEcoIsland
  {
    id: 'floating-eco-island',
    name: 'Floating Aerostat Biosphere',
    category: 'scenes',
    technique: 'transform',
    description: 'Floating airborne island with gentle levitation, cascading vector waterfall, rotating wind turbine, and drifting clouds.',
    tags: ['island', 'nature', 'waterfall', 'wind-turbine', 'floating'],
    viewBox: '0 0 500 340',
    component: FloatingEcoIsland,
    controlsSchema: [
      { id: 'islandGrass', label: 'Lush Plateau Grass', type: 'color', default: '#10b981' },
      { id: 'waterfallColor', label: 'Waterfall Stream', type: 'color', default: '#38bdf8' },
      { id: 'hoverSpeed', label: 'Levitation Period (s)', type: 'number', min: 2, max: 8, step: 0.5, default: 4.5 },
      { id: 'cloudSpeed', label: 'Cloud Drift (s)', type: 'number', min: 8, max: 30, step: 2, default: 16 },
    ],
    defaultControls: { islandGrass: '#10b981', waterfallColor: '#38bdf8', hoverSpeed: 4.5, cloudSpeed: 16 },
    svgSource: `<svg viewBox="0 0 500 340">...</svg>`,
    reactUsage: `import { FloatingEcoIsland } from './components/scenes/FloatingEcoIsland';\n\n<FloatingEcoIsland islandGrass="#10b981" />`,
    a11yNote: 'Floating whimsical ecosystem scene.',
    perfNote: 'Combined translate, rotate, and stroke-dashoffset streams.',
  },

  // 29. ImpossiblePenroseTriangle
  {
    id: 'impossible-penrose-triangle',
    name: 'Penrose Impossible Tribar Paradox',
    category: 'experimental',
    technique: 'transform',
    description: 'Animated Penrose impossible tribar with an optical illusion light particle traveling continuously along its contradictory planes.',
    tags: ['penrose', 'impossible', 'illusion', 'paradox', 'geometry'],
    viewBox: '0 0 400 400',
    component: ImpossiblePenroseTriangle,
    controlsSchema: [
      { id: 'colorA', label: 'Facet Top Face', type: 'color', default: '#38bdf8' },
      { id: 'colorB', label: 'Facet Bottom Face', type: 'color', default: '#0284c7' },
      { id: 'pulseColor', label: 'Traveling Photon', type: 'color', default: '#f59e0b' },
      { id: 'particleSpeed', label: 'Photon Loop (s)', type: 'number', min: 2, max: 10, step: 1, default: 6 },
    ],
    defaultControls: { colorA: '#38bdf8', colorB: '#0284c7', pulseColor: '#f59e0b', particleSpeed: 6 },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { ImpossiblePenroseTriangle } from './components/experimental/ImpossiblePenroseTriangle';\n\n<ImpossiblePenroseTriangle particleSpeed={6} />`,
    a11yNote: 'Classic geometric impossible figure.',
    perfNote: 'Uses SVG CSS offset-path for smooth photon trajectory.',
  },

  // 30. ElasticStringTangle
  {
    id: 'elastic-string-tangle',
    name: 'Viscoelastic String Cat\'s Cradle',
    category: 'experimental',
    technique: 'interactive',
    description: 'Interactive cat\'s cradle / string network that bends and vibrates elastically with cursor pluck physics.',
    tags: ['strings', 'physics', 'interactive', 'cats-cradle', 'elastic'],
    viewBox: '0 0 400 400',
    component: ElasticStringTangle,
    controlsSchema: [
      { id: 'stringColor', label: 'Thread Cord Color', type: 'color', default: '#f43f5e' },
      { id: 'pinColor', label: 'Anchor Pin Gold', type: 'color', default: '#f59e0b' },
    ],
    defaultControls: {
      stringColor: '#f43f5e',
      pinColor: '#f59e0b',
    },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { ElasticStringTangle } from './components/experimental/ElasticStringTangle';\n\n<ElasticStringTangle stringColor="#f43f5e" />`,
    a11yNote: 'Interactive string loom responsive to pointer hover.',
    perfNote: 'Real-time quadratic bezier control point calculation.',
  },

  // 31. SacredMerkabaTetrahedron (Math / Geometry)
  {
    id: 'sacred-merkaba-tetrahedron',
    name: 'Sacred Merkaba Star Tetrahedron',
    category: 'math',
    technique: 'transform',
    description: 'Interlocking 3D Star Tetrahedron (Merkaba) rendered in SVG with isometric wireframe projection, harmonic energy field rings, and rotational axis speed controls.',
    tags: ['sacred-geometry', 'merkaba', 'tetrahedron', '3d', 'harmonic'],
    viewBox: '0 0 400 400',
    component: SacredMerkabaTetrahedron,
    controlsSchema: [
      { id: 'rotationSpeed', label: 'Rotational Velocity', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'strokeColor', label: 'Primary Edge Color', type: 'color', default: '#38bdf8' },
      { id: 'glowColor', label: 'Inverted Edge Glow', type: 'color', default: '#a855f7' },
      { id: 'strokeWidth', label: 'Wireframe Stroke Width', type: 'number', min: 1, max: 3.5, step: 0.5, default: 1.5 },
      { id: 'showEnergyRings', label: 'Concentric Energy Rings', type: 'boolean', default: true },
    ],
    defaultControls: { rotationSpeed: 1.0, strokeColor: '#38bdf8', glowColor: '#a855f7', strokeWidth: 1.5, showEnergyRings: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { SacredMerkabaTetrahedron } from './components/batch2/SacredMerkabaTetrahedron';\n\n<SacredMerkabaTetrahedron />`,
    a11yNote: 'Eight-pointed star tetrahedron wireframe projection.',
    perfNote: 'Matrix trigonometric projection inside requestAnimationFrame.',
  },

  // 32. MechanicalAstrolabeDial (Scenes / Steampunk)
  {
    id: 'mechanical-astrolabe-dial',
    name: '16th-Century Renaissance Astrolabe Dial',
    category: 'scenes',
    technique: 'transform',
    description: 'Planispheric brass astrolabe with rotating celestial rete star pointers, stereographic latitude tympan curves, alidade rotation rule, and zodiac ring.',
    tags: ['astrolabe', 'astronomy', 'brass', 'renaissance', 'mechanism'],
    viewBox: '0 0 400 400',
    component: MechanicalAstrolabeDial,
    controlsSchema: [
      { id: 'rotationSpeed', label: 'Celestial Drift Speed', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'brassColor', label: 'Antique Brass Mater', type: 'color', default: '#d97706' },
      { id: 'accentGold', label: 'Gilded Star Pointers', type: 'color', default: '#fef08a' },
      { id: 'showAlidadeRule', label: 'Sighting Alidade Rule', type: 'boolean', default: true },
    ],
    defaultControls: { rotationSpeed: 1.0, brassColor: '#d97706', accentGold: '#fef08a', showAlidadeRule: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { MechanicalAstrolabeDial } from './components/batch2/MechanicalAstrolabeDial';\n\n<MechanicalAstrolabeDial />`,
    a11yNote: 'High precision astronomical vector instrument.',
    perfNote: 'Group transformation rotation around pivot (200, 210).',
  },

  // 33. KineticOrigamiCraneFold (Morphing / Japanese Art)
  {
    id: 'kinetic-origami-crane-fold',
    name: 'Kinetic Japanese Origami Tsuru (Crane)',
    category: 'morphing',
    technique: 'morph',
    description: 'Multi-stage geometric transformation of a Japanese origami paper crane from flat square sheet to flapping 3D bird with faceted creases.',
    tags: ['origami', 'crane', 'paper', 'morphing', 'japanese-art', 'facets'],
    viewBox: '0 0 400 400',
    component: KineticOrigamiCraneFold,
    controlsSchema: [
      { id: 'speed', label: 'Morph Velocity', type: 'number', min: 0.5, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'paperColor', label: 'Washi Paper Tint', type: 'color', default: '#f8fafc' },
      { id: 'accentFold', label: 'Reverse Facet Shade', type: 'color', default: '#e2e8f0' },
      { id: 'creaseColor', label: 'Crease Line Color', type: 'color', default: '#94a3b8' },
      { id: 'autoMorph', label: 'Continuous Morph Loop', type: 'boolean', default: true },
    ],
    defaultControls: { speed: 1.0, paperColor: '#f8fafc', accentFold: '#e2e8f0', creaseColor: '#94a3b8', autoMorph: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { KineticOrigamiCraneFold } from './components/batch2/KineticOrigamiCraneFold';\n\n<KineticOrigamiCraneFold />`,
    a11yNote: 'Faceted paper polygon origami representation.',
    perfNote: 'Smooth harmonic sin-cos coordinate interpolation.',
  },

  // 34. BioluminescentAnglerfish (Nature / Illustration)
  {
    id: 'bioluminescent-anglerfish',
    name: 'Abyssal Bioluminescent Anglerfish',
    category: 'nature',
    technique: 'transform',
    description: 'Deep ocean anglerfish with glowing photophore esca lure casting volumetric SVG light rays into the deep ocean abyss with undulating translucent fins.',
    tags: ['anglerfish', 'deep-sea', 'bioluminescence', 'light-rays', 'nature', 'ocean'],
    viewBox: '0 0 400 400',
    component: BioluminescentAnglerfish,
    controlsSchema: [
      { id: 'pulseSpeed', label: 'Bioluminescent Pulse Rate', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'lureColor', label: 'Esca Lantern Glow', type: 'color', default: '#22d3ee' },
      { id: 'bodyColor', label: 'Abyssal Body Tone', type: 'color', default: '#0f172a' },
      { id: 'showLightBeam', label: 'Volumetric Light Cone', type: 'boolean', default: true },
    ],
    defaultControls: { pulseSpeed: 1.0, lureColor: '#22d3ee', bodyColor: '#0f172a', showLightBeam: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { BioluminescentAnglerfish } from './components/batch2/BioluminescentAnglerfish';\n\n<BioluminescentAnglerfish />`,
    a11yNote: 'Atmospheric deep ocean vector illustration with pulsating lure.',
    perfNote: 'Radial gradient glows with lightweight Gaussian blur.',
  },

  // 35. GuillocheSecurityRosette (Math / Line Art)
  {
    id: 'guilloche-security-rosette',
    name: 'Banknote Security Guilloche Rosette',
    category: 'math',
    technique: 'stroke-dash',
    description: 'Complex banknote security guilloche patterns generated via parametric epitrochoid equations with nested harmonic phase shifts.',
    tags: ['guilloche', 'banknote', 'currency', 'engraving', 'math', 'rosette'],
    viewBox: '0 0 400 400',
    component: GuillocheSecurityRosette,
    controlsSchema: [
      { id: 'speed', label: 'Phase Shift Velocity', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'layers', label: 'Nested Wave Layers', type: 'number', min: 2, max: 6, step: 1, default: 4 },
      { id: 'lobes', label: 'Lobe Symmetries', type: 'number', min: 4, max: 14, step: 2, default: 8 },
      { id: 'strokeColor', label: 'Primary Intaglio Ink', type: 'color', default: '#10b981' },
      { id: 'accentColor', label: 'Secondary Security Ink', type: 'color', default: '#06b6d4' },
      { id: 'autoRotate', label: 'Animated Phase Wave', type: 'boolean', default: true },
    ],
    defaultControls: { speed: 1.0, layers: 4, lobes: 8, strokeColor: '#10b981', accentColor: '#06b6d4', autoRotate: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { GuillocheSecurityRosette } from './components/batch2/GuillocheSecurityRosette';\n\n<GuillocheSecurityRosette />`,
    a11yNote: 'Mathematical security engraving pattern.',
    perfNote: 'Parametric path compilation with 360-step resolution.',
  },

  // 36. QuantumSupercomputerCryostat (Scenes / Tech)
  {
    id: 'quantum-supercomputer-cryostat',
    name: 'Superconducting Quantum Cryostat Chandelier',
    category: 'scenes',
    technique: 'transform',
    description: 'Isometric cutaway of a quantum dilution refrigerator cryostat with golden coaxial microwave cables, multi-tier thermal plates, and 15mK qubit canister.',
    tags: ['quantum', 'cryostat', 'gold', 'supercomputing', 'qubit', 'hardware'],
    viewBox: '0 0 400 400',
    component: QuantumSupercomputerCryostat,
    controlsSchema: [
      { id: 'pulseSpeed', label: 'Coherence Pulse Rate', type: 'number', min: 0.5, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'goldColor', label: 'Gilded Thermal Plates', type: 'color', default: '#fbbf24' },
      { id: 'glowColor', label: 'Qubit Emission Beam', type: 'color', default: '#06b6d4' },
      { id: 'showQubitPulses', label: 'Active Qubit Telemetry', type: 'boolean', default: true },
    ],
    defaultControls: { pulseSpeed: 1.0, goldColor: '#fbbf24', glowColor: '#06b6d4', showQubitPulses: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { QuantumSupercomputerCryostat } from './components/batch2/QuantumSupercomputerCryostat';\n\n<QuantumSupercomputerCryostat />`,
    a11yNote: 'Cryogenic dilution refrigerator cutaway diagram.',
    perfNote: 'Vector ellipses with linear gradient fills.',
  },

  // 37. OpticalMoireSpheres (Experimental / Optics)
  {
    id: 'optical-moire-spheres',
    name: 'Counter-Rotating Moiré Grating Spheres',
    category: 'experimental',
    technique: 'transform',
    description: 'Dual concentric optical line grating spheres generating hypnotic dynamic moiré fringes and caustics as they counter-rotate.',
    tags: ['moire', 'optical-illusion', 'interference', 'gratings', 'kinetic'],
    viewBox: '0 0 400 400',
    component: OpticalMoireSpheres,
    controlsSchema: [
      { id: 'rotationSpeed', label: 'Counter-Rotation Speed', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'primaryColor', label: 'Clockwise Grating Color', type: 'color', default: '#38bdf8' },
      { id: 'secondaryColor', label: 'Counter Grating Color', type: 'color', default: '#ec4899' },
      { id: 'ringCount', label: 'Latitude Ring Density', type: 'number', min: 18, max: 48, step: 2, default: 36 },
    ],
    defaultControls: { rotationSpeed: 1.0, primaryColor: '#38bdf8', secondaryColor: '#ec4899', ringCount: 36 },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { OpticalMoireSpheres } from './components/batch2/OpticalMoireSpheres';\n\n<OpticalMoireSpheres />`,
    a11yNote: 'Kinetic optical grating interference patterns.',
    perfNote: 'Zero pixel redraws; pure SVG group rotate matrix.',
  },

  // 38. CyberpunkHudTargetReticle (Icons / Tech)
  {
    id: 'cyberpunk-hud-target-reticle',
    name: 'Combat Flight Telemetry HUD Reticle',
    category: 'icons',
    technique: 'transform',
    description: 'High-density combat target acquisition HUD with segmented bearing rings, rotating pitch ladder, locking target brackets, and real-time telemetry.',
    tags: ['hud', 'cyberpunk', 'reticle', 'target', 'sci-fi', 'telemetry'],
    viewBox: '0 0 400 400',
    component: CyberpunkHudTargetReticle,
    controlsSchema: [
      { id: 'rotationSpeed', label: 'Bearing Dial Speed', type: 'number', min: 0.5, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'reticleColor', label: 'HUD Primary Cyan', type: 'color', default: '#22d3ee' },
      { id: 'warningColor', label: 'Target Lock Crimson', type: 'color', default: '#f43f5e' },
      { id: 'isTargetLocked', label: 'Target Lock Engaged', type: 'boolean', default: true },
    ],
    defaultControls: { rotationSpeed: 1.0, reticleColor: '#22d3ee', warningColor: '#f43f5e', isTargetLocked: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { CyberpunkHudTargetReticle } from './components/batch2/CyberpunkHudTargetReticle';\n\n<CyberpunkHudTargetReticle />`,
    a11yNote: 'Aerospace targeting reticle display.',
    perfNote: 'Dashed stroke offsets with neon drop shadow filter.',
  },

  // 39. CalligraphicFlourishBird (Typography / Line Art)
  {
    id: 'calligraphic-flourish-bird',
    name: 'Spencerian Penmanship Calligraphic Flourish',
    category: 'typography',
    technique: 'stroke-dash',
    description: '18th-century Spencerian off-hand penmanship calligraphy flourishing bird drawn with variable-width pen pressure strokes and gilded gold ink gradient.',
    tags: ['calligraphy', 'spencerian', 'penmanship', 'flourish', 'bird', 'gold-ink'],
    viewBox: '0 0 400 400',
    component: CalligraphicFlourishBird,
    controlsSchema: [
      { id: 'duration', label: 'Pen Stroke Duration (s)', type: 'number', min: 2, max: 10, step: 1, default: 5 },
      { id: 'inkColor', label: 'Gilded Amber Ink', type: 'color', default: '#f59e0b' },
      { id: 'isDrawing', label: 'Stroke-Dash Animation', type: 'boolean', default: true },
    ],
    defaultControls: { duration: 5, inkColor: '#f59e0b', isDrawing: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { CalligraphicFlourishBird } from './components/batch2/CalligraphicFlourishBird';\n\n<CalligraphicFlourishBird />`,
    a11yNote: 'Continuous single-stroke Spencerian off-hand drawing.',
    perfNote: 'Hardware accelerated CSS stroke-dashoffset keyframes.',
  },

  // 40. LiquidCrownSplashRebound (Morphing / Fluid)
  {
    id: 'liquid-crown-splash-rebound',
    name: 'Edgerton High-Speed Crown Splash & Rebound',
    category: 'morphing',
    technique: 'morph',
    description: 'High-speed droplet impact sequence: falling drop, Rayleigh crown splash with spires, Worthington vertical geyser rebound, and capillary ripples.',
    tags: ['splash', 'fluid', 'crown', 'edgerton', 'high-speed', 'droplet'],
    viewBox: '0 0 400 400',
    component: LiquidCrownSplashRebound,
    controlsSchema: [
      { id: 'speed', label: 'Slow-Motion Factor', type: 'number', min: 0.4, max: 2.0, step: 0.1, default: 1.0 },
      { id: 'liquidColor', label: 'Liquid Surface Color', type: 'color', default: '#06b6d4' },
      { id: 'glowColor', label: 'Sub-Surface Absorption', type: 'color', default: '#3b82f6' },
      { id: 'autoLoop', label: 'Continuous Strobe Loop', type: 'boolean', default: true },
    ],
    defaultControls: { speed: 1.0, liquidColor: '#06b6d4', glowColor: '#3b82f6', autoLoop: true },
    svgSource: `<svg viewBox="0 0 400 400">...</svg>`,
    reactUsage: `import { LiquidCrownSplashRebound } from './components/batch2/LiquidCrownSplashRebound';\n\n<LiquidCrownSplashRebound />`,
    a11yNote: 'Harold Edgerton high-speed stroboscopic splash sequence.',
    perfNote: 'Phased procedural path geometry interpolation.',
  },
];
