# Driftbar — hero direction and expansion guide

## Intent
A single-viewport interactive hero inspired by the supplied Driftbar footer specification, not a recreation of the footer. Pale paper, a blue-hour meadow video fading into the page, lavender mist, quiet Inter typography and translucent glass are the core visual vocabulary. The foreground is a conceptual product preview, not an actual macOS app. The user's supplied React Bits TechText component renders the headline, supporting letter outlines, selection frame, click bounce and dragging. The meadow video and poster are the exact assets named in the supplied prompt, downloaded for offline template use; their usage rights should be checked before commercial publication.

## Layout and design
Pale paper #f1f1ee, ink #0c0c0c, copy #6f6f6c, muted #9c9c98, lavender fog #e2e3f1. Top left is the black tile brand mark; quiet navigation sits right. Centered eyebrow, huge interactive headline, restrained copy and two clear buttons occupy the bright upper half. The lower half is the meadow, partly veiled by mist, with a single translucent product-bar preview. Keep a strong quiet center, sparse UI chrome, fine borders and no saturated gradients or heavy shadows. Inter variable is locally bundled under SIL OFL.

## Interaction
TechText is the user's supplied source under src/reference-studies/driftbar, bundled with React as a local static script. It runs a metrics intro and lets users hover, click and drag individual letters. Reduced motion is handled inside the component. GSAP provides a short entrance for the surrounding layout; reduced motion skips it. The meadow can be paused, pauses offscreen/when hidden, and stays still under reduced motion. The visible product bar is illustrative; its time uses the device clock. Demo dialogs clearly explain that no actual app or download exists.

## Expanding later
Follow this hero with a concise product demonstration, then a feature chapter organized around music, notes, tasks and focus. Continue the paper-to-meadow palette with restrained glass only for actual interface previews. Use genuine app screenshots or a functional prototype before presenting feature claims; add a real download only when a product and destination exist. Finish with the supplied meadow footer concept. Preserve semantic headings, readable copy, a static reduced-motion experience, and no full-screen pinned scroll sequence that blocks normal navigation. Keep the title effect confined to one display heading to avoid distracting from content.

## Files and export
The hero uses driftbar.html, driftbar-assets/techtext.js and techtext.css (bundled from the provided React component), local GSAP, Inter, meadow video and poster. The ZIP contains the compiled page, media, source component and notices; it opens without a build step. Updating TechText source requires the project build to regenerate the bundle. Media were supplied by the user as external URLs; confirm their rights when reusing them.

## Scroll study revision — local review
Removed hero CTA buttons, the eyebrow, and modal navigation. Playfair Display supplies the supporting line and editorial accents; GSAP reveals individual masked words. The vertical sequence now moves from the meadow to a pinned product assembly, then collapses the interface into a sculpted focus orb before returning to the landscape. Local ScrollTrigger and the font license ship in the template ZIP. Notes remain temporary; the focus timer measures elapsed time. Reduced motion bypasses pinning and shows the product modules directly. No deployment is authorized until the user reviews this version.

## Atmosphere pass
Added a generated transparent blue-hour alpine cloud texture, composited in three independently drifting layers with scroll parallax. New editorial interlude uses scrubbed reading emphasis and an expanding landscape aperture. Product panels respond to pointer height, the waveform reveals with scroll, and the focus orbit traces before the closing type unfolds. Continuous cloud motion pauses offscreen and when the document is hidden; reduced motion leaves a still atmospheric composition. Download now includes ScrollTrigger, Playfair, its license, and atmosphere runtime.
