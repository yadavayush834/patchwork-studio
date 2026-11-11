# Hero Sections II

A second, independent hero collection, built alongside the first `src/heroes/` section so the two can be compared. It does not share code, styles or routes with it.

- Studio: `/?collection=heroes2` (dashboard: **Hero sections II**). Clicking a hero opens it on its own page in a new tab (`/?hero2=<id>`), outside the studio. **Customize** under each hero loads it into the editor: brand, headline, sentence, both buttons and the main link; words save in `localStorage` (`patchwork-heroes2-v1`) and carry over to the standalone page. The Patchwork logo at the top right returns to the studio.
- A hero alone: `/?hero2=<id>`.
- Download: a ZIP with `index.html`, `base.css`, `<id>/hero.css|js`, vendored GSAP, only the fonts that hero uses, their OFL licences, `recipe.json` and a README. It runs from any static server with no network requests.

## The seven

| id | Name | Technique | Type | Palette |
|---|---|---|---|---|
| `mercury` | Mercury | Raymarched liquid-chrome metaballs in a fragment shader, canvas layered above the headline so the metal swallows its edge; one drop follows the cursor; click ripples the surface | Unbounded | near-black, bone, orange |
| `ink` | Ink | WebGL2 stable-fluids solver (advection, vorticity, pressure); dye is absorbance, displayed as `paper * exp(-dye)` with wet edges; drops fall on their own, the cursor stirs, a click drops more | Instrument Serif | paper, sumi, vermilion seal |
| `atlas` | Paper Terminal | A rotating globe drawn only in characters on Canvas 2D; continents baked once to a lat/long map, glyphs stamped from an atlas; cursor lens shows the graticule and real coordinates | JetBrains Mono + Instrument Serif | paper, ink, cobalt |
| `lowtide` | Lowtide | A shader-painted moonlit sea thresholded with an 8x8 Bayer matrix to two colours at 1/3 resolution; cursor moves the moon, its road and the boat; lighthouse beam; stepped old-desktop fade | Pixelify Sans | two colours |
| `dots` | Specimen | A moon jelly raymarched live into a small light map (one texel per dot), then drawn as single-colour dots that flicker, scan, shy from the pointer and ripple on click. Upload your own picture in the editor and it becomes the dots (resized to a JPEG data URL, kept in the page and the download) | Bricolage Grotesque | black, lime |
| `prism` | Prism | Canvas 2D ray tracing: a white beam refracts through a glass prism with Snell's law, 28 wavelengths each with its own (exaggerated) index, total internal reflection handled; the pointer turns the prism within the range that keeps a clean fan; a click fires a pulse | Syne | near-black, white, spectrum |
| `breath` | Breath | No canvas: each letter is a variable font (wght, SOFT, WONK, opsz) driven by cursor proximity and an idle wave; the button runs a guided 4-2-6 breath | Fraunces | forest, cream, marigold |

## Files

- `src/heroes2/`: `catalog.ts` (ids, defaults, validation), `document.ts` (markup and the page document, shared by preview, standalone and download), `gallery.ts|css` (studio, export), `entry.ts`, `route.ts` (dependency-free route check used by `src/main.tsx`).
- `public/heroes2/`: `base.css` (font faces, tokens, buttons, grain, reduced motion), one folder per hero (Specimen and Prism added after studying the Piixpal pixel UI hero sections; nothing copied) (`hero.css`, `hero.js`, plain browser JS, no build step), `fonts/`, `licenses/`, `vendor/gsap.min.js`.
- Shared files touched: `src/main.tsx` (one route branch) and `src/App.tsx` (one dashboard button).

## Rules each hero follows

Headline, one sentence and both actions fit on one screen at 1280x800 with no scroll; every colour and font is a token at the top of its CSS; hover lifts and press states on buttons, visible focus rings; reduced motion renders a still frame and the words remain plain HTML without scripts; animation pauses offscreen and in hidden tabs; no external requests; no invented metrics, testimonials or logos.

## Verification (11 November 2026)

`tests/heroes2.test.ts`: five distinct techniques, complete pages, every packaged file exists, reduced-motion handling, escaping and unsafe-link rejection, routes separate from the first hero section. Chromium at 1440x900 on an Intel Iris G1 GPU: all five at 60 fps, no console errors, no vertical overflow; each hero reviewed and tuned visually (Mercury drop separation and reflections, Ink drop shape, Atlas ocean density and a glyph atlas for speed, Lowtide true-black dithering and island placement, Breath fixed line breaks). Studio edit flow, standalone page and an extracted ZIP served independently (local requests only, fonts loaded, custom words kept) were exercised. Phone layouts have basic rules but were not reviewed.

## Added 11 November 2026: Specimen and Prism

Two more heroes, made after studying the hero sections on piixpal.dvkk.dev as a reference for mood (big type beside one strong moving object, dot-art portraits), not copied. Fonts Bricolage Grotesque and Syne were added from Google Fonts with their OFL licences. Both run at 60 fps at 1440x900 with no console errors; the Specimen picture upload, word edits and a ZIP served on its own were exercised. `tests/heroes2.test.ts` now expects seven heroes and checks that only safe image data URLs reach Specimen.
