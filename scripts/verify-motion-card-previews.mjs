// Run against an isolated production preview; never uses the user's browser profile.
import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
const base=process.env.PATCHWORK_QA_URL||'http://127.0.0.1:5195';
const browser=await chromium.launch({executablePath:process.env.PATCHWORK_CHROME||undefined,headless:true,args:['--enable-unsafe-swiftshader']});
const context=await browser.newContext({viewport:{width:1280,height:900}});
const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
try {
 await page.goto(`${base}/?collection=motion`);
 const cards=page.locator('.motion-template-card');await cards.first().waitFor();
 const sites=await cards.evaluateAll(nodes=>nodes.map(node=>({id:new URL(node.querySelector('a').href).searchParams.get('motion'),name:node.querySelector('h2').textContent.trim()})));
 assert.ok(sites.length>=19);
 for(const site of sites){
  const card=page.locator(`.motion-template-card.motion-${site.id}`);
  const button=card.locator('.motion-card-live-toggle');
  await button.scrollIntoViewIfNeeded();await page.mouse.move(0,0);await button.click();
  await card.locator('.motion-card-live.is-ready').waitFor({timeout:40000});
  assert.equal(await page.locator('.motion-card-live iframe').count(),1);
  assert.ok(await card.frameLocator('iframe').locator('body').textContent(),site.id);
  await button.click();await card.locator('.motion-card-live').waitFor({state:'detached'});
  console.log(`PASS ${site.id}`);
 }
 // Actual hover activation and progression, then unmount on pointer/focus exit.
 const aether=page.locator('.motion-template-card.motion-aether');await aether.locator('.motion-template-card-cover').hover();
 await aether.locator('.motion-card-live.is-ready').waitFor({timeout:40000});
 await page.waitForFunction(()=>{const f=document.querySelector('.motion-card-live iframe');return (f?.contentDocument?.scrollingElement?.scrollTop||0)>60;},{},{timeout:15000});
 await page.mouse.move(0,0);await page.locator('.motion-card-live').waitFor({state:'detached'});
 // Keyboard focus starts the same live website; changing cards never leaves two contexts mounted.
 await aether.locator('h2 a').focus();await aether.locator('.motion-card-live.is-ready').waitFor({timeout:40000});
 await page.locator('.motion-template-card.motion-offscript h2 a').focus();assert.equal(await page.locator('.motion-card-live iframe').count(),1);
 await page.locator('.motion-topbar button').first().focus();await page.locator('.motion-card-live').waitFor({state:'detached'});
 // Standalone opening remains the primary card action.
 const popupPromise=page.waitForEvent('popup');await aether.locator('.motion-template-card-cover').click();const popup=await popupPromise;
 await popup.locator('.mt-page').waitFor();assert.equal(await popup.locator('.motion-studio,iframe').count(),0);await popup.close();
 // Explicit preview buttons work without hover on touch devices; scrolling away releases the context.
 const touch=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
 const mobile=await touch.newPage();await mobile.goto(`${base}/?collection=motion`);
 const toggle=mobile.locator('.motion-card-live-toggle').first();await toggle.tap();await mobile.locator('.motion-card-live.is-ready').waitFor({timeout:40000});
 const preview=mobile.frameLocator('.motion-card-live iframe');
 const position=await preview.locator('body').evaluate(()=>document.scrollingElement.scrollTop);await mobile.waitForTimeout(500);
 assert.equal(await preview.locator('body').evaluate(()=>document.scrollingElement.scrollTop),position);
 await mobile.locator('.motion-template-card').last().scrollIntoViewIfNeeded();await mobile.locator('.motion-card-live').waitFor({state:'detached'});
 await touch.close();assert.deepEqual(errors,[]);
 console.log(`PASS: ${sites.length} real previews; hover/touch/keyboard; single active context; real scroll tour; cleanup; reduced motion; independent site opening.`);
} finally {await browser.close();}
