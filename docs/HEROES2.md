# Hero Sections II

A second, independent hero collection, built alongside the first `src/heroes/` section so the two can be compared. It does not share code, styles or routes with it.

- Studio: `/?collection=heroes2` (dashboard: **Hero sections II**). Pick a hero, edit brand, headline, sentence, both buttons and the main link; words save in `localStorage` (`patchwork-heroes2-v1`). Open full screen or download a folder.
- A hero alone: `/?hero2=<id>`.
- Download: a ZIP with `index.html`, `base.css`, `<id>/hero.css|js`, vendored GSAP, only the fonts that hero uses, their OFL licences, `recipe.json` and a README. It runs from any static server with no network requests.

## The five

| id | Name | Technique | Type | Palette |
|---|---|---|---|---|
| `mercury` | Mercury | Raymarched liquid-chrome metaballs in a fragment shader, canvas layered above the headline so the metal swallows its edge; one drop follows the cursor; click ripples the surface | Unbounded | near-black, bone, orange |
| `ink` | Ink | WebGL2 stable-fluids solver (advection, vorticity, pressure); dye is absorbance, displayed as `paper * exp(-dye)` with wet edges; drops fall on their own, the cursor stirs, a click drops more | Instrument Serif | paper, sumi, vermilion seal |
| `atlas` | Paper Terminal | A rotating globe drawn only in characters on Canvas 2D; continents baked once to a lat/long map, glyphs stamped from an atlas; cursor lens shows the graticule and real coordinates | JetBrains Mono + Instrument Serif | paper, ink, cobalt |
| `lowtide` | Lowtide | A shader-painted moonlit sea thresholded with an 8x8 Bayer matrix to two colours at 1/3 resolution; cursor moves the moon, its road and the boat; lighthouse beam; stepped old-desktop fade | Pixelify Sans | two colours |
| `breath` | Breath | No canvas: each letter is a variable font (wght, SOFT, WONK, opsz) driven by cursor proximity and an idle wave; the button runs a guided 4-2-6 breath | Fraunces | forest, cream, marigold |

## Files

- `src/heroes2/`: `catalog.ts` (ids, defaults, validation), `document.ts` (markup and the page document, shared by preview, standalone and download), `gallery.ts|css` (studio, export), `entry.ts`, `route.ts` (dependency-free route check used by `src/main.tsx`).
- `public/heroes2/`: `base.css` (font faces, tokens, buttons, grain, reduced motion), one folder per hero (`hero.css`, `hero.js`, plain browser JS, no build step), `fonts/`, `licenses/`, `vendor/gsap.min.js`.
- Shared files touched: `src/main.tsx` (one route branch) and `src/App.tsx` (one dashboard button).

## Rules each hero follows

Headline, one sentence and both actions fit on one screen at 1280x800 with no scroll; every colour and font is a token at the top of its CSS; hover lifts and press states on buttons, visible focus rings; reduced motion renders a still frame and the words remain plain HTML without scripts; animation pauses offscreen and in hidden tabs; no external requests; no invented metrics, testimonials or logos.

## Verification (11 November 2026)

`tests/heroes2.test.ts`: five distinct techniques, complete pages, every packaged file exists, reduced-motion handling, escaping and unsafe-link rejection, routes separate from the first hero section. Chromium at 1440x900 on an Intel Iris G1 GPU: all five at 60 fps, no console errors, no vertical overflow; each hero reviewed and tuned visually (Mercury drop separation and reflections, Ink drop shape, Atlas ocean density and a glyph atlas for speed, Lowtide true-black dithering and island placement, Breath fixed line breaks). Studio edit flow, standalone page and an extracted ZIP served independently (local requests only, fonts loaded, custom words kept) were exercised. Phone layouts have basic rules but were not reviewed.
