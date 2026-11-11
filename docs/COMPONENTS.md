# Components

Pixel characters that live on a real page and do a real job there. Made after studying the components on piixpal.dvkk.dev (characters that attach to page elements); every idea, name, sprite and line of code here is original, and each one is built around an interface job rather than decoration.

- Studio: `/?collection=components` (dashboard: **Components**). Clicking a component opens its demo page alone in a new tab. **Customize** loads it into the editor: its options (colours, words, speeds, choices), a live demo rendered at 1440x900 and scaled, and the exact snippet to paste, copied with Mimeo itself. Settings save in `localStorage` (`patchwork-components-v1`).
- A demo alone: `/?component=<id>`.
- Download: a ZIP with `index.html` (the demo) and a `components/` folder holding `kit.js`, `<id>.js`, `demo.css`, fonts and licences, so the README snippet works as pasted. No build step, no dependencies, no network requests.

## Using one

```html
<script src="components/kit.js" defer></script>
<script src="components/kite.js" defer></script>
<pw-kite color="#3a7bd5"></pw-kite>
```

`kit.js` is shared: sprites from strings, one click-through stage canvas over the page that sleeps when nothing moves, smoothed scroll speed, a polite live region, and the reduced-motion flag.

| Tag | Job | What it does | Accessibility and reduced motion |
|---|---|---|---|
| `<pw-lamplighter>` | Headline reveal | Walks the real tops of a heading's letters (glyph ascent from the font), hops word gaps, jumps lines, lights each letter with his pole | Screen readers get the plain heading; reduced motion shows it lit |
| `<pw-kite>` | Back to top | A kid flies a kite that climbs with reading progress and leans with scroll speed; its tail is a little rope simulation. Click kid or kite to reel in and scroll up | Real button with a label; reduced motion jumps to the top |
| `<pw-postie>` | Form feedback | Watches the focused field; on an invalid submit points at the field; on a valid one the letter flies into the box and she cycles off. Forms with an `action` still submit after the letter lands; others get `pw-posted` | Announces the field to fix and the sent message |
| `<pw-cocoon>` | Progress | Silk wraps a hanging caterpillar as `value` rises; at 100 a butterfly flies across the page. No value: indeterminate loader. Fires `pw-emerge` | `role="progressbar"` with values; reduced motion skips the flight |
| `<pw-tightrope>` | Divider | Rope bends into two straight runs under the acrobat and twangs on landing; scroll speed tips his pole, too fast and he hangs and climbs back; click for a flip | `role="separator"`; reduced motion is a still acrobat |
| `<pw-mimeo>` | Copy code | A copier button in a `<pre>`: scan bar, turning drum, a printed slip. If the clipboard is blocked it jams and selects the code | Real button; announces copied or how to copy |

## Files

- `src/components/`: `catalog.ts` (ids, typed options, validation), `document.ts` (demo pages, tag and snippet), `gallery.ts|css`, `entry.ts`, `route.ts`.
- `public/components/`: `kit.js`, one script per component, `demo.css`, `fonts/`, `licenses/`.
- Shared files touched: `src/main.tsx` (one route branch) and `src/App.tsx` (one dashboard button).

## Verification (11 November 2026)

`tests/components.test.ts`: six components with six different jobs, demo pages use their tags and only local files, every packaged file exists, each script defines its element and has a reduced-motion path, the kit never blocks clicks and announces politely, option validation and escaping, routes. In Chromium at 1440x900: all six demo pages run without console errors or outside requests; Lamplighter lights a two-line headline, Kite appears and reels back to the top, Postie points at an empty field and posts a valid letter, Cocoon wraps, completes and releases its butterfly, Tightrope walks and wobbles, Mimeo copies exactly the code (and falls back to selecting it without clipboard permission). With reduced motion all six still do their jobs. The gallery's customise, snippet copy, new tab and a downloaded ZIP served on its own were exercised. Phone layouts were not reviewed.
