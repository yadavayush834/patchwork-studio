# Mosslight

A radio observatory by a lake at night, in pixels, as one custom element. A ringed planet hangs over the water, fireflies drift, ripples spread, and when you click, the dish answers.

Everything is drawn live on a tiny canvas (about 360 × 225 on a laptop screen) and scaled up with nearest-neighbour pixels. There are no images, no framework and no build step: the whole thing is `mosslight.js`.

## Use it

```html
<script src="mosslight.js" defer></script>
<mosslight-bg mood="moss"></mosslight-bg>
```

By default it fills the viewport behind your content (`position: fixed`, `z-index: -1`). It isolates `body` so it stays visible above an opaque page background, and puts that back when it's removed.

**Behind one section instead:** add `inline`, and give the parent a height and its own stacking context.

```html
<section style="position:relative; min-height:540px; overflow:hidden; isolation:isolate">
  <mosslight-bg inline mood="ember"></mosslight-bg>
  <h2 style="position:relative; z-index:1">Night shift at the listening post.</h2>
</section>
```

## Attributes

| Attribute | Default | |
|---|---|---|
| `mood` | `moss` | Palette: `moss`, `ember` or `mono`. |
| `speed` | `1` | Motion multiplier, clamped to 0.2–2.5. |
| `seed` | `5271` | Reshuffles the stars, the treeline and the fireflies. |
| `paused` | — | Freezes the current frame. |
| `interactive` | `true` | `"false"` turns off pointer and click reactions. |
| `inline` | — | Fill the parent, not the viewport. Set it before the element is connected. |

Every attribute except `inline` can change at any time.

## Script

```js
const sky = document.querySelector("mosslight-bg");
sky.signal();            // a pulse from the dish, the planet and the fireflies
sky.pause(); sky.play(); sky.toggle();
sky.setMood("ember");    // same as sky.mood = "ember"

sky.isPaused; sky.reducedMotion; sky.fps; sky.canvasSize; sky.stats;

sky.addEventListener("mosslight:ready",  (e) => e.detail.size);
sky.addEventListener("mosslight:signal", () => {});
sky.addEventListener("mosslight:motion", (e) => e.detail.paused);
```

The host also exposes `data-motion-state` (`running` / `paused`) and `--mosslight-ground`, so the page's CSS can match the scene.

## Manners

- **Reduced motion:** it starts paused. Calling `play()` counts as the visitor choosing motion.
- **Hidden tabs** stop the loop.
- **Clicks** on links, buttons, fields and dialogs are ignored. Mark anything else with `data-no-pulse`.
- **Removing the element** stops everything and removes its listeners.

## Changing it

The palettes are plain objects at the top of `mosslight.js` (`PALETTES.moss`, `.ember`, `.mono`). Copy one, recolour it, and its key becomes a new `mood`. The layout lives in `computeLayout()`, and the drawing is split by layer (water, trees, dish, planet, fireflies).

`index.html`, `style.css` and `demo.js` are a demo page: mood buttons, a motion toggle with a live frame counter, a signal button and an install dialog. To try it, serve the folder (`python3 -m http.server`) and open it. The fonts in `fonts/` are for the demo only, under the SIL Open Font License.
