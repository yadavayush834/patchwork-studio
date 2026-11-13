/** Files a downloaded hero needs, relative to public/heroes. Kept import-free so other tools can use it. */
export const heroFiles = [
  "hero.js",
  "fonts.css",
  ...[
    "Syne",
    "InstrumentSerif",
    "BricolageGrotesque",
    "DMSans",
    "SpaceMono",
    "Silkscreen",
  ].flatMap((font) => [`fonts/${font}.ttf`, `licenses/${font}-OFL.txt`]),
  "licenses/gsap-NOTICE.txt",
];
