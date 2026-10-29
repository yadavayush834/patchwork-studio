# Patchwork Studio — agent entry point

Read this file, `docs/STATE.md`, and `docs/ARCHITECTURE.md` before changing code. Read `docs/DESIGN.md` for UI/artwork changes and `docs/DEVELOPMENT.md` for setup and verification. `docs/TASKS.md` and `docs/VERIFICATION.md` record the build history and evidence.

## Product and authorized scope

Patchwork is a desktop-first, local creative website studio for beginners, artists, and students. The promise is: choose a world, customize it, and export a working website. The current version is implemented, including four ASCII motion studies. Work from the current files; do not restart or replace the app with a new scaffold.

- Preserve local-first operation, browser projects, working exports, and the existing creative library.
- Keep accounts, cloud storage, hosting, AI generation, collaboration, and multi-page sites as future work until the user requests them.
- Work solo unless the current user explicitly authorizes subagents. If delegation is authorized, use only `gpt-6.1-sol` / low or `gpt-6-luna` / high when supported. Assign bounded ownership; workers must preserve other edits. If those routes are unavailable, continue solo.
- Do not deploy, change repository visibility, or publish anything beyond the user's current authorization. The GitHub repository is private; the website is local.

## Development

Use Node.js 22 and the committed npm lockfile. Run `npm ci`, then `npm run dev`. Normal development and production builds regenerate the ASCII runtime automatically; Python is only needed for optional artwork/video regeneration.

The original desktop preview uses `http://127.0.0.1:5174`. Browser projects belong to their exact origin and profile: changing host/port/profile creates a different local workspace. Do not clear IndexedDB or remove user drafts to make a test pass. Use a separate browser profile for QA.

Required gates for source changes:

```sh
npm test
npm run build
```

There are currently 32 unit tests. For changes to editing, persistence, media, motion, or export, also exercise the relevant real browser flow. A successful build alone does not verify those behaviors. See the browser QA recipes and their prerequisites in `docs/DEVELOPMENT.md`.

## Architecture rules

- The project document and registry interfaces are in `src/types.ts` and `src/catalog.ts`. Preserve version 1 compatibility; new ASCII settings are optional for old projects.
- `src/render.ts` produces the same site markup for editor previews and exports. Do not introduce a second renderer or editor-only site behavior.
- Website styles live in `src/site.css` and `src/ascii.css`; editor styles live in `src/studio.css` and `src/ascii-studio.css`. Keep site selectors scoped under `.pw-*`.
- The canvas iframe hosts trusted generated markup and the standalone runtime. Escape user text, constrain links, validate imported documents, and keep arbitrary scripts/SVG uploads unsupported.
- IndexedDB stores project documents and uploaded blobs. Asset references are `asset:UUID`; browser object URLs are temporary and must never appear in exported websites or project documents.
- Update documents immutably. Preserve undo/redo and merge asynchronous uploads into the current project, rather than an old captured snapshot.
- `src/ascii/runtime.generated.js` is generated from `src/ascii/entry.ts` and its dependencies. Edit source, then run `npm run build:ascii`; do not hand-edit generated output.
- `public/motion/engine.js` is generated from `src/motion/runtime.ts` and `scene.ts` by `npm run build:motion`; edit source and rebuild. Motion templates are independent authored sites, not version-1 editor section documents.
- Preserve third-party notices, font licenses, and the pinned upstream source attribution. Exported scripts contain the ASCII engine, so every website export carries its MIT notice.

## Visual and interaction rules

The shell is a quiet lavender workbench. The user's website and its creative assets provide the personality. Preserve the coordinated worlds, deliberate typography, restrained controls, live previews, and meaningful empty/error states. Follow `docs/DESIGN.md` instead of applying a generic dashboard theme.

Every visible control must perform its advertised action. Preserve keyboard focus, responsive site layouts, reduced-motion posters, and offscreen/hidden animation pausing. Library items must preview, apply, save, and export.

## Handoff discipline

Inspect `git status` and the current diff before work. Preserve unrelated changes. Update `docs/STATE.md` when the actual implementation changes, `docs/TASKS.md` when scope/status changes, and `docs/VERIFICATION.md` when new checks produce evidence. Describe failures and unverified limitations honestly. Do not copy credentials, browser storage, downloads, caches, or machine-specific output into commits.
