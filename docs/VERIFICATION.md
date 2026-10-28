# Verification history — latest 28 October 2026

## Release gates — 27 October 2026

- `npm run build`: passed. Strict TypeScript, including unused locals/parameters, and production Vite build.
- `npm test`: 13 passed, 0 failed after the ASCII expansion. Covers catalogs, immutable edits/reordering, validation, escaping, IndexedDB persistence, bundle identity remapping, scene data, shared asset deletion, unique/escaped section anchors, ASCII modes/settings, and evolving finite glyph fields.
- Local production preview: HTTP 200 at `http://127.0.0.1:5174`.

## Browser evidence

Playwright CLI exercised the running studio and extracted websites. Screenshots and downloaded ZIPs are in `output/playwright/` (ignored build artifacts).

- Edited project names/content; checked undo/redo; placed an object with independent phone coordinates and hid it on phone; rejected an unsupported SVG upload.
- Saved, returned to dashboard, reloaded, and reopened the project with its edited headline intact.
- Uploaded a PNG, edited its description, exported a website and project backup, and imported the backup with the image restored.
- Uploaded an original four-second WebM. Verified blob-backed playback with `readyState=4`, muted/loop/playsInline enabled, and restored its four-second duration after project export/import.
- Dragged a sprite: persisted position changed from 12%/65% to 18%/59%; inspector selected the dragged object.
- Duplicated/deleted sections and undid/redid the deletion. Duplicated/deleted a project and verified deletion persisted after reload.
- Injected a storage transaction failure: visible save failure and error; restoring storage and editing again recovered to Saved locally.
- Imported an unsupported version: visible error and existing project preserved.
- Rendered all 24 world/section combinations through the four starters at 360/768/1440 widths. No horizontal overflow, broken images, or clipped headings/buttons; local fonts loaded. Full-page screenshots reviewed, and layout/style collisions corrected.
- Independently extracted the website ZIP and served it outside the studio. Confirmed its navigation, images, video, local fonts, SVG decorations, and reduced-motion video pause/poster behavior.
- Final ZIP inspection: relative font URLs, no unresolved `asset:`/`blob:` references, inline SVG, and both user-uploaded image/video files present. A nested-folder check verifies assets do not rely on studio/root URLs.

## Limits

The browser tool blocks `file://` navigation. Direct double-click opening was therefore not browser-verified. Exported output contains ordinary relative HTML/CSS/script/media references and no fetch/module/API dependency; independent HTTP serving was verified instead. Browser autoplay remains subject to user/browser policy.

Storage tests used browser IndexedDB and fake-indexeddb for isolated unit checks. The save-failure test injects a transaction exception; it does not fill the physical disk or exhaust the browser's real quota. Projects remain local to the chosen browser origin. Cloud accounts and hosting were deliberately excluded.

## ASCII motion studies expansion

- Pinned stackedlol/ascii-sharks at a0074c16a106f0abc665fe9712ca445f8f98ad8e. Vendored the actual World/AsciiRenderer/species/math and retained the MIT license. Three additional scenes are original CC0 glyph sculptures. Runtime and license notices are included in website exports.
- Browser verified all four live gallery canvases: advancing frame counters and nonempty rendered artwork. Pause switches to a visible poster. Tabs, scene application, WebM download, speed/detail/brightness controls, live/recorded modes, save/reload, and both export paths exercised successfully.
- Final production exports unpacked and served independently at a separate origin and nested path. Live frames advanced; OS reduced-motion emulation hid/stopped the canvas and showed its poster; scrolling offscreen paused it and scrolling back resumed. No requests to the studio or external services.
- Independent live output fit exact CSS viewport widths 360, 768, and 1440 without horizontal overflow. Recorded export decoded at 1280x720, muted, looping, and at the configured playback rate.
- Four real VP9 WebM assets were recorded from the live scenes, timestamp-normalized, and crossfaded into loops. Each decodes to 204 frames at 24 fps (nominal 8.5 seconds). Final files: Sharkwater 1,474,757 bytes; Moon jellies 1,491,201; Spiral atlas 852,998; Velvet terrain 1,589,785.
- Frame-boundary probe at 160x90 compared mean absolute RGB difference. The shark seam improved from 3.943 before normalization to 0.414 after correction (ordinary adjacent-frame example: 0.596). Other final seam deltas were 0.343, 0.253, and 0.498 on a 0-255 channel scale. This is evidence of softened boundaries, not a claim of mathematically identical endpoints.
- A standalone reduced-motion probe exposed a stale diagnostic pause flag. The runtime now also observes the shared root motion class and marks paused frames before returning; final pause/resume probes passed.
- The X reference returned HTTP 403; the implementation references the inspected GitHub source and uses its genuine simulation. No claim of matching an unseen X video frame-for-frame.

Reproduction: scripts/browser-ascii-editor.js, scripts/browser-ascii-final-export.js, and scripts/browser-ascii-standalone.js. Media generation: scripts/prepare-ascii-capture.mjs, scripts/browser-record-ascii.js, and scripts/finish-ascii-loops.py. Evidence screenshots and ZIPs are in output/playwright/.

## Repository handoff checks

Before the initial repository push, `npm run qa:fixtures`, all 13 unit tests, and the production build passed again. Current dashboard and ASCII gallery screenshots were captured from the running production preview in a fresh browser profile and included as portable design references. The staged source was checked for accidental credentials and ignored artifacts. Original OFL notice text retains its upstream whitespace; authored code/tooling passes the Git whitespace check.


## Video Lab — 28 October 2026

- Final gates: `npm test` passed 19/19 (the original 13 plus six Lab contract/math/recipe tests); `npm run build` passed strict TypeScript and the production Vite/worker bundles. Dependencies are pinned, locally bundled, and retain MPL-2.0/MIT notices. No schema migration, account, service, deployment, commit, or push was introduced.
- All 92 registry entries rendered on a synthetic portrait/gradient/detail scene with non-flat output, deterministic repeated frames, and different output for a shifted source frame. The contact sheet was visually reviewed. Six character renderers returned actual Unicode text; a downloaded Braille frame contained 7,279 valid Braille/newline characters. Audit JSON and the 92-style contact sheet are in ignored `output/playwright/`.
- Real browser flows covered upload/decode, family/search selection, active preview/play/pause/seek, trim, original comparison controls, settings, recipe save/restore, text download, PNG control, selected-style queues, cancellation, retained completed results, invalid trim, corrupt MP4, undecodable FFV1/Matroska input, and simulated unavailable VideoEncoder capability errors. Deliberately rejected inputs preserved the prior usable source.
- Local moving/audio fixture: a 0.5–1.5 second segment produced H.264/AAC MP4 and VP9/Opus WebM. Independent FFmpeg decoding returned exit 0 with 24 frames at 320x180 and 24 fps in both. MP4 duration was 1.00 seconds; WebM container duration was 1.02 seconds (video nominally 1 second, audio packet padding). GIF decoded to 12 frames, no audio, and 1.00 seconds after cumulative centisecond delay rounding was corrected.
- Source-frame-to-export comparison: the first decoded RGB-split MP4 frame against the shared renderer at source time 0.5 had mean absolute RGB channel error 2.5583/255. This checks alignment/orientation and expected codec loss for this fixture; it is not a lossless-output claim. Temporal datamosh preview, seeking, and WebM rendering passed with a separately decoded 0.2-second reference frame.
- Portrait and genuine 90-degree display-matrix rotation inputs both exported upright 180x320 H.264 clips without audio. A 0.6-second selection decoded to 15 frames / 0.625 seconds, within one 24-fps frame of the requested segment. An initial rotation probe was discarded because the fixture lacked rotation metadata; the corrected fixture was independently inspected before rerunning.
- Website handoff: rendered MP4/poster insertion, undo/redo, saved-project reopen (also verified after a full page reload), editable-project ZIP download/import, and imported media playback passed. Website ZIP extracted to 29 entries including the generated media and poster, with no unresolved `asset:`/`blob:` references. Independently served output played, stayed within widths 360/768/1440, and paused/hid the video over its generated poster under reduced motion.
- Existing ASCII gallery regression: all four scenes advanced their frame counters after tab switches (sharks 10→22, jellies 5→14, galaxy 5→11, terrain 11→36). Existing renderer/storage/import/export unit checks still pass.
- Production port 5174: a two-style Characters/RGB Split queue completed; closing/Escape and reopening retained the source/results; keyboard focus stayed inside the Lab. Lab scroll width matched viewports 1440/768/390. The production queue smoke check contained zero console errors/warnings. The later pixel-readback diagnostic produced only two Canvas2D willReadFrequently performance hints, with zero console errors. Adaptive Voxel playback on the 320x180 fixture delivered 47 frames over 2.5 seconds; maximum observed 20ms main-thread timer interval was 26ms. A follow-up with a genuine 1280x720 shipped input produced 44 Voxel frames in 2.5 seconds with a 36ms maximum main-thread timer gap. PNG download, original/transformed comparison, and reopening at the saved playhead position also passed. These are short fixture measurements, not universal frame-rate promises.

Reproduction: `browser-video-lab-engine.js`, `browser-video-lab-flow.js`, `browser-video-lab-handoff.js`, `browser-video-lab-media.js`, `browser-video-lab-compare.js`, and `browser-video-lab-production.js` under `scripts/`. Browser work used isolated QA sessions; no user storage was cleared. Builds were kept separate from final browser flows because regenerating the ASCII runtime can trigger a Vite page reload and discard intentionally session-local sources.

Limits: effects are original procedural interpretations rather than exact paid-product replicas or AI reconstructions. Full 250 MB / 60-second / 1080p stress jobs, the complete 92-style × three-format video-export matrix, and Firefox/Safari are untested. Per-style visual/changed-frame checks used a synthetic fixture, not a large corpus of real faces/footage. Format availability depends on the browser/device codec implementation; partial failures surface explicit errors. Paused previews/exports use full settings; moving previews may simplify cell detail. Direct file:// opening retains the pre-existing verification limitation.
