# Patchwork Studio

A local creative website studio built with React, TypeScript, and Vite. Choose a world, assemble responsive sections, compose scenes, and take your website with you.

## Continuing in a new chat or agent

Start with [AGENTS.md](AGENTS.md) and [the current state](docs/STATE.md). Then read the [architecture/file map](docs/ARCHITECTURE.md), [design direction](docs/DESIGN.md), and [development/QA guide](docs/DEVELOPMENT.md). [Task history](docs/TASKS.md) and [verification evidence](docs/VERIFICATION.md) distinguish shipped work from the optional roadmap.

The repository includes all shipped code, fonts, artwork, posters, and video loops. Browser projects and uploaded user drafts stay in IndexedDB; use an editable-project ZIP to move them between browsers/devices.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. Keep using the same URL and browser profile: browser storage is specific to that origin. For a custom port, invoke Vite directly: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5174`.

```sh
npm test
npm run build
npm run preview
```

## Included

- Four coordinated worlds and complete starter sites; six section types with 24 world presets.
- 20 backgrounds, including four ASCII motion studies and four original ambient loops; 24 original SVG decorations.
- Eight local font pairings using eight SIL Open Font License families. Assets and fonts include redistribution records in `public/licenses`.
- Section and object selection, drag-to-position scenes, independent phone coordinates, layers, recoloring, motion, property locks, shuffle, undo/redo, and advanced layout controls.
- Searchable libraries, world filters, raster image and short video uploads, poster/fit/overlay controls, gallery content and link editing.
- IndexedDB autosave, project duplication/renaming/deletion, editable project ZIP import/export, and standalone website ZIP export.
- Device previews, keyboard-focus preview, reduced motion, and offscreen/background animation and video pausing.

## Your work stays local

Projects and uploaded media live in IndexedDB on this device. Download an **editable project** ZIP for a portable backup before clearing browser data or changing browsers. Imported projects receive fresh project and upload identities, preserving existing work. Duplicated projects share media until no project refers to it; deleting the last referencing project removes that media.

**Export website** creates a folder with `index.html`, `styles.css`, `site.js`, and local assets, fonts, and licenses. Extract the whole ZIP before opening `index.html` or uploading the folder to a static host. No API, runtime dependency, build step, account, or studio server is needed by the website. Uploaded video autoplay follows the browser's media policy; a still poster remains available when motion is reduced.

Only `http:`, `https:`, `mailto:`, `tel:`, and fragment links are accepted. Uploads support PNG/JPEG/WebP/GIF up to 10 MB and MP4/WebM up to 30 MB / 60 seconds. Projects are single-page sites. Contact buttons open email links; forms and server services are outside this release.

## Structure

- `src/catalog.ts` and `src/types.ts`: versioned document format and creative registries.
- `src/render.ts`, `src/site.css`, and `src/site-runtime.ts`: shared preview/export rendering.
- `src/App.tsx` and `src/Preview.tsx`: dashboard, editor, and canvas interaction.
- `src/storage.ts` and `src/export.ts`: durable local data, validated bundles, and website packaging.
- `scripts/create-assets.py` and `scripts/create-loops.py`: reproducible original artwork/loops. Regeneration requires Python, Pillow, and imageio-ffmpeg; normal development does not.

## Validation

Run `npm run qa:fixtures` before the staged browser QA probes. Detailed prerequisites, port conventions, and regeneration commands are in [the development guide](docs/DEVELOPMENT.md).

`npm test` checks immutable document operations, catalog completeness, validation, escaping, persistence, media identity remapping, responsive scene data, and shared-media deletion. Browser QA scripts in `scripts/browser-*.js` run through Playwright CLI against the local studio. They exercise editing, uploads, saving/reloading, export/import, independent website output, and the four starter layouts at 360/768/1440 px. Screenshots and test exports are saved under ignored `output/playwright/`.

Future work: additional worlds, multi-page sites, dedicated asset editors, optional cloud storage/publishing, and community packs. The release has no network-backed services or hosting integration.

## ASCII motion studies

Open **Explore 4 living backgrounds** on the dashboard, or **Scenes → ASCII in motion** in the editor. The gallery previews one scene at a time; choose **Use this background** to apply it to the selected section. Blank projects receive a hero section. Search `ascii` in the background library to see all four studies.

- **Sharkwater** uses the actual `stackedlol/ascii-sharks` World/AsciiRenderer: hammerhead, mako, thresher, schooling fish, and luminous wakes. Move or click over the scene to disturb the ocean.
- **Starling hour** is a 1,400-bird murmuration (boids) over a lake at dusk. A falcon patrols and stoops; panic spreads bird to bird as a visible wave. The cursor is a second predator; click to startle the flock.
- **Firefly field** is a night meadow of pulse-coupled fireflies (Mirollo–Strogatz) that drift from random blinking into synchronized flashes, lighting the wind-combed grass. The cursor parts the grass; click to scatter them and break the rhythm.
- **Incense** is a real-time stable-fluids smoke simulation with buoyancy and vorticity confinement, rising from an ember through a window light shaft. Moving the cursor stirs the air; click to puff.

The three originals share `src/ascii/cells.ts` (a reference-style cell grid with shaded blocks and colour-bucketed glyphs). Projects saved with the retired Moon jellies, Spiral atlas and Velvet terrain backgrounds open as Firefly field, Starling hour and Incense respectively.

The section inspector offers live canvas / recorded WebM, speed, detail, glow color, and brightness. Recorded loops retain their baked detail/color; live mode exposes all controls. The gallery and inspector both offer video downloads. These are real, silent WebM assets, not links to external video services.

Live animation is capped at 30 fps and 1.5 device-pixel ratio. Offscreen and hidden canvases stop; reduced motion displays a poster. Exported sites include the same self-contained canvas runtime plus the relevant poster or video and the MIT/CC0 notices. No CDN or source-repo request is needed.

The vendored upstream revision and adaptations are documented in `src/vendor/ascii-sharks/NOTICE.md`. Original scene code is in `src/ascii/field.ts`; lifecycle/rendering is in `src/ascii/entry.ts`. `npm run build:ascii` regenerates the standalone runtime; normal dev/build commands do this automatically. To regenerate video assets, prepare `scripts/prepare-ascii-capture.mjs`, run the `scripts/browser-record-ascii.js` Playwright CLI workflow against a dev server on port 5175, then run `python scripts/finish-ascii-loops.py` (Pillow/imageio-ffmpeg are optional asset-generation dependencies, not runtime dependencies).

## Motion templates

Open **Motion templates** or `?collection=motion` for independent motion websites and scenes: Æther, Offscript, Floraison, Monolith, Pelagic, Heliograph, Afterimage, Reverie, Traverse, Nullsignal, Bitquest, The Last Lightkeeper, and Mosslight. The three newest studies explore ocean descent and sonar mapping, orbital instruments and an eclipse, and mechanical optics with scroll-directed films.

**Explore** opens the template as a complete website in its own tab, without the Patchwork interface. **Customize & download** keeps editing and ZIP export in the studio; saved changes also appear in the independent website.

Each template supports brand/headline/accent/contact customization and downloads as a complete local website with fonts, artwork, runtime, and notices. Native scrolling drives GSAP timelines. Phone compositions, reduced-motion reading layouts, and illustrated graphics for unavailable WebGL are included. See `docs/DEVELOPMENT.md` for the focused browser probes.

**Reverie** and **Traverse** add six original ChatGPT-generated environments to the motion collection. Their photographic worlds are choreographed into portals, turning galleries, image assembly, folding maps, and an alpine passage. Every download includes its three local WebP images and exact artwork-generation record; the exported website needs no AI service or remote media.

### Design Library

Open `?collection=library` or choose **Design Library** in the sidebar. A separate workspace contains 182 resources combining original interactions with retained work from `yadavayush834/website-design-template-library`: templates, style studies, interface recreations, color palettes, motion experiments, SVG experiments and UI primitives. Browse/search/save, preview at real device widths, customize the new interaction resources, and download source or reference metadata. This collection does not replace the editor or Motion Studies. See `vendor/design-library/README.md` for provenance and the normalized structure.

### Mosslight

Mosslight is included in Motion Templates as its original interactive pixel scene: a radio observatory, ringed planet, fireflies and a responsive lake. Open it independently, change atmospheres, send signals, toggle motion, or download the complete reusable component and website. Name, headline and accent customization are preserved in previews and exports.

The former reference collection is maintained separately in the private [`reference-studies`](https://github.com/yadavayush834/reference-studies) repository and is no longer part of Patchwork.
