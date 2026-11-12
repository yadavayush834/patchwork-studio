# How Patchwork fits together

## The app

`src/main.tsx` looks at the URL first. A collection piece opened on its own (`?hero2=`, `?scene=`, `?view=motion&motion=`, `?spirit=`…) renders as a full page without loading the studio. Everything else loads `App.tsx`: the home page, the dashboard, the editor and the collection overlays (`?collection=…`). Overlays push a history entry, so the browser's Back button closes them.

## Websites people make

A project (`src/types.ts`) is a list of sections, each with a kind, a world, words, an optional background, decorations and motion. `render.ts` turns it into markup scoped under `.pw-*`; the editor shows that markup in an iframe and `export.ts` zips the same markup with `site.css`, the fonts, the assets and `site.js`.

`site.js` is the ASCII runtime plus a small script for motion and visibility. Two optional features live there:

- **ASCII backgrounds** (`src/ascii/`): a cell renderer (`cells.ts`) and five scenes — Night lotus, Aurora, Neon rain, Koi pond and *Your painting* (`paint.ts`, which animates a picture someone painted in `PaintStudio.tsx`; exports inline it as a data URL so it can be read from `file://`).
- **Living sites** (`daylight.ts`): with `project.living` on, the site follows the visitor's clock: `data-daypart` and `--night/--twilight` on the root, a tint on ordinary sections, and every ASCII scene changes with the hour.

## Collections

Each collection is a catalogue (`catalog.ts`: ids, defaults, validation), a document builder (`document.ts`: the complete page, shared by the gallery preview, the standalone page and the download) and a gallery. Pieces are plain HTML/CSS/JS under `public/<collection>/`, so a download is just those files plus `recipe.json`.

- **Hero sections** (`heroes2`): one-screen heroes, each with its own technique. Reading Room, Forge and Tea House are painted scenes rendered by Diorama.
- **Scenes**: full-screen places behind a headline. Ten are procedural pixel shaders (`public/scenes/pixel.js`); Onsen, Arcade and Sky Isle are generated pixel paintings rendered in depth by Diorama (`diorama-scene.js`).
- **Motion templates**: whole scroll-driven sites. `templates.ts` renders the markup, `runtime.ts` (bundled with GSAP, Three.js and Diorama into `public/motion/engine.js`) runs the choreography. Overnight is the painted one (`overnight.ts`, `overnight-runtime.ts`, `overnight.css`).

## The Diorama engine

`src/diorama/engine.ts` — see `docs/DIORAMA.md`.
