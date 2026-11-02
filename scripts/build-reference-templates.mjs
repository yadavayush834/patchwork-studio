import { readFileSync, writeFileSync } from 'node:fs';
import JSZip from 'jszip';
const base = new URL('../public/pinterest-studies/', import.meta.url);
const zip = new JSZip();
zip.file('index.html', readFileSync(new URL('citylines.html', base)));
zip.file('citylines-city.png', readFileSync(new URL('citylines-city.png', base)));
zip.file('README.txt', `Citylines — editable website template

1. Extract the entire ZIP into one folder.
2. Open index.html in a modern browser. The artwork and animation work locally.
3. Edit index.html to change the words, colours, layout and train animation.
4. Keep citylines-city.png beside index.html, or update its image path.
5. Upload both files to any static website host to publish your copy.

No installation, account, API key, or Patchwork connection is needed.
All CSS and animation code is included in index.html. The page respects your device's reduced-motion preference. Send a train restarts the train journey.

This package contains the complete current Citylines hero study. Navigation links are demonstration anchors, not additional pages or an app download. The design is a recreation from a supplied video; the city artwork was generated with ChatGPT Images. It is not the original reference source.
`);
writeFileSync(new URL('citylines-template.zip', base), await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE'}));
console.log('Packaged complete Citylines template.');
const paar = new JSZip();
paar.file('index.html', readFileSync(new URL('paar.html', base), 'utf8').replace('/fonts/Outfit.ttf', 'Outfit.ttf'));
paar.file('Outfit.ttf', readFileSync(new URL('../public/fonts/Outfit.ttf', import.meta.url)));
paar.file('Outfit-OFL.txt', readFileSync(new URL('../public/licenses/Outfit-OFL.txt', import.meta.url)));
paar.file('README.txt', 'Paar reference study\n\nExtract all files and open index.html in a modern browser. Edit the HTML, CSS and JavaScript in index.html to customize the page. Pixel artwork is rendered locally using canvas. The design is an approximation of the supplied video.\n');
writeFileSync(new URL('paar-template.zip', base), await paar.generateAsync({type:'nodebuffer', compression:'DEFLATE'}));
const oldhand = new JSZip();
oldhand.file('index.html', readFileSync(new URL('oldhand.html', base)));
oldhand.file('oldhand-art.png', readFileSync(new URL('oldhand-art.png', base)));
oldhand.file('README.txt', 'Oldhand reference study\n\nExtract all files and open index.html in a modern browser. Edit the HTML, CSS and JavaScript to customize the hero. The blue halftone artwork was generated with ChatGPT Images. This is an approximation of the supplied reference video. Links and notes are illustrative.\n');
writeFileSync(new URL('oldhand-template.zip', base), await oldhand.generateAsync({type:'nodebuffer', compression:'DEFLATE'}));
const studioform = new JSZip();
studioform.file('index.html', readFileSync(new URL('studioform.html', base)));
studioform.file('studioform-portrait.png', readFileSync(new URL('studioform-portrait.png', base)));
studioform.file('README.txt', 'Studioform — video-inspired hero\nExtract all files and open index.html. Edit the inline HTML, CSS and JavaScript to customize it. The portrait was generated with ChatGPT Images. This is a visual approximation of the supplied video; statistics, copy and navigation panels are demonstration content.\n');
writeFileSync(new URL('studioform-template.zip', base), await studioform.generateAsync({type:'nodebuffer', compression:'DEFLATE'}));
const floriette = new JSZip();
for (const name of ['floriette.html','floriette-botanical.png','floriette-paper.png','floriette-script.ttf','floriette-script-OFL.txt','floriette-gsap.min.js','floriette-gsap-NOTICE.txt']) floriette.file(name === 'floriette.html' ? 'index.html' : name, readFileSync(new URL(name, base)));
floriette.file('DESIGN-GUIDE.md', readFileSync(new URL('../docs/reference-studies/floriette-design.md', import.meta.url)));
floriette.file('README.txt', 'Botanical Portfolio hero\nExtract all files and open index.html. Edit the HTML labels and CSS tokens in index.html. The calligraphic title is editable text using Great Vibes; the botanical art and paper texture were generated with ChatGPT Images. GSAP is included locally. See DESIGN-GUIDE.md for layout, typography and future expansion guidance. No dependencies or build step required.\n');
writeFileSync(new URL('floriette-template.zip', base), await floriette.generateAsync({type:'nodebuffer', compression:'DEFLATE'}));
const eduspace = new JSZip();
eduspace.file('index.html', readFileSync(new URL('eduspace.html', base), 'utf8').replace('/fonts/Outfit.ttf', 'Outfit.ttf'));
for (const name of ['eduspace-app.js','eduspace-gsap.min.js','eduspace-gsap-NOTICE.txt']) eduspace.file(name, readFileSync(new URL(name, base)));
eduspace.file('eduspace-people.png', readFileSync(new URL('eduspace-people.png', base)));
eduspace.file('Outfit.ttf', readFileSync(new URL('../public/fonts/Outfit.ttf', import.meta.url)));
eduspace.file('Outfit-OFL.txt', readFileSync(new URL('../public/licenses/Outfit-OFL.txt', import.meta.url)));
eduspace.file('DESIGN-GUIDE.md', readFileSync(new URL('../docs/reference-studies/eduspace-design.md', import.meta.url)));
eduspace.file('README.txt', 'Education dashboard reference\n\nExtract all files and open index.html in a modern browser. Edit the HTML, CSS, and sample data inside index.html to customize the dashboard. The avatar sheet was generated with ChatGPT Images. Course content is demonstrative. Enrollment, lesson milestones, schedule and profile are stored in your browser. See DESIGN-GUIDE.md for visual patterns and expansion guidance.\n');
writeFileSync(new URL('eduspace-template.zip', base), await eduspace.generateAsync({type:'nodebuffer',compression:'DEFLATE'}));
const hearthstone = new JSZip();
for (const name of ['hearthstone.html','hearthstone-bottle.png','hearthstone-alps.png','hearthstone-display.ttf','hearthstone-display-OFL.txt','hearthstone-gsap.min.js','hearthstone-scrolltrigger.min.js','hearthstone-gsap-NOTICE.txt']) hearthstone.file(name==='hearthstone.html'?'index.html':name,readFileSync(new URL(name,base)));
hearthstone.file('DESIGN-GUIDE.md',readFileSync(new URL('../docs/reference-studies/hearthstone-design.md',import.meta.url)));
hearthstone.file('README.txt','Hearthstone Roasters — video-inspired coffee poster\n\nExtract all files and open index.html in a modern browser. Scroll vertically through the hero. Edit the HTML and CSS to customize. The bottle and landscape are AI-generated; the bottle is a flat image and its label is not editable text. See DESIGN-GUIDE.md and the included licenses.');
writeFileSync(new URL('hearthstone-template.zip',base),await hearthstone.generateAsync({type:'nodebuffer',compression:'DEFLATE'}));
const driftbar = new JSZip();
driftbar.file('index.html',readFileSync(new URL('driftbar.html',base)));
for(const name of ['alpine-cloud.png','atmosphere.js','ScrollTrigger.min.js','PlayfairDisplay.ttf','PlayfairDisplay-OFL.txt','meadow.mp4','meadow.png','Inter.ttf','Inter-OFL.txt','gsap.min.js','gsap-NOTICE.txt','techtext.js','techtext.css','react-LICENSE.txt','react-dom-LICENSE.txt']) driftbar.file('driftbar-assets/'+name,readFileSync(new URL('driftbar-assets/'+name,base)));
for(const name of ['TechText.jsx','TechText.css','entry.jsx']) driftbar.file('source/'+name,readFileSync(new URL('../src/reference-studies/driftbar/'+name,import.meta.url)));
driftbar.file('DESIGN-GUIDE.md',readFileSync(new URL('../docs/reference-studies/driftbar-design.md',import.meta.url)));
driftbar.file('README.txt','Driftbar hero — interactive design study\nExtract all files and open index.html in a modern browser. The headline uses the user-supplied React Bits TechText component and the bundled script runs without a build step. Source is included for reference; rebuilding source requires React and esbuild. Meadow media were provided as URLs in the reference prompt; verify rights before reuse. See DESIGN-GUIDE.md and included licenses.\n');
writeFileSync(new URL('driftbar-template.zip',base),await driftbar.generateAsync({type:'nodebuffer',compression:'DEFLATE'}));

// Package the original, standalone Mosslight demo and its reusable web component.
const mosslight = new JSZip();
for (const name of ['index.html','style.css','mosslight.js','demo.js','README.md','preview/plain.html','fonts/dm-sans.woff2','fonts/instrument-serif.woff2','fonts/instrument-serif-italic.woff2','fonts/DMSans-OFL.txt','fonts/InstrumentSerif-OFL.txt']) {
  mosslight.file(name, readFileSync(new URL('mosslight/' + name, base)));
}
writeFileSync(new URL('mosslight-template.zip', base), await mosslight.generateAsync({type:'nodebuffer',compression:'DEFLATE'}));
