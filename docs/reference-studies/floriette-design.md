# Botanical Portfolio — reference and expansion guide

## Source and boundaries
The supplied image is a 736 × 414 portfolio cover. This implementation is a single hero, not a complete portfolio. The existing author name, dates, seal and labels are reproduced from the reference as sample content. The cover title is editable text in the locally bundled Great Vibes font, replacing the original bespoke lettering. The botanical illustration is a new ChatGPT Images recreation and therefore differs from the original. All other labels are HTML text. Keep these distinctions when describing fidelity.

## Composition
Use a 16:9 poster canvas, centered within the viewport with cream surrounding space. Date centered at about 4% height, small oval seal in the upper right. Calligraphy dominates the first 40%; botanical panorama occupies roughly 40–84%, with leaves deliberately crossing its rectangular boundary. Bottom captions occupy 89–97%. The central iris, title and bottom category align on a common vertical axis. The picture is a horizontal band, never a rounded card.

## Palette and materials
Paper #f4f5ef, sky/ink blue #2687cb, pale blue #80c7ed, botanical sage #73ac8c; peach and lilac confined to the illustrated sky. Fine print grain, soft airbrushed transitions, luminous thin blue calligraphy. Avoid flat vector iconography, heavy shadows, dark UI panels and generic boxed cards.

## Typography
Expressive high-contrast, looping, asymmetric calligraphy for the cover title only. Small italic serif dates and delicate uppercase serif category captions. Tall narrow Traditional Chinese display labels flank the center caption. Small sans-serif descriptors are subordinate. Preserve the hierarchy: lettering > illustration > Chinese labels > category > descriptor. The cover title is editable text; new section headings should use an intentionally selected licensed italic display serif, rather than stretching a body font to imitate the calligraphy.

## Motion
The source is static. Added motion is intentionally minimal: 3px pointer drift of the botanical layer and a slow white sparkle. No layout movement, compulsory autoplay tour or scrolling effects. Respect reduced motion and hidden-tab pause. Future chapter transitions may unfold petals or use a slow sky reveal, but readable work content should remain stable.

## Future sections
After the cover, introduce a brief personal statement in generous cream space, then project chapters. Use straight-edged panoramic artwork interleaved with large editorial type, restrained blue captions and narrow project metadata. Establish a semantic project list with real links before adding navigation to this hero. For each project: title, year, discipline, large original image, short process narrative, then a deliberate next-project link. Carry a single botanical motif between chapters; do not repeat the entire cover illustration in every section. Add Chinese translations only when actual translated content exists. No project cards or invented portfolio case studies are implemented yet.

## Editable files
floriette.html holds all HTML, CSS tokens, proportions and tiny motion script. floriette-botanical.png holds generated transparent artwork. Edit the title text directly in floriette.html. floriette-paper.png provides the generated paper background; the font and GSAP files are local. Build-reference-templates.mjs packages these together with this guide so relative file links remain portable.

## Current revision: crisp title and motion
The title is now editable text in locally bundled Great Vibes (SIL OFL), replacing the previous low-resolution clipped reference lettering. Its form intentionally differs somewhat from the original bespoke lettering. A generated watercolor paper texture supplies the background. The locally bundled GSAP runtime animates the title, illustration and captions on entrance and gives the botanical panel a gentle pointer response. The reduced-motion setting bypasses these tweens. Keep these assets and their licenses with exported copies.
