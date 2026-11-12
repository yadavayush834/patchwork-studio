# Design Library

Rebuilt from scratch on 12 November 2026. The previous imported library was deleted.

- **Catalog**: `src/library/catalog.ts`, with five shelves and three pieces each (id, line, description, tags, palette, "what's inside").
- **Pieces**: `public/library/<id>/index.html`. Each is one file with no framework, build step or network requests. Fonts are loaded from `../fonts/` (`public/library/fonts`), and their OFL licences are in `public/library/licenses`. Every piece honours `prefers-reduced-motion`, pauses when the tab is hidden, and plays by itself until touched, so card previews are never still.
- **Page**: `src/DesignLibrary.tsx` + `src/library.css`. It has a hero quilt of all fifteen pieces, sticky shelf tabs with scroll-spy, and chapters with a sticky heading and live cards: real pages in scaled iframes, mounted only while on screen.
- **Viewer**: `?collection=library&piece=ID` pushes a history entry. It offers Desktop, Tablet and Phone widths, Replay, New tab, Copy HTML and Download, and the side panel shows notes, a copyable palette and Previous/Next.
- **Download**: `src/library/export.ts` builds `<id>.zip`, containing `<id>/index.html` with font paths rewritten to `fonts/`, the fonts it uses, their licences and a README.
- **Adding a piece**: put the page in `public/library/<id>/index.html` using only `../fonts/` fonts, and add an entry to the catalog. `tests/library.test.ts` checks for three pieces per shelf, the files, fonts and licences, and the absence of remote URLs.

Verified 12 November 2026: 77 tests, the build, a desktop screenshot of every piece, and a Chromium run of home → Library → open a piece → Next → Download (ZIP contents checked) → Back → Back → Forward.
