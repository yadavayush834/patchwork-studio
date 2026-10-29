# Visual direction and interaction style

## Product identity

Patchwork is a creative workbench, not a business-template catalog. Its audience is a creator who wants a personal, expressive website without learning layout code. The shell stays quiet while the four visual worlds and live assets show what the user can make.

The signature is a collection of little, functioning websites and animated worlds inside a precise studio. Keep a small, coordinated library of polished pieces; do not pad the interface with generic demos or nonfunctional controls.

Visual references from the running production build: [dashboard](images/dashboard.png) and [ASCII gallery](images/ascii-gallery.png). They record the current direction, not a frozen pixel specification; inspect the current app when making changes. Regenerate them using `scripts/browser-handoff-screenshots.js` with an isolated browser profile.

## Shell foundations

| Token | Value / use |
|---|---|
| Lavender | `#795be6` — primary actions, selected controls, brand mark |
| Ink | `#302b3b` — main interface text |
| Mist | `#f7f6fa` — dashboard surface |
| White | `#ffffff` — sidebar, panels, cards |
| Border | `#eae7ef` — quiet dividers |
| Soft lavender | `#f0ebfc` — selected/focused surfaces |
| Sage / peach | `#dcebd6` / `#f4d6c4` — supporting world artwork |

The primary shell display face is Space Grotesk, body/interface copy is DM Sans, and technical/ASCII detail uses Space Mono. Fonts are local, licensed files. Preserve hierarchy through scale, spacing, weight, and contrast; avoid replacing the shell with a default component-library theme.

Use restrained radii, thin borders, small purposeful icons, and clear selected states. Keep user-facing labels readable; compact metadata must remain secondary. The dashboard has a stable navigation sidebar, a welcoming creative vignette, world previews, the ASCII entry, and saved projects. The editor has a slim tool rail, searchable library, central canvas, and inspector. Site content should receive the most visual attention.

## The four worlds

| World | Palette / typography / character |
|---|---|
| Pixel daydream | Lavender landscape, dark plum ink, Silkscreen + DM Sans; chunky controls and sprites |
| After hours | Deep green/charcoal, mint accents, Space Mono; terminal/ASCII atmosphere |
| Paper & things | Peach/paper tones, warm brown, Caveat + DM Sans; stickers, framing, slight playful rotation |
| Soft spoken | Sage, dark green ink, Playfair Display + DM Sans; editorial spacing and subtle shapes |

Worlds coordinate sections, fonts, palettes, and backgrounds. Users can mix assets and override section appearance. Preserve manual customization and locked properties when applying broader style changes.

## ASCII collection

Use the motion gallery to show a single active scene at useful size, with still thumbnails for the others. Keep technical implementation details out of the normal creation flow. Relevant user choices are Live/Recorded, speed, detail, glow, brightness, downloading a loop, and applying a scene.

Sharkwater is a real ecosystem from the credited upstream source. Moon jellies emphasizes fluid bells/filaments; Spiral atlas has a warm core and cool spiral arms; Velvet terrain uses perspective and shaded character ridges. Maintain distinct compositions and intentional negative space behind content. ASCII backgrounds use readable light text and a subtle scrim over a dark field.

## Behavior and accessibility

- Use direct, consistent labels: Add, Replace, Preview, Export, Download editable project.
- Selection on canvas and in the section/object navigator must agree.
- Make edits reversible through history. Failed saving/import/export must remain visible without destroying current work.
- Provide meaningful empty states and image-description controls.
- Preserve keyboard focus, dialog trapping/Escape behavior, tab navigation, and keyboard-operable inspector controls.
- Keep motion ambient, bounded, and purposeful. Pause offscreen/hidden scenes and honor reduced-motion posters.
- Desktop-first refers to the editor. Generated sites still need phone/tablet/desktop layouts without unintended overflow.

## Video Lab

The Lab is a separate lavender workbench, with a style cabinet, large checkerboard-backed comparison canvas, and a narrow settings/export panel. Reuse Space Grotesk, DM Sans, Space Mono, lavender actions, white panels, and quiet borders. The empty-state film strip is original CSS artwork. Style thumbnails use the user's selected frame; only the selected preview animates. Heavy rendering stays in workers so controls remain usable.

Show only settings the selected renderer actually uses. A plus beside a style queues it; selected styles other than the current customized style use their documented defaults. Results must expose a playable clip, actual format/file size, download, and an optional explicit section handoff. GIF is downloadable but not a background-video insertion format. Source replacement and failure must not damage website drafts. The previous workbench is hidden/inert while the Lab is open, and focus returns on close.

## CSS boundaries to preserve

Site classes use `.pw-*`; editor classes do not. Section wrappers use `.pw-section-{kind}`, while inner layout classes such as `.pw-about` and `.pw-footer` serve different roles. Reusing the inner class on the outer section previously caused layout collisions. Shared site changes must be reviewed in preview and in an independent exported site.


## Motion Templates / independent studies

The collection is deliberately separate from the lavender workbench: warm gray paper, large editorial type, a restrained forest accent, and four covers captured from actual rendered experiences. Gallery selectors use the unique `motion-template-card` prefix; the existing interaction library already owns `.motion-card`.

- Æther: warm industrial palette, Outfit display typography, chrome headphone sculpture, concentric orbits, exploded assembly, a terracotta frequency chapter, dimensional finish studies.
- Offscript: near-black/acid-lime/cobalt, oversized Outfit/Space Grotesk type, a glossy knot and satellites, interlocking statement rows, a horizontal art direction story, a perspective process deck.
- Floraison: cream/forest/terracotta, Playfair Display with Space Mono labels and Caveat notes, a modeled flower with curved petals and procedural veins, drifted leaves/butterfly, specimen plates, and seasonal typography.

Each scroll sequence introduces a new composition. Keep motion authored around the chapter rather than adding a blanket fade to every element. Native vertical scroll drives pinned and sideways sequences. Reduced motion presents the content without pinning or scrubbed transforms. Text, brand, and contact actions stay accessible. Keep concepts fictional and do not invent testimonials, real customers, or measurable product claims.

Monolith uses warm mineral paper, graphite, terracotta, geometric grotesk typography with restrained serif contrasts, and precise drawing annotations. Its pavilion separates into structural floors; a traced courtyard plan explains the design; vertical curtains reveal three imagined spatial studies. Keep the full-screen projects distinct from the studio template’s horizontal track. The four-item collection uses two columns so every cover has room.

## Further motion studies

- **Pelagic**: ink-blue ocean, pale mineral typography, acid-green telemetry. A bolted survey capsule descends through the water column; drawn sonar contours rotate into a map; three translucent medusa specimens drift into an observational theatre. Depth is scroll position, not a decorative looping counter.
- **Heliograph**: charcoal, warm vellum, amber and engraved brass. A six-ring armillary instrument separates into orbital planes. A lunar disc crosses the sun, holds totality with a corona, then releases the light. The atlas is a continuous sideways journey through three original orbital plates.
- **Afterimage**: mineral paper, photographic green-black, vermilion. An eight-blade optical iris opens and enlarges into an illustrated landscape. Foreground/background layers move at different rates before a vertical match cut and staggered shutter introduce the next film. A physical nine-frame contact sheet separates around a selected image.

Each opening has an authored phone composition. Staged labels become normal reading content under reduced motion; do not hide later observations or films. Keep the scripts local and retain the direct relationship between scrolling and the changing composition.

## Reverie / Traverse — photographic motion worlds

**Reverie** is a warm, surreal art journal: apricot dunes, travertine, jade water, pale rose stone, and a cobalt door. Large Playfair Display type overlays images without baking copy into the artwork. The first photographed arch becomes a real masked opening to the garden; the rooms turn like physical gallery walls; nine pieces align into a floating-island postcard. Keep the generated compositions in registration, not independently cropped tiles.

**Traverse** is a colder expedition journal: blue-black rock, glacier cyan, ivory type, and a pale acid-green navigation accent. The panorama separates into depth planes. A photographic map unfolds and traces an imagined route. Glacial walls separate to reveal summit light. The landscapes and route are fictional; avoid real expedition, safety, or location claims.

Both use original ChatGPT-generated environments, preserved as local assets with exact prompts. They are complete authored websites with live typography and contacts, not image-only mockups. Gallery covers are captured from actual rendered pages. Main compositions are separately reviewed at desktop, 900px tablet, and 390px phone widths.

## Design Library workspace

The library is a quiet cream-and-lavender editorial index: seven collections in one sidebar, expressive serif introduction, illustrated index cards, a single search/category toolbar and resource cards with save controls. Category families normalize raw source labels; secondary original styles/techniques remain searchable. The header always provides a return to Patchwork. Preview chrome provides responsive viewport controls, reference download and source context. Original demo art direction stays inside its own iframe; the imported library is not mixed into the editor's presets or GSAP collection. Narrow layouts use a horizontal collection strip and two-column cards.

### Native template gallery correction

Templates use Patchwork's lavender surfaces, Outfit typography, native controls and actual website screenshots. Hover/focus replaces only that card's cover with a living, gently scrolling page. One preview mounts at a time. Clicking opens the website beneath the same Patchwork header with device sizing, replay and return to all templates. Upstream library branding and navigation are absent from this path.

## Redesign checkpoint: fourteen authored templates

The first six use network precision, bookish editorial, maker-poster typography, a quiet material portfolio, sculptural commerce and a Nordic conference poster. The remaining eight introduce retro-computing optimism, industrial exactness, cobalt streetwear, a dark observation console, a watch atelier, pavilion light studies, a modular sound lab and a couture presentation. Physical models, graphic sprites and motion belong to each subject. Desktop review and refreshed covers remain incomplete at this checkpoint; the dedicated phone pass was explicitly deferred.
