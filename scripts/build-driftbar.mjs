import { build } from 'esbuild';
await build({entryPoints:['src/reference-studies/driftbar/entry.jsx'],bundle:true,minify:true,format:'iife',target:['es2020'],jsx:'automatic',outfile:'public/pinterest-studies/driftbar-assets/techtext.js',define:{'process.env.NODE_ENV':'"production"'}});
