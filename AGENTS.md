# Patchwork Studio — notes for whoever works on this next

Patchwork is a local, browser-based studio for making websites. You pick a world, change the words and colours, and download a site that works on its own. It also has collections of ready pieces (hero sections, scenes, motion templates, components, spirits, ASCII backgrounds, a design library) that open on their own page, customise in place and download as a folder.

## Run it

```sh
npm ci
npm run dev        # http://127.0.0.1:5174 — also rebuilds the generated engines
npm test           # node test runner, tests/*.test.ts
npm run build      # type-check + production build into dist/
```

Run `npm test` and `npm run build` before calling a change done. For anything visual or interactive, also open it in a browser and look at it: a passing build says nothing about whether a scroll story or a shader looks right. Headless Chromium renders WebGL in software unless you pass `--use-angle=vulkan --enable-gpu --ignore-gpu-blocklist`; judge frame rate with the GPU on.

## Where things are

| Area | Source | Served / packaged from |
|---|---|---|
| Home, editor, routing | `src/App.tsx`, `src/home/`, `src/main.tsx` | — |
| Website renderer + export | `src/render.ts`, `src/export.ts`, `src/site.css` | one renderer for preview and export |
| Project storage | `src/storage.ts` (IndexedDB, validation, bundles) | — |
| Hero sections | `src/heroes2/` | `public/heroes2/<id>/` |
| Scenes | `src/scenes/` | `public/scenes/<id>/` |
| Motion templates | `src/motion/` | `public/motion/` (+ `engine.js`) |
| ASCII backgrounds + paint studio | `src/ascii/`, `src/PaintStudio.tsx` | `src/ascii/runtime.generated.js` |
| Diorama engine | `src/diorama/engine.ts` | `public/diorama/diorama.js` (+ copies in `heroes2/vendor/` and `scenes/`) |
| Components, spirits, library, video lab | `src/components/`, `src/spirits/`, `src/library/`, `src/video-lab/` | `public/…` |
| Keepsakes (snow globe) | `src/keepsake/` | bundled by Vite |
| Particle heroes | `src/particles/` | `public/heroes2/<id>/hero.js` (`npm run build:particles`) |

Generated files — edit the source, never the output:
- `src/ascii/runtime.generated.js` ← `npm run build:ascii`
- `public/motion/engine.js` ← `npm run build:motion`
- `public/diorama/diorama.js` and its two copies ← `npm run build:diorama`

`npm run dev` and `npm run build` regenerate all of them.

## Things that must stay true

- **Local first.** Projects live in IndexedDB on the visitor's device. Exported sites and downloaded pieces make no network requests: fonts, engines and images travel with them.
- **One renderer.** `render.ts` produces the same markup for the editor preview and the export. Don't add editor-only site behaviour.
- **Escape everything a person types.** Links go through `safeLink`; imported projects go through `validateProject`. Uploaded assets are referenced as `asset:<uuid>`; blob URLs never end up in a saved project or an export.
- **Old projects keep opening.** The project format is version 1; new fields are optional. Retired backgrounds map to their replacements (`legacyBackgroundIds`).
- **Motion is optional.** Everything animated pauses offscreen and in hidden tabs, and shows a still frame for `prefers-reduced-motion`.
- **Don't clear someone's local data to make a test pass.** Use a fresh browser profile for QA.
- **The Video Lab is in beta.** Fix it if it breaks, but don't add features until the owner revisits it.
- **Licences travel.** Font OFL files, the GSAP and Three.js notices, and `licenses/ARTWORK.txt` / `ASCII-SCENES.txt` ship with whatever uses them.
- Don't deploy, push, or change repository settings unless the person you're working for asks (pushing `main` deploys; see `docs/DEPLOYMENT.md`).

## Generated artwork

Some pieces use paintings made with ChatGPT image generation (through the local Codex CLI). Their prompts are kept next to the images (`artwork.json`) or in `docs/engines/diorama.md`. Paintings that move in 3D also need a depth map; `docs/engines/diorama.md` has the whole recipe.

More: `docs/README.md` (the map), `docs/ARCHITECTURE.md` (how the app fits together), `docs/sections/` (one page per part of the site), `docs/engines/` (one page per engine), `docs/DEPLOYMENT.md`.
