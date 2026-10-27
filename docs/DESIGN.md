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

## CSS boundaries to preserve

Site classes use `.pw-*`; editor classes do not. Section wrappers use `.pw-section-{kind}`, while inner layout classes such as `.pw-about` and `.pw-footer` serve different roles. Reusing the inner class on the outer section previously caused layout collisions. Shared site changes must be reviewed in preview and in an independent exported site.
