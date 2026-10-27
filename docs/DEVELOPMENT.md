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
