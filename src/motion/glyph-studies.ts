import type { MotionConfig } from './catalog';
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const canvas = (id: string, phase: number, label: string) => `<div class="gl-art"><canvas width="960" height="600" data-glyph="${id}" data-phase="${phase}" data-scene="${id}" role="img" aria-label="${label}"></canvas></div>`;
export function renderGlyphStudy(id: string, c: MotionConfig) {
  const ascii = id === 'nullsignal';
  return `<a class="mt-skip" href="#story">Skip to the story</a>
  <header class="mt-nav gl-nav"><a href="#top" class="mt-brand">${esc(c.brand)}<span>®</span></a><nav aria-label="Website navigation"><a href="#story">${ascii?'The archive':'The journey'}</a><a href="#contact">Get in touch ↗</a></nav></header>
  <div class="mt-progress"><i></i></div>
  <section class="gl-sequence gl-hero ${ascii?'':'gl-pixel-hero'}" id="top" data-chapter="${ascii?'Anatomy of a signal':'The skyward city'}">
    ${canvas(id,0,ascii?'An original ASCII armillary instrument: thousands of depth-sorted characters forming a sphere inside three interlocking rings. Scroll to separate its components.':'An original pixel-art floating town with a clock tower, windmill, terraced houses, pennants and waterfalls. Scroll to approach the town.')}
    <div class="gl-hero-copy"><span class="gl-label">${ascii?'AN INDEPENDENT GLYPH OBSERVATORY':'A SMALL EXPEDITION INTO THE IMPOSSIBLE'}</span><h1>${esc(c.headline)}</h1><p>${ascii?'A digital cabinet of curiosities.<br>Built from characters. Moved by you.':'Somewhere above the ordinary,<br>a different kind of journey begins.'}</p><a class="gl-enter" href="#story">${ascii?'Decode the archive':'Follow the little lights'} <span>↘</span></a></div>
    <div class="gl-instrument"><span>${ascii?'OBJECT 001 / ARMILLARY':'LOCATION 001 / THE SKYWARD CITY'}</span><span class="gl-progress-label">000 / 100</span></div>
    <div class="gl-scroll"><span>SCROLL TO ${ascii?'TAKE IT APART':'GO A LITTLE FURTHER'}</span><i>↓</i></div>
    <div class="gl-annotation">${ascii?'NO IMAGES.<br>ONLY CHARACTERS.':'EVERY LITTLE PIXEL.<br>A PLACE TO GET LOST.'}</div>
  </section>
  <section class="gl-interlude" id="story" data-chapter="${ascii?'A language of light':'The long way home'}"><div><span class="gl-label">01 / ${ascii?'THE ART OF LESS':'LEAVE THE FAMILIAR'}</span><h2>${ascii?'A character.<br>A coordinate.<br><em>A whole world.</em>':'The best stories<br>take <em>the long way.</em>'}</h2></div><div><p>${ascii?'Before images had millions of colors, a few marks could suggest an entire universe. We are interested in what happens when those marks become material.':'A tower in the clouds. A window lit at dusk. A train you almost missed. This is a field guide to places that only exist a few pixels from here.'}</p><p>${ascii?'Rotate the instrument. Separate its rings. Step inside the space between its surfaces. Every mark has somewhere to be.':'Three places. One continuous thread. Take your time. There is something tucked into every corner.'}</p><span class="gl-footnote">${ascii?'164 COLUMNS × 92 ROWS / AN EXPERIMENT IN PERCEPTION':'ORIGINAL PIXEL ILLUSTRATIONS / A FICTIONAL FIELD GUIDE'}</span></div></section>
  <section class="gl-sequence gl-passage" data-chapter="${ascii?'Inside the transmission':'The midnight railway'}">
    ${canvas(id,1,ascii?'A vaulted ASCII arcade recedes into depth. Scroll travels through fifteen individually sampled arches and floor grids.':'A moonlit pixel railway with a three-car train, truss viaduct, lighthouse, layered mountains, water reflections and foreground trees. Scroll moves the landscape at different depths.')}
    <div class="gl-instrument"><span>${ascii?'PASSAGE 002 / THE SILENT ARCADE':'LOCATION 002 / THE MIDNIGHT RAILWAY'}</span><span class="gl-progress-label">000 / 100</span></div>
    <div class="gl-plate"><span class="gl-label">${ascii?'THROUGH, NOT AROUND':'ONE WINDOW. A THOUSAND STORIES.'}</span><h2>${ascii?'Enter the<br><em>in-between.</em>':'Stay for<br><em>the journey.</em>'}</h2><p>${ascii?'The archive has no walls.<br>Just an invitation to look closer.':'The world moves at its own pace.<br>For a moment, move with it.'}</p></div>
    <span class="gl-coordinate">${ascii?'X: 0.000 / Y: 1.500 / Z: ∞':'NIGHT SERVICE / EVERY SEAT IS A WINDOW SEAT'}</span>
  </section>
  <section class="gl-note"><span aria-hidden="true">${ascii?'[ + ]':'✦'}</span><p>${ascii?'The closer you look,<br>the more there is <em>to see.</em>':'You do not need a destination<br>to find <em>your own way.</em>'}</p></section>
  <section class="gl-sequence gl-map" data-chapter="${ascii?'A message reassembled':'An atlas of elsewhere'}">
    ${canvas(id,2,ascii?'Scattered character particles gather into the words STAY CURIOUS inside an orbital constellation. Scroll controls the assembly.':'Seven detailed floating islands unfold into a dotted route map. Scroll guides a tiny traveler from one island to the next.')}
    <div class="gl-instrument"><span>${ascii?'MESSAGE 003 / SOMETHING WORTH KEEPING':'LOCATION 003 / AN ATLAS OF ELSEWHERE'}</span><span class="gl-progress-label">000 / 100</span></div>
    <div class="gl-map-heading"><span class="gl-label">${ascii?'FROM NOISE, A NOTE':'THERE IS ALWAYS ANOTHER WAY'}</span><h2>${ascii?'Make sense<br>of the scattered.':'A world of<br>little possibilities.'}</h2></div>
  </section>
  <section class="gl-outro" id="contact" data-chapter="The next beginning"><span class="gl-label">${ascii?'END OF TRANSMISSION / START OF SOMETHING':'THE JOURNEY CONTINUES / YOUR NEXT LITTLE ADVENTURE'}</span><h2>${ascii?'Stay a little<br><em>curious.</em>':'Make room<br>for <em>wonder.</em>'}</h2><a class="gl-contact" href="mailto:${esc(c.email)}">${esc(c.email)} <span>↗</span></a><footer><a href="#top">${esc(c.brand)} ®</a><span>${ascii?'A WORLD BETWEEN THE LINES.':'A WORLD BUILT ONE PIXEL AT A TIME.'}</span><a href="#top">Back to the beginning ↑</a></footer></section>`;
}
