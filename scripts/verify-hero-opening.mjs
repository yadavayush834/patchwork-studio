// Verifies actual gallery clicks, independent top-level documents, saved text and explicit editing routes.
import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
const base=process.env.PATCHWORK_QA_URL||'http://127.0.0.1:5194';
const browser=await chromium.launch({executablePath:process.env.PATCHWORK_CHROME||undefined,headless:true,args:['--enable-unsafe-swiftshader']});
const context=await browser.newContext({viewport:{width:1280,height:900},reducedMotion:'reduce'});
const page=await context.newPage();const errors=[];
context.on('page',p=>p.on('pageerror',e=>errors.push(e.message)));
page.on('pageerror',e=>errors.push(e.message));
async function assertWebsite(p){await p.locator('patchwork-hero h1').first().waitFor();assert.equal(await p.locator('.hero-studio,.h2g,.design-library-workspace,iframe').count(),0);assert.equal(await p.evaluate(()=>window.top===window),true);}
try{
 await page.goto(`${base}/?collection=heroes`);
 const links=page.locator('.hs-cover');await links.first().waitFor();assert.equal(await links.count(),5);
 const galleryURL=page.url();
 for(let i=0;i<5;i++){
  assert.equal(await links.nth(i).getAttribute('target'),'_blank');
  const popupPromise=page.waitForEvent('popup');await links.nth(i).click();const popup=await popupPromise;
  await assertWebsite(popup);assert.equal(page.url(),galleryURL);await popup.close();
 }
 await page.goto(`${base}/?collection=heroes`);
 await page.getByRole('button',{name:'Customize Facet',exact:true}).click();
 assert.ok(new URL(page.url()).searchParams.get('edit')==='1');
 await page.getByLabel('Brand',{exact:true}).fill('Standalone Facet');await page.reload();
 await page.getByLabel('Brand',{exact:true}).waitFor();assert.equal(await page.getByLabel('Brand',{exact:true}).inputValue(),'Standalone Facet');
 await page.goto(`${base}/?collection=heroes&hero=facet`);await assertWebsite(page);
 await page.getByRole('link',{name:'Standalone Facet home',exact:true}).waitFor();
 assert.deepEqual(errors,[]);
 console.log('PASS: all five section 1 hero links open independent websites in new tabs; galleries stay in place; legacy links are standalone; Customize uses edit=1; saved edits survive reload and carry into independent pages.');
}finally{await browser.close();}
