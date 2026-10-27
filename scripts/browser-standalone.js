async page => {
 const results=[];
 for(const width of [360,768,1440]){
  await page.setViewportSize({width,height:900});
  const result=await page.evaluate(async()=>{
   await document.fonts.ready;
   const image=document.querySelector('.pw-hero-image');
   return {width:innerWidth,scroll:document.documentElement.scrollWidth,sections:document.querySelectorAll('[data-section]').length,headline:document.querySelector('h1').textContent,imageLoaded:image.complete&&image.naturalWidth>0,videoReady:document.querySelector('video').readyState,fonts:document.fonts.check('16px Silkscreen'),resources:performance.getEntriesByType('resource').map(r=>r.name)};
  });
  if(result.scroll>width||!result.imageLoaded||!result.fonts||result.sections!==6)throw new Error(JSON.stringify(result));
  if(result.resources.some(r=>r.startsWith('http')&&!r.startsWith('http://127.0.0.1:5180')))throw new Error('Export depends on the studio');
  results.push({...result,resources:result.resources.length});
  await page.screenshot({path:`output/playwright/export-${width}.png`,fullPage:true});
 }
 await page.emulateMedia({reducedMotion:'reduce'});
 const reduced=await page.locator('video').evaluate(v=>({paused:v.paused,hidden:getComputedStyle(v).visibility==='hidden'}));
 if(!reduced.paused||!reduced.hidden)throw new Error('Export did not respect reduced motion');
 await page.getByRole('link',{name:'Explore my work',exact:false}).click();
 if(!page.url().endsWith('#work'))throw new Error('Section navigation failed');
 return {results,reduced,navigation:true};
}
