# Architecture and file map

## System boundaries

This is a static browser application. Vite serves/builds the studio; there is no backend, authentication, telemetry, database server, or hosted publishing API. IndexedDB is the durable store. Exported websites are separate static artifacts and do not depend on React, Vite, or the studio being running.

## Main modules

| Area | Source of truth | Responsibility |
|---|---|---|
| Document contract | `src/types.ts` | Version 1 project/theme/section/scene/asset/registry types |
| Creative catalog | `src/catalog.ts` | Worlds, presets, backgrounds, decorations, fonts, interactions, defaults |
| Shared markup | `src/render.ts` | Escaped semantic website HTML, media resolution, scene markup, unique anchors |
| Website appearance | `src/site.css`, `src/ascii.css` | Exportable `.pw-*` styles and motion/reduced-motion behavior |
| Website behavior | `src/site-runtime.ts` | Video/section visibility, pointer tracking, runtime assembly |
| Editor/dashboard | `src/App.tsx` | UI state, immutable edits/history, uploads, selection, project flows |
| Canvas host | `src/Preview.tsx` | Scaled iframe, shared markup/styles/runtime, selection and dragging |
| ASCII gallery | `src/AsciiGallery.tsx` | Single active scene preview, tabs, pause, apply, video download |
| Editor appearance | `src/studio.css`, `src/ascii-studio.css` | Workbench/dashboard/gallery presentation |
| Durable data | `src/storage.ts` | IndexedDB transactions, validation, document operations, project bundles |
| Website ZIP | `src/export.ts` | Static packaging, uploaded media, relative URLs, fonts and license notices |
| Original decoration data | `src/artwork.json` | Trusted inline SVG, generated alongside public decorative SVG files |

## Document and edit flow

A `Project` has `version: 1`, identity/timestamps, a world, a theme, and ordered sections. Each section holds content, appearance, links, optional uploaded-media references, visibility, interactions, property locks, scene elements, and gallery/service items. Optional `ascii` settings preserve compatibility with existing version 1 projects.

`createProject`/`createSection` create defaults from the registry. Editor actions create a new document; `commit` records the previous snapshot for undo and clears redo. Autosave queues writes so old asynchronous saves do not win over newer ones. Asynchronous uploads are merged against the current project/section. Selection, panels, preview device size, and the undo stack are session UI state, not portable document fields.

`Preview` calls `renderSite`, adds shared CSS/runtime, then adds editing-only selection behavior. It preserves scroll while editing and scrolls to a newly selected section. Decorations can be dragged with pointer events; phone view writes `mobileX/mobileY`, while desktop writes `x/y`. The inspector provides keyboard-accessible position/layer controls.

## Storage and portable projects

The `patchwork-studio` IndexedDB database contains `projects` and `assets` stores. Uploaded media is stored as blobs with persistent `asset:UUID` identifiers. Object URLs are session adapters for iframe rendering, never persisted document values. Identical media can be shared by duplicated projects; deletion preserves assets referenced by another project.

Editable ZIPs contain `project.json`, `assets.json`, and uploaded blobs. Import checks document version, structure, bounds, media types, missing references, and bundle sizes before replacing the active editor. Imported projects/uploads receive fresh IDs. Library assets are identified through the shipped catalog rather than copied into project bundles.

## Standalone export

The same renderer produces site markup for preview and export. `exportWebsite` collects referenced uploaded assets, shipped backgrounds/posters/video, all local fonts, and notices. It resolves media to relative paths and writes `index.html`, `styles.css`, `site.js`, and a README. No `asset:` or `blob:` URL may remain.

User text/attributes are escaped and links are restricted to supported safe schemes/fragments. Decorations are trusted inline SVG, avoiding external SVG mask requests when users open local exports. Website styles and runtime must never rely on editor classes/components.

The runtime includes vendored ASCII code even when a website uses other backgrounds. Consequently the upstream MIT notice and original-scene notice are included in every website ZIP.

## ASCII rendering pipeline

`src/ascii/entry.ts` mounts controllers on `canvas[data-ascii]`. Sharkwater uses the vendored `World` and `AsciiRenderer` in `src/vendor/ascii-sharks/`. `src/ascii/field.ts` generates cells for the three original scenes. The controller rasterizes them as glyphs, caps rendering at 30 fps and DPR at 1.5, observes visibility/size/motion preferences, and cleans up with the document lifecycle.

`scripts/build-ascii.mjs` bundles that entry into `src/ascii/runtime.generated.js`. `site-runtime.ts` imports the generated script as raw text and embeds it in both previews and exports. Edit TypeScript source and regenerate; do not hand-patch the generated file.

Each ASCII catalog item has a still poster and a recorded WebM. Live mode emits a canvas/poster/dimmer; recorded mode emits video with poster and configured speed. The section keeps readable light text over the dark scene. Reduced motion displays a poster. Root motion-class changes are observed as well as the system media query.

## Video Lab boundary

`src/video-lab/` owns an independent style registry, settings/recipe validation, Canvas 2D glyph/geometry/print renderers, WebGL2 pixel effects, media inspection, and the workspace. `preview.worker.ts` handles one live frame at a time or a sequential thumbnail job. `export.worker.ts` decodes/processes/encodes incrementally; cancellation terminates the current worker. Neither path uploads media. Fonts are loaded from the local licensed Space Mono asset inside workers.

Every generated view uses the same `Renderer`. Deterministic seeded patterns stay anchored to source coordinates. Datamosh uses a separately decoded frame 0.2 seconds earlier for temporal block smears, including after seeking. Gaussian blur has horizontal/vertical passes; pixel sorting sorts brightness-thresholded runs; crystallize clips Voronoi cells; topography uses marching-square crossings; flow integrates seeded paths along image gradients.

`studio-engines.ts` implements only the ASCII Studio and Pixel Art paths. Both consume the common full-resolution RGBA source canvas before logical-grid reduction; direct VideoFrame resizing produced different samples than bitmap/canvas preview paths. ASCII caches a locally loaded, measured Space Mono glyph atlas and chooses glyphs by coverage; directional contours are optional. Pixel Art maps averaged/graded colors to fixed palettes using OKLab distance and an order-independent 5-bit lookup, then scales with smoothing disabled. Ordered dither stays anchored to grid coordinates. No random per-frame texture or previous-frame state is used, so seeking and export are repeatable.

`studio-settings.ts` owns validated optional version-1 recipe extensions and eight preset definitions. The two tools preserve their chosen detail during playback (dropping preview frames under load rather than changing the design) and remember custom settings during the Lab session. Their exports request very-high codec quality. Other style renderers retain their existing behavior.

Mediabunny 1.62.1 (MPL-2.0) provides containers, decoding, WebCodecs integration, and audio conversion. gifenc 1.0.3 (MIT) produces GIF frames with centisecond error distribution. Their notices are served locally. Codecs are probed at actual output dimensions, with explicit errors for missing video/audio capabilities. Completed blobs are session results, not autosaved projects.

`App` lazy-loads the Lab, preserves editor state underneath it, and merges selected clip/poster assets against the current project after asynchronous storage. Existing section `video`/`poster` references and undo history perform the handoff. No document/database version migration or new website renderer is introduced. Exported sites contain baked media, not the Lab/codec/shader engine.

## Asset and evidence boundaries

- `public/assets/`: shipped artwork, backgrounds, ASCII posters, and WebMs.
- `public/fonts/`, `public/licenses/`: shipped local fonts and attribution.
- `scripts/`: optional asset generation and staged Playwright CLI probes.
- `tests/`: deterministic Node tests; `fake-indexeddb` isolates persistence tests.
- `docs/`: context, style, workflow, task status, and observed verification.
- Ignored `output/`, `.playwright-cli/`, `.cache/`, `node_modules/`, `dist/`: local artifacts; not required by a clone.

Do not use generated screenshots, detector outputs, or worker self-reports as substitutes for checking a real user flow. Tests of glyph fields use finite/varied/changing output rather than fragile exact shark poses, because the upstream simulation uses randomness.
