import { readFileSync, writeFileSync } from 'node:fs';
import JSZip from 'jszip';
const base = new URL('../public/motion/mosslight/', import.meta.url);
writeFileSync(new URL('index.html', base), readFileSync(new URL('../src/motion/mosslight.html', import.meta.url)));
const zip = new JSZip();
for (const name of ['index.html','style.css','mosslight.js','demo.js','README.md','preview/plain.html','fonts/dm-sans.woff2','fonts/instrument-serif.woff2','fonts/instrument-serif-italic.woff2','fonts/DMSans-OFL.txt','fonts/InstrumentSerif-OFL.txt']) zip.file(name, readFileSync(new URL(name, base)));
writeFileSync(new URL('../mosslight-template.zip', base), await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
console.log('Packaged the standalone Mosslight motion template.');
