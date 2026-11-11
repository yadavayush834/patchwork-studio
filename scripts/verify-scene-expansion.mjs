// Serve a production build on a separate QA origin before running. Uses an isolated browser profile.
import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {createServer} from 'node:http';
import JSZip from 'jszip';
import {createHash} from 'node:crypto';
const base=process.env.PATCHWORK_QA_URL||'http://127.0.0.1:5197';
const ids=['tidewatch','cloudline','glasshouse','courtyard'];
const browser=await chromium.launch({executablePath:process.env.PATCHWORK_CHROME||undefined,headless:true,args:['--enable-unsafe-swiftshader']});
const context=await browser.newContext({viewport:{width:1440,height:900},acceptDownloads:true});
// Observe the actual scene state returned by the existing runtime, without changing its implementation.
await context.addInitScript(()=>{let fn;Object.defineProperty(window,'PixelScene',{configurable:true,get:()=>fn,set(value){fn=function(...args){const state=value(...args);window.sceneState=state;return state;};}});});
const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
const directory=await fs.mkdtemp(path.join(os.tmpdir(),'patchwork-scenes-four-'));
const server=createServer(async(req,res)=>{try{const filename=path.join(directory,new URL(req.url,'http://local').pathname);if(!filename.startsWith(directory+path.sep))throw Error();res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.woff2':'font/woff2'})[path.extname(filename)]||'application/octet-stream');res.end(await fs.readFile(filename));}catch{res.statusCode=404;res.end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const exportBase=`http://127.0.0.1:${server.address().port}`;
const artworkOptions={style:'.sx > :not(canvas) { visibility: hidden !important; }'};
const digest=buffer=>createHash('sha256').update(buffer).digest('hex');
try{
 await page.goto(`${base}/?collection=scenes`);await page.locator('.sxg-card').first().waitFor();assert.equal(await page.locator('.sxg-card').count(),10);
 const titles=await page.locator('.sxg-card-title').allTextContents();assert.ok(titles.includes('Last Bus'));assert.ok(titles.includes('Lantern River'));
 for(const id of ids){
  console.log(`Checking ${id} opening and ZIP`);
  const card=page.locator(`.sxg-card[data-id=${id}]`);const popupPromise=page.waitForEvent('popup');await card.locator('.sxg-cover').click();const popup=await popupPromise;
  await popup.locator('.sx-ready').waitFor({timeout:20000});assert.equal(await popup.locator('.sxg,iframe').count(),0);await popup.close();
  await card.getByRole('button',{name:'Customize',exact:true}).click();
  const form=page.locator('.sxg-editor');await form.waitFor({state:'visible'});
  await form.getByLabel('Brand',{exact:true}).fill(`QA ${id}`);
  await page.waitForTimeout(400);
  const downloadPromise=page.waitForEvent('download');await page.locator('.sxg-dl').click();const download=await downloadPromise;
  const zip=await JSZip.loadAsync(await fs.readFile(await download.path()));
  assert.ok(zip.file(`${id}/scene.js`));assert.ok(zip.file('pixel.js'));assert.ok(zip.file('fonts/InstrumentSerif.woff2'));assert.ok(zip.file('licenses/InstrumentSerif-OFL.txt'));
  for(const item of Object.values(zip.files)){if(item.dir)continue;const filename=path.join(directory,id,item.name);assert.ok(filename.startsWith(path.join(directory,id)+path.sep));await fs.mkdir(path.dirname(filename),{recursive:true});await fs.writeFile(filename,await item.async('nodebuffer'));}
  await page.locator('.sxg-backall').click();await page.locator('.sxg-cards').waitFor({state:'visible'});
 }
 const exported=await context.newPage();exported.on('pageerror',e=>errors.push(e.message));const failed=[];exported.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
 await exported.route('**/*',route=>route.request().url().startsWith(exportBase)?route.continue():route.abort());
 const frames=[];
 for(const id of ids){
  await exported.goto(`${exportBase}/${id}/index.html`);await exported.locator('.sx-ready').waitFor();await exported.evaluate(()=>document.fonts.ready);await exported.waitForTimeout(1800);
  assert.equal(await exported.locator('.sx-brand span').textContent(),`QA ${id}`);
  assert.ok(await exported.evaluate(()=>window.sceneState),'WebGL scene initialized');
  await exported.mouse.move(950,500);await exported.waitForTimeout(250);
  assert.ok(await exported.evaluate(()=>window.sceneState.mx>.5),`${id} follows pointer`);
  await exported.getByRole('button',{name:'Pause motion',exact:true}).click();assert.equal(await exported.evaluate(()=>window.sceneState.raf),0);
  const canvas=exported.locator('canvas');const first=await canvas.screenshot(artworkOptions);await exported.waitForTimeout(100);assert.equal(digest(await canvas.screenshot(artworkOptions)),digest(first),`${id} remains paused`);
  const action=exported.locator('.sx-scene-controls button').first();await action.focus();await exported.keyboard.press('Enter');assert.equal(await exported.evaluate(()=>window.sceneState.click),0);
  const after=await canvas.screenshot(artworkOptions);assert.notEqual(digest(after),digest(first),`${id} action changes artwork`);frames.push(digest(after));
  for(const size of [{width:1440,height:900},{width:768,height:1024},{width:390,height:844}]){
   await exported.setViewportSize(size);await exported.waitForTimeout(80);
   const issues=await exported.evaluate(()=>[...document.querySelectorAll('.sx-title,.sx-actions,.sx-scene-controls')].filter(n=>{const r=n.getBoundingClientRect();return r.left<0||r.right>innerWidth+1||r.bottom>innerHeight+1;}).map(n=>n.className));assert.deepEqual(issues,[],`${id} at ${size.width}`);
  }
  await exported.setViewportSize({width:1440,height:900});
  const gl=await exported.locator('canvas').evaluate(c=>{const gl=c.getContext('webgl');return gl.getError();});assert.equal(gl,0,`${id} shader has no GL error`);
  console.log(`PASS ${id}: standalone, customized ZIP, shader, pointer, pause, keyboard action, responsive layout`);
 }
 assert.equal(new Set(frames).size,4);
 const reduced=await browser.newContext({viewport:{width:1280,height:800},reducedMotion:'reduce'});const still=await reduced.newPage();
 for(const id of ids){await still.goto(`${exportBase}/${id}/index.html`);await still.locator('.sx-ready').waitFor();await still.evaluate(()=>document.fonts.ready);await still.waitForTimeout(100);const before=digest(await still.locator('canvas').screenshot(artworkOptions));await still.waitForTimeout(100);assert.equal(digest(await still.locator('canvas').screenshot(artworkOptions)),before);await still.locator('.sx-scene-controls button').first().click();}
 await reduced.close();assert.deepEqual(failed,[]);assert.deepEqual(errors,[]);
 console.log('PASS: ten-scene gallery; four independent openings/customizations/downloads; exports use only local assets; four distinct renderings; mouse and keyboard art controls; pause; reduced motion; desktop/tablet/phone layouts.');
}catch(error){console.error('Scene QA errors',errors);throw error;}finally{await browser.close();await new Promise(r=>server.close(r));await fs.rm(directory,{recursive:true,force:true});}
