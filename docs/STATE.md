# Current state and context

Last verified: 11 November 2026 (combined motion, ASCII and Style studies work; earlier feature evidence remains historical). This file is the short entry point for a fresh chat or a different coding agent.

Repository: [yadavayush834/patchwork-studio](https://github.com/yadavayush834/patchwork-studio), private, branch `main`. The local checkout uses `origin` for this repository. Check `git status`, the current commit, and the remote before continuing; do not infer present synchronization from this dated note.

## Scenes expansion — 12 November 2026

Scenes now has ten places: the original Last Bus, Kelp, Long Night, Rooftops, Riso Swell and Lantern River, followed by Tidewatch, Cloudline, Glasshouse and Pomegranate Court. The four additions are original GLSL pixel paintings with palette-limited detail, pointer interaction, explicit keyboard artwork controls and pause/resume. They reuse the existing customizer, saved configuration, independent scene routes, words-off backgrounds and local ZIP packaging. No hero collection was changed for this task. Details and provenance are in `docs/SCENES.md`; browser regression: `scripts/verify-scene-expansion.mjs`.

## Hero sections — 11 November 2026

A dedicated collection at `?collection=heroes`, linked from the dashboard sidebar and overview, adds five original one-screen scenes: Facet (chrome GLSL ribbon), Undertow (spatial ASCII shell), Daybreak (pixel landscape with day/dusk), Lattice (folding WebGL wire surface), Frequency (fluted light shader). `src/heroes` owns the catalog, native editor, shared markup, runtime and exports. `npm run build:heroes` generates `public/heroes/hero.js`; normal dev/build runs it automatically. Independent routes are `?view=hero&hero=ID`. ZIPs include a reusable Shadow DOM custom element, original source/rebuild instructions and local licensed fonts. Editing is saved under namespaced local storage, separately from project documents. See `docs/HEROES.md` for contracts and the browser QA command.

## Burrow pixel descent — 11 November 2026

Nineteenth Motion Template, listed first: **Burrow**. By request it avoids side-scrolling: scroll dives the camera into a mole's burrow, flies it forward *into the screen* through one winding tunnel (topsoil with hanging roots, a bone hall whose fossil ribs arch around the camera under a skull, a blind river with glowing fish and stalactites, a crystal hall), orbits the cold heart while Pip gives it the lantern (GSAP flash), then rushes backward to the surface behind a ring of light travelling up the tunnel walls, and lifts away as the grey hill blooms. World: `burrow-world.ts` (tunnel curve, smooth noise-displaced rock shells with per-vertex strata colour and a per-vertex `along` value; chamber shells with shader-cut doorways; voxel fossil, crystals, stalactites, water, root knot, tree, blossoms, Pip). `burrow-runtime.ts` retimes travel so chapters III to V land mid-chamber, drives fog/light per chamber, the wall light ring, grey-to-colour bloom (`greyable`), and the HUD: depth gauge, specimen card, inventory hotbar that fills and marks the lantern as given. Shared post pass `pixel-pass.ts` (palette, Bayer, depth outlines; Cloudwhale still has its own inline copy). Story state `burrow-story.ts` is tested. Desktop reviewed; mobile only basic rules.

## Cloudwhale pixel fable — 11 November 2026

Eighteenth Motion Template, listed first: **Cloudwhale**, a seven-chapter scroll story about a town that lives on the back of a 212-year-old sky whale (dawn town, the old whale's eye, storm, dive through the cloud sea, the song with aurora and answering whales, the houses hopping to a young whale, the old whale becoming an island at dawn). The 3D world is instanced voxels (`cloudwhale-world.ts`: procedural humpbacks with a vertex-shader swim wave mirrored in JS so houses, trees and lanterns ride it; voxel houses, clouds, sky/aurora shader). `cloudwhale-runtime.ts` renders at 1/3 resolution into a target with depth, then a post shader quantises to a fixed 32-colour palette with 4x4 Bayer dither and inks depth-edge outlines, so the 3D reads as pixel art. Narration is an RPG dialogue box whose text is typed by scroll progress; HUD, chapter cards, segmented progress, logbook icons and ending are pixel components (`cloudwhale.ts` sprites from character grids, `cloudwhale.css` stepped box-shadow borders). Pure state in `cloudwhale-story.ts` is tested. Desktop reviewed; mobile only has basic rules.

## Living-art landing pages — 11 November 2026

Three Motion Templates (listed first): **Halcyon** (SaaS layout, real-time iridescent butterfly in pastel Bayer dither with twinkles), **Bloomfield** (centred hero, monochrome daisy/cosmos meadow on a pixel grid that unfurls on load and sways with wind and cursor) and **Aurelle** (framed studio layout, breathing four-ring lotus with vertical streak smear, bloom and god rays). Built from the user's references (three hero images, three videos) and the look vocabulary of matthewhamilton3141/lumen (MIT), reimplemented as a GPU pass rather than copied: `src/motion/living/look.ts` renders a Three.js subject into a one-texel-per-cell target, then a shader draws pixel/LED/streak cells with ordered dither, smear and twinkles, followed by optional god rays, bloom and output. Subjects: `butterfly.ts`, `meadow.ts`, `lotus.ts`; pages `pages.ts`; styles `living.css`; runtime `living/runtime.ts` (pauses offscreen/hidden; still frame for reduced motion). Partner logos are invented wordmarks. Desktop reviewed; narrow screens only have basic rules.

## combined motion, ASCII and Style studies work — 11 November 2026

Fourteenth Motion Template, listed first: **Goldseam**, a seven-chapter kintsugi story told by one real-time Three.js tea bowl. The bowl sits on a basalt plinth with steaming matcha, slips, shatters into 13 procedurally fractured shards (`src/motion/goldseam-geometry.ts`; neighbouring shards share periodic crack curves so they refit exactly), is laid out and weighed on a catalogue table with projected DOM labels, rebuilt piece by piece (Day 1→47 counter), lacquered, then gold dust streams into seam tubes that grow along the real fractures (bloom only in dark chapters). It ends back on the plinth with tea, closing the loop. One scrubbed GSAP master timeline drives both `goldseamState` (pure, tested in `goldseam-story.ts`) and all copy. Files: `goldseam.ts` (markup), `goldseam.css`, `goldseam-runtime.ts`; wired through `catalog.ts`, `templates.ts`, `document.ts`, `runtime.ts`. Cover: `public/motion/goldseam-cover.jpg` (captured from the live scene). No new assets or dependencies; export reuses the shared engine/fonts.

Desktop layout is the reviewed target. The user deferred mobile: narrow-screen rules exist (portrait camera, three-column catalogue, repositioned copy) but have only had a preliminary look and need a dedicated pass.

## Native Style studies — 11 November 2026

Style studies now uses a native gallery and interactive workbench at `?collection=library&library=styles`, preserving all 28 websites. Cards expose hover/button live tours, bookmarks and direct exploration. The workbench supports desktop/tablet/phone viewport sizes, restart, expanded preview, shareable `study` links, standalone website tabs, design notes and the complete library source ZIP. Favorite IDs remain compatible with the original vendor collection. Preview loading/retry and authenticated readiness/visibility messages are implemented. Art Deco navigation and contemporary-art controls/table were repaired for narrow screens; minimalist project rows now use keyboard-operable buttons.

## Current resource rebuild — 11 November 2026

The user requested a from-scratch replacement of Motion experiments, SVG experiments and UI primitives, then asked to stop further work and push the current implementation without deleting the collections. The current replacement has 8 motion components, 8 SVG generators and 9 UI systems. Native `src/resource-library/ResourceStudio.tsx` hosts isolated previews, live controls, source/API panels, event inspection and standalone ZIP/SVG downloads. Canonical framework-free sources live under `vendor/design-library/src/resources/`; original labs/explorer were replaced as requested. Shared UI helpers required by existing templates are retained. The full catalog now has 182 entries.

Verification so far: 43 unit tests and the production build pass; all 25 preview components rendered in Chromium without page errors after fixing a reserved DOM property collision. Detailed task-by-task interactions, mobile layouts, exported component behavior and assistive technology remain unverified. This is the current work checkpoint, not a claim of completed interaction QA.

## What the user asked for

An interactive place where creators can build websites using ready-made sections, sprites, art styles, backgrounds, fonts, ASCII art, and extensive manual customization. The approved first release is a local studio with export, designed for beginners and creators. Page structure uses responsive sections; artwork and sprites can be freely positioned inside scenes. Simple controls come first, with advanced controls available.

The user subsequently requested the real `stackedlol/ascii-sharks` library plus at least three more high-quality ASCII backgrounds. The four-scene collection is implemented and includes genuine downloadable videos. The user then requested a new GitHub repository, real commits, and enough context/style documentation for another agent or chat to continue the work.

## Mosslight and collection separation — 11 November 2026

Mosslight is now the thirteenth Motion Template, using its original standalone page and custom element. Its canonical HTML is `src/motion/mosslight.html`; local runtime/fonts and complete source ZIP are under `public/motion/mosslight/` and `public/motion/mosslight-template.zip`. Preview and customized export share `mosslightDocument`. The customizer supports name/headline/accent; the scene retains atmosphere, signal, motion and embed controls.

The old reference gallery, route handlers, source, media, packaging scripts, private-deployment scaffold and redirects have been removed from this repository and all build modes. The complete 21-study collection, original sources and historical documentation are preserved in the separate private repository `yadavayush834/reference-studies` with a SHA-256 migration manifest. Do not restore the old collection into Patchwork.

## Standalone motion opening — 11 November 2026

Motion cover, title, and Explore links now open each website in its own tab at `/?view=motion&motion=ID`. The generated template document replaces the entire page; no Patchwork chrome, iframe, or editor bundle is mounted. Existing `?collection=motion&motion=ID` shared links also open standalone. The separate **Customize & download** action retains the studio inspector using `&edit=1`. Saved configurations and website ZIP rendering remain shared and unchanged.

Verified: 39 unit tests, production build, all 12 standalone websites initializing and scrolling, saved customization/reload, and legacy direct links. No deployment or visibility change.

## Implemented

- Independent Motion Templates collection at `?collection=motion`, reached from dashboard navigation and a dedicated collection card. Nine complete GSAP ScrollTrigger experiences: Æther (product/chrome headphone assembly), Offscript (kinetic type, sideways work, flying process deck), Floraison (blooming sculpted flower, botanical specimens, seasons), Monolith (exploded courtyard pavilion, traced plans, cinematic spatial studies), Pelagic (diving capsule descent, sonar cartography, luminous specimens), Heliograph (orbital instrument, eclipse alignment, celestial atlas), Afterimage (mechanical iris, illustrated film edits, unspooling contact sheet), Reverie (image portal, rotating dream gallery, assembling postcard), and Traverse (fractured mountain panorama, folding map, glacier-to-summit passage).
- Templates preview in isolated documents and export as self-contained static website ZIPs with local fonts, GSAP/Three.js runtime, notices, and a reference recipe. They are separate authored sites, not ordinary Patchwork section documents. Brand/headline/accent/email customization persists in namespaced, versioned local storage; original editor documents stay version 1.
- Native scrolling, desktop/phone choreography, reduced-motion reading layouts, WebGL graphic fallback, keyboard exits, and bounded/offscreen 3D rendering. Source is under `src/motion/`; generated `public/motion/engine.js` comes from `npm run build:motion` and is rebuilt by normal dev/build scripts.

- Video Lab: separate lazy-loaded local workspace at `?lab=video`, accessible from dashboard navigation and editor Scenes. All 92 style IDs across 10 families have original procedural renderers, with no paid/unfinished cards.
- Lab upload/decode validation, seek/play/compare, trimming, source-frame thumbnails, effect-specific controls, text/PNG frames, recipe JSON, sequential MP4/WebM/GIF jobs, cancellation, audio retention, and generated clip/poster insertion into an existing section. Sources/settings remain session-local; reopening the Lab within the app retains them. Reload requires reselecting the source file.
- Preview, thumbnails, and exports use workers and one shared rendering engine. Bundled Mediabunny/WebCodecs handles media and gifenc handles GIFs. Website insertion stores ordinary media, preserving version 1 documents and existing export/runtime behavior. Effects are original procedural interpretations, not exact replicas or AI reconstructions.

- React/TypeScript/Vite studio: dashboard, blank projects, four starter worlds, editor, preview, and export dialog.
- Six section types, 24 world/section presets, 20 backgrounds, 24 original decorations, eight local font pairings, and six interaction presets plus Still.
- Section/content editing, searchable libraries, world filtering, advanced appearance controls, scene layers, recoloring, object dragging, separate phone coordinates, property locks, shuffle, and undo/redo.
- Image/short-video uploads; image descriptions; gallery item/link editing; video poster, fit, position, and overlay settings.
- IndexedDB autosave and project management. Editable project ZIP import/export validates documents and remaps imported asset identities. Website ZIP export packages independent HTML/CSS/JS, assets, fonts, and notices.
- ASCII gallery reachable from the dashboard, Scenes panel, or `?gallery=ascii`. Sharkwater uses the upstream fish/shark simulation; Starling hour (boids murmuration with a falcon and spreading panic), Firefly field (pulse-coupled synchronising fireflies lighting wind-blown grass) and Incense (stable-fluids smoke) are original interactive simulations in `src/ascii/{starlings,fireflies,incense}.ts` on the shared `cells.ts` renderer. They replaced the user-rejected Moon jellies / Spiral atlas / Velvet terrain on 11 November 2026; `legacyBackgroundIds` + `findBackground` map saved projects to the replacements.
- ASCII live/recorded modes, speed, detail, glow color, brightness, posters, and downloadable 1280x720 VP9 WebM loops. Each loop decodes to 204 frames at 24 fps, nominally 8.5 seconds.
- Reduced-motion posters, offscreen/hidden animation pausing, keyboard-focus preview, and responsive exported pages.

## Focused ASCII Studio / Pixel Art quality update

Only the Video Lab `ascii-studio` and `pixel` rendering paths were rebuilt. They now have dedicated engines, four presets each, exposure/contrast/edge controls, measured glyph coverage with selectable character sets, and perceptual pixel palettes with stable ordered dithering. Full-detail playback keeps the chosen cell grid instead of automatically coarsening it. Studio settings survive switching between the two tools and round-trip in version-1 recipes; legacy recipes remain accepted.

Preview, poster, and export share a normalized RGBA sampling path. MP4/WebM use the encoder's very-high quality setting for these two styles. The resolution selector defaults to 1080p but retains the no-upscale rule. Vite prebundles worker media dependencies so the first export does not reload the app and erase its local source. See the focused evidence in `docs/VERIFICATION.md`; the quality update was pushed to GitHub in commit `f65edfd`, with no website deployment.

## Verification and limits

The latest source passes `npm test` (32 tests) and `npm run build` with strict TypeScript and unused-symbol checks. Browser evidence covers editing, undo/redo, uploads, save/reload, project duplication/deletion, invalid imports, simulated storage failure/recovery, scene dragging, all four ASCII previews, controls, downloads, and live/recorded website exports. Independent extracted sites were tested at exact CSS widths 360, 768, and 1440. See `docs/VERIFICATION.md` for precise evidence.

Direct `file://` navigation is blocked by the automation tool, so double-click opening is not browser-verified. Exports use ordinary relative assets and standalone scripts; independent HTTP hosting was verified. Storage failure was simulated by a transaction exception rather than filling the disk. The linked X post was inaccessible (403), so no exact visual match to that unseen video is claimed.

## Runtime and data boundaries

The desktop preview is `http://127.0.0.1:5174`, using the local Vite development server. A future chat must check whether that process is still running; do not assume it is. Browser projects and uploaded user media are not files in Git. They stay in the browser's IndexedDB. Use the editable-project download to move or back up a user draft.

All shipped fonts, decorative artwork, posters, and video loops are committed under `public/`. A fresh clone does not need the ignored `output/`, `.cache/`, or browser profiles to run. The upstream code is vendored and pinned; no runtime GitHub/CDN request is needed.

## Next work is optional, not an unfinished requirement

The approved first release, ASCII expansion, and Video Lab implementation are complete locally. The longer roadmap remains: more coordinated worlds, multi-page sites, dedicated sprite/background editors, then optional cloud saves/publishing and community packs. Choose the next scope with the user; do not silently add cloud services or rewrite the editor.

## Useful cautions for continuation

- Keep preview and export rendering consistent and preserve existing local projects.
- The editor is desktop-first. Previewed/exported websites must remain responsive.
- The initial studio build used repo-wide coding work in the main chat; the user explicitly requested no subagents.
- Fresh browser QA should use a separate profile and prepared fixtures. Some scripts are staged workflows, not independent tests or CI entry points.
- Browser zoom can change the effective CSS viewport. Use actual `innerWidth` for responsive assertions; the final standalone probe compensates for zoom.

## Motion expansion — 29 October 2026

Three additional authored scroll experiences are integrated into the existing collection, customization record, and static ZIP exporter. Each has three reversible pinned sequences, original local artwork, a real captured cover, phone choreography, a complete reduced-motion reading layout, and accessible contact/navigation links. Pelagic and Heliograph add procedural Three.js instruments; Afterimage uses CSS optics and layered SVG film frames. Source additions: `studies.ts`, `studies.css`, `study-runtime.ts`, and `study-scene.ts`.

Current local preview: Vite development server on `http://127.0.0.1:5174`. This expansion adds no backend or document/storage migration. Focused checks are recorded in `docs/VERIFICATION.md`; browser QA has a separate production origin and does not touch original drafts.

## Image-led motion studies — Reverie and Traverse

The user requested two additional ambitious scroll websites and authorized generated imagery. Both are integrated into the nine-template collection with three pinned sequences each, original art direction and live semantic copy, phone/tablet compositions, existing brand/headline/accent/contact customization, and independent static downloads.

Six original scenes were generated with the built-in ChatGPT ImageGen tool, with one targeted summit refinement. Optimized local WebP files and exact prompt/provenance JSON records live in `public/motion/art/`. Reverie uses desert/garden/sky imagery; Traverse uses ridge/glacier/summit imagery. There is no image generation API in the product and no remote runtime media dependency. Exporting these templates includes only their three images and their artwork record. Earlier seven template bundles remain unchanged.

Source: `src/motion/image-studies.ts`, `image-studies.css`, `image-runtime.ts`, and `image-assets.ts`. Runtime initialization waits for the critical images to decode before measuring portal bounds. Latest checks: 29 tests plus the production build; see the verification log for actual browser evidence and limits. Local development remains at `http://127.0.0.1:5174`.

## Design Library — 30 October 2026

A separate `?collection=library` workspace imports the user's website-design-template-library snapshot `5e36f6275720538eafba279531aa1c8912f3883b`. Its 257 resources are indexed once: 25 templates, 28 style studies, 10 interface studies, 105 palettes, 40 motion experiments, 40 SVG experiments and nine UI primitives. Search, category filters, device previews, saved resources and source/reference downloads are implemented. Distinct works with similar labels remain separate; navigation aliases and repeated metadata are normalized, with original labels/metadata preserved. The editor, Motion Studies and Video Lab remain independent.

Source is under `vendor/design-library/`; an isolated React/Tailwind build produces `public/design-library/`. `npm run build:library` regenerates the canonical catalog, checks/builds the library and packages source. Normal dev/build also runs it. The first library build runs its pinned `npm ci --ignore-scripts` if dependencies are missing. Tool storage keys use `patchwork-design-library:`. No source push or deployment is included.

## Native template previews — corrected scope

Templates now open under Patchwork's native library header and controls. `src/template-library/TemplateStudio.tsx` owns the 25-card gallery, search/category filtering, single active hover preview, desktop/tablet/phone viewer, replay and return navigation. Actual covers live in `public/template-covers/`. A template-only runtime mounts the original site component without imported repository app navigation. Hover previews auto-scroll and unmount on leaving; reduced-motion disables auto-scrolling. No new editing system was added. Other collections retain their existing implementation pending later user direction.

## Template removals — 30 October 2026

Removed the templates numbered 1, 2, 3, 7, 9, 11, 12, 13, 17, 20 and 25 in the previous 25-template gallery, including their registry imports, source folders and covers. Fourteen templates remain in the same relative order and are numbered 1–14. The canonical library now has 246 resources; other collections are unchanged. Both native and imported template registries/builds use this same retained set.

## Earlier redesign checkpoint — 30 October 2026

All 14 retained template sources now have newly authored layouts, copy and interactions. The first six use the scoped redesign helpers/stylesheet; the next eight use expressive helpers/stylesheet and additional procedural models. Shared Three.js rendering has capped pixel ratio/frame rate, visibility pausing, reduced-motion behavior, resource cleanup and a graphic fallback. Four local typefaces retain OFL notices. No template was added back after the selected deletions.

The user explicitly paused the dedicated phone-layout pass and then requested an immediate GitHub push. Desktop visual review covered the first six and part of the remaining eight. Full interaction QA, the remaining desktop review, phone art-direction review and recapturing all gallery covers are unfinished. Existing cover JPEGs are prior snapshots and do not yet represent all new layouts. Do not present this checkpoint as fully design-verified.

## Template polish completed — 30 October 2026

Continued the checkpoint with desktop review of the remaining designs, a full-page phone review of all fourteen templates and layout measurements at 360, 768 and 1080 CSS pixels. Increased undersized annotation type, added phone touch-target/form rules and changed the phone sequencer to four columns. Fixed CRT/watch texture tinting and replaced the convex radar cap with a concave parabolic reflector and feed supports. Expressive tapes now pause offscreen and when hidden. Updated all eight expressive template descriptions/features to match their actual implementations. All fourteen gallery covers now come from the redesigned pages.

Representative interactive flows were exercised across all fourteen templates, plus native gallery search, live-preview teardown, device sizing, dialogs and replay. Reduced-motion simulation covered all fourteen scenes; representative WebGL-unavailable fallbacks were checked. This is browser QA in Chromium, not physical-device or hardware-performance certification. Detailed evidence and limits are in VERIFICATION.md.

## ASCII / pixel Motion Studies — work in progress

Null Signal and Bitquest have initial procedural canvas scenes and a GSAP pinned scroll journey. Sources are glyph-studies.ts/css and glyph-runtime.ts. These are early implementations, not the completed high-effort art direction requested by the user. Gallery covers are temporary SVG title cards. Further choreography, substantive authored content, real covers, mobile/reduced-motion review and independent export verification remain required.

## GitHub checkpoint / phone pass paused — 30 October 2026

The user explicitly paused phone-layout work and requested all current changes be pushed in 50+ commits. Preserve that pause. Null Signal and Bitquest have now been substantially rebuilt with three independent pinned sequences apiece: sampled 3D ASCII instrument, vaulted arcade and message assembly; original pixel town, railway and island atlas. Sources are glyph-studies.ts/css, glyph-runtime.ts, glyph-ascii.ts and glyph-pixel.ts. Real covers replace title cards. Initial standalone downloads, desktop scrolling, phone bounds and reduced-motion simulation were exercised, but final phone polish and complete final art/interaction/export re-review remain pending. Earlier work-in-progress notes describe preceding versions.

This checkpoint also includes the fourteen-template presentation polish from the preceding turns. Do not call this entire checkpoint fully design-verified.


Citylines motion update: train eases through a stop, with an animated route signal, birds, and decorative sparks. Motion pauses when the scene is offscreen or the document is hidden and respects reduced motion.



Added Paar, a video-inspired Reference Study with procedural pixel planets and an interactive panel layout. This is a recreation rather than the original source artwork or exact animation.

Added Oldhand as a video-inspired Reference Study with generated blue halftone portrait artwork, timed note reveals, replay control and a standalone ZIP. Demo contact details and copy are placeholders.

Added Studioform: yellow video-inspired full-screen hero with generated portrait, moving typography, animated lighting, navigation panels and standalone template ZIP. Portrait and motion approximate the supplied clip.

Studioform lighting fix: replaced looping gradient shadow with a pointer-controlled soft portrait reveal over a dark silhouette. It eases toward pointer coordinates, supports touch pointer movement and reduces smoothing when reduced motion is enabled. Template ZIP regenerated.


Botanical Portfolio: replaced blurry clipped title with editable locally bundled calligraphy; added generated watercolor paper background and reduced-motion-aware local GSAP entrance and pointer movement. The downloadable template includes the new assets and licenses.

Added Education Dashboard Reference Study (eduspace), a screenshot-inspired desktop learning dashboard with generated avatar sheet, interactive sample course filtering/dialogs, session-only course selection and illustrative activity. The standalone ZIP includes the expansion guide.

Education dashboard expanded into a full-screen standalone learning workspace with a GSAP welcome panel, locally saved demo course enrollment, lesson milestones, schedule and profile. Activity chart reflects completed demo milestones. Course content is illustrative and no backend or video lessons are provided.

Added Hearthstone Roasters Reference Study: generated bottle and alpine imagery, poster-style opening, vertical GSAP ScrollTrigger scene and editable ZIP including an expansion guide. The bottle is a 2D cutout and generated label rather than a 3D model; copy is illustrative.


Style Studies gallery: all 28 studies now have on-demand miniature live previews on hover or keyboard focus, with a palette-based fallback and just one mounted at a time. Full views display each study's palette and typography. Shared study rendering now provides locally bundled fonts, theme-colored focus and selection states, balanced headings, and reduced CSS motion. Existing designs and independent interactions remain intact.

Style Study cards now open the selected interactive website as a standalone full-page tab. The gallery stays open in its original tab, hover previews remain available, and each website's Style Gallery control returns to the Style Studies collection.

Style Studies gallery now matches the Patchwork template collection, with the redundant inner navigation removed. Each card displays an actual captured hero from its study; hover/focus loads the live website without an on-card preview label. All 28 locally captured covers are included in the library source archive.

Style Studies hover previews automatically tour the website while the pointer is over its card. They support document scrolling and scrollable vertical/horizontal panels, stop when the preview unmounts, pause while hidden, and remain still for reduced motion.


2026-11-02: Design Library now has a native color workspace with 105 searchable palettes, a live three-page sample website, and copyable color values. Interface Studies is hidden from the library's collection navigation and resource list; its upstream source remains preserved.

2026-11-02: Color Palettes now offers 155 combinations and six live sample designs: studio, product, shop, journal, portfolio and dashboard. Palette selection is shared across the designs.

2026-11-02: Motion and SVG Experiments each have a Patchwork workspace with a searchable list, an interactive single-experiment stage, controls, and five sample website contexts. Existing collections contain 40 experiments each. Unsupported imported controls are omitted when their declared props can be checked.

2026-11-02: Added The Last Lightkeeper as the twelfth Motion Study. The pixel fable uses an original Three.js voxel observatory, a vertically scrubbed GSAP story, unfolding floors and roof, a descending keeper, lens alignment and a valley-lighting finale. It supports the existing template customization and self-contained ZIP export.

2026-11-02 Lightkeeper revision: replaced the five-beat machine-lighting ending with seven acts: a received call, lift access, lantern placement, lens alignment, reassembly/transmission, sequential village illumination, and a returning reply at dawn. Added a geared lift, socket, catwalk, telescope, ladder, bridge, twelve-house village, chimney smoke and a moth companion. The flight log is now optional. Narrative progress is deterministic and supports reversing the scroll.

## Hero opening — 11 November 2026

Hero section 1 now uses independent website links as the primary gallery action. Its covers and titles open new tabs, with no Patchwork UI or iframe. Hero section 2 is unchanged. Separate Customize & download buttons retain the editor. Existing collection+hero links open standalone unless `edit=1` is present; editing actions write this flag and closing the editor removes it. Namespaced saved configuration is shared with the standalone renderer. `scripts/verify-hero-opening.mjs` checks actual clicks across the five heroes in section 1 and saved edits.

## Verified Vercel connection — 11 November 2026

The authenticated Vercel app connection can access the existing `patchwork-studio` project and its GitHub link to `yadavayush834/patchwork-studio`. Production at https://patchwork-studio-six.vercel.app is READY at commit f0fad23; prior main-branch pushes also produced successful Git deployments. The working checkout now has an ignored local `.vercel/project.json` identifying the verified project/team. No new deployment, project, billing change, or repository push was performed for this connection task. Newer local changes remain unpublished. See `docs/DEPLOYMENT.md`.

## Motion Studies card previews — 12 November 2026

Every Motion Study now has a real live gallery preview on mouse hover, keyboard link focus or its explicit touch-friendly preview button. One active card mounts the actual website with saved customization and an automatic scroll tour; posters remain visible during loading or failure. Offscreen/hidden previews unmount and run their existing pagehide cleanup. Thumbnail-only drawing-buffer resolution is capped independently of full websites. Reduced motion prevents the tour. The normal cover/title/Explore links still open independent websites. Source: `src/motion/MotionCardPreview.tsx`, `card-preview-document.ts`; QA: `scripts/verify-motion-card-previews.mjs`.


2026-11-12: Added four living-art Motion Studies: Nereid (jellyfish), Zephyr (seed head), Vernant (fern), Volute (spiral). Original procedural Three.js subjects in living/specimens.ts reuse the existing dither renderer, standalone routes, customization and export pipeline. Collection now has 23 templates.
