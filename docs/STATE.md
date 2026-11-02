# Current state and context

Last verified: 30 October 2026. This file is the short entry point for a fresh chat or a different coding agent.

Repository: [yadavayush834/patchwork-studio](https://github.com/yadavayush834/patchwork-studio), private, branch `main`. The local checkout uses `origin` for this repository. Check `git status`, the current commit, and the remote before continuing; do not infer present synchronization from this dated note.

## What the user asked for

An interactive place where creators can build websites using ready-made sections, sprites, art styles, backgrounds, fonts, ASCII art, and extensive manual customization. The approved first release is a local studio with export, designed for beginners and creators. Page structure uses responsive sections; artwork and sprites can be freely positioned inside scenes. Simple controls come first, with advanced controls available.

The user subsequently requested the real `stackedlol/ascii-sharks` library plus at least three more high-quality ASCII backgrounds. The four-scene collection is implemented and includes genuine downloadable videos. The user then requested a new GitHub repository, real commits, and enough context/style documentation for another agent or chat to continue the work.

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
- ASCII gallery reachable from the dashboard, Scenes panel, or `?gallery=ascii`. Sharkwater uses the upstream fish/shark simulation; Moon jellies, Spiral atlas, and Velvet terrain are original glyph sculptures.
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

## Reference studies — initial work in progress

The Pinterest folder contains 12 reference screenshots. A separate Reference Studies section and the first Brainka-inspired live page have been started at `?collection=pinterest`. Its monochrome face was generated with the built-in image tool and saved at `public/pinterest-studies/brainka-face.png`; the screenshot is retained beside it for reference. The generated face and coded icons are approximations, and the additional content is imagined. Eleven references still need implementation and the first needs further fidelity review.

## Reference studies expansion — 30 October 2026

All twelve screenshot references now have a local gallery entry and independent live HTML study under `public/pinterest-studies/`. Eleven additional image backgrounds were generated with the built-in image tool; the prompt summaries are in `artwork-prompts.json`. These are approximate recreations, not pixel-identical reproductions, and content outside the screenshots was invented. Some product/commerce controls are local demonstrations. Review exact fidelity, responsive layouts and controls before treating the studies as final.

## ASCII / pixel Motion Studies — work in progress

Null Signal and Bitquest have initial procedural canvas scenes and a GSAP pinned scroll journey. Sources are glyph-studies.ts/css and glyph-runtime.ts. These are early implementations, not the completed high-effort art direction requested by the user. Gallery covers are temporary SVG title cards. Further choreography, substantive authored content, real covers, mobile/reduced-motion review and independent export verification remain required.

## GitHub checkpoint / phone pass paused — 30 October 2026

The user explicitly paused phone-layout work and requested all current changes be pushed in 50+ commits. Preserve that pause. Null Signal and Bitquest have now been substantially rebuilt with three independent pinned sequences apiece: sampled 3D ASCII instrument, vaulted arcade and message assembly; original pixel town, railway and island atlas. Sources are glyph-studies.ts/css, glyph-runtime.ts, glyph-ascii.ts and glyph-pixel.ts. Real covers replace title cards. Initial standalone downloads, desktop scrolling, phone bounds and reduced-motion simulation were exercised, but final phone polish and complete final art/interaction/export re-review remain pending. Earlier work-in-progress notes describe preceding versions.

This checkpoint also includes the twelve Pinterest reference studies and the fourteen-template presentation polish from the preceding turns. Pinterest studies remain approximate and need fidelity refinement. Do not call this entire checkpoint fully design-verified.

31 October 2026: Added Citylines to Reference Studies, based on the supplied short video. It uses generated city artwork and a separately animated train; it is an approximation of the video, not the original source artwork.

Citylines motion update: train eases through a stop, with an animated route signal, birds, and decorative sparks. Motion pauses when the scene is offscreen or the document is hidden and respects reduced motion.

Reference Studies now opens each standalone website in a new browser tab at full size, leaving the gallery available in Patchwork.

Citylines now has a Copy template download in Reference Studies. The build packages its complete HTML, inline CSS/animation, local artwork and editing instructions into citylines-template.zip.

Added Paar, a video-inspired Reference Study with procedural pixel planets and an interactive panel layout. This is a recreation rather than the original source artwork or exact animation.

Added Oldhand as a video-inspired Reference Study with generated blue halftone portrait artwork, timed note reveals, replay control and a standalone ZIP. Demo contact details and copy are placeholders.

Added Studioform: yellow video-inspired full-screen hero with generated portrait, moving typography, animated lighting, navigation panels and standalone template ZIP. Portrait and motion approximate the supplied clip.

Studioform lighting fix: replaced looping gradient shadow with a pointer-controlled soft portrait reveal over a dark silhouette. It eases toward pointer coordinates, supports touch pointer movement and reduces smoothing when reduced motion is enabled. Template ZIP regenerated.

Added Botanical Portfolio (floriette) Reference Study. Single 16:9 hero with supplied calligraphy as a clipped graphic, generated botanical illustration, editable captions, small ambient motion and a downloadable ZIP including the expansion guide at docs/reference-studies/floriette-design.md. Illustration is a recreation, not identical to the reference.

Botanical Portfolio: replaced blurry clipped title with editable locally bundled calligraphy; added generated watercolor paper background and reduced-motion-aware local GSAP entrance and pointer movement. The downloadable template includes the new assets and licenses.

Added Education Dashboard Reference Study (eduspace), a screenshot-inspired desktop learning dashboard with generated avatar sheet, interactive sample course filtering/dialogs, session-only course selection and illustrative activity. The standalone ZIP includes the expansion guide.

Education dashboard expanded into a full-screen standalone learning workspace with a GSAP welcome panel, locally saved demo course enrollment, lesson milestones, schedule and profile. Activity chart reflects completed demo milestones. Course content is illustrative and no backend or video lessons are provided.

Added Hearthstone Roasters Reference Study: generated bottle and alpine imagery, poster-style opening, vertical GSAP ScrollTrigger scene and editable ZIP including an expansion guide. The bottle is a 2D cutout and generated label rather than a 3D model; copy is illustrative.

Driftbar is included in Reference Studies with its standalone template download. The current meadow/cloud and vertical GSAP scroll study was deployed to the existing Patchwork Vercel production project on 2026-11-01 at https://patchwork-studio-six.vercel.app (deployment dpl_De9kMPZHre3VbWeEtNdjU86PzznR).

Style Studies gallery: all 28 studies now have on-demand miniature live previews on hover or keyboard focus, with a palette-based fallback and just one mounted at a time. Full views display each study's palette and typography. Shared study rendering now provides locally bundled fonts, theme-colored focus and selection states, balanced headings, and reduced CSS motion. Existing designs and independent interactions remain intact.

Style Study cards now open the selected interactive website as a standalone full-page tab. The gallery stays open in its original tab, hover previews remain available, and each website's Style Gallery control returns to the Style Studies collection.

Style Studies gallery now matches the Patchwork template collection, with the redundant inner navigation removed. Each card displays an actual captured hero from its study; hover/focus loads the live website without an on-card preview label. All 28 locally captured covers are included in the library source archive.

Style Studies hover previews automatically tour the website while the pointer is over its card. They support document scrolling and scrollable vertical/horizontal panels, stop when the preview unmounts, pause while hidden, and remain still for reduced motion.

2026-11-02: Mosslight is included in Reference Studies as a standalone interactive demo with a downloadable source package, including its reusable web component, preview, fonts and font licenses. The original project remains at /home/ayush/mosslight.

2026-11-02: Design Library now has a native color workspace with 105 searchable palettes, a live three-page sample website, and copyable color values. Interface Studies is hidden from the library's collection navigation and resource list; its upstream source remains preserved.

2026-11-02: Color Palettes now offers 155 combinations and six live sample designs: studio, product, shop, journal, portfolio and dashboard. Palette selection is shared across the designs.

2026-11-02: Motion and SVG Experiments each have a Patchwork workspace with a searchable list, an interactive single-experiment stage, controls, and five sample website contexts. Existing collections contain 40 experiments each. Unsupported imported controls are omitted when their declared props can be checked.

2026-11-02: Added The Last Lightkeeper as the twelfth Motion Study. The pixel fable uses an original Three.js voxel observatory, a vertically scrubbed GSAP story, unfolding floors and roof, a descending keeper, lens alignment and a valley-lighting finale. It supports the existing template customization and self-contained ZIP export.

2026-11-02 Lightkeeper revision: replaced the five-beat machine-lighting ending with seven acts: a received call, lift access, lantern placement, lens alignment, reassembly/transmission, sequential village illumination, and a returning reply at dawn. Added a geared lift, socket, catwalk, telescope, ladder, bridge, twelve-house village, chimney smoke and a moth companion. The flight log is now optional. Narrative progress is deterministic and supports reversing the scroll.

2026-11-02: Reference Studies production access is separated into the Vercel-authenticated patchwork-reference-studies project. Public Vercel builds remove the reference files and send the collection link to that protected project; local development retains the original collection. `node scripts/prepare-private-reference.mjs /tmp/<destination>` prepares future private deployments; enable all-deployment Vercel Authentication before deploying.
