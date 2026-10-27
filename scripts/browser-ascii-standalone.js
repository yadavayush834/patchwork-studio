async page=>{
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.goto('http://127.0.0.1:5181/live/index.html');
 const canvas=page.locator('canvas[data-ready=true]');await canvas.waitFor();
 const initial=await canvas.evaluate(c=>Number(c.dataset.frame)||0);
 await page.waitForFunction(n=>Number(document.querySelector('canvas').dataset.frame)>n+5,initial);
 const live=await canvas.evaluate(c=>({frame:c.dataset.frame,speed:c.dataset.speed,density:c.dataset.density,ink:c.getContext('2d').getImageData(0,0,c.width,c.height).data.some((v,i)=>i%4!==3&&v>90)}));
 if(!live.ink||Number(live.speed)<.25)throw new Error('Exported canvas is not alive');
 await page.emulateMedia({reducedMotion:'reduce'});await page.locator('canvas[data-paused=true]').waitFor({state:'attached'});
 const reduced=await canvas.evaluate(c=>({opacity:getComputedStyle(c).opacity,poster:getComputedStyle(document.querySelector('.pw-ascii-poster')).visibility}));
 if(reduced.opacity!=='0'||reduced.poster!=='visible')throw new Error('Exported reduced motion failed');
 await page.emulateMedia({reducedMotion:'no-preference'});await page.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight));
 await page.waitForFunction(()=>document.querySelector('canvas').dataset.paused==='true');
 await page.evaluate(()=>scrollTo(0,0));await page.waitForFunction(()=>document.querySelector('canvas').dataset.paused==='false');
 const responsive=[];
 for(const width of [360,768,1440]){
  const viewport=page.viewportSize();const ratio=await page.evaluate(()=>innerWidth)/viewport.width;
  await page.setViewportSize({width:Math.round(width/ratio),height:Math.round(900/ratio)});
  const metrics=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,canvas:document.querySelector('canvas').clientWidth,requests:performance.getEntriesByType('resource').filter(r=>r.name.startsWith('http')&&!r.name.startsWith('http://127.0.0.1:5181/')).map(r=>r.name)}));
  if(metrics.scroll>metrics.width||Math.abs(metrics.width-width)>2||metrics.requests.length)throw new Error(JSON.stringify(metrics));responsive.push(metrics);
 }
 await page.goto('http://127.0.0.1:5181/video/index.html');const video=page.locator('video');await video.waitFor();const recorded=await video.evaluate(async v=>{if(v.readyState<1)await new Promise(r=>v.addEventListener('loadedmetadata',r,{once:true}));return {duration:v.duration,width:v.videoWidth,height:v.videoHeight,rate:v.playbackRate,muted:v.muted,loop:v.loop}});
 if(recorded.duration<8||recorded.width!==1280||recorded.rate<.25||!recorded.muted||!recorded.loop)throw new Error('Recorded export broken');
 return {live,reduced,offscreenPauseResume:true,responsive,recorded};
}
