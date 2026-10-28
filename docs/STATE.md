# Current state and context

Last verified: 28 October 2026. This file is the short entry point for a fresh chat or a different coding agent.

Repository: [yadavayush834/patchwork-studio](https://github.com/yadavayush834/patchwork-studio), private, branch `main`. The local checkout uses `origin` for this repository. Check `git status`, the current commit, and the remote before continuing; do not infer present synchronization from this dated note.

## What the user asked for

An interactive place where creators can build websites using ready-made sections, sprites, art styles, backgrounds, fonts, ASCII art, and extensive manual customization. The approved first release is a local studio with export, designed for beginners and creators. Page structure uses responsive sections; artwork and sprites can be freely positioned inside scenes. Simple controls come first, with advanced controls available.

The user subsequently requested the real `stackedlol/ascii-sharks` library plus at least three more high-quality ASCII backgrounds. The four-scene collection is implemented and includes genuine downloadable videos. The user then requested a new GitHub repository, real commits, and enough context/style documentation for another agent or chat to continue the work.

## Implemented

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

## Verification and limits

The latest source passes `npm test` (19 tests) and `npm run build` with strict TypeScript and unused-symbol checks. Browser evidence covers editing, undo/redo, uploads, save/reload, project duplication/deletion, invalid imports, simulated storage failure/recovery, scene dragging, all four ASCII previews, controls, downloads, and live/recorded website exports. Independent extracted sites were tested at exact CSS widths 360, 768, and 1440. See `docs/VERIFICATION.md` for precise evidence.

Direct `file://` navigation is blocked by the automation tool, so double-click opening is not browser-verified. Exports use ordinary relative assets and standalone scripts; independent HTTP hosting was verified. Storage failure was simulated by a transaction exception rather than filling the disk. The linked X post was inaccessible (403), so no exact visual match to that unseen video is claimed.

## Runtime and data boundaries

The desktop preview was left at `http://127.0.0.1:5174`, serving `dist`. A future chat must check whether that process is still running; do not assume it is. Browser projects and uploaded user media are not files in Git. They stay in the browser's IndexedDB. Use the editable-project download to move or back up a user draft.

All shipped fonts, decorative artwork, posters, and video loops are committed under `public/`. A fresh clone does not need the ignored `output/`, `.cache/`, or browser profiles to run. The upstream code is vendored and pinned; no runtime GitHub/CDN request is needed.

## Next work is optional, not an unfinished requirement

The approved first release, ASCII expansion, and Video Lab implementation are complete locally. The longer roadmap remains: more coordinated worlds, multi-page sites, dedicated sprite/background editors, then optional cloud saves/publishing and community packs. Choose the next scope with the user; do not silently add cloud services or rewrite the editor.

## Useful cautions for continuation

- Keep preview and export rendering consistent and preserve existing local projects.
- The editor is desktop-first. Previewed/exported websites must remain responsive.
- The initial studio build used repo-wide coding work in the main chat; the user explicitly requested no subagents.
- Fresh browser QA should use a separate profile and prepared fixtures. Some scripts are staged workflows, not independent tests or CI entry points.
- Browser zoom can change the effective CSS viewport. Use actual `innerWidth` for responsive assertions; the final standalone probe compensates for zoom.
