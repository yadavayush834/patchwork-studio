# Architecture and file map

## System boundaries

This is a static browser application. Vite serves/builds the studio; there is no backend, authentication, telemetry, database server, or hosted publishing API. IndexedDB is the durable store. Exported websites are separate static artifacts and do not depend on React, Vite, or the studio being running.

## Mosslight motion document

Mosslight is a distinct standalone interactive scene in the Motion Template catalog. `mosslight-document.ts` applies escaped customization to the original `mosslight.html` and resolves local assets for preview; exported documents keep relative URLs. The independent `mosslight.js` custom element handles scene rendering and lifecycle. `build-mosslight.mjs` copies the canonical HTML and packages a complete original source ZIP. The shared export function packages customized HTML and the same local component, styles and licensed fonts. The scroll-story renderer excludes Mosslight by type; no second renderer is introduced for existing stories.

## Application entry routes

`src/main.tsx` checks motion routes before loading React or studio styles. A standalone template lazily loads `src/motion/standalone.ts`, reads the existing versioned configuration through `config-storage.ts`, and writes the trusted complete `motionDocument` as the top-level page. Normal routes load the previous React entry through `src/studio-entry.tsx`. `navigation.ts` defines shareable website URLs and keeps `&edit=1` routes in the studio. No IndexedDB schema or export rendering change.

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


## Independent motion templates

`src/motion/catalog.ts` defines nine stable template IDs and validated textual/accent/contact customizations. `templates.ts` is the single markup source for preview and ZIP exports; it escapes user text, preserves semantic headings and anchors, and keeps concept copy distinct from real product claims. `document.ts` supplies local fonts and shared CSS. These independently authored multi-section templates do not enter the existing project/section renderer or IndexedDB contract.

`MotionStudio.tsx` is lazy-loaded from `App`, makes underlying workbenches inert/hidden while open, and hosts an isolated iframe. Its version-1 `patchwork-motion-v1` local-storage record contains only normalized config. Brand/copy changes are applied explicitly; closing the collection preserves the current website editor. Preview messages are accepted only from the active iframe and matching template ID. Shell Escape/Tab behavior works across the iframe boundary.

`runtime.ts` owns scoped GSAP/ScrollTrigger timelines. Match-media setup gives phone sequences shorter pin distances and reduced-motion users a normal reading layout. Native scrolling remains in charge; no wheel/touch cancellation is used. `scene.ts` creates original procedural Three.js headphone, knot/satellite, petal/stem/pollen, and seven-floor courtyard-pavilion geometry. RoomEnvironment is procedural and bundled. DPR is capped at 1.5; only 3D draws are limited to 30Hz, while GSAP text updates keep their own cadence. Invisible/hidden scenes skip rendering; viewport/media changes and page teardown release observers, ticker callbacks, geometries, materials, textures, and contexts.

`scripts/build-motion.mjs` bundles GSAP 3.14.2 + Three.js 0.182.0 into `public/motion/engine.js` and preserves notices. Edit runtime/scene sources and rebuild, never the generated engine. `export.ts` creates a 22-entry ZIP with relative HTML/CSS/runtime/font/notice references and a recipe/README. A static server or static host runs the result without Patchwork, React, npm, or a CDN. Existing website/project ZIPs and the Video Lab are independent of this exporter.

### Additional scroll studies

`studies.ts` renders Pelagic, Heliograph, and Afterimage through the same `renderMotion`/`motionDocument` preview and export path. It owns original vector contour maps, medusa specimens, film landscapes, and CSS optical geometry. Gradient IDs are unique within each document. `studies.css` is included by `motionCSS`, with independent palettes and phone/reduced-motion compositions.

`study-runtime.ts` owns their three pinned timelines per experience: ocean descent/map/specimens, orbital instrument/eclipse/horizontal atlas, and iris/three-film edit/contact-sheet selection. All are scrubbed and reversible; native scrolling and the existing parent progress/keyboard protocol remain. `study-scene.ts` builds the capsule and engraved armillary sphere, fits its camera to narrow hosts, caps DPR at 1.5 and rendering at 30 Hz, pauses hidden/offscreen drawing, and disposes GPU/observer resources. It shares the pose interface with the original renderer without altering those four scene builders. Afterimage requires no WebGL scene.

The catalog records expose explicit cover URLs. New JPG covers are actual browser captures of the same rendered template, not external artwork. All three new downloads retain the existing 22-entry static bundle contract; no new remote asset dependency is introduced.

### Generated-image motion studies

`image-studies.ts` renders Reverie/Traverse through the existing `renderMotion` and `motionDocument` pipeline. `image-studies.css` is added to the shared exportable stylesheet. `image-runtime.ts` owns six GSAP timelines: responsive doorway projection and camera passage, three rotating room planes, nine registered postcard fragments, five panorama planes, six map folds with a traced SVG route/traveller, and seven ice planes opening to the summit. New pages have no Three.js scene host and need no WebGL context.

The critical images decode before GSAP's initial measurements; portal clipping projects the photographed doorway coordinates through the actual cover crop. The normal match-media lifecycle reverts timelines on preference/breakpoint changes. Reduced motion shows every room and note in reading order, and places glacier before summit. Shared navigation, progress, and iframe keyboard messages are retained.

`imageMotionAssets(id)` in `image-assets.ts` is the exact per-template export manifest. The six optimized WebP images and two prompt/provenance JSON files are served locally under `public/motion/art/`. Each new ZIP has 27 entries: the prior static bundle plus its three images, its record, and the artwork folder. No generated-image service, account, or API key is needed after authoring. Original generation masters and test captures remain outside Git; committed artwork records contain no machine paths.

## Imported Design Library

`src/DesignLibrary.tsx` hosts a separate same-origin iframe workspace and restores underlying focus/inert/display state on close. The main App lazy-loads only this host. Imported dependencies and Tailwind utilities are compiled separately in `vendor/design-library`; no imported style or component enters the editor bundle. Seven lazy demo adapters mount only the selected family. Individual previews use a nested iframe for genuine viewport media queries. Preview back messages validate source and origin.

`import-design-library.mjs` parses source registries with the TypeScript AST without executing imported components, maps canonical names/categories/source references and emits a versioned, namespaced inventory. Historical aliases are consolidated; unique authored examples are never merged solely on their names or style words. Original metadata, documentation, component source and pinned upstream attribution are retained. `build-design-library.mjs` builds the static app and creates its catalog and complete source ZIP. UI primitives have individual demonstrations plus the original combined explorer. There is no conversion into version-1 editor documents.

## Native Templates tab

`DesignLibrary` renders `TemplateStudio` directly for Templates. Other collections retain the earlier iframe implementation. Only the website canvas is isolated; gallery/navigation/device controls belong to Patchwork. `prepare-native-templates.mjs` emits a compact 25-template catalog plus lazy component loaders from pinned original source. `native-runtime.tsx` and `vite.templates.config.ts` build `public/template-library/`, with one lazy chunk per website and no upstream app shell. No project/document migration or copy transformation is introduced. Canvas messages validate source, origin and template ID.

## Authored template redesign sources

The 14 template source paths and IDs remain stable. New shared helpers are in vendor/design-library/src/redesign/: Scene.tsx owns the Three.js lifecycle, expressive-models.ts builds the eight additional physical objects, shared.tsx provides modal/audio/footer helpers, and expressive.tsx provides decorative motion helpers. redesign.css and expressive.css are scoped to the authored sites; local fonts and notices live in redesign/fonts/. These modules are bundled only into imported/template canvases, not the main editor.

## Character and pixel scene rendering

The two glyph studies share semantic markup and scoped styles in glyph-studies.ts/css. glyph-ascii.ts samples original 3D point surfaces and projects them into a character-cell depth buffer; glyph-pixel.ts draws original integer-grid scenes. glyph-runtime.ts binds three reversible ScrollTrigger pins to scene progress and bounds rendering to visible canvases at 20fps, pausing on document hide. Reduced motion paints static compositions without pins. Runtime cleanup disconnects observers/listeners and kills timelines. These use the same motionDocument/exportMotion path and local runtime/font packaging as the other Motion Studies.


## Replacement resource collections — November 2026

`src/resource-library` owns the native motion, SVG and primitives workspace. The canonical 25 sources and control/API catalog are `vendor/design-library/src/resources`. `portable.ts` creates both isolated preview documents and standalone embed markup; `resources.ts` bundles the common base and one component in a scoped classic-script IIFE. Exports contain index.html, component.js, metadata, integration notes and MIT license. SVG resources additionally expose getSVG. Shadow DOM scopes component styles; the preview bridge verifies message source and component ID. These collections replace the old experiment labs; shared vendor UI modules remain internal dependencies of retained templates.
