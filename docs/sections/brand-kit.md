# Brand kit

> `src/shell/brand.ts` · the *Brand kit* button in the top bar

Set a name, two colours and a display font once, and the hero sections, scenes, components and spirits all pick them up, in their previews and in their downloads.

- **Stored on this device** (`localStorage`, key `patchwork-brand-v1`) and nowhere else. `normalizeBrand` validates everything: hex colours only, a name of at most 24 characters, and fonts from a fixed list (Bricolage Grotesque, Syne, Unbounded, Fraunces, Instrument Serif, Pixelify Sans, JetBrains Mono, or "each piece keeps its own").
- **Downloads carry it.** `brandFontFiles` adds the chosen font and its OFL licence to every download.
- **Off is off.** Switch the kit off and every piece goes back to its own look.
