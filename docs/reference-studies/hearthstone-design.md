# Hearthstone Roasters — reference and extension guide

## Intent and scope
A desktop-first, full-screen editorial product poster inspired by the supplied coffee image. A warm ivory sky carries the big condensed black name; a matte-black flask with gold cap bridges it and a Swiss alpine photograph. The portrait bottle is a generated cutout with a generated label, not an editable 3D model; the landscape is a generated image inspired by the reference. Both are approximations, and the label text should be replaced with verified brand artwork before commercial use. Product and brand language is illustrative.

## Composition and palette
Initial view: cream #f2e9db, ultra-black ink #10100f, muted sage/stone mountain photograph and antique brass cap. Two-line centered condensed brand name occupies the upper third. Small website lines sit near the two top corners; stacked HOLD THE FIRE / DEFY THE CHILL flank the center. Large location labels sit just above the mountain horizon at roughly 60% of viewport height. The bottle is the singular foreground object, centered from about 20% to 77% height, overlapping both title and landscape. Landscape is a clean edge-to-edge lower band. No gradients, rounded dashboard cards, glass effects, or extra navigation should dilute the poster.

## Typography and images
Bebas Neue (SIL OFL, bundled) approximates the tall, narrow sans of the source. Keep all title and location text selectable. Tiny corner labels use a plain compact sans. Bottle and mountain are separate ChatGPT Images assets with transparent and opaque backgrounds respectively; keep them independent for motion and future replacement. The crest and label are embedded within the generated bottle illustration, so they cannot be independently edited as text.

## Motion choreography
ScrollTrigger pins the initial scene for a vertical scroll distance. The mountain expands to fill the screen as the poster labels leave; the bottle lifts, pivots and settles, while a left-aligned editorial message enters. This is a 2D cutout with perspective transforms, not a full 3D model or opening cap. Vertical scrolling only: no sideways document scrolling or horizontal scroll sections. On reduced motion the hero stays a static poster followed by the readable story, with no pin. All copy remains readable and the hidden scene link is removed from the keyboard focus order until shown. Future animations should preserve the clear bottle silhouette and legibility, use transforms rather than layout-heavy effects where possible, and avoid pinning long content.

## Extending the site
After the first story, use vertically stacked editorial sections: roast philosophy, origin/landscape and a carefully photographed product detail, then a clear contact or shop destination once real business information exists. Alternate cream and dark charcoal fields, oversized condensed headlines and compact technical captions. Use real photography and verified product specs instead of inventing sourcing or claims. A product opening animation would require separately authored cap and bottle layers or a true 3D model; avoid implying that a flat image is physically opening. Maintain the restrained limited palette and mountain horizon as a motif, with an honest reduced-motion reading flow.

## Files
hearthstone.html contains the page and timeline. hearthstone-bottle.png and hearthstone-alps.png are generated art. Locally bundled GSAP/ScrollTrigger and Bebas Neue, along with notices, are included in the template ZIP. No CDN or build step is needed after extraction.
