# Development, testing, and regeneration

## Fresh checkout

Use Node.js 22 and npm. Normal use requires no Python, FFmpeg, GitHub credentials, or external service connection.

```sh
npm ci
npm run dev
```

Read Vite's printed Local URL. The original user workspace is on `http://127.0.0.1:5174`; preserve that origin/profile to see its IndexedDB projects. Check running processes before starting a second server on the same port.

For an explicit port, first run `npm run build:ascii`, then:

```sh
node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5174
```

The original Windows npm argument forwarding sometimes treated a port as Vite's root directory. Invoking Vite directly avoids that ambiguity. A production preview uses `npm run build`, then `node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 5174`.

## Required checks

```sh
npm test
npm run build
```

The build regenerates the standalone ASCII script, runs strict TypeScript, and builds the studio. Unit tests cover project operations/validation, storage, escaping, catalogs, scene data, and ASCII rendering contracts. GitHub Actions runs the same checks on Node 22.

For a UI/runtime change, test the complete affected path. Export changes require downloading a ZIP, extracting it, and serving it independently. Check referenced media/fonts, navigation, motion preferences, and responsive layouts; do not stop at a successful build or ZIP download.

## Browser QA recipes

The `scripts/browser-*.js` files contain Playwright CLI functions, not Node executables or `@playwright/test` specifications. Use an isolated browser profile. Some scripts assume a preceding stage's project/media; they are documented probes, not a single automatic suite.

Prepare portable local fixtures:

```sh
npm run qa:fixtures
npx --yes --package @playwright/cli playwright-cli --help
```

The fixture command creates an upload PNG, an invalid version ZIP, and the ASCII recording HTML under ignored `output/playwright/`. It uses committed media and installed JS dependencies; it does not need Python. Install the browser through the CLI's supported install command if the environment has none.

For existing studio flows, start the studio on port 5174, then open a named session:

```sh
npx --yes --package @playwright/cli playwright-cli -s=patchwork open http://127.0.0.1:5174
npx --yes --package @playwright/cli playwright-cli -s=patchwork run-code --filename=scripts/browser-editing.js
```

`browser-editing.js` starts a project if needed and verifies editing/history/mobile scene state and save/reload. `browser-media-export.js` continues that project through image upload, built-in video, reduced motion, website/project download, and import. `browser-projects.js` exercises duplicate/delete/history independently. `browser-recovery.js` checks transaction-error recovery and invalid imports. Drag/media probe files are focused diagnostics.

For the full ASCII editor probe, use a dev server on port 5175 and `scripts/browser-ascii-editor.js`. It opens `?gallery=ascii`, checks all four scenes, applies a background, changes controls, exports both modes, reloads, and checks saved settings/mobile layout.

`browser-ascii-final-export.js` runs against production on 5174 and writes live/video ZIPs. Extract them into `output/playwright/ascii-export-test/live` and `video`, serve that parent folder on 5181, then run `browser-ascii-standalone.js` in a separate browser session. It checks animation, reduced motion, offscreen pause/resume, effective CSS widths, independent requests, and recorded playback.

Run one sequence at a time per browser session. Do not edit/rebuild the dev runtime while a recording or multi-step browser probe is using it. Browser zoom can affect `innerWidth`; assert the effective CSS viewport, as the standalone ASCII probe does. Close QA sessions/servers when done without stopping the user's main preview.

## Video Lab QA and dependencies

`npm ci` installs pinned Mediabunny/gifenc; no FFmpeg, Python, paid API, or cross-origin isolation is required by the product. The Lab requires a modern browser with Workers, OffscreenCanvas, WebGL2, and compatible WebCodecs. Format/audio availability depends on the browser's actual codec support. The target Windows Chromium was checked for MP4 (H.264/AAC), WebM (VP9/Opus), and GIF.

Open `?lab=video`, or use dashboard Video Lab / editor Scenes. Sources are local MP4/WebM files up to 250 MB. MP4/WebM segments are limited to 60 seconds; GIF segments to 10 seconds. 480p/720p/1080p refer to landscape-equivalent long-edge bounds, preserving orientation and avoiding upscale. GIF caps width at 480 pixels. Website insertion retains the editor's 30 MB clip cap. Browser workspace origin/profile rules still apply.

The Lab retains source/settings/results while closed within the running app. They are intentionally not stored in IndexedDB; save a recipe and reselect the video after reload. Completed clips added to websites follow ordinary persistent asset/project-bundle behavior. ASCII Studio and Pixel Art keep full chosen detail during playback; slow devices may skip preview frames. Other heavy styles retain adaptive cell detail. Queued ASCII Studio and Pixel Art use their remembered custom settings; other noncurrent styles use defaults.

Use a separate browser session on dev port 5176 for the new staged CLI probes:

- `scripts/browser-video-lab-engine.js`: imports source modules, renders/determinism-checks all 92 styles, verifies real text, and captures a contact sheet.
- `scripts/browser-video-lab-flow.js`: creates a local moving/audio fixture in the browser, uploads it, trims, exports/downloads MP4/WebM/GIF, cancels a queue, and checks invalid trim recovery.
- `scripts/browser-video-lab-handoff.js`: continues that session through website insertion, undo/redo, saved-project reopen, website/project ZIP download, and project import.
- `scripts/browser-video-lab-compare.js`: compares a decoded MP4 frame against the shared renderer at the matching source time, profiles heavy preview playback, and exercises temporal datamosh. Run after the flow probe has saved its original source fixture.
- `scripts/browser-video-lab-production.js`: production port 5174, completed multi-style queue, adaptive playback, keyboard focus/Escape, session reopening, and responsive Lab layout.
- `scripts/browser-video-lab-media.js`: continues the editor session through portrait/rotation, silent exports, corrupt/unsupported input, recipes, text download, and simulated unavailable codec handling. It expects `portrait.mp4`, `rotated.mp4` (real display-matrix rotation), `corrupt.mp4`, and `unsupported.webm` fixtures under ignored `output/playwright/`.

These are CLI function snippets, without a trailing semicolon. Do not run a production build or regenerate the ASCII runtime during browser flows: Vite can reload the app and intentionally discard session-local Lab input. Stop QA sessions/servers afterward; leave the user's port/profile alone.

## Change a library item

1. Inspect `src/types.ts` and the relevant registry/defaults in `src/catalog.ts`.
2. Add the asset to `public/assets/` with its license/attribution. Keep existing IDs stable for saved projects.
3. Connect shared rendering/runtime and inspector controls when a capability needs them. Optional document additions must remain valid for older version 1 projects.
4. Verify preview, selection/customization, save/reload, project import, and independent website export. Update counts/tests/docs when the catalog changes.

## Generated artwork and video

Committed fonts, artwork, posters, WebMs, and `src/artwork.json` make a clone self-contained. Regenerate only when changing their sources.

- `python scripts/create-assets.py`: original SVG decorations/backgrounds, inline SVG JSON, and font/license fetching from Google Fonts. This uses the network.
- `python scripts/create-loops.py`: four original ambient WebM backgrounds.
- `npm run build:ascii`: bundles source controllers/sculptures/vendor code into `src/ascii/runtime.generated.js`. Normal dev/build also does this.
- `node scripts/prepare-ascii-capture.mjs`: makes the local recording fixture.
- `browser-record-ascii.js`: records 1280x720 live canvases through MediaRecorder against the dev server on 5175. Results land under ignored `output/playwright/`.
- `python scripts/finish-ascii-loops.py`: normalizes timestamps/frame rate and blends tail/head into four 204-frame, 24-fps WebM loops in `public/assets/ascii/`.

Python media generation uses Pillow and imageio-ffmpeg. These are optional authoring dependencies; install them with `python -m pip install -r scripts/requirements-assets.txt` if needed. Do not introduce Python or a CDN into the product runtime.

Review generated clips visually and decode them to verify frame count/dimensions. MediaRecorder can start with nonzero timestamps; normalization before trimming is necessary. Preserve `public/licenses/ascii-sharks-MIT.txt`, the upstream NOTICE, and font OFLs in source and exports.


### Focused studio quality probes

In an isolated Playwright CLI session on the Vite server, run `scripts/browser-studio-quality.js`, then `scripts/browser-studio-flow.js`, then `scripts/browser-studio-export-compare.js`. The first creates a local 960×540 moving portrait/landscape/gradient fixture, checks all eight presets, and uploads the encoded clip. The flow checks settings retention, playback dimensions, trimming, four playable MP4/WebM exports, recipe restoration, and narrow layout. The final probe decodes saved frames and compares them with the shared renderer at the matching source time; it writes `output/playwright/studio-quality-audit.json`.

Do not rebuild or edit app modules between these staged probes: HMR intentionally does not persist selected videos. `vite.config.ts` prebundles `mediabunny` and `gifenc` to prevent a dependency-discovery reload during the first export. Configure the CLI's browser executable for the installed Chromium on each machine; do not commit machine-specific paths.

For packaged-app checks, open a separate production-preview session and run `scripts/browser-studio-production.js` after the quality probe has saved its source fixture. It covers both GIF exports, cancelling an export, and retaining results across closing/reopening.


## Motion website opening

Cover, title, and Explore links open top-level websites at `/?view=motion&motion=ID`. Use `scripts/browser-motion-opening.js` in an isolated profile to verify all catalog routes and native scrolling. Existing motion probes that inspect `.motion-preview iframe` must use `?collection=motion&motion=ID&edit=1`, the explicit customization workspace. Website opening does not mount that iframe. Keep customizer and standalone configuration consistent.

## Motion collection development and QA

`npm ci` installs the pinned GSAP/Three.js dependencies. `npm run build:motion` bundles the standalone runtime and copies attribution; normal dev/build scripts run it automatically. Runtime edits do not use Vite's module HMR because the generated engine is a classic self-contained file: rebuild it explicitly after changing `runtime.ts` or `scene.ts`. Never edit `public/motion/engine.js` by hand. Public PNG covers are actual browser captures, not external stock images.

Routes: `?collection=motion` for the gallery, `?collection=motion&motion=aether`, `offscript`, `floraison`, or `monolith` for direct previews. The templates use isolated documents with their own scrolling. Browser scripts must select `.motion-preview iframe`, not the dashboard's unrelated preview iframes.

- `scripts/browser-motion-visual.js`: desktop WebGL/pin/overflow evidence and screenshots at multiple scroll positions.
- `scripts/browser-motion-flow.js`: real wheel scroll, chapter/sideways transforms, customization, downloadable four-template ZIPs, 390px layout and persisted settings.
- `scripts/browser-motion-covers.js`: cover capture at 900×1080. Use an isolated session with default namespaced motion configs; do not capture a user's custom template as the original cover.
- Packaged-app/standalone/reduced-motion checks are described in `docs/VERIFICATION.md`.

Keep browser profiles and downloads under ignored QA folders. Use software WebGL only for QA on machines lacking a GPU; a software renderer is not a reliable measure of user-device frame rate. New motion documents are independent templates; do not import them as ordinary editable project ZIPs or silently migrate existing projects.

`browser-motion-production.js` runs against the built app on 5177, checks the dashboard entry and downloads, then tests reduced-motion/keyboard exits. `browser-motion-downloads.js` refreshes the four production ZIPs. Extract them to `output/playwright/motion-sites/{aether,offscript,floraison,monolith}`, serve that parent on 5181, and run `browser-motion-standalone.js`. This verifies independent resources, real pins/wheel/anchors, 390px bounds and a deliberate WebGL-unavailable fallback. It modifies only the isolated test browser's WebGL API during its final fallback phase; close that session afterward.

`browser-motion-monolith.js` is the focused production probe for the fourth template: four gallery cards, three pins, staged blueprint notes and final spatial curtain, ZIP download, readable reduced-motion notes/projects at 390px, and iframe keyboard exit back to the dashboard.

### Expanded motion collection

`browser-motion-expansion.js` is the focused production probe on port 5177 for Pelagic, Heliograph, and Afterimage. It checks seven gallery entries, real wheel scrolling, three pins per new experience, a late authored composition, ZIP downloads, and phone/reduced-motion layouts. Prepare `output/playwright` as for the existing staged probes. Extract each downloaded ZIP and serve it on a separate local origin to check independence; none of the three needs remote media. Existing production/Monolith probes also expect the seven-card gallery.

### Image-led motion studies

`browser-motion-image-studies.js` is the focused production probe on 5177 for Reverie/Traverse. It checks loaded generated images, native wheel scroll, three pins each, late compositions, ZIP downloads, and complete phone/reduced-motion reading. As with the other CLI snippets, prepare `output/playwright` and use a separate QA browser profile. Extract downloads to a separate static server to check all `motion/art/` references independently. Existing gallery-count probes now expect nine entries.

The six original environments and their exact generation prompts live in `public/motion/art/`. To revise artwork, preserve the current files, generate a reviewed replacement, optimize it, update its provenance record, then verify image registration and export. Do not regenerate images on ordinary dev/build commands. The app has no runtime image-generation API.

## Imported library development

Use `npm run build:library` after editing `vendor/design-library/src/`. This regenerates `library-catalog.json`, runs its independent TypeScript/Vite build and writes `public/design-library/`, `catalog.json` and `library-source.zip`. Main dev/build invoke this step too; nested dependencies install from their committed lockfile on first use. The existing running Vite server serves generated public files without restarting, but library source changes need this build step. Edit sources, not hashed generated bundles.

Verify `?collection=library` on a separate QA origin: all seven counts, search, category filter, favorites after reload, one example per family, an actual 375px nested iframe, a source/reference download and returning to the original dashboard. Imported examples include simulated actions; they are not connected to real product backends. Original remote Google Font links were replaced by local system fallbacks. Source/provenance is in `vendor/design-library/README.md`.

### Native template gallery

`npm run build:library` also prepares/builds the template-only runtime. Edit original source, not `native-loaders.ts` or hashed output. Normal dev/build includes this step. Restart an already-running Vite server if its cached public-file inventory returns HTML for new dynamic JS imports.

Verify hover playback and teardown, card click staying in Patchwork, real 1080/768/375 canvas widths, replay and back-to-gallery. Covers are actual first-screen captures of all 14 retained redesigned templates, optimized as 720×540 JPEGs. Other collections have not been ported to the native shell.
