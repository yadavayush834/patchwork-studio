# Spirits

Small creatures that move into a page and get on with their lives there. Each is drawn live (procedural pixel art on the shared stage canvas from `kit.js`), one tag plus a tiny script, with no dependencies or network requests. Made after studying the characters on piixpal.dvkk.dev; every creature, behaviour and line of code here is original.

- Studio: `/?collection=spirits` (dashboard: **Spirits**). Two cards a row like the motion templates; a card opens its demo in a new tab, **Customize** opens the editor (options, live demo, snippet copied with Mimeo, download).
- A demo alone: `/?spirit=<id>`. Download: `index.html` plus a `spirits/` folder matching the snippet.

| Tag | Lives | Behaviour |
|---|---|---|
| `<pw-spider>` | in a section | drops on a thread; eight two-segment IK legs planted in an alternating gait; flees a fast cursor, creeps toward a still one; pale on dark backgrounds |
| `<pw-monkey>` | under a nav/header edge | brachiates: a pendulum about the holding hand, so the free hand meets the next grip at the swing's peak; pauses to wave, scratch or reach for the cursor |
| `<pw-moth>` | in a (dark) section | orbits the cursor like a lamp, bumps into it, sheds dust, rests folded on the section edge; optional warm glow |
| `<pw-wanderer>` | on your content | treats the tops of headings, text lines, buttons, cards and images as ledges; walks, jumps on an arc, sits, reads, waves; click beside them for a hello |
| `<pw-hummingbird>` | near links | hovers and darts near the cursor; sips from the edge of a hovered link or button; perches when alone |
| `<pw-magpie>` | in an article | lands on a word, pecks it, carries it off (the gap stays), brings it back; startles and returns it if you come close; a click hurries it home |

`public/spirits/kit.js` is an exact copy of `public/components/kit.js` (a test keeps them identical). Reduced motion: creatures are still or do not appear; the page is unchanged.

## Pals

`public/spirits/pals.js` is one engine for many small creatures: `<pw-pal kind="…">` with a palette, two to four frames and a way of moving (walk, hop, crawl, fly, hang, sit) and reacting (curl up, hide, flee, fade, dart, take off, watch). Sixteen ship: hedgehog, fox, raccoon, chick, bunny, squirrel, axolotl, turtle, ladybug, ghost, jellyfish, dragonfly, bat, sloth, owl, octopus. The Spirits page is one grid of cards (live stage, name, line, **Use**); Use opens a dialog with a colour, the snippet (copied with Mimeo) and a download.

## The landing page (replaced)

The first rebuild, `src/landing/Landing.tsx`, has itself been replaced by `src/home/Home.tsx`: a full-width quilt-themed home (own palette and type, no sidebar) shown on the Overview tab, with an interactive quilt hero, a band of names, a three-column grid of every collection with correctly scaled live previews, Start from a world, recent projects and a quilted footer. The earlier version replaced the old overview hero and banners (`src/App.tsx` mounts it with the existing handlers). It has a rotating headline word, a live window cycling the Scenes, a two-row marquee of every item (each opens in a new tab), a bento of every collection with live previews that only run on screen, a hatching Cocoon, a Tightrope divider and a Kite back-to-top. Resident spirits (a monkey under the top bar, a wanderer and a hummingbird in the hero, moths and a spider in the Spirits tile) can be switched off; the choice is saved in `localStorage` (`patchwork-landing-spirits`).

## Verification (12 November 2026)

`tests/spirits.test.ts`: six spirits, demos use their tags and only local files, packaged files exist, each script defines its element and has a reduced-motion path, the kits match, no HTMLElement property names reused as state (the `dir` bug that froze Monkey and Tightrope), validation, escaping and routes. In Chromium at 1440x900 every demo ran without console errors; the landing page rendered fully with no errors, including with reduced motion and with spirits switched off; a customised Wanderer download ran on its own with local requests only. Phone layouts were not reviewed.
