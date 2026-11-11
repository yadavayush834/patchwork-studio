# One Patchwork look, the brand kit, the pal maker and your photos

- **Shared shell** (`src/shell/`): every collection page carries the same top bar (quilt mark, every collection, Brand kit) and the quilt theme from the home page (`shell.css`; each collection has its own patch colour). Design Library and Motion templates are restyled with scoped overrides (`overlays.css`) so their own code stays untouched. `collections.ts` is the one list of collections.
- **One hero collection**: `?collection=heroes2` now shows every hero, including the first collection's five (their cards open `?view=hero&hero=…`; Customize opens their own studio). The studio sidebar has a single "Hero sections" entry.
- **ASCII studies page**: `?collection=ascii` (`src/AsciiPage.tsx`) is a full collection page with live cards; the in-editor picker stays a dialog.
- **Brand kit** (`src/shell/brand.ts`, stored as `patchwork-brand-v1`): name, two colours and a headline font. Heroes and scenes take the name, accent and font (studio previews, standalone pages and downloads, which also carry the font file and its OFL licence); components start in the two colours; spirits offer "Use my brand colour". A piece you have customised keeps your changes.
- **Pal maker** (`src/spirits/maker.ts`, stored as `patchwork-pals-v1`): draw two frames on a 14x12 grid in five colours, pick a movement, see it live, save. Saved pals appear as cards with Use, Edit and Delete; their tag (`<pw-pal kind="custom" move colors a b>`) carries the whole drawing, drawn by `public/spirits/pals.js`.
- **Your photo**: scenes take a photo that the runtime paints through that scene's palette and dither (not Riso, which prints in two inks); every hero takes a picture as a dot-art layer (`public/heroes2/dotphoto.js`), Specimen still builds itself from it.

Verified 12 November 2026: 85 tests (`tests/shell.test.ts` and updated hero/spirits tests), build, and Chromium runs of every themed page, the brand kit applied to a scene and a hero, a scene photo, a hero dot photo, and drawing, saving and using a custom pal.

## Dark hero and dark library pages (12 November 2026)

- The home hero was rebuilt (`src/home/HeroArt.tsx`): dark like the rest of the page and sized to exactly one screen below the nav (headline sized by width and height). `Field` draws drifting pixel patches and a pixel thread with a needle that follows the cursor (click for a burst of stitches); `Sewing` is a 7x5 pixel quilt that sews itself square by square (needle and thread, Bayer-dithered fills, stitched seams), shimmers, unpicks and starts again, and re-sews any square the pointer passes. A fox and an owl live on its frame; Pip walks the headline. Both canvases pause offscreen and show a still, finished quilt for reduced motion.
- Design Library and Motion templates are now fully dark (`src/shell/overlays.css`): every tab, cards, inputs and the colour studio's panels. The colour palettes' live sample site (`.color-canvas`) and all iframe previews keep their own colours.
- Checked at 1440x800 and 1900x850: the hero's content ends inside the screen; every library tab and the motion grid and editor screenshot cleanly; 85 tests and the build pass.
