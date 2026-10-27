async page=>{
 const projectName=`ASCII motion QA ${Date.now()}`;
 await page.goto('http://127.0.0.1:5175/?gallery=ascii');
 const scenes=['sharks','jellies','galaxy','terrain'];const result=[];
 const gallery=page.frameLocator('.ascii-gallery-stage iframe');
 for(let i=0;i<scenes.length;i++){
  await page.getByRole('tab').nth(i).click();
  const c=gallery.locator(`canvas[data-ascii="${scenes[i]}"][data-ready=true]`);await c.waitFor();
  const stats=await c.evaluate(async c=>{const start=Number(c.dataset.frame)||0;await new Promise((resolve,reject)=>{let tries=0;const tick=()=>{if(Number(c.dataset.frame)>start+3)return resolve();if(tries++>180)return reject(new Error('Animation did not advance'));requestAnimationFrame(tick)};tick()});return {scene:c.dataset.ascii,width:c.width,height:c.height,frame:c.dataset.frame,paused:c.dataset.paused};});
  result.push(stats);
  await page.screenshot({path:`output/playwright/gallery-${scenes[i]}.png`});
 }
 await page.getByRole('button',{name:'Pause ASCII preview',exact:true}).click();
 await gallery.locator('.pw-reduced canvas[data-ready=true][data-paused=true]').waitFor();
 const paused=await gallery.locator('canvas').evaluate(c=>({paused:c.dataset.paused,opacity:getComputedStyle(c).opacity,poster:getComputedStyle(c.parentElement.querySelector('.pw-ascii-poster')).visibility}));
 if(paused.paused!=='true'||paused.opacity!=='0'||paused.poster!=='visible')throw new Error('Gallery pause failed '+JSON.stringify(paused));
 await page.getByRole('button',{name:'Play ASCII preview',exact:true}).click();await page.getByRole('tab').first().click();
 const loopDownload=page.waitForEvent('download');await page.getByRole('link',{name:'Video loop',exact:true}).click();await(await loopDownload).saveAs('output/playwright/gallery-sharkwater.webm');
 await page.getByRole('button',{name:'Make a site with this',exact:true}).click();
 await page.getByRole('textbox',{name:'Project name',exact:true}).fill(projectName);
 await page.getByLabel('Animation source',{exact:true}).waitFor();
 await page.getByLabel('ASCII speed',{exact:false}).fill('125');await page.getByLabel('ASCII detail',{exact:false}).fill('110');await page.getByLabel('ASCII brightness',{exact:false}).fill('80');
 const editor=page.frameLocator('iframe[title="Website canvas"]');const settings=await editor.locator('canvas[data-ready=true]').evaluate(c=>({speed:c.dataset.speed,density:c.dataset.density,color:c.dataset.color}));
 if(settings.speed!=='1.25'||settings.density!=='1.1')throw new Error('ASCII controls not reflected '+JSON.stringify(settings));
 await page.getByRole('button',{name:'Export',exact:true}).click();let event=page.waitForEvent('download');await page.getByRole('button',{name:'Export website',exact:false}).click();await(await event).saveAs('output/playwright/ascii-live-export.zip');await page.getByRole('button',{name:'Close dialog',exact:true}).click();
 await page.getByLabel('Animation source',{exact:true}).selectOption('video');const video=editor.locator('video');await video.waitFor({state:'attached'});const media=await video.evaluate(async v=>{if(v.readyState<1)await new Promise(r=>v.addEventListener('loadedmetadata',r,{once:true}));return {duration:v.duration,rate:v.playbackRate,muted:v.muted,width:v.videoWidth,height:v.videoHeight}});
 if(media.duration<8||!media.muted||media.rate!==1.25||media.width!==1280)throw new Error('Recorded mode failed '+JSON.stringify(media));
 await page.getByRole('button',{name:'Export',exact:true}).click();event=page.waitForEvent('download');await page.getByRole('button',{name:'Export website',exact:false}).click();await(await event).saveAs('output/playwright/ascii-video-export.zip');await page.getByRole('button',{name:'Close dialog',exact:true}).click();
 await page.getByRole('button',{name:'Back to projects',exact:true}).click();await page.reload();if(await page.getByRole('button',{name:'Close ASCII gallery',exact:true}).count())await page.getByRole('button',{name:'Close ASCII gallery',exact:true}).click();await page.getByRole('button',{name:projectName,exact:true}).click();
 if(await page.getByLabel('Animation source',{exact:true}).inputValue()!=='video')throw new Error('Recorded mode not saved');if(await page.getByLabel('ASCII speed',{exact:false}).inputValue()!=='125')throw new Error('Speed not saved');
 await page.getByLabel('Animation source',{exact:true}).selectOption('live');await page.getByRole('button',{name:'Phone',exact:true}).click();const mobile=await editor.locator('.pw-mobile').evaluate(el=>({width:el.clientWidth,scroll:el.scrollWidth}));if(mobile.scroll>mobile.width)throw new Error('Mobile overflow');
 await page.screenshot({path:'output/playwright/ascii-editor-phone.png'});
 return {scenes:result,paused,settings,media,persistence:true,mobile,exports:['live','video']};
}
