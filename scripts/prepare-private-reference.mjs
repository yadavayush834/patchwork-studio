import { cp, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const destination = process.argv[2];
if (!destination || !resolve(destination).startsWith('/tmp/')) throw new Error('Provide an explicit destination under /tmp.');
await mkdir(resolve(destination, 'public'), {recursive:true});
for (const name of ['pinterest-studies','fonts','licenses']) await cp(resolve('public',name),resolve(destination,'public',name),{recursive:true});
await cp('private-reference/index.html',resolve(destination,'public/index.html'));
await writeFile(resolve(destination,'vercel.json'),JSON.stringify({framework:null,outputDirectory:'public'}));
console.log('Prepared private reference deployment. Configure Vercel Authentication for all deployments before uploading.');
