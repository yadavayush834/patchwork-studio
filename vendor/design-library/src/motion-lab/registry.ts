import type { MotionComponent } from './types';

// ASCII Components
import { AsciiSphere } from './components/ascii/AsciiSphere';
import { AsciiTorus } from './components/ascii/AsciiTorus';
import { AsciiTextDissolve } from './components/ascii/AsciiTextDissolve';
import { AsciiWaveInterference } from './components/ascii/AsciiWaveInterference';
import { AsciiMatrixRain } from './components/ascii/AsciiMatrixRain';
import { AsciiTerminalBoot } from './components/ascii/AsciiTerminalBoot';
import { AsciiTerrainScanner } from './components/ascii/AsciiTerrainScanner';

// Three.js Components
import { ParametricRibbon } from './components/three/ParametricRibbon';
import { KineticGyroscopicRings } from './components/three/KineticGyroscopicRings';
import { OrganicMorphBlob } from './components/three/OrganicMorphBlob';
import { GeometricPolyhedronCluster } from './components/three/GeometricPolyhedronCluster';
import { ArchitecturalDiorama } from './components/three/ArchitecturalDiorama';

// GLSL / Shader Components
import { LiquidMetalCanvas } from './components/shaders/LiquidMetalCanvas';
import { IridescentOilSlick } from './components/shaders/IridescentOilSlick';
import { VoronoiCellularMorph } from './components/shaders/VoronoiCellularMorph';
import { ChromaticAberrationImage } from './components/shaders/ChromaticAberrationImage';
import { GradientMeshFlow } from './components/shaders/GradientMeshFlow';

// Micro-Interactions
import { MagneticElasticButton } from './components/micro/MagneticElasticButton';
import { DirectionalHoverCard } from './components/micro/DirectionalHoverCard';
import { MorphingMenuToggle } from './components/micro/MorphingMenuToggle';
import { ScrambleDecodeText } from './components/micro/ScrambleDecodeText';
import { KineticTypeHeadline } from './components/micro/KineticTypeHeadline';
import { LiquidProgressIndicator } from './components/micro/LiquidProgressIndicator';

// Canvas & Physics
import { ParticleFlockSwarm } from './components/physics/ParticleFlockSwarm';
import { ElasticClothGrid } from './components/physics/ElasticClothGrid';
import { GravitationalOrbiters } from './components/physics/GravitationalOrbiters';
import { MagneticRepulsionDots } from './components/physics/MagneticRepulsionDots';

// Scroll & 3D Depth
import { CurtainSliceReveal } from './components/scroll/CurtainSliceReveal';
import { ParallaxDepthStack } from './components/scroll/ParallaxDepthStack';

// Decorative
import { GenerativeOrnamentalBorder } from './components/decorative/GenerativeOrnamentalBorder';

// Batch 2: Advanced Math, Physics & Quantum Motion
import { QuantumWaveCollapse } from './components/batch2/QuantumWaveCollapse';
import { LorenzAttractorChaos } from './components/batch2/LorenzAttractorChaos';
import { ChladniPlateResonance } from './components/batch2/ChladniPlateResonance';
import { HyperbolicPoincareDisk } from './components/batch2/HyperbolicPoincareDisk';
import { NeuralSynapticCortex } from './components/batch2/NeuralSynapticCortex';
import { MagneticFerrofluidSpikes } from './components/batch2/MagneticFerrofluidSpikes';
import { VoxelTopographyWaves } from './components/batch2/VoxelTopographyWaves';
import { KineticCrystalShatter } from './components/batch2/KineticCrystalShatter';
import { AsciiRaymarchTunnel } from './components/batch2/AsciiRaymarchTunnel';
import { FluidSmokeCursorDrift } from './components/batch2/FluidSmokeCursorDrift';

export const MOTION_COMPONENTS: MotionComponent[] = [
  // 1. AsciiSphere
  {
    id: 'ascii-sphere',
    name: '3D Raymarched ASCII Sphere',
    category: 'ascii',
    tech: 'ascii',
    description: 'Real-time raymarched mathematical sphere rasterized onto a dynamic ASCII character grid with cursor light tracking and rotational inertia.',
    tags: ['ascii', 'retro', 'terminal', 'raymarching', '3d'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: AsciiSphere,
    controlsSchema: [
      { id: 'speed', label: 'Rotation Speed', type: 'number', min: 0.1, max: 3, step: 0.1, default: 1 },
      { id: 'resolution', label: 'Resolution', type: 'number', min: 24, max: 72, step: 4, default: 48 },
      { id: 'lightIntensity', label: 'Light Intensity', type: 'number', min: 0.2, max: 2, step: 0.1, default: 1.2 },
      { id: 'interactive', label: 'Cursor Interaction', type: 'boolean', default: true },
      { id: 'color', label: 'Accent Color', type: 'color', default: '#38bdf8' },
    ],
    defaultControls: { speed: 1, resolution: 48, lightIntensity: 1.2, interactive: true, color: '#38bdf8' },
    codeSample: `<AsciiSphere speed={1} resolution={48} interactive={true} color="#38bdf8" />`,
    reactUsage: `import { AsciiSphere } from './components/ascii/AsciiSphere';\n\nexport default function HeroVisual() {\n  return <AsciiSphere resolution={48} color="#38bdf8" />;\n}`,
    dependencies: ['react', 'tailwindcss'],
    a11yNote: 'Decorative ASCII visualization; aria-hidden applied automatically.',
    perfNote: 'Pure CPU string buffer generator. Low impact on battery and GPU.',
  },

  // 2. AsciiTorus
  {
    id: 'ascii-torus',
    name: 'Mathematical ASCII Donut Torus',
    category: 'ascii',
    tech: 'ascii',
    description: 'Precision dual-axis rotation matrix donut with surface normal luminance calculations inspired by Donut.c.',
    tags: ['ascii', 'math', 'donut', 'geometry', 'rotation'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: AsciiTorus,
    controlsSchema: [
      { id: 'speedX', label: 'Horizontal Speed', type: 'number', min: 0.1, max: 3, step: 0.1, default: 1 },
      { id: 'speedY', label: 'Vertical Speed', type: 'number', min: 0.1, max: 3, step: 0.1, default: 1 },
      { id: 'interactive', label: 'Cursor Interaction', type: 'boolean', default: true },
      { id: 'color', label: 'Accent Color', type: 'color', default: '#34d399' },
    ],
    defaultControls: { speedX: 1, speedY: 1, interactive: true, color: '#34d399' },
    codeSample: `<AsciiTorus speedX={1} speedY={1} interactive={true} color="#34d399" />`,
    reactUsage: `import { AsciiTorus } from './components/ascii/AsciiTorus';\n\n<AsciiTorus color="#34d399" />`,
    dependencies: ['react'],
    a11yNote: 'Screen readers bypass ASCII pre tags via aria-hidden attribute.',
    perfNote: 'Mathematical projection into 40x80 character grid.',
  },

  // 3. AsciiTextDissolve
  {
    id: 'ascii-text-dissolve',
    name: 'Ascii Particle Text Dissolve',
    category: 'ascii',
    tech: 'canvas',
    description: 'Rasterized typography into an ASCII character particle grid that shatters into physics particles under cursor gravity with elastic spring restitution.',
    tags: ['ascii', 'particles', 'typography', 'physics', 'interactive'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: AsciiTextDissolve,
    controlsSchema: [
      { id: 'text', label: 'Banner Text', type: 'text', default: 'FUTURE' },
      { id: 'scatterRadius', label: 'Scatter Radius', type: 'number', min: 30, max: 150, step: 5, default: 75 },
      { id: 'color', label: 'Text Color', type: 'color', default: '#f43f5e' },
    ],
    defaultControls: {
      text: 'FUTURE',
      scatterRadius: 75,
      color: '#f43f5e',
    },
    codeSample: `<AsciiTextDissolve text="FUTURE" scatterRadius={75} color="#f43f5e" />`,
    reactUsage: `import { AsciiTextDissolve } from './components/ascii/AsciiTextDissolve';\n\n<AsciiTextDissolve text="MATRIX" color="#00ff66" />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Retains semantic text in aria-label for assistive devices.',
    perfNote: 'Spatial grid partitioning used for fast cursor hit testing.',
  },

  // 4. AsciiWaveInterference
  {
    id: 'ascii-wave-interference',
    name: 'Ascii Wave Ripple Interference',
    category: 'ascii',
    tech: 'ascii',
    description: '2D harmonic wave equation interference field with dual oscillating point sources and an interactive cursor ripple emitter.',
    tags: ['ascii', 'waves', 'physics', 'interference', 'procedural'],
    complexity: 'medium',
    framerateTarget: '50 FPS',
    component: AsciiWaveInterference,
    controlsSchema: [
      { id: 'frequency', label: 'Wave Frequency', type: 'number', min: 0.05, max: 0.4, step: 0.01, default: 0.18 },
      { id: 'speed', label: 'Propagation Speed', type: 'number', min: 0.2, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'color', label: 'Wave Color', type: 'color', default: '#a855f7' },
    ],
    defaultControls: {
      frequency: 0.18,
      speed: 1.0,
      color: '#a855f7',
    },
    codeSample: `<AsciiWaveInterference frequency={0.18} speed={1.0} color="#a855f7" />`,
    reactUsage: `import { AsciiWaveInterference } from './components/ascii/AsciiWaveInterference';\n\n<AsciiWaveInterference color="#a855f7" />`,
    dependencies: ['react'],
    a11yNote: 'Pure visual field calculation.',
    perfNote: 'Calculated per cell in requestAnimationFrame loop.',
  },

  // 5. AsciiMatrixRain
  {
    id: 'ascii-matrix-rain',
    name: 'Cyberpunk Matrix Rain',
    category: 'ascii',
    tech: 'canvas',
    description: 'Authentic cyberpunk digital rain streams with authentic Katakana glyphs, glowing velocity heads, and interactive mouse deflection.',
    tags: ['matrix', 'ascii', 'cyberpunk', 'terminal', 'retro'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: AsciiMatrixRain,
    controlsSchema: [
      { id: 'density', label: 'Column Density', type: 'number', min: 20, max: 80, step: 5, default: 45 },
      { id: 'speed', label: 'Fall Speed', type: 'number', min: 0.5, max: 3.0, step: 0.1, default: 1.2 },
      { id: 'rainColor', label: 'Stream Color', type: 'color', default: '#10b981' },
      { id: 'headColor', label: 'Head Glow Color', type: 'color', default: '#ffffff' },
    ],
    defaultControls: {
      density: 45,
      speed: 1.2,
      rainColor: '#10b981',
      headColor: '#ffffff',
    },
    codeSample: `<AsciiMatrixRain density={45} speed={1.2} rainColor="#10b981" />`,
    reactUsage: `import { AsciiMatrixRain } from './components/ascii/AsciiMatrixRain';\n\n<AsciiMatrixRain rainColor="#10b981" />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Can be paused or throttled for vestibular sensitivity.',
    perfNote: 'Canvas 2D context text rendering with alpha trail clearing.',
  },

  // 6. AsciiTerminalBoot
  {
    id: 'ascii-terminal-boot',
    name: 'Retro Terminal Boot Sequencer',
    category: 'ascii',
    tech: 'ascii',
    description: 'Authentic retro cyberpunk computer boot sequence with animated scanlines, kernel telemetry, and interactive command console.',
    tags: ['terminal', 'cli', 'retro', 'cyberpunk', 'interactive'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: AsciiTerminalBoot,
    controlsSchema: [
      { id: 'systemTitle', label: 'System Title', type: 'text', default: 'NEURAL-CORE OS v4.19' },
      { id: 'typingSpeed', label: 'Typing Speed (ms)', type: 'number', min: 10, max: 80, step: 5, default: 25 },
      { id: 'phosphorColor', label: 'Phosphor Color', type: 'color', default: '#22c55e' },
    ],
    defaultControls: {
      systemTitle: 'NEURAL-CORE OS v4.19',
      typingSpeed: 25,
      phosphorColor: '#22c55e',
    },
    codeSample: `<AsciiTerminalBoot systemTitle="NEURAL-CORE OS v4.19" phosphorColor="#22c55e" />`,
    reactUsage: `import { AsciiTerminalBoot } from './components/ascii/AsciiTerminalBoot';\n\n<AsciiTerminalBoot phosphorColor="#22c55e" />`,
    dependencies: ['react'],
    a11yNote: 'Accessible terminal log buffer with role="log".',
    perfNote: 'React state timers with low DOM recalculation.',
  },

  // 7. AsciiTerrainScanner
  {
    id: 'ascii-terrain-scanner',
    name: 'Ascii Radar Elevation Scanner',
    category: 'ascii',
    tech: 'ascii',
    description: 'Scrolling multi-octave wireframe elevation radar scanner rendered in monospace characters with cursor elevation probe.',
    tags: ['terrain', 'ascii', 'radar', 'wireframe', 'procedural'],
    complexity: 'light',
    framerateTarget: '50 FPS',
    component: AsciiTerrainScanner,
    controlsSchema: [
      { id: 'scanSpeed', label: 'Scan Speed', type: 'number', min: 0.2, max: 2.0, step: 0.1, default: 0.8 },
      { id: 'radarColor', label: 'Radar Color', type: 'color', default: '#06b6d4' },
    ],
    defaultControls: {
      scanSpeed: 0.8,
      radarColor: '#06b6d4',
    },
    codeSample: `<AsciiTerrainScanner scanSpeed={0.8} radarColor="#06b6d4" />`,
    reactUsage: `import { AsciiTerrainScanner } from './components/ascii/AsciiTerrainScanner';\n\n<AsciiTerrainScanner radarColor="#06b6d4" />`,
    dependencies: ['react'],
    a11yNote: 'Monospace pre block with role="img".',
    perfNote: 'Sinusoidal multi-frequency elevation map generation.',
  },

  // 8. ParametricRibbon (Three.js)
  {
    id: 'parametric-ribbon',
    name: 'Parametric Moebius Ribbon',
    category: 'three',
    tech: 'three',
    description: 'Procedural 3D Moebius ribbon sculpture with real-time vertex displacement, metallic normal highlights, and pointer orbit response.',
    tags: ['three.js', '3d', 'parametric', 'geometry', 'sculpture'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: ParametricRibbon,
    controlsSchema: [
      { id: 'ribbonColor', label: 'Ribbon Color', type: 'color', default: '#38bdf8' },
      { id: 'wireframe', label: 'Wireframe Mode', type: 'boolean', default: false },
      { id: 'twistCount', label: 'Ribbon Twists', type: 'number', min: 1, max: 5, step: 1, default: 2 },
      { id: 'rotationSpeed', label: 'Rotation Speed', type: 'number', min: 0.2, max: 3.0, step: 0.1, default: 1.0 },
    ],
    defaultControls: {
      ribbonColor: '#38bdf8',
      wireframe: false,
      twistCount: 2,
      rotationSpeed: 1.0,
    },
    codeSample: `<ParametricRibbon ribbonColor="#38bdf8" wireframe={false} twistCount={2} />`,
    reactUsage: `import { ParametricRibbon } from './components/three/ParametricRibbon';\n\n<ParametricRibbon ribbonColor="#38bdf8" />`,
    dependencies: ['three', 'react'],
    a11yNote: 'WebGL canvas with full geometry and context disposal on unmount.',
    perfNote: 'Custom buffer geometry updated efficiently in single animation frame.',
  },

  // 9. KineticGyroscopicRings (Three.js)
  {
    id: 'kinetic-gyroscopic-rings',
    name: 'Kinetic Gyroscope Rings',
    category: 'three',
    tech: 'three',
    description: 'Triple-axis concentric gyroscopic gimbal rings with metallic specular highlights, pulsing central core, and pointer inertia damping.',
    tags: ['three.js', '3d', 'gyroscope', 'physics', 'mechanical'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: KineticGyroscopicRings,
    controlsSchema: [
      { id: 'ringColor', label: 'Rings Color', type: 'color', default: '#06b6d4' },
      { id: 'coreColor', label: 'Core Star Color', type: 'color', default: '#f59e0b' },
      { id: 'speed', label: 'Rotation Velocity', type: 'number', min: 0.2, max: 3.0, step: 0.1, default: 1.2 },
    ],
    defaultControls: {
      ringColor: '#06b6d4',
      coreColor: '#f59e0b',
      speed: 1.2,
    },
    codeSample: `<KineticGyroscopicRings ringColor="#06b6d4" coreColor="#f59e0b" speed={1.2} />`,
    reactUsage: `import { KineticGyroscopicRings } from './components/three/KineticGyroscopicRings';\n\n<KineticGyroscopicRings ringColor="#06b6d4" />`,
    dependencies: ['three', 'react'],
    a11yNote: 'Canvas with WebGL fallback and responsive resize listeners.',
    perfNote: 'MeshStandardMaterial with punctual directional and point lights.',
  },

  // 10. OrganicMorphBlob (Three.js)
  {
    id: 'organic-morph-blob',
    name: 'Harmonic Noise Morph Blob',
    category: 'three',
    tech: 'three',
    description: 'Subdivided icosahedron sculpture morphing dynamically via multi-octave harmonic noise vertex displacement between crystalline and fluid states.',
    tags: ['three.js', '3d', 'organic', 'noise', 'morphing'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: OrganicMorphBlob,
    controlsSchema: [
      { id: 'blobColor', label: 'Substance Color', type: 'color', default: '#ec4899' },
      { id: 'wireframe', label: 'Wireframe Lattice', type: 'boolean', default: false },
      { id: 'noiseIntensity', label: 'Noise Amplitude', type: 'number', min: 0.1, max: 1.5, step: 0.05, default: 0.45 },
      { id: 'morphSpeed', label: 'Morph Speed', type: 'number', min: 0.2, max: 3.0, step: 0.1, default: 1.0 },
    ],
    defaultControls: {
      blobColor: '#ec4899',
      wireframe: false,
      noiseIntensity: 0.45,
      morphSpeed: 1.0,
    },
    codeSample: `<OrganicMorphBlob blobColor="#ec4899" noiseIntensity={0.45} />`,
    reactUsage: `import { OrganicMorphBlob } from './components/three/OrganicMorphBlob';\n\n<OrganicMorphBlob blobColor="#ec4899" />`,
    dependencies: ['three', 'react'],
    a11yNote: 'Hardware accelerated 3D canvas with pointer tracking.',
    perfNote: 'Position attribute modified in-place and re-normalised per frame.',
  },

  // 11. GeometricPolyhedronCluster (Three.js)
  {
    id: 'geometric-polyhedron-cluster',
    name: 'Platonic Polyhedron Network',
    category: 'three',
    tech: 'three',
    description: 'Cluster of networked Platonic solids (icosahedrons, octahedrons, tetrahedrons) orbiting with dynamic connector line segments and radial breathing.',
    tags: ['three.js', '3d', 'platonic', 'cluster', 'network'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: GeometricPolyhedronCluster,
    controlsSchema: [
      { id: 'clusterColor', label: 'Polyhedra Color', type: 'color', default: '#8b5cf6' },
      { id: 'lineColor', label: 'Synapse Lines Color', type: 'color', default: '#38bdf8' },
      { id: 'expansionSpeed', label: 'Breathing Rate', type: 'number', min: 0.2, max: 2.5, step: 0.1, default: 1.0 },
    ],
    defaultControls: {
      clusterColor: '#8b5cf6',
      lineColor: '#38bdf8',
      expansionSpeed: 1.0,
    },
    codeSample: `<GeometricPolyhedronCluster clusterColor="#8b5cf6" lineColor="#38bdf8" />`,
    reactUsage: `import { GeometricPolyhedronCluster } from './components/three/GeometricPolyhedronCluster';\n\n<GeometricPolyhedronCluster />`,
    dependencies: ['three', 'react'],
    a11yNote: 'Interactive camera panning with cursor support.',
    perfNote: 'LineSegments with buffer geometry line positions.',
  },

  // 12. ArchitecturalDiorama (Three.js)
  {
    id: 'architectural-diorama',
    name: 'Floating Monolith Diorama',
    category: 'three',
    tech: 'three',
    description: 'Isometric minimalist architectural diorama with PCF soft shadows, floating levitating monoliths, beacon pulse, and pointer tilt.',
    tags: ['three.js', '3d', 'isometric', 'architectural', 'diorama'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: ArchitecturalDiorama,
    controlsSchema: [
      { id: 'accentColor', label: 'Beacon Pulse Color', type: 'color', default: '#22d3ee' },
      { id: 'shadowIntensity', label: 'Shadow Softness', type: 'number', min: 0.2, max: 1.0, step: 0.1, default: 0.8 },
      { id: 'levitationSpeed', label: 'Levitation Speed', type: 'number', min: 0.2, max: 2.5, step: 0.1, default: 1.0 },
    ],
    defaultControls: {
      accentColor: '#22d3ee',
      shadowIntensity: 0.8,
      levitationSpeed: 1.0,
    },
    codeSample: `<ArchitecturalDiorama accentColor="#22d3ee" levitationSpeed={1.0} />`,
    reactUsage: `import { ArchitecturalDiorama } from './components/three/ArchitecturalDiorama';\n\n<ArchitecturalDiorama accentColor="#22d3ee" />`,
    dependencies: ['three', 'react'],
    a11yNote: 'PCFSoftShadowMap rendering on three.js WebGLRenderer.',
    perfNote: 'Optimized low-poly geometric meshes for extreme performance.',
  },

  // 13. LiquidMetalCanvas (GLSL)
  {
    id: 'liquid-metal-canvas',
    name: 'WebGL Liquid Mercury Chrome',
    category: 'shaders',
    tech: 'glsl',
    description: 'Liquid mercury chrome surface simulated via fractional Brownian motion (fBm) domain warping and interactive cursor ripple distortion.',
    tags: ['glsl', 'shaders', 'webgl', 'liquid', 'chrome'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: LiquidMetalCanvas,
    controlsSchema: [
      { id: 'flowSpeed', label: 'Fluid Flow Speed', type: 'number', min: 0.2, max: 3.0, step: 0.1, default: 1.0 },
      { id: 'viscosity', label: 'Viscosity Factor', type: 'number', min: 0.5, max: 3.0, step: 0.1, default: 1.2 },
      { id: 'tintColor', label: 'Reflective Tint', type: 'color', default: '#38bdf8' },
    ],
    defaultControls: {
      flowSpeed: 1.0,
      viscosity: 1.2,
      tintColor: '#38bdf8',
    },
    codeSample: `<LiquidMetalCanvas flowSpeed={1.0} viscosity={1.2} tintColor="#38bdf8" />`,
    reactUsage: `import { LiquidMetalCanvas } from './components/shaders/LiquidMetalCanvas';\n\n<LiquidMetalCanvas tintColor="#38bdf8" />`,
    dependencies: ['webgl', 'react'],
    a11yNote: 'Hardware accelerated full-quad fragment shader.',
    perfNote: 'Compiled fragment program with GPU float uniform uploads.',
  },

  // 14. IridescentOilSlick (GLSL)
  {
    id: 'iridescent-oil-slick',
    name: 'Iridescent Thin-Film Optical Slick',
    category: 'shaders',
    tech: 'glsl',
    description: 'Thin-film optical wave interference shader reproducing rainbow spectral iridescence with fluid velocity swirls.',
    tags: ['glsl', 'shaders', 'iridescent', 'optics', 'swirl'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: IridescentOilSlick,
    controlsSchema: [
      { id: 'swirlSpeed', label: 'Swirl Velocity', type: 'number', min: 0.2, max: 3.0, step: 0.1, default: 1.0 },
      { id: 'colorVibrancy', label: 'Color Saturation', type: 'number', min: 0.5, max: 2.0, step: 0.1, default: 1.2 },
    ],
    defaultControls: {
      swirlSpeed: 1.0,
      colorVibrancy: 1.2,
    },
    codeSample: `<IridescentOilSlick swirlSpeed={1.0} colorVibrancy={1.2} />`,
    reactUsage: `import { IridescentOilSlick } from './components/shaders/IridescentOilSlick';\n\n<IridescentOilSlick />`,
    dependencies: ['webgl', 'react'],
    a11yNote: 'Full screen quad WebGL shader with smooth animation.',
    perfNote: 'Single draw call rendering direct to canvas element.',
  },

  // 15. VoronoiCellularMorph (GLSL)
  {
    id: 'voronoi-cellular-morph',
    name: 'Animated Voronoi Bio-Mosaic',
    category: 'shaders',
    tech: 'glsl',
    description: 'Dynamic Voronoi cellular automata diagram with pulsating glowing boundaries, Euclidean distance metrics, and pointer cell attraction.',
    tags: ['voronoi', 'shaders', 'cellular', 'procedural', 'mosaic'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: VoronoiCellularMorph,
    controlsSchema: [
      { id: 'cellScale', label: 'Cell Scale Density', type: 'number', min: 2.0, max: 12.0, step: 0.5, default: 6.0 },
      { id: 'morphSpeed', label: 'Morph Velocity', type: 'number', min: 0.2, max: 3.0, step: 0.1, default: 1.0 },
      { id: 'glowColor', label: 'Border Luminescence', type: 'color', default: '#06b6d4' },
    ],
    defaultControls: {
      cellScale: 6.0,
      morphSpeed: 1.0,
      glowColor: '#06b6d4',
    },
    codeSample: `<VoronoiCellularMorph cellScale={6.0} morphSpeed={1.0} glowColor="#06b6d4" />`,
    reactUsage: `import { VoronoiCellularMorph } from './components/shaders/VoronoiCellularMorph';\n\n<VoronoiCellularMorph glowColor="#06b6d4" />`,
    dependencies: ['webgl', 'react'],
    a11yNote: 'Glsl fragment shader with auto-resizing canvas viewport.',
    perfNote: 'Fast 3x3 local grid neighbor evaluation on the GPU.',
  },

  // 16. ChromaticAberrationImage (Shaders)
  {
    id: 'chromatic-aberration-image',
    name: 'Chromatic Glitch & RGB Split',
    category: 'shaders',
    tech: 'canvas',
    description: 'Color channel RGB spatial displacement with horizontal scanlines, velocity glitch slices, and cursor dispersion lenses.',
    tags: ['glitch', 'chromatic', 'rgb-split', 'cyberpunk', 'canvas'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: ChromaticAberrationImage,
    controlsSchema: [
      { id: 'offsetAmount', label: 'Displacement Distance', type: 'number', min: 2, max: 30, step: 1, default: 14 },
      { id: 'showScanlines', label: 'CRT Scanlines', type: 'boolean', default: true },
      { id: 'glitchBurst', label: 'Random Glitch Slices', type: 'boolean', default: true },
    ],
    defaultControls: {
      offsetAmount: 14,
      showScanlines: true,
      glitchBurst: true,
    },
    codeSample: `<ChromaticAberrationImage offsetAmount={14} showScanlines={true} />`,
    reactUsage: `import { ChromaticAberrationImage } from './components/shaders/ChromaticAberrationImage';\n\n<ChromaticAberrationImage offsetAmount={14} />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Interactive canvas filter effect.',
    perfNote: 'Pixel channel shifting using globalCompositeOperation.',
  },

  // 17. GradientMeshFlow (Shaders)
  {
    id: 'gradient-mesh-flow',
    name: 'Luminescent Fluid Gradient Mesh',
    category: 'shaders',
    tech: 'canvas',
    description: 'Multi-point fluid gradient color mesh with additive screen blending, sinusoidal drift physics, and mouse gravitational pull.',
    tags: ['gradient', 'mesh', 'fluid', 'ambient', 'lighting'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: GradientMeshFlow,
    controlsSchema: [
      { id: 'flowSpeed', label: 'Flow Velocity', type: 'number', min: 0.2, max: 3.0, step: 0.1, default: 1.0 },
      { id: 'glowIntensity', label: 'Glow Intensity', type: 'number', min: 0.2, max: 1.0, step: 0.05, default: 0.65 },
    ],
    defaultControls: {
      flowSpeed: 1.0,
      glowIntensity: 0.65,
    },
    codeSample: `<GradientMeshFlow flowSpeed={1.0} glowIntensity={0.65} />`,
    reactUsage: `import { GradientMeshFlow } from './components/shaders/GradientMeshFlow';\n\n<GradientMeshFlow flowSpeed={1.0} />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Smooth background ambient light canvas.',
    perfNote: 'Optimized radial gradient blend cache.',
  },

  // 18. MagneticElasticButton (Micro)
  {
    id: 'magnetic-elastic-button',
    name: 'Magnetic Elastic Action Button',
    category: 'micro',
    tech: 'css',
    description: 'Hyper-responsive call-to-action button with cursor magnetic attraction vector, spring damping, internal light beacon, and shockwave ripple.',
    tags: ['button', 'magnetic', 'spring', 'micro-interaction', 'ui'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: MagneticElasticButton,
    controlsSchema: [
      { id: 'label', label: 'Button Label', type: 'text', default: 'INITIALIZE SYSTEM' },
      { id: 'magneticPull', label: 'Magnetic Attraction Strength', type: 'number', min: 0.1, max: 0.8, step: 0.05, default: 0.4 },
      { id: 'accentColor', label: 'Accent Glow Color', type: 'color', default: '#38bdf8' },
    ],
    defaultControls: {
      label: 'INITIALIZE SYSTEM',
      magneticPull: 0.4,
      accentColor: '#38bdf8',
    },
    codeSample: `<MagneticElasticButton label="INITIALIZE SYSTEM" magneticPull={0.4} accentColor="#38bdf8" />`,
    reactUsage: `import { MagneticElasticButton } from './components/micro/MagneticElasticButton';\n\n<MagneticElasticButton label="EXPLORE DEMO" />`,
    dependencies: ['react', 'tailwindcss'],
    a11yNote: 'Accessible HTML button with keyboard focus and active states.',
    perfNote: 'Pure transform CSS transitions on client pointer events.',
  },

  // 19. DirectionalHoverCard (Micro)
  {
    id: 'directional-hover-card',
    name: '3D Directional Specular Tilt Card',
    category: 'micro',
    tech: 'css',
    description: '3D perspective card calculating cursor entry coordinates to tilt organically with dynamic specular light glare reflection.',
    tags: ['card', 'tilt', 'specular', 'perspective', 'ui'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: DirectionalHoverCard,
    controlsSchema: [
      { id: 'tiltMax', label: 'Max Tilt Angle (deg)', type: 'number', min: 5, max: 35, step: 1, default: 16 },
      { id: 'glareOpacity', label: 'Specular Glare Opacity', type: 'number', min: 0.1, max: 0.6, step: 0.05, default: 0.35 },
    ],
    defaultControls: {
      tiltMax: 16,
      glareOpacity: 0.35,
    },
    codeSample: `<DirectionalHoverCard tiltMax={16} glareOpacity={0.35} />`,
    reactUsage: `import { DirectionalHoverCard } from './components/micro/DirectionalHoverCard';\n\n<DirectionalHoverCard tiltMax={16} />`,
    dependencies: ['react', 'tailwindcss'],
    a11yNote: 'Full keyboard focus ring and accessible content cards.',
    perfNote: 'Uses CSS perspective and transform3d with will-change.',
  },

  // 20. MorphingMenuToggle (Micro)
  {
    id: 'morphing-menu-toggle',
    name: 'Organic Morphing Menu Icon',
    category: 'micro',
    tech: 'svg',
    description: 'Organic SVG hamburger-to-cross icon with cubic Bezier morphing, magnetic snap physics, and synthetic Web Audio click feedback.',
    tags: ['svg', 'morphing', 'toggle', 'menu', 'micro-interaction'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: MorphingMenuToggle,
    controlsSchema: [
      { id: 'size', label: 'Button Size', type: 'number', min: 48, max: 96, step: 4, default: 64 },
      { id: 'strokeColor', label: 'Rest Stroke Color', type: 'color', default: '#e2e8f0' },
      { id: 'activeColor', label: 'Active Accent Color', type: 'color', default: '#38bdf8' },
      { id: 'strokeWidth', label: 'Line Stroke Width', type: 'number', min: 2, max: 6, step: 0.5, default: 3 },
      { id: 'soundFeedback', label: 'Synth Audio Feedback', type: 'boolean', default: true },
    ],
    defaultControls: {
      size: 64,
      strokeColor: '#e2e8f0',
      activeColor: '#38bdf8',
      strokeWidth: 3,
      soundFeedback: true,
    },
    codeSample: `<MorphingMenuToggle size={64} activeColor="#38bdf8" soundFeedback={true} />`,
    reactUsage: `import { MorphingMenuToggle } from './components/micro/MorphingMenuToggle';\n\n<MorphingMenuToggle activeColor="#38bdf8" />`,
    dependencies: ['react', 'svg'],
    a11yNote: 'Full aria-expanded and aria-label accessibility attributes.',
    perfNote: 'Hardware accelerated SVG transforms.',
  },

  // 21. ScrambleDecodeText (Micro)
  {
    id: 'scramble-decode-text',
    name: 'Cryptographic Scramble Decoder',
    category: 'micro',
    tech: 'css',
    description: 'Hacker cryptographic text decryption cycler with random glyph resolution, customizable charset, and interactive hover trigger.',
    tags: ['text', 'scramble', 'decoder', 'cyberpunk', 'typography'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: ScrambleDecodeText,
    controlsSchema: [
      { id: 'text', label: 'Target Text', type: 'text', default: 'QUANTUM INTELLIGENCE CORE' },
      { id: 'speed', label: 'Cycle Interval (ms)', type: 'number', min: 20, max: 80, step: 5, default: 40 },
      { id: 'accentColor', label: 'Accent Color', type: 'color', default: '#22d3ee' },
      { id: 'charset', label: 'Character Set', type: 'select', options: ['cyber', 'katakana', 'alphanumeric', 'binary'], default: 'cyber' },
    ],
    defaultControls: {
      text: 'QUANTUM INTELLIGENCE CORE',
      speed: 40,
      accentColor: '#22d3ee',
      charset: 'cyber',
    },
    codeSample: `<ScrambleDecodeText text="QUANTUM INTELLIGENCE CORE" charset="cyber" accentColor="#22d3ee" />`,
    reactUsage: `import { ScrambleDecodeText } from './components/micro/ScrambleDecodeText';\n\n<ScrambleDecodeText text="QUANTUM CORE" />`,
    dependencies: ['react'],
    a11yNote: 'Decoded text remains readable; screen readers read underlying string.',
    perfNote: 'Efficient string mapping without canvas overhead.',
  },

  // 22. KineticTypeHeadline (Micro)
  {
    id: 'kinetic-type-headline',
    name: 'Spatial Kinetic Typography',
    category: 'micro',
    tech: 'css',
    description: 'Split-word kinetic typography with staggered physical overshoot, letter tracking expansion, and character wave physics.',
    tags: ['typography', 'kinetic', 'headline', 'wave', 'overshoot'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: KineticTypeHeadline,
    controlsSchema: [
      { id: 'headline', label: 'Headline Text', type: 'text', default: 'EXPLORE THE UNSEEN' },
      { id: 'subheading', label: 'Subheading', type: 'text', default: 'Dynamic spatial typography with staggered kinetic inertia' },
      { id: 'accentColor', label: 'Accent Color', type: 'color', default: '#f59e0b' },
      { id: 'elasticity', label: 'Scale Elasticity', type: 'number', min: 1.0, max: 1.6, step: 0.05, default: 1.2 },
    ],
    defaultControls: {
      headline: 'EXPLORE THE UNSEEN',
      subheading: 'Dynamic spatial typography with staggered kinetic inertia',
      accentColor: '#f59e0b',
      elasticity: 1.2,
    },
    codeSample: `<KineticTypeHeadline headline="EXPLORE THE UNSEEN" accentColor="#f59e0b" />`,
    reactUsage: `import { KineticTypeHeadline } from './components/micro/KineticTypeHeadline';\n\n<KineticTypeHeadline headline="EXPLORE THE UNSEEN" />`,
    dependencies: ['react'],
    a11yNote: 'Accessible headline text with screen-reader friendly markup.',
    perfNote: 'CSS cubic-bezier transforms with zero layout recalculation.',
  },

  // 23. LiquidProgressIndicator (Micro)
  {
    id: 'liquid-progress-indicator',
    name: 'Hydrodynamic Liquid Progress Gauge',
    category: 'micro',
    tech: 'canvas',
    description: 'Fluid-filled progress chamber with sloshing wave physics, surface tension crests, floating micro-bubbles, and pointer tilt sloshing.',
    tags: ['progress', 'liquid', 'slosh', 'gauge', 'hydrodynamic'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: LiquidProgressIndicator,
    controlsSchema: [
      { id: 'progress', label: 'Fill Level (%)', type: 'number', min: 0, max: 100, step: 1, default: 68 },
      { id: 'waveSpeed', label: 'Wave Slosh Speed', type: 'number', min: 0.5, max: 3.0, step: 0.1, default: 1.5 },
      { id: 'fluidColor', label: 'Fluid Color', type: 'color', default: '#06b6d4' },
      { id: 'secondaryColor', label: 'Base Fluid Color', type: 'color', default: '#3b82f6' },
    ],
    defaultControls: {
      progress: 68,
      waveSpeed: 1.5,
      fluidColor: '#06b6d4',
      secondaryColor: '#3b82f6',
    },
    codeSample: `<LiquidProgressIndicator progress={68} fluidColor="#06b6d4" waveSpeed={1.5} />`,
    reactUsage: `import { LiquidProgressIndicator } from './components/micro/LiquidProgressIndicator';\n\n<LiquidProgressIndicator progress={68} />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Accessible gauge attributes with aria-valuenow.',
    perfNote: 'Optimized sinusoidal wave vertex curve.',
  },

  // 24. ParticleFlockSwarm (Physics)
  {
    id: 'particle-flock-swarm',
    name: 'Boids Autonomous Flocking Swarm',
    category: 'physics',
    tech: 'canvas',
    description: 'Craig Reynolds autonomous boids flocking simulation governed by separation, alignment, and cohesion rules with predator/attractor cursor forces.',
    tags: ['boids', 'flocking', 'swarm', 'physics', 'autonomous'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: ParticleFlockSwarm,
    controlsSchema: [
      { id: 'boidCount', label: 'Flock Size', type: 'number', min: 30, max: 150, step: 10, default: 90 },
      { id: 'maxSpeed', label: 'Flight Speed', type: 'number', min: 1.5, max: 6.0, step: 0.5, default: 3.5 },
      { id: 'flockColor', label: 'Swarm Color', type: 'color', default: '#38bdf8' },
      { id: 'mouseMode', label: 'Cursor Mode', type: 'select', options: ['repel', 'attract', 'none'], default: 'repel' },
    ],
    defaultControls: {
      boidCount: 90,
      maxSpeed: 3.5,
      flockColor: '#38bdf8',
      mouseMode: 'repel',
    },
    codeSample: `<ParticleFlockSwarm boidCount={90} maxSpeed={3.5} flockColor="#38bdf8" />`,
    reactUsage: `import { ParticleFlockSwarm } from './components/physics/ParticleFlockSwarm';\n\n<ParticleFlockSwarm boidCount={90} />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Decorative canvas particle system; aria-hidden.',
    perfNote: 'O(N^2) pairwise interaction tuned for up to 150 particles at 60 FPS.',
  },

  // 25. ElasticClothGrid (Physics)
  {
    id: 'elastic-cloth-grid',
    name: 'Verlet Elastic Cloth Mesh',
    category: 'physics',
    tech: 'canvas',
    description: 'Real-time Verlet numerical integration spring-mass cloth mesh that can be dragged, pulled, pinned, and rippled with wind physics.',
    tags: ['cloth', 'verlet', 'physics', 'elasticity', 'interactive'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: ElasticClothGrid,
    controlsSchema: [
      { id: 'cols', label: 'Grid Columns', type: 'number', min: 14, max: 32, step: 2, default: 24 },
      { id: 'rows', label: 'Grid Rows', type: 'number', min: 10, max: 24, step: 2, default: 18 },
      { id: 'elasticity', label: 'Stiffness Iterations', type: 'number', min: 2, max: 8, step: 1, default: 4 },
      { id: 'clothColor', label: 'Thread Color', type: 'color', default: '#06b6d4' },
    ],
    defaultControls: {
      cols: 24,
      rows: 18,
      elasticity: 4,
      clothColor: '#06b6d4',
    },
    codeSample: `<ElasticClothGrid cols={24} rows={18} clothColor="#06b6d4" />`,
    reactUsage: `import { ElasticClothGrid } from './components/physics/ElasticClothGrid';\n\n<ElasticClothGrid clothColor="#06b6d4" />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Interactive physics canvas with pointer drag feedback.',
    perfNote: 'Verlet relaxation constraint solver.',
  },

  // 26. GravitationalOrbiters (Physics)
  {
    id: 'gravitational-orbiters',
    name: 'N-Body Celestial Orbital Gravity',
    category: 'physics',
    tech: 'canvas',
    description: 'N-body gravitational orbital mechanics sandbox with primary solar well, decaying orbital trails, velocity vectors, and click star spawning.',
    tags: ['gravity', 'orbit', 'n-body', 'space', 'physics'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: GravitationalOrbiters,
    controlsSchema: [
      { id: 'bodyCount', label: 'Planetary Bodies', type: 'number', min: 6, max: 30, step: 2, default: 16 },
      { id: 'gravitationalConstant', label: 'Gravity Constant G', type: 'number', min: 0.2, max: 2.0, step: 0.1, default: 0.8 },
      { id: 'sunMass', label: 'Central Solar Mass', type: 'number', min: 1500, max: 6000, step: 500, default: 3500 },
      { id: 'showTrails', label: 'Orbital Paths', type: 'boolean', default: true },
    ],
    defaultControls: {
      bodyCount: 16,
      gravitationalConstant: 0.8,
      sunMass: 3500,
      showTrails: true,
    },
    codeSample: `<GravitationalOrbiters bodyCount={16} gravitationalConstant={0.8} />`,
    reactUsage: `import { GravitationalOrbiters } from './components/physics/GravitationalOrbiters';\n\n<GravitationalOrbiters bodyCount={16} />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Visual cosmic sandbox; decorative canvas.',
    perfNote: 'Newtonian gravitational pairwise calculation.',
  },

  // 27. MagneticRepulsionDots (Physics)
  {
    id: 'magnetic-repulsion-dots',
    name: 'Magnetic Elastic Dot Matrix',
    category: 'physics',
    tech: 'canvas',
    description: 'Dense geometric matrix of circular units magnetically repelling, distorting, and connecting via tensile web strands under cursor proximity.',
    tags: ['matrix', 'dots', 'magnetic', 'springs', 'warp'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: MagneticRepulsionDots,
    controlsSchema: [
      { id: 'gridSpacing', label: 'Grid Spacing', type: 'number', min: 18, max: 40, step: 2, default: 26 },
      { id: 'repulsionRadius', label: 'Repulsion Radius', type: 'number', min: 60, max: 200, step: 10, default: 130 },
      { id: 'repulsionForce', label: 'Deflection Strength', type: 'number', min: 20, max: 80, step: 5, default: 45 },
      { id: 'activeColor', label: 'Active Web Color', type: 'color', default: '#38bdf8' },
    ],
    defaultControls: {
      gridSpacing: 26,
      repulsionRadius: 130,
      repulsionForce: 45,
      activeColor: '#38bdf8',
    },
    codeSample: `<MagneticRepulsionDots gridSpacing={26} repulsionRadius={130} activeColor="#38bdf8" />`,
    reactUsage: `import { MagneticRepulsionDots } from './components/physics/MagneticRepulsionDots';\n\n<MagneticRepulsionDots activeColor="#38bdf8" />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Interactive canvas background matrix.',
    perfNote: 'Spring-damped node velocity calculation.',
  },

  // 28. CurtainSliceReveal (Scroll)
  {
    id: 'curtain-slice-reveal',
    name: 'Staggered Slice Curtain Transition',
    category: 'scroll',
    tech: 'css',
    description: 'Multi-layer staggered slice curtain transition revealing underlying architectural media with independent parallax segment displacement.',
    tags: ['curtain', 'slice', 'reveal', 'transition', 'scroll'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: CurtainSliceReveal,
    controlsSchema: [
      { id: 'sliceCount', label: 'Slice Count', type: 'number', min: 4, max: 16, step: 2, default: 8 },
      { id: 'staggerDelay', label: 'Stagger Delay (ms)', type: 'number', min: 20, max: 100, step: 10, default: 40 },
      { id: 'orientation', label: 'Orientation', type: 'select', options: ['vertical', 'horizontal'], default: 'vertical' },
    ],
    defaultControls: {
      sliceCount: 8,
      staggerDelay: 40,
      orientation: 'vertical',
    },
    codeSample: `<CurtainSliceReveal sliceCount={8} staggerDelay={40} orientation="vertical" />`,
    reactUsage: `import { CurtainSliceReveal } from './components/scroll/CurtainSliceReveal';\n\n<CurtainSliceReveal sliceCount={8} />`,
    dependencies: ['react', 'tailwindcss'],
    a11yNote: 'Accessible revealing element with toggle button controls.',
    perfNote: 'GPU accelerated CSS cubic-bezier translate transitions.',
  },

  // 29. ParallaxDepthStack (Scroll)
  {
    id: 'parallax-depth-stack',
    name: 'Multi-Plane 3D Parallax Stack',
    category: 'scroll',
    tech: 'css',
    description: 'Multi-plane spatial depth stack with focal plane shifting, 3D mouse perspective gyro tracking, and depth-of-field blur on non-focused layers.',
    tags: ['parallax', '3d', 'depth-of-field', 'focal', 'stack'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: ParallaxDepthStack,
    controlsSchema: [
      { id: 'intensity', label: 'Tilt Intensity (deg)', type: 'number', min: 10, max: 45, step: 2, default: 28 },
    ],
    defaultControls: {
      intensity: 28,
    },
    codeSample: `<ParallaxDepthStack intensity={28} />`,
    reactUsage: `import { ParallaxDepthStack } from './components/scroll/ParallaxDepthStack';\n\n<ParallaxDepthStack intensity={28} />`,
    dependencies: ['react', 'tailwindcss'],
    a11yNote: 'Interactive card layers accessible via click or keyboard tab.',
    perfNote: 'CSS preserve-3d translateZ hardware layers.',
  },

  // 30. GenerativeOrnamentalBorder (Decorative)
  {
    id: 'generative-ornamental-border',
    name: 'Procedural Sacred Ornamental Border',
    category: 'decorative',
    tech: 'svg',
    description: 'Mathematical SVG geometric frame with animated stroke dashoffset pulses, ornate corner rosettes, and interchangeable stylistic motifs.',
    tags: ['svg', 'ornamental', 'border', 'sacred-geometry', 'frame'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: GenerativeOrnamentalBorder,
    controlsSchema: [
      { id: 'primaryColor', label: 'Filigree Color', type: 'color', default: '#f59e0b' },
      { id: 'strokeWidth', label: 'Stroke Line Width', type: 'number', min: 1, max: 4, step: 0.5, default: 1.5 },
      { id: 'animated', label: 'Animated Perimeter', type: 'boolean', default: true },
      { id: 'theme', label: 'Decorative Theme', type: 'select', options: ['sacred', 'cyber', 'art-deco', 'minimal'], default: 'sacred' },
    ],
    defaultControls: {
      primaryColor: '#f59e0b',
      strokeWidth: 1.5,
      animated: true,
      theme: 'sacred',
    },
    codeSample: `<GenerativeOrnamentalBorder primaryColor="#f59e0b" theme="sacred" strokeWidth={1.5} />`,
    reactUsage: `import { GenerativeOrnamentalBorder } from './components/decorative/GenerativeOrnamentalBorder';\n\n<GenerativeOrnamentalBorder primaryColor="#f59e0b" />`,
    dependencies: ['react', 'svg'],
    a11yNote: 'Non-interfering decorative SVG container around children.',
    perfNote: 'Resolution-independent SVG vector rendering.',
  },

  // 31. QuantumWaveCollapse (Physics / Quantum)
  {
    id: 'quantum-wave-collapse',
    name: 'Quantum Wave Function Collapse',
    category: 'physics',
    tech: 'canvas',
    description: 'Complex probability amplitude wavepacket tunnel dynamics through a potential barrier with real-time measurement collapse on pointer click.',
    tags: ['quantum', 'schrodinger', 'wavefunction', 'physics', 'tunneling'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: QuantumWaveCollapse,
    controlsSchema: [
      { id: 'velocity', label: 'Group Velocity', type: 'number', min: 0.5, max: 2.5, step: 0.1, default: 1.2 },
      { id: 'barrierHeight', label: 'Barrier Height V0', type: 'number', min: 0.2, max: 1.0, step: 0.05, default: 0.65 },
      { id: 'particleColor', label: 'Probability Density Color', type: 'color', default: '#00f0ff' },
      { id: 'barrierColor', label: 'Barrier Color', type: 'color', default: '#ff0055' },
      { id: 'glowIntensity', label: 'Luminescence Glow', type: 'number', min: 0.3, max: 1.0, step: 0.05, default: 0.8 },
    ],
    defaultControls: {
      velocity: 1.2,
      barrierHeight: 0.65,
      particleColor: '#00f0ff',
      barrierColor: '#ff0055',
      glowIntensity: 0.8,
    },
    codeSample: `<QuantumWaveCollapse velocity={1.2} barrierHeight={0.65} particleColor="#00f0ff" />`,
    reactUsage: `import { QuantumWaveCollapse } from './components/batch2/QuantumWaveCollapse';\n\n<QuantumWaveCollapse />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Interactive quantum simulation with high-contrast color scheme.',
    perfNote: 'Double-buffered 60 FPS Canvas rendering.',
  },

  // 32. LorenzAttractorChaos (Physics / Chaos)
  {
    id: 'lorenz-attractor-chaos',
    name: '3D Lorenz Strange Attractor',
    category: 'physics',
    tech: 'canvas',
    description: 'Deterministic chaos differential equations integrated in 3D space with continuous orbit rotation, chromatic trail, and drag tilt.',
    tags: ['chaos', 'lorenz', 'attractor', '3d', 'physics', 'differential-equations'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: LorenzAttractorChaos,
    controlsSchema: [
      { id: 'speed', label: 'Integration Speed', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'sigma', label: 'Prandtl Number (σ)', type: 'number', min: 5, max: 20, step: 1, default: 10 },
      { id: 'rho', label: 'Rayleigh Number (ρ)', type: 'number', min: 14, max: 40, step: 1, default: 28 },
      { id: 'trailLength', label: 'Trail Length', type: 'number', min: 800, max: 3000, step: 200, default: 2200 },
      { id: 'accentColor', label: 'Attractor Ribbon Color', type: 'color', default: '#a855f7' },
      { id: 'autoRotate', label: 'Auto Orbit Rotate', type: 'boolean', default: true },
    ],
    defaultControls: {
      speed: 1.0,
      sigma: 10,
      rho: 28,
      trailLength: 2200,
      accentColor: '#a855f7',
      autoRotate: true,
    },
    codeSample: `<LorenzAttractorChaos speed={1.0} rho={28} accentColor="#a855f7" />`,
    reactUsage: `import { LorenzAttractorChaos } from './components/batch2/LorenzAttractorChaos';\n\n<LorenzAttractorChaos />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Continuous smooth non-repeating trajectory projection.',
    perfNote: 'Sub-millisecond Euler step integration buffer.',
  },

  // 33. ChladniPlateResonance (Physics / Acoustics)
  {
    id: 'chladni-plate-resonance',
    name: 'Chladni Cymatics Acoustic Plate',
    category: 'physics',
    tech: 'canvas',
    description: '2D acoustic resonance standing wave nodal lines where 5,000 sand particles physically gather at zero-vibration harmonic boundaries.',
    tags: ['cymatics', 'chladni', 'resonance', 'sound', 'acoustics', 'physics'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: ChladniPlateResonance,
    controlsSchema: [
      { id: 'modeM', label: 'Harmonic Mode m', type: 'number', min: 1, max: 8, step: 1, default: 3 },
      { id: 'modeN', label: 'Harmonic Mode n', type: 'number', min: 1, max: 8, step: 1, default: 5 },
      { id: 'vibrationAmp', label: 'Vibration Amplitude', type: 'number', min: 0.5, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'sandColor', label: 'Sand Particle Color', type: 'color', default: '#38bdf8' },
    ],
    defaultControls: {
      modeM: 3,
      modeN: 5,
      vibrationAmp: 1.0,
      sandColor: '#38bdf8',
    },
    codeSample: `<ChladniPlateResonance modeM={3} modeN={5} sandColor="#38bdf8" />`,
    reactUsage: `import { ChladniPlateResonance } from './components/batch2/ChladniPlateResonance';\n\n<ChladniPlateResonance />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Visual acoustic harmony without mandatory sound playback.',
    perfNote: 'Typed particle array batch processing.',
  },

  // 34. HyperbolicPoincareDisk (Decorative / Math)
  {
    id: 'hyperbolic-poincare-disk',
    name: 'Poincaré Hyperbolic Disk Tessellation',
    category: 'decorative',
    tech: 'canvas',
    description: 'Non-Euclidean hyperbolic geometry flow model with heptagonal {7,3} symmetry, Möbius transformations, and interactive pan.',
    tags: ['hyperbolic', 'poincare', 'non-euclidean', 'geometry', 'tessellation'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: HyperbolicPoincareDisk,
    controlsSchema: [
      { id: 'speed', label: 'Flow Rate', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'tessellationDensity', label: 'Density Layers', type: 'number', min: 2, max: 6, step: 1, default: 3 },
      { id: 'primaryColor', label: 'Geodesic Line Color', type: 'color', default: '#06b6d4' },
      { id: 'glowColor', label: 'Radial Ray Color', type: 'color', default: '#3b82f6' },
      { id: 'autoFlow', label: 'Auto Orbit Drift', type: 'boolean', default: true },
    ],
    defaultControls: {
      speed: 1.0,
      tessellationDensity: 3,
      primaryColor: '#06b6d4',
      glowColor: '#3b82f6',
      autoFlow: true,
    },
    codeSample: `<HyperbolicPoincareDisk speed={1.0} primaryColor="#06b6d4" />`,
    reactUsage: `import { HyperbolicPoincareDisk } from './components/batch2/HyperbolicPoincareDisk';\n\n<HyperbolicPoincareDisk />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Infinite non-Euclidean boundary constrained to circle viewport.',
    perfNote: 'Vector clipping with trigonometric horocycle rendering.',
  },

  // 35. NeuralSynapticCortex (Shaders / Biological AI)
  {
    id: 'neural-synaptic-cortex',
    name: 'Cortical Synaptic Spiking Network',
    category: 'shaders',
    tech: 'canvas',
    description: 'Biological action potential network with soma cell bodies, refractory periods, neurotransmitter spike packets, and cursor stimulation probe.',
    tags: ['neural', 'cortex', 'synapse', 'bio-ai', 'spiking', 'action-potential'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: NeuralSynapticCortex,
    controlsSchema: [
      { id: 'neuronCount', label: 'Neuron Count', type: 'number', min: 20, max: 80, step: 5, default: 42 },
      { id: 'firingRate', label: 'Spike Frequency', type: 'number', min: 0.4, max: 3.0, step: 0.1, default: 1.0 },
      { id: 'synapseColor', label: 'Axon Membrane Color', type: 'color', default: '#22d3ee' },
      { id: 'pulseColor', label: 'Action Potential Color', type: 'color', default: '#e11d48' },
    ],
    defaultControls: {
      neuronCount: 42,
      firingRate: 1.0,
      synapseColor: '#22d3ee',
      pulseColor: '#e11d48',
    },
    codeSample: `<NeuralSynapticCortex firingRate={1.0} synapseColor="#22d3ee" pulseColor="#e11d48" />`,
    reactUsage: `import { NeuralSynapticCortex } from './components/batch2/NeuralSynapticCortex';\n\n<NeuralSynapticCortex />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Interactive pointer stimulation with tactile visual feedback.',
    perfNote: 'Optimized node graph traversal with bounded pulse pool.',
  },

  // 36. MagneticFerrofluidSpikes (Physics / Fluid)
  {
    id: 'magnetic-ferrofluid-spikes',
    name: 'Ferrofluid Rosensweig Spikes',
    category: 'physics',
    tech: 'canvas',
    description: 'Colloidal ferromagnetic liquid metal instability simulation producing dynamic sharp liquid spikes that respond to cursor magnetic dipoles.',
    tags: ['ferrofluid', 'magnetic', 'liquid-metal', 'rosensweig', 'physics'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: MagneticFerrofluidSpikes,
    controlsSchema: [
      { id: 'magneticStrength', label: 'Magnetic Dipole Pull', type: 'number', min: 0.4, max: 2.0, step: 0.1, default: 1.0 },
      { id: 'viscosity', label: 'Fluid Viscosity', type: 'number', min: 0.4, max: 1.0, step: 0.05, default: 0.85 },
      { id: 'sheenColor', label: 'Liquid Sheen Color', type: 'color', default: '#38bdf8' },
      { id: 'spikeDensity', label: 'Spike Density', type: 'number', min: 18, max: 64, step: 2, default: 36 },
    ],
    defaultControls: {
      magneticStrength: 1.0,
      viscosity: 0.85,
      sheenColor: '#38bdf8',
      spikeDensity: 36,
    },
    codeSample: `<MagneticFerrofluidSpikes magneticStrength={1.0} sheenColor="#38bdf8" />`,
    reactUsage: `import { MagneticFerrofluidSpikes } from './components/batch2/MagneticFerrofluidSpikes';\n\n<MagneticFerrofluidSpikes />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Organic fluid motion tracking pointer velocity.',
    perfNote: 'Curved quadratic Bezier contour with radial gradient fill.',
  },

  // 37. VoxelTopographyWaves (Three / WebGL)
  {
    id: 'voxel-topography-waves',
    name: '3D Voxel Topography Waves',
    category: 'three',
    tech: 'three',
    description: 'Three.js instanced mesh terrain with 1,024 dynamic heightmap voxel columns, procedural wave harmonics, and cinematic orbital camera.',
    tags: ['three', 'webgl', 'voxel', 'topography', '3d', 'instanced-mesh'],
    complexity: 'heavy',
    framerateTarget: '60 FPS',
    component: VoxelTopographyWaves,
    controlsSchema: [
      { id: 'speed', label: 'Wave Frequency', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'waveAmplitude', label: 'Wave Altitude', type: 'number', min: 0.5, max: 2.5, step: 0.1, default: 1.2 },
      { id: 'peakColor', label: 'Summit Peak Color', type: 'color', default: '#38bdf8' },
      { id: 'baseColor', label: 'Valley Base Color', type: 'color', default: '#1e1b4b' },
      { id: 'wireframe', label: 'Wireframe Lattice', type: 'boolean', default: false },
    ],
    defaultControls: {
      speed: 1.0,
      waveAmplitude: 1.2,
      peakColor: '#38bdf8',
      baseColor: '#1e1b4b',
      wireframe: false,
    },
    codeSample: `<VoxelTopographyWaves speed={1.0} waveAmplitude={1.2} peakColor="#38bdf8" />`,
    reactUsage: `import { VoxelTopographyWaves } from './components/batch2/VoxelTopographyWaves';\n\n<VoxelTopographyWaves />`,
    dependencies: ['react', 'three'],
    a11yNote: 'WebGL 3D surface with hardware antialiasing.',
    perfNote: 'Single draw call via THREE.InstancedMesh.',
  },

  // 38. KineticCrystalShatter (Micro / Physics)
  {
    id: 'kinetic-crystal-shatter',
    name: 'Voronoi Crystal Shatter & Spring Reconstruct',
    category: 'micro',
    tech: 'canvas',
    description: 'High-impact tactile crystal card that violently shatters into 24 physics-simulated polygonal shards and seamlessly re-assembles on spring return.',
    tags: ['shatter', 'voronoi', 'physics', 'micro-interaction', 'glass', 'spring'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: KineticCrystalShatter,
    controlsSchema: [
      { id: 'shatterForce', label: 'Explosion Velocity', type: 'number', min: 0.5, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'returnStiffness', label: 'Spring Return Stiffness', type: 'number', min: 0.03, max: 0.2, step: 0.01, default: 0.08 },
      { id: 'crystalColor', label: 'Crystal Glass Fill', type: 'color', default: '#06b6d4' },
      { id: 'wireColor', label: 'Facet Border Wire', type: 'color', default: '#38bdf8' },
    ],
    defaultControls: {
      shatterForce: 1.0,
      returnStiffness: 0.08,
      crystalColor: '#06b6d4',
      wireColor: '#38bdf8',
    },
    codeSample: `<KineticCrystalShatter shatterForce={1.0} returnStiffness={0.08} />`,
    reactUsage: `import { KineticCrystalShatter } from './components/batch2/KineticCrystalShatter';\n\n<KineticCrystalShatter />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Click-triggered physical action with automatic spring return.',
    perfNote: 'Spring damping with air resistance decay.',
  },

  // 39. AsciiRaymarchTunnel (ASCII / Retro 3D)
  {
    id: 'ascii-raymarch-tunnel',
    name: 'Raymarched Toroidal Wormhole in ASCII',
    category: 'ascii',
    tech: 'ascii',
    description: 'Real-time raymarching distance estimator rendered in high-resolution ASCII typography, flight navigating through an infinite curving wormhole.',
    tags: ['ascii', 'raymarching', 'wormhole', 'distance-field', 'retro', '3d'],
    complexity: 'light',
    framerateTarget: '60 FPS',
    component: AsciiRaymarchTunnel,
    controlsSchema: [
      { id: 'speed', label: 'Flight Velocity', type: 'number', min: 0.4, max: 2.5, step: 0.1, default: 1.0 },
      { id: 'tunnelRadius', label: 'Tunnel Caliber Radius', type: 'number', min: 1.2, max: 2.6, step: 0.1, default: 1.8 },
      { id: 'color', label: 'Monochrome Phosphor Color', type: 'color', default: '#00f0ff' },
    ],
    defaultControls: {
      speed: 1.0,
      tunnelRadius: 1.8,
      color: '#00f0ff',
    },
    codeSample: `<AsciiRaymarchTunnel speed={1.0} tunnelRadius={1.8} color="#00f0ff" />`,
    reactUsage: `import { AsciiRaymarchTunnel } from './components/batch2/AsciiRaymarchTunnel';\n\n<AsciiRaymarchTunnel />`,
    dependencies: ['react'],
    a11yNote: 'Pure monospace text output with screen reader aria label.',
    perfNote: 'Fast raymarching loop in plain JavaScript.',
  },

  // 40. FluidSmokeCursorDrift (Shaders / Fluid)
  {
    id: 'fluid-smoke-cursor-drift',
    name: 'Curl Noise Fluid Smoke Advection',
    category: 'shaders',
    tech: 'canvas',
    description: 'Grid-free turbulent curl noise smoke advection that generates phosphorescent expanding smoke plumes trailing behind cursor velocity.',
    tags: ['smoke', 'curl-noise', 'fluid', 'advection', 'particles', 'turbulence'],
    complexity: 'medium',
    framerateTarget: '60 FPS',
    component: FluidSmokeCursorDrift,
    controlsSchema: [
      { id: 'curlIntensity', label: 'Turbulent Curl Amplitude', type: 'number', min: 0.5, max: 3.0, step: 0.1, default: 1.4 },
      { id: 'particleLifespan', label: 'Smoke Dissipation Time', type: 'number', min: 30, max: 120, step: 5, default: 60 },
      { id: 'smokeColor', label: 'Primary Plume Color', type: 'color', default: '#38bdf8' },
      { id: 'glowColor', label: 'Secondary Ambient Glow', type: 'color', default: '#818cf8' },
    ],
    defaultControls: {
      curlIntensity: 1.4,
      particleLifespan: 60,
      smokeColor: '#38bdf8',
      glowColor: '#818cf8',
    },
    codeSample: `<FluidSmokeCursorDrift curlIntensity={1.4} smokeColor="#38bdf8" />`,
    reactUsage: `import { FluidSmokeCursorDrift } from './components/batch2/FluidSmokeCursorDrift';\n\n<FluidSmokeCursorDrift />`,
    dependencies: ['react', 'canvas'],
    a11yNote: 'Smooth pointer tracking with gentle buoyant decay.',
    perfNote: 'Particle pool reuse with radial gradient caching.',
  },
];
