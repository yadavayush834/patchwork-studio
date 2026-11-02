# Mosslight

A living pixel horizon for the web. Mosslight is a dependency-free custom element that paints an interactive radio observatory beside a lake, with a ringed planet, fireflies, water ripples and a dish that answers when you call.

Everything is drawn live on a small canvas and scaled with nearest-neighbour pixels. There are no image assets, no build step and no framework.

## Quick start

Copy `mosslight.js` into your project, load it once, and place the element behind your content.

```html
<script src="/mosslight.js" defer></script>

<mosslight-bg mood="moss"></mosslight-bg>

<main>
  <h1>Your site, with a horizon.</h1>
</main>
```

The element is fixed to the viewport, sits at `z-index: -1`, and sets `isolation: isolate` on `body` so it remains visible above an opaque page background. Content on the page naturally sits on top.

If your page or app already builds its own stacking context around `body`, check that your content has a positive stacking level. The element is decorative and ignores pointer events unless it is listening for clicks on the page, in which case it steps around links, buttons, form fields, dialogs and anything marked `data-no-pulse`.

## A section, not the viewport

Use `inline` to turn the scene into the background of a hero, card, or full-bleed section.

```html
<section class="scene">
  <mosslight-bg inline mood="ember" seed="8104"></mosslight-bg>
  <div class="scene-content">
    <h2>Night shift at the listening post.</h2>
  </div>
</section>
```

```css
.scene {
  position: relative;
  min-height: 540px;
  overflow: hidden;
  isolation: isolate;
}

.scene > :not(mosslight-bg) {
  position: relative;
  z-index: 1;
}
```

In inline mode the element is `position: absolute; inset: 0; z-index: 0` inside its parent. The parent needs a height.

## Attributes

| Attribute | Default | What it does |
| --- | --- | --- |
| `mood` | `moss` | Palette: `moss`, `ember` or `mono`. |
| `speed` | `1` | Ambient motion multiplier. Values are clamped to `0.2` to `2.5`. |
| `seed` | `5271` | Changes the star field, tree line, firefly placement and other seeded details. |
| `paused` | absent | Freezes the scene on its current frame. |
| `interactive` | `true` | Set to `"false"` to remove pointer and click reactions. |
| `inline` | absent | Fills the parent instead of the viewport. |

```html
<mosslight-bg
  mood="ember"
  seed="1729"
  speed="0.7"
  interactive="false">
</mosslight-bg>
```

`mood`, `speed`, `seed`, `interactive` and `paused` can be changed at any time. Changing `mood`, `speed` or `seed` updates the scene immediately. Set `inline` when the element is connected.

## JavaScript API

```js
const sky = document.querySelector('mosslight-bg');

sky.signal();              // Send a pulse from the dish, planet and fireflies
sky.pause();               // Freeze
sky.play();                // Resume, including over a reduced-motion pause
sky.toggle();              // Pause or resume
sky.setMood('ember');      // Same as sky.mood = 'ember'
sky.setAttribute('seed', '404');
```

Read-only properties:

```js
sky.isPaused;       // boolean
sky.reducedMotion;  // boolean from prefers-reduced-motion
sky.fps;            // current measured frames per second
sky.canvasSize;     // [virtualWidth, virtualHeight]
sky.mood;           // current mood name
sky.stats;          // { mood, paused, fps, canvas, pixelScale }
```

Events:

```js
sky.addEventListener('mosslight:ready', (event) => {
  event.detail.mood;       // 'moss'
  event.detail.size;       // [360, 225]
});

sky.addEventListener('mosslight:signal', () => {
  // Fired after signal()
});

sky.addEventListener('mosslight:motion', (event) => {
  event.detail.paused;         // boolean
  event.detail.systemReduced;  // system preference
  event.detail.override;       // play() was called manually
});
```

The element exposes `data-motion-state="running"` or `"paused"` and the CSS variable `--mosslight-ground` on its own host. Page CSS can use those hooks to match the scene.

## Behaviour notes

- **Reduced motion:** the scene boots paused when `prefers-reduced-motion: reduce` is set. Calling `play()` is treated as an explicit override. The demo's motion toggle uses this.
- **Visibility:** the canvas stops when the tab is hidden and resumes when it returns.
- **Pointer handling:** the component listens on the window. Clicks on interactive elements are ignored automatically via a selector list. Add `data-no-pulse` to anything else that should not answer a click.
- **Resolution:** the internal canvas is deliberately tiny, roughly 360×225 on a 1440×900 viewport. All painting is nearest-neighbour pixel work, so the scene stays sharp without a high-resolution backing store.
- **Stacking:** viewport mode isolates `body` only if it has no isolation already. Inline mode expects the parent to establish `position: relative` and preferably `isolation: isolate`.
- **Cleanup:** removing the element stops the animation loop, removes listeners and restores the stacking isolation it changed.

## Palettes and customising the scene

The three palettes are plain objects inside `mosslight.js` (`PALETTES.moss`, `PALETTES.ember`, `PALETTES.mono`). Every entry in the moss palette is required. To add a fourth mood, copy one palette, change its colours, and use its key as the `mood` attribute. The renderer reads palette keys directly.

You can also change the default seed, the default mood, or the scene geometry in `computeLayout()`. The file is organised by drawing layer, so water, trees, dish, planet, fireflies and interface-like overlays are separate.

## Demo

```bash
cd mosslight
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

The demo page includes:

- mood controls for moss, ember and mono
- a motion toggle with a live FPS readout
- a signal button that sends an event through the scene and updates the response line
- an install dialog with copyable markup
- responsive layouts down to 360px wide and short landscape screens

`index.html`, `style.css` and `demo.js` are only for the demo. The reusable piece is `mosslight.js`. The local fonts in `fonts/` are used by the demo and are licensed under the SIL Open Font License. They are not required by the background.

## Browser support

Mosslight uses custom elements, Canvas 2D, `matchMedia` and standard pointer events. It runs in current evergreen browsers. No polyfills or build tools are needed.

## A small verification

At 1440×900 it draws a 360×225 virtual canvas, runs at 60fps in Chromium, pauses when hidden, and reports no console errors. The demo was tested at 1440×900, 1366×768, 1280×720, 1024×768, 844×390, 768×1024, 390×844, 375×667 and 360×640.
