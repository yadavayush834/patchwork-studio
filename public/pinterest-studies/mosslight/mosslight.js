/* ============================================================================
   MOSSLIGHT: The Listening Grove
   A dependency-free, interactive pixel backdrop for the web.

   Usage:
     <script src="mosslight.js" defer></script>
     <mosslight-bg mood="moss"></mosslight-bg>

   Attributes:
     mood="moss|ember|mono"   palette (default: moss)
     paused                   freeze ambient motion
     interactive="false"      keep it purely decorative
     speed="0.75"             ambient motion multiplier, 0.2–2
     seed="5271"              change the sky / forest arrangement
     inline                   position:absolute instead of fixed

   The element is decorative (aria-hidden), pointer-events:none, and paints
   into a very small canvas that is scaled up with nearest-neighbour pixels.
   ========================================================================== */

(() => {
  'use strict';
  if (customElements.get('mosslight-bg')) return;

  const TAU = Math.PI * 2;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const damp = (a, b, speed, dt) => lerp(a, b, 1 - Math.exp(-speed * dt));
  const smoothstep = (t) => t * t * (3 - 2 * t);
  const mod = (n, m) => ((n % m) + m) % m;

  const PALETTES = {
    moss: {
      sky: ['#03070b', '#050d12', '#08181c', '#0f2928', '#193b33'],
      horizonGlow: '#3f6755',
      star: '#f5efd6',
      starCool: '#a8d9c7',
      cloud: '#294541',
      haze: '#5d8c73',
      planet: '#efe5c4',
      planetMid: '#c6c3a5',
      planetDark: '#929b83',
      planetRim: '#fff8dd',
      ring: '#b8d5b8',
      ringBright: '#eff3cd',
      far: '#0b1e20',
      farLight: '#1d3b34',
      mid: '#071517',
      near: '#030d0f',
      ground: '#061211',
      water: '#041012',
      waterMid: '#071b1b',
      waterLight: '#1a3d36',
      metal: '#223c36',
      metalLight: '#5c8270',
      accent: '#9df5c9',
      warm: '#f6c77e',
      white: '#fff8e7'
    },
    ember: {
      sky: ['#0d0507', '#19090d', '#2a1016', '#4a1d20', '#6e2f28'],
      horizonGlow: '#b85e42',
      star: '#ffefce',
      starCool: '#ffc2a1',
      cloud: '#4b2523',
      haze: '#966a50',
      planet: '#ffd9a4',
      planetMid: '#e6aa7c',
      planetDark: '#ae7562',
      planetRim: '#fff2cf',
      ring: '#f1bc8b',
      ringBright: '#ffe5b3',
      far: '#301519',
      farLight: '#55251f',
      mid: '#1c0b0d',
      near: '#0b0405',
      ground: '#160a09',
      water: '#160a0b',
      waterMid: '#291012',
      waterLight: '#5b2a22',
      metal: '#4a2c24',
      metalLight: '#9b6951',
      accent: '#ffba7a',
      warm: '#ffe1a3',
      white: '#fff5de'
    },
    mono: {
      sky: ['#050505', '#0a0a09', '#121210', '#1d1d19', '#2c2c25'],
      horizonGlow: '#5a5a4c',
      star: '#f5f1df',
      starCool: '#c9c8b7',
      cloud: '#2b2b25',
      haze: '#6c6b59',
      planet: '#eee9d5',
      planetMid: '#c5c0ab',
      planetDark: '#8e8a78',
      planetRim: '#fffdf2',
      ring: '#cbc6b4',
      ringBright: '#f7f3e0',
      far: '#181814',
      farLight: '#2e2e26',
      mid: '#0d0d0b',
      near: '#040404',
      ground: '#0a0a08',
      water: '#070707',
      waterMid: '#11110f',
      waterLight: '#2f2f27',
      metal: '#2b2b24',
      metalLight: '#716f5f',
      accent: '#dcd5b9',
      warm: '#f3e9c8',
      white: '#fffcef'
    }
  };

  const PALETTE_KEYS = Object.keys(PALETTES.moss);
  const MOOD_NAMES = Object.keys(PALETTES);

  /* ── colour helpers ────────────────────────────────────────────────────── */
  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function prepPalette(name) {
    const source = PALETTES[name] || PALETTES.moss;
    const out = {};
    for (const key of PALETTE_KEYS) {
      const value = source[key];
      out[key] = Array.isArray(value) ? value.map(hexToRgb) : hexToRgb(value);
    }
    return out;
  }

  function clonePalette(p) {
    const out = {};
    for (const key of PALETTE_KEYS) {
      out[key] = key === 'sky' ? p.sky.map((c) => c.slice()) : p[key].slice();
    }
    return out;
  }

  function mixRgb(a, b, t) {
    return [
      Math.round(lerp(a[0], b[0], t)),
      Math.round(lerp(a[1], b[1], t)),
      Math.round(lerp(a[2], b[2], t))
    ];
  }

  function mixPalettes(a, b, t) {
    const out = {};
    for (const key of PALETTE_KEYS) {
      out[key] = key === 'sky'
        ? b.sky.map((c, i) => mixRgb(a.sky[i], c, t))
        : mixRgb(a[key], b[key], t);
    }
    return out;
  }

  function rgba(c, a = 1) {
    if (!c) return 'rgba(0,0,0,0)';
    if (a >= 1) return `rgb(${c[0]},${c[1]},${c[2]})`;
    return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  }

  function sampleSky(palette, t) {
    const stops = palette.sky;
    const scaled = clamp(t, 0, 1) * (stops.length - 1);
    const i = Math.min(stops.length - 2, Math.floor(scaled));
    return mixRgb(stops[i], stops[i + 1], scaled - i);
  }

  function mulberry32(seed) {
    let a = seed >>> 0;
    return () => {
      a |= 0;
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function hash2(x, y) {
    const v = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return v - Math.floor(v);
  }

  /* ── pixel drawing primitives ──────────────────────────────────────────── */
  function rect(ctx, x, y, w, h, color) {
    if (w <= 0 || h <= 0) return;
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
  }

  function px(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
  }

  function line(ctx, x0, y0, x1, y1, color, thickness = 1) {
    x0 = Math.round(x0);
    y0 = Math.round(y0);
    x1 = Math.round(x1);
    y1 = Math.round(y1);
    const dx = Math.abs(x1 - x0);
    const dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    ctx.fillStyle = color;
    for (;;) {
      ctx.fillRect(x0, y0, thickness, thickness);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
  }

  function ditherRect(ctx, x, y, w, h, color, step = 2, alpha = 1) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    for (let yy = 0; yy < h; yy += step) {
      for (let xx = ((yy / step) % 2) * step; xx < w; xx += step * 2) {
        ctx.fillRect(Math.round(x + xx), Math.round(y + yy), step, Math.min(step, h - yy));
      }
    }
    ctx.restore();
  }

  function ditherDisc(ctx, cx, cy, radius, color, step = 3, alpha = 0.5) {
    if (radius <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    for (let y = -radius; y <= radius; y += step) {
      const span = Math.sqrt(Math.max(0, radius * radius - y * y));
      const offset = ((Math.floor(y / step) % 2) + 2) % 2;
      for (let x = -span; x <= span; x += step * 2) {
        ctx.fillRect(Math.round(cx + x + offset), Math.round(cy + y), step, step);
      }
    }
    ctx.restore();
  }

  function sparkle(ctx, x, y, size, color, alpha = 1) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    x = Math.round(x);
    y = Math.round(y);
    ctx.fillRect(x, y - size, 1, size * 2 + 1);
    ctx.fillRect(x - size, y, size * 2 + 1, 1);
    if (size > 1) ctx.fillRect(x - 1, y - 1, 3, 3);
    ctx.restore();
  }

  function ellipsePoints(cx, cy, rx, ry, rotation = 0, count = 40) {
    const pts = [];
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * TAU;
      const ex = Math.cos(a) * rx;
      const ey = Math.sin(a) * ry;
      pts.push([cx + ex * cos - ey * sin, cy + ex * sin + ey * cos]);
    }
    return pts;
  }

  function fillPolygon(ctx, pts, color) {
    if (!pts.length) return;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const p of pts) {
      if (p[1] < minY) minY = p[1];
      if (p[1] > maxY) maxY = p[1];
    }
    ctx.fillStyle = color;
    const y0 = Math.ceil(minY);
    const y1 = Math.floor(maxY);
    for (let y = y0; y <= y1; y++) {
      const crossings = [];
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        const b = pts[(i + 1) % pts.length];
        if ((a[1] <= y && b[1] > y) || (b[1] <= y && a[1] > y)) {
          crossings.push(a[0] + ((y - a[1]) / (b[1] - a[1])) * (b[0] - a[0]));
        }
      }
      crossings.sort((a, b) => a - b);
      for (let i = 0; i + 1 < crossings.length; i += 2) {
        const xa = Math.ceil(crossings[i]);
        const xb = Math.floor(crossings[i + 1]);
        if (xb >= xa) ctx.fillRect(xa, y, xb - xa + 1, 1);
      }
    }
  }

  function fillEllipse(ctx, cx, cy, rx, ry, rotation, color) {
    fillPolygon(ctx, ellipsePoints(cx, cy, rx, ry, rotation, 40), color);
  }

  function strokeEllipse(ctx, cx, cy, rx, ry, rotation, color, from = 0, to = TAU, count = 90, dash = 0, dashOffset = 0) {
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    ctx.fillStyle = color;
    for (let i = 0; i <= count; i++) {
      if (dash && (i + dashOffset) % dash === 0) continue;
      const a = from + ((to - from) * i) / count;
      const ex = Math.cos(a) * rx;
      const ey = Math.sin(a) * ry;
      ctx.fillRect(
        Math.round(cx + ex * cos - ey * sin),
        Math.round(cy + ex * sin + ey * cos),
        1,
        1
      );
    }
  }

  function drawPine(ctx, x, baseY, height, color, lean = 0, detail = null) {
    x = Math.round(x);
    baseY = Math.round(baseY);
    const h = Math.max(3, Math.round(height));
    const trunkH = Math.max(1, Math.round(h * 0.22));
    const folH = h - trunkH;
    rect(ctx, x, baseY - trunkH + 1, 1, trunkH, color);
    for (let row = 0; row < folH; row++) {
      const t = row / Math.max(1, folH);
      const half = Math.round((1 - t) * (h * 0.23)) + (row % 3 === 0 ? 1 : 0);
      const yy = baseY - trunkH - row;
      if (half <= 0) continue;
      const xx = Math.round(x + lean * t - half * 0.1);
      ctx.fillStyle = color;
      ctx.fillRect(xx, yy, half * 2 + 1, 1);
    }
    if (detail) {
      px(ctx, x + Math.round(lean * 0.4), baseY - Math.round(folH * 0.45), detail);
    }
  }

  function drawFern(ctx, x, baseY, height, lean, sway, color, tipColor) {
    const h = Math.max(5, Math.round(height));
    const dir = lean >= 0 ? 1 : -1;
    for (let i = 0; i < h; i++) {
      const t = i / h;
      const xx = x + dir * t * t * h * lean + Math.sin(sway + t * 2.3) * t * 2;
      px(ctx, xx, baseY - i, color);
      if (i > h * 0.2 && i % 3 === 0) {
        const branch = Math.round((1 - t) * h * 0.24) + 1;
        line(ctx, xx, baseY - i, xx + branch, baseY - i - branch * 0.55, color);
        line(ctx, xx, baseY - i, xx - branch * 0.82, baseY - i - branch * 0.45, color);
        if (tipColor && t < 0.5) {
          px(ctx, xx + branch, baseY - i - Math.round(branch * 0.55), tipColor);
        }
      }
    }
  }

  function drawReed(ctx, x, baseY, height, sway, color, tip) {
    const h = Math.max(3, Math.round(height));
    for (let i = 0; i < h; i++) {
      const t = i / h;
      px(ctx, x + Math.sin(sway + t * 2.1) * t * 2, baseY - i, color);
    }
    const tipX = Math.round(x + Math.sin(sway + 2.1) * 2);
    if (tip) {
      rect(ctx, tipX, baseY - h, 1, 2, tip);
      px(ctx, tipX, baseY - h - 1, tip);
    }
  }

  /* ── the renderer ──────────────────────────────────────────────────────── */
  class Grove {
    constructor(canvas, options = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d', { alpha: false });
      this.mood = MOOD_NAMES.includes(options.mood) ? options.mood : 'moss';
      this.palette = prepPalette(this.mood);
      this.paletteFrom = clonePalette(this.palette);
      this.paletteTo = clonePalette(this.palette);
      this.paletteBlend = 1;
      this.seed = Number.isFinite(Number(options.seed)) ? Number(options.seed) : 5271;
      this.speed = clamp(Number(options.speed) || 1, 0.2, 2.5);
      this.interactive = options.interactive !== false;
      this.paused = true;
      this.running = false;
      this.destroyed = false;
      this.time = 0;
      this.lastFrame = 0;
      this.frameHandle = 0;
      this.fps = 0;
      this._fpsFrames = 0;
      this._fpsClock = 0;
      this.W = 1;
      this.H = 1;
      this.cssW = 1;
      this.cssH = 1;
      this.portrait = false;
      this.pixelScale = 4;
      this.horizon = 1;
      this.waterLine = 1;

      this.pointer = {
        x: 0, y: 0, tx: 0, ty: 0,
        nx: 0.5, ny: 0.5,
        active: false, energy: 0, lastMove: -10
      };
      this.parallax = { x: 0, y: 0 };
      this.dishAim = 0.48;
      this.signalFlare = 0;
      this.pulses = [];
      this.ripples = [];
      this.trails = [];
      this.meteors = [];
      this.trailClock = 0;
      this.rippleClock = 2.1;
      this.pointerRippleClock = 1;
      this.nextMeteor = 6 + Math.random() * 8;
      this.stars = [];
      this.starDust = [];
      this.clouds = [];
      this.farTrees = [];
      this.midTrees = [];
      this.reeds = [];
      this.ferns = [];
      this.flowers = [];
      this.fireflies = [];
      this.motes = [];
      this.boat = { x: 0, y: 0, phase: 0, rock: 0 };
      this.layout = {};
      this.runtimeRng = mulberry32(this.seed ^ 0x9e3779b9);
      this._starPositions = [];
      this._boundFrame = this._frame.bind(this);
      this.resize(this.canvas.clientWidth || window.innerWidth, this.canvas.clientHeight || window.innerHeight);
    }

    /* ── layout + scene seeding ──────────────────────────────────────────── */
    resize(cssW, cssH) {
      cssW = Math.max(1, Math.round(cssW));
      cssH = Math.max(1, Math.round(cssH));
      if (cssW === this.cssW && cssH === this.cssH && this.stars.length) return;

      this.cssW = cssW;
      this.cssH = cssH;
      this.portrait = cssH > cssW * 1.12;

      let pixel = Math.round(cssH / (this.portrait ? 280 : 225));
      pixel = clamp(pixel, 2, 8);
      this.pixelScale = pixel;

      const w = Math.max(48, Math.round(cssW / pixel));
      const h = Math.max(48, Math.round(cssH / pixel));
      this.W = w;
      this.H = h;
      this.canvas.width = w;
      this.canvas.height = h;
      this.ctx = this.canvas.getContext('2d', { alpha: false });
      this.ctx.imageSmoothingEnabled = false;
      this.ctx.clearRect(0, 0, w, h);

      this.computeLayout();
      this.seedScene();
      this.pulses = [];
      this.ripples = [];
      this.trails = [];
      this.meteors = [];
      this.nextMeteor = this.time + 6 + this.runtimeRng() * 8;

      if (this.paused) this.renderOnce();
    }

    computeLayout() {
      const W = this.W;
      const H = this.H;
      const portrait = this.portrait;
      const min = Math.min(W, H);

      const horizon = Math.round(H * (portrait ? 0.565 : 0.615));
      const waterLine = Math.round(H * (portrait ? 0.735 : 0.74));
      const planetR = clamp(min * 0.135, 11, 36);
      const dishR = clamp(min * 0.145, 13, 38);
      const dishX = W * (portrait ? 0.765 : 0.775);
      const dishBaseY = waterLine - H * 0.025;
      const dishY = dishBaseY - H * (portrait ? 0.145 : 0.14) - dishR * 0.15;

      this.horizon = horizon;
      this.waterLine = waterLine;
      this.layout = {
        min,
        planet: {
          x: W * (portrait ? 0.68 : 0.705),
          y: H * (portrait ? 0.135 : 0.205),
          r: planetR
        },
        dish: {
          x: dishX,
          y: dishY,
          baseY: dishBaseY,
          r: dishR
        },
        boat: {
          x: W * 0.205,
          y: waterLine + H * 0.145
        },
        shoreY: waterLine
      };
    }

    seedScene() {
      const W = this.W;
      const H = this.H;
      const horizon = this.horizon;
      const min = this.layout.min;
      const rng = mulberry32(this.seed);
      this.runtimeRng = mulberry32(this.seed ^ 0x9e3779b9);

      const starCount = clamp(Math.round((W * H) / 780), 46, 155);
      this.stars = [];
      for (let i = 0; i < starCount; i++) {
        this.stars.push({
          x: rng(),
          y: Math.pow(rng(), 1.08) * 0.945,
          depth: 0.25 + rng() * 0.75,
          size: rng() < 0.075 ? 2 : 1,
          phase: rng() * TAU,
          speed: 0.45 + rng() * 1.2,
          bright: 0.34 + rng() * 0.66,
          tone: rng(),
          warm: rng() > 0.78
        });
      }

      const dustCount = clamp(Math.round((W * H) / 1600), 24, 92);
      this.starDust = [];
      for (let i = 0; i < dustCount; i++) {
        const x = rng() * 1.15 - 0.08;
        const y = 0.08 + x * 0.205 + (rng() - 0.5) * 0.13;
        this.starDust.push({ x, y: clamp(y, 0.02, 0.6), a: 0.025 + rng() * 0.08 });
      }

      this.clouds = [
        { x: rng(), y: 0.34, w: W * (0.2 + rng() * 0.2), h: H * 0.014, speed: 0.0016 + rng() * 0.0012, a: 0.16 },
        { x: rng(), y: 0.47, w: W * (0.28 + rng() * 0.3), h: H * 0.017, speed: 0.0009 + rng() * 0.0011, a: 0.13 },
        { x: rng(), y: 0.54, w: W * (0.15 + rng() * 0.2), h: H * 0.012, speed: 0.0021 + rng() * 0.001, a: 0.1 }
      ];

      this.farTrees = [];
      const farCount = clamp(Math.round(W / 15), 12, 40);
      for (let i = 0; i < farCount; i++) {
        this.farTrees.push({
          x: rng() * W,
          h: H * (0.022 + rng() * 0.05),
          lean: (rng() - 0.5) * 0.25,
          root: horizon + H * (0.004 + rng() * 0.04),
          layer: rng()
        });
      }

      this.midTrees = [];
      const midCount = clamp(Math.round(W / 32), 6, 18);
      for (let i = 0; i < midCount; i++) {
        this.midTrees.push({
          x: W * (0.02 + rng() * 0.96),
          h: H * (0.06 + rng() * 0.1),
          lean: (rng() - 0.5) * 0.18,
          root: horizon + H * (0.035 + rng() * 0.04),
          layer: rng()
        });
      }

      this.reeds = [];
      const reedCount = clamp(Math.round(W / 19), 8, 26);
      for (let i = 0; i < reedCount; i++) {
        const side = rng();
        const edgeX = side < 0.5 ? rng() * W * 0.23 : W * 0.77 + rng() * W * 0.23;
        this.reeds.push({
          x: edgeX,
          base: H - 1 - rng() * H * 0.04,
          h: H * (0.035 + rng() * 0.095),
          phase: rng() * TAU,
          speed: 0.45 + rng() * 0.5,
          tip: rng() > 0.6
        });
      }

      this.ferns = [
        { x: W * 0.01, base: H - 1, h: H * 0.19, lean: 0.6, phase: 0.4 },
        { x: W * 0.06, base: H - 1, h: H * 0.13, lean: 0.35, phase: 2.1 },
        { x: W * 0.96, base: H - 1, h: H * 0.17, lean: -0.55, phase: 1.5 }
      ];
      if (W < 220) this.ferns.pop();

      this.flowers = [];
      const flowerCount = clamp(Math.round(W / 55), 4, 9);
      for (let i = 0; i < flowerCount; i++) {
        const leftSide = i % 2 === 0;
        this.flowers.push({
          x: (leftSide ? 0.06 + rng() * 0.2 : 0.74 + rng() * 0.2) * W,
          y: H - 4 - rng() * H * 0.07,
          h: 3 + rng() * 8,
          phase: rng() * TAU,
          tone: rng() > 0.5
        });
      }

      this.fireflies = [];
      const flyCount = clamp(Math.round(W / 12), 14, 34);
      for (let i = 0; i < flyCount; i++) {
        const depth = rng();
        this.fireflies.push({
          x: W * (0.04 + rng() * 0.92),
          y: H * (0.42 + rng() * 0.48),
          phase: rng() * TAU,
          speed: 0.34 + rng() * 0.9,
          driftX: W * (0.008 + rng() * 0.04),
          driftY: H * (0.006 + rng() * 0.035),
          size: depth > 0.8 && rng() > 0.72 ? 2 : 1,
          tone: rng(),
          alpha: 0.35 + rng() * 0.55,
          depth
        });
      }

      this.motes = [];
      const moteCount = clamp(Math.round(W / 27), 8, 24);
      for (let i = 0; i < moteCount; i++) {
        this.motes.push({
          x: rng() * W,
          y: H * (0.55 + rng() * 0.42),
          speed: H * (0.004 + rng() * 0.01),
          phase: rng() * TAU,
          alpha: 0.1 + rng() * 0.25
        });
      }

      this.boat.phase = rng() * TAU;
    }

    /* ── motion / input API ──────────────────────────────────────────────── */
    start() {
      if (this.running || this.paused || this.destroyed) return;
      this.running = true;
      this.lastFrame = 0;
      this.frameHandle = requestAnimationFrame(this._boundFrame);
    }

    stop() {
      this.running = false;
      if (this.frameHandle) cancelAnimationFrame(this.frameHandle);
      this.frameHandle = 0;
      this.lastFrame = 0;
    }

    setPaused(value) {
      const shouldPause = Boolean(value);
      if (shouldPause) {
        this.paused = true;
        this.stop();
        this.renderOnce();
      } else {
        this.paused = false;
        this.start();
      }
    }

    setMood(name) {
      if (!MOOD_NAMES.includes(name) || name === this.mood) return;
      this.paletteFrom = clonePalette(this.palette);
      this.paletteTo = prepPalette(name);
      this.paletteBlend = 0;
      this.mood = name;
      if (!this.running) {
        this.palette = clonePalette(this.paletteTo);
        this.paletteBlend = 1;
        this.renderOnce();
      }
    }

    setSeed(seed) {
      const next = Number(seed);
      this.seed = Number.isFinite(next) ? next : 5271;
      this.seedScene();
      if (this.paused) this.renderOnce();
    }

    setInteractive(value) {
      this.interactive = Boolean(value);
      if (!this.interactive) {
        this.pointer.active = false;
        this.trails = [];
      }
    }

    setSpeed(speed) {
      this.speed = clamp(Number(speed) || 1, 0.2, 2.5);
    }

    pointerMove(nx, ny, energy = 1) {
      if (!this.interactive) return;
      const p = this.pointer;
      p.nx = clamp(nx, 0, 1);
      p.ny = clamp(ny, 0, 1);
      p.tx = p.nx * this.W;
      p.ty = p.ny * this.H;
      if (!p.active) {
        p.x = p.tx;
        p.y = p.ty;
      }
      p.active = true;
      p.energy = Math.min(1.8, p.energy + energy * 0.8);
      p.lastMove = this.time;
      if (this.paused) this.renderOnce();
    }

    pointerLeave() {
      this.pointer.active = false;
    }

    pulseNormalized(nx, ny, power = 1, hue = 'accent') {
      const x = clamp(nx, 0, 1) * this.W;
      const y = clamp(ny, 0, 1) * this.H;
      this.addPulse(x, y, power, hue);
      if (this.paused) this.renderOnce();
    }

    addPulse(x, y, power = 1, hue = 'accent') {
      const isWater = y > this.waterLine;
      this.pulses.push({
        x,
        y,
        age: 0,
        life: 1.8 + power * 0.35,
        power,
        kind: isWater ? 'water' : 'sky',
        hue
      });
      if (isWater) {
        this.spawnRipple(x, this.waterLine + Math.max(4, (y - this.waterLine) * 0.45), power * 0.9);
      }
      if (this.signalFlare < 0.25) this.signalFlare = Math.max(this.signalFlare, 0.25);
    }

    signal() {
      if (!this.layout.planet) return;
      const planet = this.layout.planet;
      const dish = this.layout.dish;
      this.addPulse(planet.x, planet.y, 1.45, 'accent');
      this.addPulse(dish.x + this.layout.dish.r * 0.2, dish.y - this.layout.dish.r * 0.55, 1.05, 'warm');
      this.signalFlare = 1.6;
      this.boat.rock = 1;
      for (const f of this.fireflies) f.energy = 1;
      this.meteors.push({
        x: this.W * 0.88,
        y: this.H * 0.07,
        vx: -this.W * 0.24,
        vy: this.H * 0.28,
        age: 0,
        life: 1.15,
        size: 2,
        triggered: true
      });
      if (this.paused) this.renderOnce();
    }

    getFps() {
      return this.paused ? 0 : this.fps;
    }

    spawnRipple(x, y, power = 1) {
      if (y < this.waterLine + 1) y = this.waterLine + 3;
      this.ripples.push({
        x,
        y: Math.min(this.H - 1, y),
        age: 0,
        life: 2.6 + power * 0.5,
        power: 0.55 + power * 0.55
      });
    }

    /* ── update ──────────────────────────────────────────────────────────── */
    _frame(now) {
      if (!this.running) return;
      if (!this.lastFrame) this.lastFrame = now;
      const raw = Math.min(0.05, Math.max(0.001, (now - this.lastFrame) / 1000));
      this.lastFrame = now;
      this.update(raw * this.speed, raw);
      this.draw();
      this._fpsFrames++;
      this._fpsClock += raw;
      if (this._fpsClock > 0.55) {
        this.fps = Math.round(this._fpsFrames / this._fpsClock);
        this._fpsFrames = 0;
        this._fpsClock = 0;
      }
      if (this.running) this.frameHandle = requestAnimationFrame(this._boundFrame);
    }

    update(dt, raw) {
      this.time += dt;
      const p = this.pointer;
      p.x = damp(p.x, p.tx, 8, raw);
      p.y = damp(p.y, p.ty, 8, raw);
      p.energy = Math.max(0, p.energy - raw * 0.5);
      p.active = p.energy > 0.003 || (p.active && this.time - p.lastMove < 7);

      const targetX = p.active ? (p.x / Math.max(1, this.W)) * 2 - 1 : 0;
      const targetY = p.active ? (p.y / Math.max(1, this.H)) * 2 - 1 : 0;
      this.parallax.x = damp(this.parallax.x, targetX, 2.2, raw);
      this.parallax.y = damp(this.parallax.y, targetY, 2.2, raw);

      const dishTarget = 0.48 + this.parallax.x * 0.11 + Math.sin(this.time * 0.21) * 0.012;
      this.dishAim = damp(this.dishAim, dishTarget, 1.8, raw);

      if (this.paletteBlend < 1) {
        this.paletteBlend = Math.min(1, this.paletteBlend + raw / 0.9);
        this.palette = mixPalettes(this.paletteFrom, this.paletteTo, smoothstep(this.paletteBlend));
        if (this.paletteBlend >= 1) this.palette = clonePalette(this.paletteTo);
      }

      this.trailClock += raw;
      if (p.active && p.energy > 0.08 && this.trailClock > 0.055) {
        this.trailClock = 0;
        this.trails.push({
          x: p.x + (this.runtimeRng() - 0.5) * 3,
          y: p.y + (this.runtimeRng() - 0.5) * 3,
          vx: (this.runtimeRng() - 0.5) * 2.5,
          vy: -0.3 - this.runtimeRng() * 1.4,
          age: 0,
          life: 0.7 + this.runtimeRng() * 0.6,
          tone: this.runtimeRng() > 0.42
        });
      }
      for (const t of this.trails) {
        t.age += raw;
        t.x += t.vx * raw;
        t.y += t.vy * raw;
        t.vy += raw * 0.6;
      }
      this.trails = this.trails.filter((t) => t.age < t.life);

      this.rippleClock -= dt;
      if (this.rippleClock <= 0) {
        this.spawnRipple(
          this.W * (0.08 + this.runtimeRng() * 0.84),
          this.waterLine + this.H * (0.04 + this.runtimeRng() * 0.19),
          0.3 + this.runtimeRng() * 0.5
        );
        this.rippleClock = 2.8 + this.runtimeRng() * 4.2;
      }

      this.pointerRippleClock -= dt;
      if (p.active && p.y > this.waterLine + 2 && this.pointerRippleClock <= 0) {
        this.spawnRipple(p.x, p.y, 0.18);
        this.pointerRippleClock = 0.85;
      }

      for (const pulse of this.pulses) pulse.age += raw;
      this.pulses = this.pulses.filter((r) => r.age < r.life);

      for (const ripple of this.ripples) ripple.age += raw;
      this.ripples = this.ripples.filter((r) => r.age < r.life);

      for (const meteor of this.meteors) meteor.age += raw;
      this.meteors = this.meteors.filter((m) => m.age < m.life);
      if (this.time > this.nextMeteor) {
        this.meteors.push({
          x: this.W * (0.24 + this.runtimeRng() * 0.64),
          y: this.H * (0.05 + this.runtimeRng() * 0.18),
          vx: (this.runtimeRng() > 0.5 ? -1 : 1) * this.W * (0.1 + this.runtimeRng() * 0.13),
          vy: this.H * (0.1 + this.runtimeRng() * 0.13),
          age: 0,
          life: 0.8 + this.runtimeRng() * 0.45,
          size: 1,
          triggered: false
        });
        this.nextMeteor = this.time + 11 + this.runtimeRng() * 17;
      }

      this.signalFlare = Math.max(0, this.signalFlare - raw * 0.65);
      this.boat.rock *= Math.exp(-raw * 1.4);
      for (const f of this.fireflies) {
        f.energy = Math.max(0, (f.energy || 0) - raw * 0.7);
      }
    }

    renderOnce() {
      if (!this.W || this.destroyed) return;
      this.draw();
    }

    destroy() {
      this.destroyed = true;
      this.stop();
    }

    /* ── painting ─────────────────────────────────────────────────────────── */

    draw() {
      if (!this.ctx) return;
      const ctx = this.ctx;
      const W = this.W;
      const H = this.H;
      const t = this.time;
      const P = this.palette;
      const C = (key, alpha = 1) => rgba(P[key], alpha);

      ctx.clearRect(0, 0, W, H);
      this._starPositions.length = 0;

      this.drawSky(ctx, P, C, t);
      this.drawStars(ctx, P, C, t);
      this.drawMeteors(ctx, P, C);
      this.drawPlanet(ctx, P, C, t);
      this.drawClouds(ctx, P, C, t);
      this.drawConstellation(ctx, P, C);
      this.drawRidges(ctx, P, C, t);
      this.drawWater(ctx, P, C, t);
      this.drawDish(ctx, P, C, t);
      this.drawBoat(ctx, P, C, t);
      this.drawForeground(ctx, P, C, t);
      this.drawFireflies(ctx, P, C, t);
      this.drawMotes(ctx, P, C, t);
      this.drawPointer(ctx, P, C, t);
      this.drawPulses(ctx, P, C, t);
    }

    drawSky(ctx, P, C, t) {
      const W = this.W;
      const H = this.H;
      const horizon = this.horizon;

      for (let y = 0; y < horizon; y += 3) {
        const color = sampleSky(P, y / Math.max(1, horizon));
        ctx.fillStyle = rgba(color);
        ctx.fillRect(0, y, W, 3);
      }

      // A soft, dithered airglow above the treeline.
      for (let i = 0; i < 3; i++) {
        ditherRect(
          ctx,
          -W * 0.05,
          horizon - H * (0.035 + i * 0.04),
          W * 1.1,
          1,
          C('horizonGlow'),
          2,
          0.07 - i * 0.014
        );
      }

      // Dust of the galaxy, intentionally sparse, not a purple nebula.
      ctx.save();
      for (const d of this.starDust) {
        const x = mod(d.x * W + this.parallax.x * 1.1, W);
        const y = d.y * horizon + this.parallax.y * 0.7;
        if (y < 0 || y > horizon - 2) continue;
        ctx.globalAlpha = d.a;
        ctx.fillStyle = C(d.y < 0.24 ? 'starCool' : 'star');
        ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
      }
      ctx.restore();

      // A single low cloud of warmth gathers where the sky meets the earth.
      ditherRect(ctx, 0, horizon - 2, W, 2, C('haze'), 2, 0.08);
    }

    drawStars(ctx, P, C, t) {
      const W = this.W;
      const H = this.H;
      const horizon = this.horizon;
      const parallaxX = this.parallax.x * 2.2;
      const parallaxY = this.parallax.y * 1.8;

      for (const star of this.stars) {
        const x = Math.round(mod(star.x * W + parallaxX * star.depth, W));
        const y = Math.round(star.y * horizon + parallaxY * star.depth);
        if (y < -2 || y > horizon - 1) continue;

        const twinkle = 0.5 + 0.5 * Math.sin(t * star.speed + star.phase);
        const alpha = clamp(star.bright * (0.28 + twinkle * 0.72), 0, 1);
        const color = star.tone > 0.84 ? C('starCool', alpha) : C(star.warm ? 'star' : 'white', alpha);

        if (star.size === 2) {
          sparkle(ctx, x, y, 1 + (twinkle > 0.75 ? 1 : 0), color, 0.75);
        } else {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 1, 1);
        }

        if (star.size === 2 || star.bright > 0.89) {
          this._starPositions.push({ x, y, alpha, color });
        }
      }

      // A few stars carry a faint pixel halo.
      if (this.stars.length) {
        const a = this.stars[3];
        if (a) {
          const x = Math.round(mod(a.x * W + parallaxX * a.depth, W));
          const y = Math.round(a.y * horizon + parallaxY * a.depth);
          ditherDisc(ctx, x, y, 3, C('starCool'), 1, 0.09);
        }
      }
    }

    drawConstellation(ctx, P, C) {
      const p = this.pointer;
      if (!this.interactive || !p.active || p.y > this.horizon || !this._starPositions.length) return;
      const calm = clamp(1 - (this.time - p.lastMove) / 2.8, 0, 1) * clamp(p.energy, 0, 1);
      if (calm < 0.03) return;

      const near = this._starPositions
        .map((s) => ({ ...s, d: Math.hypot(s.x - p.x, s.y - p.y) }))
        .filter((s) => s.d > 8 && s.d < this.W * 0.18 + 20)
        .sort((a, b) => a.d - b.d)
        .slice(0, 3);

      ctx.save();
      for (let i = 0; i < near.length; i++) {
        const s = near[i];
        ctx.globalAlpha = 0.055 * calm * (1 - i * 0.18);
        ctx.strokeStyle = C('accent');
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(Math.round(p.x) + 0.5, Math.round(p.y) + 0.5);
        ctx.lineTo(s.x + 0.5, s.y + 0.5);
        ctx.stroke();
        if (i === 0) {
          px(ctx, s.x, s.y, C('accent', 0.45 * calm));
          px(ctx, s.x - 1, s.y, C('accent', 0.15 * calm));
          px(ctx, s.x + 1, s.y, C('accent', 0.15 * calm));
        }
      }
      ctx.restore();
    }

    drawMeteors(ctx, P, C) {
      const horizon = this.horizon;
      for (const meteor of this.meteors) {
        const progress = meteor.age / meteor.life;
        const strength = Math.sin(Math.min(1, progress) * Math.PI);
        const vx = meteor.vx;
        const vy = meteor.vy;
        const speed = Math.max(0.001, Math.hypot(vx, vy));
        const ux = vx / speed;
        const uy = vy / speed;
        const tail = meteor.triggered ? 16 : 9;
        const headX = meteor.x + vx * meteor.age;
        const headY = meteor.y + vy * meteor.age;
        if (headY > horizon + 8) continue;

        ctx.save();
        for (let i = tail; i >= 0; i--) {
          const fade = (1 - i / (tail + 1)) * strength;
          if (fade <= 0.01) continue;
          ctx.globalAlpha = fade * (meteor.triggered ? 0.88 : 0.52);
          ctx.fillStyle = C(i < 2 ? 'white' : i < 6 ? 'warm' : 'star');
          const x = Math.round(headX - ux * i * 1.55);
          const y = Math.round(headY - uy * i * 1.55);
          ctx.fillRect(x, y, i < 2 ? 2 : 1, 1);
        }
        if (meteor.triggered) {
          sparkle(ctx, headX, headY, 2, C('warm', 0.85), strength);
        }
        ctx.restore();
      }
    }

    drawPlanet(ctx, P, C, t) {
      const planet = this.layout.planet;
      if (!planet) return;
      const { x, y, r } = planet;

      // A restrained halo; the rings should do most of the work.
      ditherDisc(ctx, x, y, r * 1.4, C('horizonGlow'), 5, 0.045);
      ditherDisc(ctx, x, y, r * 1.12, C('planet'), 4, 0.035);

      // Back half of the rings.
      this.drawRingHalf(ctx, P, C, false);

      // Shaded sphere, painted three tones at a time.
      for (let dy = -r; dy <= r; dy++) {
        const span = Math.sqrt(Math.max(0, r * r - dy * dy));
        const left = x - span;
        const right = x + span;
        const ny = dy / r;
        const yRow = Math.round(y + dy);
        const brightNx = clamp(-(0.2 + 0.38 * ny) / 0.62, -1, 1);
        const darkNx = clamp(-(-0.24 + 0.38 * ny) / 0.62, -1, 1);
        const brightEdge = x + brightNx * span;
        const darkEdge = x + darkNx * span;

        rect(ctx, left, yRow, right - left, 1, C('planetMid'));
        if (brightEdge > left + 0.5) {
          rect(ctx, left, yRow, brightEdge - left, 1, C('planet'));
        }
        if (darkEdge < right - 0.5) {
          rect(ctx, darkEdge, yRow, right - darkEdge, 1, C('planetDark'));
        }
        if (dy % 7 === 0) {
          px(ctx, left + Math.round(span * 0.13), yRow, C('planetRim', 0.32));
        }
      }

      // Craters, with a single-pixel highlight on the upper-left edge.
      const craters = [
        { x: -0.28, y: -0.12, r: 0.16 },
        { x: 0.18, y: 0.18, r: 0.1 },
        { x: -0.06, y: 0.38, r: 0.065 }
      ];
      for (const crater of craters) {
        const cx = x + crater.x * r;
        const cy = y + crater.y * r;
        const cr = crater.r * r;
        fillEllipse(ctx, cx, cy, cr, cr * 0.78, 0, C('planetDark', 0.72));
        strokeEllipse(ctx, cx, cy, cr, cr * 0.78, 0, C('planetRim', 0.25), Math.PI * 1.02, Math.PI * 1.7, 17);
      }

      // A slow, very faint weather band crossing the disc.
      const bandY = y - r * 0.42 + Math.sin(t * 0.09) * 1.2;
      const bandSpan = Math.sqrt(Math.max(0, r * r - (bandY - y) * (bandY - y)));
      for (let bx = -bandSpan; bx < bandSpan; bx += 2) {
        if (hash2(bx, Math.round(bandY)) > 0.35) {
          px(ctx, x + bx, bandY, C('planetDark', 0.28));
        }
      }

      // Top-left rim light.
      strokeEllipse(ctx, x, y, r, r, 0, C('planetRim', 0.8), Math.PI * 1.04, Math.PI * 1.64, 26);
      strokeEllipse(ctx, x, y, r - 1, r - 1, 0, C('planet', 0.32), Math.PI * 1.02, Math.PI * 1.72, 25);

      // Front half of the rings, over the sphere.
      this.drawRingHalf(ctx, P, C, true);

      // A small glint riding the front ring.
      const glint = (t * 0.08) % 1;
      const a = Math.PI * (0.15 + glint * 0.7);
      const ex = Math.cos(a) * r * 1.92;
      const ey = Math.sin(a) * r * 0.48;
      sparkle(ctx, x + ex, y + ey, 1, C('ringBright', 0.65), 0.8);
    }

    drawRingHalf(ctx, P, C, front) {
      const planet = this.layout.planet;
      if (!planet) return;
      const { x, y, r } = planet;
      const from = front ? 0 : Math.PI;
      const to = front ? Math.PI : TAU;
      const alpha = front ? 0.7 : 0.3;
      const width = front ? 1 : 1;

      ctx.save();
      strokeEllipse(ctx, x, y, r * 1.92, r * 0.48, -0.08, C('ring', alpha), from, to, 118, 4, front ? 1 : 3);
      strokeEllipse(ctx, x, y, r * 1.62, r * 0.39, -0.08, C('ringBright', alpha * 0.65), from, to, 96, 6, front ? 3 : 0);
      if (front) {
        for (let i = 0; i < 7; i++) {
          const angle = Math.PI * (0.08 + i * 0.13);
          const ex = Math.cos(angle) * r * 1.92;
          const ey = Math.sin(angle) * r * 0.48;
          ctx.globalAlpha = 0.55;
          ctx.fillStyle = C('ringBright');
          ctx.fillRect(Math.round(x + ex), Math.round(y + ey), width, 1);
        }
      }
      ctx.restore();
    }

    drawClouds(ctx, P, C, t) {
      const W = this.W;
      const H = this.H;
      for (const cloud of this.clouds) {
        const drift = mod(cloud.x * W + t * cloud.speed * W, W + cloud.w * 2) - cloud.w;
        const y = cloud.y * H + this.parallax.y * 1.6;
        if (y > this.horizon - 1) continue;
        const alpha = cloud.a * (0.65 + 0.35 * Math.sin(t * 0.05 + cloud.x * 9));

        ditherRect(ctx, drift, y, cloud.w, 1, C('cloud'), 2, alpha);
        ditherRect(ctx, drift + cloud.w * 0.13, y - 2, cloud.w * 0.52, 1, C('cloud'), 2, alpha * 0.7);
        ditherRect(ctx, drift + cloud.w * 0.3, y + 1, cloud.w * 0.35, 1, C('haze'), 2, alpha * 0.25);
        if (cloud.w > this.W * 0.2) {
          ditherDisc(ctx, drift + cloud.w * 0.58, y, cloud.h * 2.2, C('cloud'), 2, alpha * 0.4);
        }
      }
    }

    _ridgeY(x, layer) {
      const W = this.W;
      const H = this.H;
      const u = x / Math.max(1, W);
      const seed = this.seed;
      if (layer === 'far') {
        const base = this.horizon + H * 0.034;
        const amp = H * 0.09;
        const n =
          0.47 +
          0.24 * Math.sin(u * 7.4 + seed * 0.0017) +
          0.15 * Math.sin(u * 16.1 + seed * 0.0031) +
          0.075 * Math.sin(u * 31.7 + seed * 0.0051) +
          0.06 * Math.sin(u * 2.8 + seed * 0.0009);
        return base - amp * n;
      }
      const base = this.horizon + H * 0.068;
      const amp = H * 0.058;
      const n =
        0.5 +
        0.22 * Math.sin(u * 5.4 + seed * 0.0023 + 1.3) +
        0.15 * Math.sin(u * 12.9 + seed * 0.0041) +
        0.09 * Math.sin(u * 27.3 + seed * 0.0067 + 2.4);
      return base - amp * n;
    }

    drawRidges(ctx, P, C, t) {
      const W = this.W;
      const H = this.H;
      const horizon = this.horizon;
      const waterLine = this.waterLine;
      const parX = this.parallax.x * 4.2;

      // Far ridge.
      for (let x = -10; x < W + 10; x += 2) {
        const wx = x + parX * 0.55;
        const top = this._ridgeY(wx, 'far');
        rect(ctx, x, top, 2, waterLine + 4 - top, C('far'));
        if (hash2(Math.round(x * 0.31), 3) > 0.54) {
          px(ctx, x, top, C('farLight', 0.38));
        }
      }

      // Its small, distant pines.
      for (const tree of this.farTrees) {
        const x = mod(tree.x + parX * 0.5, W + 8) - 4;
        const root = this._ridgeY(x, 'far') + 2;
        drawPine(ctx, x, root, tree.h, C('mid', 0.9), tree.lean);
      }

      // Low fog between ridges.
      for (let band = 0; band < 3; band++) {
        const y = horizon + H * (0.006 + band * 0.018);
        const offset = Math.round(mod(t * (1.2 + band * 0.5), W));
        ctx.save();
        ctx.globalAlpha = 0.06 - band * 0.012;
        ctx.fillStyle = C('haze');
        for (let x = -offset; x < W; x += 13) {
          if (hash2(x, band + 9) > 0.37) {
            const len = 3 + Math.floor(hash2(band, x) * 10);
            ctx.fillRect(x, y + Math.floor(hash2(x, band) * 2), len, 1);
          }
        }
        ctx.restore();
      }

      // The nearer ridge carrying the pines.
      for (let x = -8; x < W + 8; x += 2) {
        const wx = x + parX;
        const top = this._ridgeY(wx, 'mid');
        rect(ctx, x, top, 2, waterLine + 4 - top, C('mid'));
        if (hash2(Math.round(x * 0.41), 7) > 0.65) {
          px(ctx, x, top, C('farLight', 0.22));
        }
      }

      for (const tree of this.midTrees) {
        const x = mod(tree.x + parX * 0.8, W + 10) - 5;
        const root = this._ridgeY(x, 'mid') + 2;
        drawPine(ctx, x, root, tree.h, C('near'), tree.lean, C('farLight', 0.25));
      }

      // Two tiny warm windows hidden in the trees.
      const lights = [
        { x: W * 0.36, y: H * 0.035 },
        { x: W * 0.57, y: H * 0.055 }
      ];
      if (W > 170) {
        for (const light of lights) {
          const lx = Math.round(light.x + Math.sin(t * 0.6 + light.y) * 0.3);
          const ly = Math.round(this._ridgeY(light.x, 'mid') + light.y * 0.18);
          const pulse = 0.55 + 0.45 * Math.sin(t * 0.9 + light.x * 0.1);
          px(ctx, lx, ly, C('warm', 0.7 + pulse * 0.3));
          ditherDisc(ctx, lx, ly, 3, C('warm'), 2, 0.08 + pulse * 0.06);
        }
      }

      // A dark lip where the land meets the water.
      for (let x = 0; x < W; x += 2) {
        const lip = waterLine - 3 + Math.round(Math.sin(x * 0.17 + this.seed * 0.1) * 1.2);
        rect(ctx, x, lip, 2, waterLine - lip + 1, C('near'));
      }

      // Foreground haze, breathing just above the lake.
      ditherRect(ctx, 0, waterLine - 2, W, 2, C('haze'), 2, 0.06);
    }

    drawWater(ctx, P, C, t) {
      const W = this.W;
      const H = this.H;
      const waterLine = this.waterLine;
      const depth = Math.max(1, H - waterLine);
      const planet = this.layout.planet;

      // Deep water is built in quiet horizontal steps.
      for (let y = waterLine; y < H; y += 3) {
        const k = (y - waterLine) / depth;
        const color = mixRgb(P.water, P.waterMid, 0.18 + k * 0.72);
        ctx.fillStyle = rgba(color);
        ctx.fillRect(0, y, W, 3);
      }

      // The reflected planet, broken into wobbling dashes.
      if (planet) {
        for (let y = waterLine + 1; y < H - 1; y += 2) {
          const k = (y - waterLine) / depth;
          const wobble =
            Math.sin(t * 1.25 + k * 10.5) * (1 + k * 4) +
            Math.sin(t * 0.44 + k * 23.7) * 1.2;
          const cx = planet.x + wobble + this.parallax.x * 2.2;
          const half = planet.r * (0.9 - k * 0.42);
          const alpha = Math.max(0, 0.16 * (1 - k * 0.52) * (0.58 + 0.42 * Math.sin(t * 2.1 + y * 0.7)));
          if (alpha < 0.015) continue;
          for (let x = -half; x < half; x += 2) {
            if (hash2(x + 4, y) > 0.52) {
              const len = 1 + Math.floor(hash2(y, x) * 3);
              rect(ctx, cx + x, y, len, 1, C('planet', alpha));
            }
          }
        }
      }

      // Horizontal ripples and glints.
      for (let y = waterLine + 3; y < H; y += 4) {
        const k = (y - waterLine) / depth;
        const shift = Math.round((t * (0.7 + k * 1.5) + y * 0.47) % 15);
        for (let x = -15; x < W + 15; x += 15) {
          if (hash2(Math.floor(x / 15) + 4, y) < 0.53) {
            const len = 1 + Math.floor(hash2(x, y) * 4);
            rect(
              ctx,
              x + shift,
              y,
              len,
              1,
              C('waterLight', 0.08 + (1 - k) * 0.12)
            );
          }
        }
      }

      // The telescope’s warm little beacon finds the lake too.
      const dish = this.layout.dish;
      if (dish) {
        const flicker = 0.45 + 0.25 * Math.sin(t * 1.8 + 0.7);
        for (let y = waterLine + Math.floor(depth * 0.18); y < H; y += 3) {
          if (hash2(y, dish.x) > 0.5) {
            px(ctx, dish.x + Math.sin(t * 0.8 + y * 0.3) * 2, y, C('warm', flicker));
          }
        }
      }

      // Ambient and interactive ripples are clipped to the water plane.
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, waterLine, W, H - waterLine);
      ctx.clip();
      for (const ripple of this.ripples) {
        const p = ripple.age / ripple.life;
        const radius = (W * (0.045 + ripple.power * 0.06)) * Math.pow(p, 0.64);
        if (radius < 1) continue;
        const alpha = (1 - p) * (1 - p) * (0.14 + ripple.power * 0.16);
        const color = C('accent', alpha);
        strokeEllipse(ctx, ripple.x, ripple.y, radius, radius * 0.27, 0, color, 0, TAU, Math.max(18, Math.round(radius * 3)), 4, 0);
        strokeEllipse(ctx, ripple.x, ripple.y, radius * 0.62, radius * 0.17, 0, C('waterLight', alpha * 0.7), 0, TAU, Math.max(14, Math.round(radius * 2)), 5, 1);
      }
      ctx.restore();

      // Waterline shimmer.
      ctx.save();
      for (let x = 0; x < W; x += 3) {
        if (hash2(x, 1) > 0.6) {
          const yy = waterLine + Math.round(Math.sin(x * 0.15 + t * 0.3) * 0.6);
          ctx.globalAlpha = 0.18;
          ctx.fillStyle = C('haze');
          ctx.fillRect(x, yy, 1 + Math.floor(hash2(x, 4) * 3), 1);
        }
      }
      ctx.restore();
    }

    drawDish(ctx, P, C, t) {
      const d = this.layout.dish;
      if (!d) return;
      const x = d.x;
      const y = d.y;
      const r = d.r;
      const baseY = d.baseY;
      const aim = this.dishAim;
      const normal = aim - Math.PI / 2;
      const flare = this.signalFlare;

      // A little station house tucked beneath the mast.
      const houseW = Math.max(7, Math.round(r * 0.62));
      const houseH = Math.max(4, Math.round(r * 0.28));
      const houseX = Math.round(x + r * 0.36);
      const houseY = Math.round(baseY - houseH);
      rect(ctx, houseX, houseY, houseW, houseH, C('near'));
      rect(ctx, houseX - 1, houseY - 1, houseW + 2, 1, C('metal', 0.75));
      px(ctx, houseX + houseW - 2, houseY + 1, C('warm', 0.7 + 0.3 * Math.sin(t * 1.5)));
      ditherDisc(ctx, houseX + houseW - 2, houseY + 1, 3, C('warm'), 2, 0.08);

      // Tripod legs and cross-bracing.
      const pivotX = Math.round(x - r * 0.04);
      const pivotY = Math.round(y + r * 0.23);
      line(ctx, pivotX - r * 0.32, baseY, pivotX, pivotY, C('metal', 0.95));
      line(ctx, pivotX + r * 0.28, baseY, pivotX, pivotY, C('metal', 0.95));
      line(ctx, pivotX, baseY, pivotX, pivotY, C('metal', 0.65));
      const braceY = Math.round(baseY - (baseY - pivotY) * 0.46);
      const braceHalf = r * 0.18;
      line(ctx, pivotX - braceHalf, braceY, pivotX + braceHalf, braceY, C('metal', 0.65));
      line(ctx, pivotX - braceHalf * 0.55, baseY - 1, pivotX + braceHalf, braceY, C('metal', 0.35));
      px(ctx, pivotX, baseY - 1, C('metalLight', 0.7));

      // Bowl. The outer ellipse is the rim; the inner one is the dark parabola.
      fillEllipse(ctx, x, y, r, r * 0.45, aim, C('metalLight'));
      fillEllipse(ctx, x, y, r - Math.max(1.5, r * 0.075), r * 0.39, aim, C('metal'));
      fillEllipse(ctx, x, y, r - Math.max(3, r * 0.16), r * 0.32, aim, C('near'));
      strokeEllipse(ctx, x, y, r - 1, r * 0.43, aim, C('metalLight', 0.75), 0, TAU, 90);

      // A crescent of light catches the upper lip.
      strokeEllipse(
        ctx, x, y, r - 1, r * 0.43, aim,
        C('white', 0.49 + flare * 0.12),
        Math.PI * 1.1, Math.PI * 1.88, 34
      );

      // Radial ribs inside the bowl.
      for (let i = 0; i < 4; i++) {
        const a = aim + Math.PI * (0.14 + i * 0.24);
        const ex = x + Math.cos(a) * (r - 2);
        const ey = y + Math.sin(a) * (r - 2) * 0.45;
        line(ctx, x, y, ex, ey, C('metalLight', 0.16));
      }

      // The feed arm reaches into the sky.
      const feedX = x + Math.cos(normal) * r * 1.16;
      const feedY = y + Math.sin(normal) * r * 1.16;
      const rimA = Math.cos(aim + 0.9) * r * 0.78;
      const rimB = Math.sin(aim + 0.9) * r * 0.36;
      const rimC = Math.cos(aim - 0.85) * r * 0.78;
      const rimD = Math.sin(aim - 0.85) * r * 0.36;
      line(ctx, x + rimA, y + rimB, feedX, feedY, C('metalLight', 0.75));
      line(ctx, x + rimC, y + rimD, feedX, feedY, C('metalLight', 0.55));
      line(ctx, x, y, feedX, feedY, C('metalLight', 0.45));

      // Receiver and its local glow.
      const receiverPulse = 0.55 + 0.45 * Math.sin(t * 2.2) + flare * 0.8;
      rect(ctx, Math.round(feedX), Math.round(feedY), 2, 1, C('warm', 0.85));
      px(ctx, Math.round(feedX), Math.round(feedY) - 1, C('white', 0.8));
      ditherDisc(ctx, feedX, feedY, Math.max(4, r * 0.2), C('warm'), 2, 0.08 + flare * 0.14);
      if (receiverPulse > 0.8) {
        sparkle(ctx, feedX, feedY, 2, C('warm', 0.6), 0.5);
      }

      // A directional signal leaving the receiver. It becomes emphatic on signal.
      const boost = 1 + flare * 1.8;
      for (let k = 0; k < 3; k++) {
        const phase = mod(t * 0.13 + k / 3, 1);
        const radius = r * (0.45 + phase * 2.3);
        const alpha = (1 - phase) * (1 - phase) * (0.12 * boost);
        if (alpha < 0.008) continue;
        ctx.save();
        ctx.globalAlpha = 1;
        strokeEllipse(
          ctx, feedX, feedY, radius, radius, 0,
          C('accent', alpha), Math.PI * 1.12, Math.PI * 1.88,
          Math.max(14, Math.round(radius * 2.4)), 4, k * 2
        );
        ctx.restore();
      }

      // A slow red eye on the mast.
      const blink = Math.sin(t * 1.4 + 2) > 0.7;
      if (blink) {
        px(ctx, pivotX - r * 0.32, baseY - 2, C('warm', 0.8));
        ditherDisc(ctx, pivotX - r * 0.32, baseY - 2, 2, C('warm'), 1, 0.1);
      }
    }

    drawBoat(ctx, P, C, t) {
      const b = this.layout.boat;
      if (!b) return;
      const W = this.W;
      const H = this.H;
      const bob =
        Math.sin(t * 0.92 + this.boat.phase) * 0.55 +
        Math.sin(t * 2.3 + this.boat.phase * 2) * this.boat.rock * 0.5;
      const x = Math.round(W * 0.295 + Math.sin(t * 0.07 + this.boat.phase) * W * 0.005);
      const y = Math.round(b.y + bob);
      if (y > H - 2) return;

      // Hull.
      rect(ctx, x - 6, y, 12, 1, C('metal', 0.95));
      rect(ctx, x - 5, y + 1, 10, 1, C('near'));
      rect(ctx, x - 4, y + 2, 8, 1, C('near'));
      rect(ctx, x - 2, y + 3, 4, 1, C('metal', 0.8));
      px(ctx, x - 6, y, C('metalLight', 0.55));
      px(ctx, x + 5, y, C('metalLight', 0.55));
      // Small stern lamp and its reflection.
      rect(ctx, x + 4, y - 4, 1, 4, C('metal', 0.85));
      px(ctx, x + 4, y - 5, C('warm', 0.95));
      ditherDisc(ctx, x + 4, y - 5, 4, C('warm'), 2, 0.1);
      for (let i = 0; i < 5; i++) {
        const yy = y + 5 + i * 2;
        if (yy > H - 1) break;
        if (hash2(i, x) > 0.3) px(ctx, x + 4 + Math.sin(t + i) * 1.5, yy, C('warm', 0.18 - i * 0.025));
      }
      // A slim oar resting across the boat.
      line(ctx, x - 8, y + 1, x + 3, y - 3, C('metalLight', 0.35));
    }

    drawForeground(ctx, P, C, t) {
      const W = this.W;
      const H = this.H;
      const seed = this.seed;
      const waterLine = this.waterLine;

      // Left and right nearer banks.
      const leftEdge = Math.round(W * 0.175);
      for (let x = 0; x < leftEdge; x += 2) {
        const top =
          H -
          H * 0.044 -
          Math.sin(x * 0.19 + seed * 0.001) * H * 0.014 -
          Math.sin(x * 0.07 + 1.2) * H * 0.018;
        rect(ctx, x, top, 2, H - top, C('near'));
        if (hash2(x, 2) > 0.58) px(ctx, x, top, C('farLight', 0.2));
      }

      const rightEdge = Math.round(W * 0.855);
      for (let x = rightEdge; x < W; x += 2) {
        const top =
          H -
          H * 0.033 -
          Math.sin(x * 0.16 + seed * 0.002 + 2) * H * 0.012 -
          Math.sin(x * 0.06) * H * 0.012;
        rect(ctx, x, top, 2, H - top, C('near'));
        if (hash2(x, 5) > 0.66) px(ctx, x, top, C('farLight', 0.16));
      }

      // Reeds rooted in the near banks and around the lake edge.
      for (const reed of this.reeds) {
        const sway = Math.sin(t * reed.speed + reed.phase) * 1.5;
        drawReed(
          ctx,
          reed.x,
          reed.base,
          reed.h,
          sway,
          C('near'),
          reed.tip ? C('accent', 0.38) : null
        );
      }

      // Fern silhouettes.
      for (const fern of this.ferns) {
        const sway = Math.sin(t * 0.35 + fern.phase) * 0.45;
        drawFern(ctx, fern.x, fern.base, fern.h, fern.lean, sway, C('near'), C('accent', 0.23));
      }

      // A handful of glowing flowers answer the pointer.
      const p = this.pointer;
      for (const flower of this.flowers) {
        const sway = Math.sin(t * 0.42 + flower.phase) * 1.1;
        const fx = flower.x + sway;
        const fy = flower.y - flower.h;
        const color = flower.tone ? C('warm') : C('accent');
        line(ctx, flower.x, flower.y, fx, fy, C('near', 0.95));
        const d = p.active ? Math.hypot(p.x - fx, p.y - fy) : 99;
        const wake = clamp(1 - d / 36, 0, 1);
        const pulse = 0.55 + 0.35 * Math.sin(t * 1.3 + flower.phase) + wake * 0.7;
        ctx.fillStyle = color;
        ctx.fillRect(Math.round(fx), Math.round(fy), 1, 1);
        px(ctx, Math.round(fx) - 1, Math.round(fy), color);
        if (wake > 0.2 || this.signalFlare > 0.25) {
          ditherDisc(ctx, fx, fy, 3 + wake * 3 + this.signalFlare, color, 2, 0.06 + wake * 0.11 + this.signalFlare * 0.04);
        }
        if (pulse > 0.94) sparkle(ctx, fx, fy, 1, color, 0.32);
      }

      // A low tracery of grass at the very bottom.
      for (let x = 0; x < W; x += 3) {
        if (hash2(x, 21) > 0.48) {
          const base = H - 1;
          const h = 1 + Math.floor(hash2(x, 8) * 4);
          line(
            ctx,
            x,
            base,
            x + Math.sin(t * 0.3 + x * 0.2) * 1.2,
            base - h,
            C('near', 0.85)
          );
        }
      }
    }

    drawFireflies(ctx, P, C, t) {
      const p = this.pointer;
      const W = this.W;
      for (const fly of this.fireflies) {
        const baseX = fly.x + Math.sin(t * fly.speed + fly.phase) * fly.driftX +
          Math.sin(t * 0.27 + fly.phase * 1.7) * fly.driftX * 0.25;
        const baseY = fly.y + Math.cos(t * fly.speed * 0.73 + fly.phase * 2) * fly.driftY;
        let x = baseX;
        let y = baseY;

        if (this.interactive && p.active) {
          const dx = p.x - x;
          const dy = p.y - y;
          const dist = Math.hypot(dx, dy);
          const pull = Math.max(0, 1 - dist / (W * 0.23 + 24)) * clamp(p.energy, 0, 1);
          x += dx * pull * 0.13;
          y += dy * pull * 0.09;
        }

        const twinkle = 0.5 + 0.5 * Math.sin(t * (0.8 + fly.speed) + fly.phase * 2.3);
        const energy = clamp((fly.energy || 0) + this.signalFlare * 0.35, 0, 1.6);
        const alpha = clamp(fly.alpha * (0.32 + twinkle * 0.68) + energy * 0.2, 0, 0.96);
        const colorKey = fly.tone > 0.79 ? 'warm' : 'accent';
        const color = C(colorKey, alpha);
        const size = fly.size;

        ctx.fillStyle = color;
        ctx.fillRect(Math.round(x), Math.round(y), size, size);
        if (twinkle > 0.94 || size > 1) {
          sparkle(ctx, x, y, 1, color, alpha * 0.55);
        }
        if (fly.depth > 0.5) {
          ctx.globalAlpha = alpha * 0.11;
          ctx.fillStyle = C(colorKey);
          ctx.fillRect(Math.round(x) - 2, Math.round(y), 1, 1);
          ctx.fillRect(Math.round(x) + 2, Math.round(y), 1, 1);
          ctx.fillRect(Math.round(x), Math.round(y) - 2, 1, 1);
          ctx.fillRect(Math.round(x), Math.round(y) + 2, 1, 1);
          ctx.globalAlpha = 1;
        }
      }
    }

    drawMotes(ctx, P, C, t) {
      const H = this.H;
      ctx.save();
      for (const mote of this.motes) {
        const x = mote.x + Math.sin(t * 0.19 + mote.phase) * 5;
        const y = mote.y + Math.cos(t * 0.24 + mote.phase * 1.6) * 3;
        const alpha = mote.alpha * (0.5 + 0.5 * Math.sin(t * 0.65 + mote.phase));
        ctx.globalAlpha = alpha;
        ctx.fillStyle = C(mote.phase > 4 ? 'warm' : 'star');
        ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
      }
      ctx.restore();
      // Keep the top of the sky clean: H is intentionally touched here for cache reset.
      void H;
    }

    drawPointer(ctx, P, C, t) {
      const p = this.pointer;
      if (!this.interactive || !p.active) return;
      const energy = clamp(p.energy, 0, 1);
      if (energy < 0.02) return;

      for (const trail of this.trails) {
        const fade = Math.pow(1 - trail.age / trail.life, 2);
        const color = trail.tone ? C('accent', fade * 0.42) : C('warm', fade * 0.3);
        px(ctx, trail.x, trail.y, color);
      }

      const x = Math.round(p.x);
      const y = Math.round(p.y);
      ditherDisc(ctx, x, y, 5 + energy * 2, C('accent'), 2, 0.05 + energy * 0.055);
      ditherDisc(ctx, x, y, 2, C('white'), 1, 0.08 + energy * 0.08);
      sparkle(ctx, x, y, 1, C('white', 0.48 + energy * 0.35), 0.6 + energy * 0.4);
      px(ctx, x, y, C('white', 0.9));

      const orbit = t * 0.85;
      for (let i = 0; i < 3; i++) {
        const a = orbit + (i / 3) * TAU;
        const ox = Math.round(x + Math.cos(a) * (4 + energy * 2));
        const oy = Math.round(y + Math.sin(a) * (3 + energy * 1.5));
        px(ctx, ox, oy, C('accent', 0.16 + energy * 0.28));
      }

      if (p.y > this.waterLine + 1) {
        const pulse = (t * 0.7) % 1;
        strokeEllipse(
          ctx, x, p.y, 3 + pulse * 9, 1 + pulse * 2.4, 0,
          C('accent', (1 - pulse) * 0.2), 0, TAU, 24, 4, 0
        );
      }
    }

    drawPulses(ctx, P, C, t) {
      const W = this.W;
      const H = this.H;
      const waterLine = this.waterLine;
      for (const pulse of this.pulses) {
        const p = clamp(pulse.age / pulse.life, 0, 1);
        const fade = Math.pow(1 - p, 2.2) * pulse.power;
        if (fade < 0.005) continue;
        const color = pulse.hue === 'warm' ? 'warm' : 'accent';
        const maxR = W * (0.22 + pulse.power * 0.13);

        if (pulse.kind === 'sky') {
          const radius = maxR * Math.pow(p, 0.7);
          ctx.save();
          for (let i = 0; i < 2; i++) {
            const rr = radius * (1 - i * 0.24);
            strokeEllipse(
              ctx, pulse.x, pulse.y, rr, rr, 0,
              C(color, fade * (0.25 - i * 0.055)), 0, TAU,
              Math.max(30, Math.round(rr * 2.5)), 4 + i, i * 3
            );
          }
          for (let i = 0; i < 9; i++) {
            const a = (i / 9) * TAU + 0.2;
            const rr = radius * (0.82 + (i % 3) * 0.045);
            px(
              ctx,
              pulse.x + Math.cos(a) * rr,
              pulse.y + Math.sin(a) * rr * 0.86,
              C(i % 2 ? 'warm' : color, fade * 0.36)
            );
          }
          sparkle(ctx, pulse.x, pulse.y, 2, C(color, fade * 0.7), 0.8);
          if (pulse.power > 1) {
            ditherDisc(ctx, pulse.x, pulse.y, 9 * p + 2, C('white'), 2, fade * 0.05);
          }
          ctx.restore();
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.rect(0, waterLine, W, H - waterLine);
          ctx.clip();
          const radius = maxR * Math.pow(p, 0.62);
          for (let i = 0; i < 3; i++) {
            const rr = radius * (1 - i * 0.22);
            strokeEllipse(
              ctx, pulse.x, pulse.y, rr, rr * 0.26, 0,
              C(color, fade * (0.32 - i * 0.07)), 0, TAU,
              Math.max(24, Math.round(rr * 3)), 4 + i, i * 4
            );
          }
          ditherDisc(ctx, pulse.x, pulse.y, 5 + p * 8, C(color), 2, fade * 0.1);
          ctx.restore();
        }
      }
    }
  }

  const STYLE = `
    :host {
      --mosslight-ground: #03070b;
      position: fixed;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: -1;
      background: var(--mosslight-ground);
      contain: strict;
    }
    :host([inline]) {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
      pointer-events: none;
    }
  `;

  const INTERACTIVE_SELECTOR =
    'a,button,input,textarea,select,label,summary,dialog,[role="button"],[role="link"],[contenteditable="true"],[data-no-pulse]';

  class MosslightBG extends HTMLElement {
    static get observedAttributes() {
      return ['mood', 'paused', 'interactive', 'speed', 'seed'];
    }

    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      const style = document.createElement('style');
      style.textContent = STYLE;
      const canvas = document.createElement('canvas');
      canvas.setAttribute('aria-hidden', 'true');
      root.append(style, canvas);
      this._canvas = canvas;
      this._renderer = null;
      this._listening = false;
      this._motionOverride = false;
      this._reducedMql = window.matchMedia('(prefers-reduced-motion: reduce)');
      this._reduced = this._reducedMql.matches;
      this._rect = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
      this._resizeRaf = 0;
      this._onPointerMove = this._onPointerMove.bind(this);
      this._onPointerDown = this._onPointerDown.bind(this);
      this._onPointerLeave = this._onPointerLeave.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onScroll = this._onScroll.bind(this);
      this._onVisibility = this._onVisibility.bind(this);
      this._onReducedChange = this._onReducedChange.bind(this);
    }

    connectedCallback() {
      if (!this.hasAttribute('aria-hidden')) this.setAttribute('aria-hidden', 'true');
      this._manageStackingContext(true);
      this._initRenderer();
      this._listen(true);
      this._applyResize();
      this._syncMotion();
      this.dispatchEvent(
        new CustomEvent('mosslight:ready', {
          bubbles: true,
          detail: { mood: this._renderer.mood, size: [this._renderer.W, this._renderer.H] }
        })
      );
    }

    disconnectedCallback() {
      this._manageStackingContext(false);
      this._listen(false);
      if (this._renderer) {
        this._renderer.destroy();
        this._renderer = null;
      }
      if (this._resizeRaf) cancelAnimationFrame(this._resizeRaf);
      this._resizeRaf = 0;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (!this._renderer || oldValue === newValue) return;
      if (name === 'mood') {
        this._renderer.setMood(newValue || 'moss');
        this._updateFallback();
      } else if (name === 'speed') {
        this._renderer.setSpeed(newValue);
      } else if (name === 'seed') {
        this._renderer.setSeed(newValue);
      } else if (name === 'interactive') {
        this._renderer.setInteractive(newValue !== 'false');
        if (newValue === 'false') this._renderer.pointerLeave();
      } else if (name === 'paused') {
        this._syncMotion();
      }
    }

    _manageStackingContext(on) {
      // A negative-z-index fixed layer normally sits behind an opaque body
      // background. Isolation lifts it just above that background while still
      // keeping it behind the page's content.
      const target = this.hasAttribute('inline') ? this.parentElement : document.body;
      if (!target) return;
      if (on) {
        if (this._isolationTarget || target.style.isolation) return;
        this._isolationTarget = target;
        this._isolationWas = target.style.isolation;
        target.style.isolation = 'isolate';
      } else if (this._isolationTarget) {
        this._isolationTarget.style.isolation = this._isolationWas || '';
        this._isolationTarget = null;
      }
    }

    _initRenderer() {
      if (this._renderer) return;
      this._renderer = new Grove(this._canvas, {
        mood: this.getAttribute('mood') || 'moss',
        speed: this.getAttribute('speed') || 1,
        seed: this.getAttribute('seed') || 5271,
        interactive: this.getAttribute('interactive') !== 'false'
      });
      this._updateFallback();
      this._applyResize();
      this._renderer.setPaused(true);
    }

    _updateFallback() {
      const mood = this.getAttribute('mood') || 'moss';
      const palette = PALETTES[MOOD_NAMES.includes(mood) ? mood : 'moss'];
      this.style.setProperty('--mosslight-ground', palette.sky[0]);
    }

    _listen(on) {
      if (on === this._listening) return;
      this._listening = on;
      const method = on ? 'addEventListener' : 'removeEventListener';
      window[method]('pointermove', this._onPointerMove, { passive: true });
      window[method]('pointerdown', this._onPointerDown, { passive: true });
      window[method]('resize', this._onResize, { passive: true });
      window[method]('scroll', this._onScroll, { passive: true });
      document[method]('pointerleave', this._onPointerLeave, { passive: true });
      document[method]('visibilitychange', this._onVisibility);
      window[method]('blur', this._onPointerLeave);
      this._reducedMql[method]('change', this._onReducedChange);
    }

    _syncMotion() {
      if (!this._renderer) return;
      const explicitPause = this.hasAttribute('paused');
      const shouldPause = explicitPause || (this._reduced && !this._motionOverride);
      this._renderer.setPaused(shouldPause);
      this.setAttribute('data-motion-state', shouldPause ? 'paused' : 'running');
      this.dispatchEvent(
        new CustomEvent('mosslight:motion', {
          bubbles: true,
          detail: { paused: shouldPause, systemReduced: this._reduced, override: this._motionOverride }
        })
      );
    }

    _applyResize() {
      if (!this._renderer) return;
      const rect = this.getBoundingClientRect();
      const width = Math.max(1, rect.width || window.innerWidth);
      const height = Math.max(1, rect.height || window.innerHeight);
      this._rect = { left: rect.left, top: rect.top, width, height };
      this._renderer.resize(width, height);
    }

    _onResize() {
      if (this._resizeRaf) return;
      this._resizeRaf = requestAnimationFrame(() => {
        this._resizeRaf = 0;
        this._applyResize();
      });
    }

    _onScroll() {
      const rect = this.getBoundingClientRect();
      this._rect = { left: rect.left, top: rect.top, width: rect.width || window.innerWidth, height: rect.height || window.innerHeight };
    }

    _pointerNx(e) {
      const r = this._rect;
      if (!r.width || !r.height) return null;
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      if (nx < -0.02 || nx > 1.02 || ny < -0.02 || ny > 1.02) return null;
      return [nx, ny];
    }

    _onPointerMove(e) {
      if (!this._renderer || this._renderer.paused || !this._renderer.interactive) return;
      const pos = this._pointerNx(e);
      if (!pos) return;
      this._renderer.pointerMove(pos[0], pos[1], 1);
    }

    _onPointerDown(e) {
      if (!this._renderer || this._renderer.paused || !this._renderer.interactive) return;
      if (e.button !== undefined && e.button > 0) return;
      const path = e.composedPath ? e.composedPath() : [e.target];
      for (const node of path) {
        if (node instanceof Element && node.matches(INTERACTIVE_SELECTOR)) return;
      }
      const pos = this._pointerNx(e);
      if (!pos) return;
      this._renderer.pointerMove(pos[0], pos[1], 1.4);
      this._renderer.pulseNormalized(pos[0], pos[1], 0.85);
    }

    _onPointerLeave() {
      if (this._renderer) this._renderer.pointerLeave();
    }

    _onVisibility() {
      if (!this._renderer) return;
      if (document.hidden) {
        this._renderer.stop();
      } else if (!this._renderer.paused) {
        this._renderer.start();
      }
    }

    _onReducedChange(e) {
      this._reduced = e.matches;
      if (e.matches) this._motionOverride = false;
      this._syncMotion();
    }

    /* Public controls ------------------------------------------------------ */
    signal() {
      if (!this._renderer) return;
      this._renderer.signal();
      this.dispatchEvent(new CustomEvent('mosslight:signal', { bubbles: true }));
    }

    pause() {
      this.setAttribute('paused', '');
    }

    play() {
      this._motionOverride = true;
      this.removeAttribute('paused');
      this._syncMotion();
    }

    toggle() {
      if (this.isPaused) this.play();
      else this.pause();
    }

    setMood(name) {
      this.setAttribute('mood', name);
    }

    get isPaused() {
      return !this._renderer || this._renderer.paused;
    }

    get reducedMotion() {
      return this._reduced;
    }

    get fps() {
      return this._renderer ? this._renderer.getFps() : 0;
    }

    get canvasSize() {
      return this._renderer ? [this._renderer.W, this._renderer.H] : [0, 0];
    }

    get mood() {
      return this.getAttribute('mood') || 'moss';
    }

    set mood(value) {
      this.setMood(value);
    }

    get stats() {
      return {
        mood: this.mood,
        paused: this.isPaused,
        fps: this.fps,
        canvas: this.canvasSize,
        pixelScale: this._renderer ? this._renderer.pixelScale : 0
      };
    }
  }

  if (!customElements.get('mosslight-bg')) {
    customElements.define('mosslight-bg', MosslightBG);
  }

  window.Mosslight = {
    version: '1.0.0',
    moods: MOOD_NAMES.slice(),
    palettes: PALETTES
  };
})();
