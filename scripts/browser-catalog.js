async page => {
 const data=await page.evaluate(async()=>{
  const stamp=Date.now();const c=await import('/src/catalog.ts?qa='+stamp);const {renderSite}=await import('/src/render.ts?qa='+stamp);const css=(await import('/src/site.css?raw&qa='+stamp)).default;const runtime=(await import('/src/site-runtime.ts?qa='+stamp)).siteRuntime;
  return {css,runtime,sites:c.worlds.map(w=>({id:w.id,html:renderSite(c.createProject(w.id))}))};
 });
 const probe=await page.context().newPage();await probe.goto('http://127.0.0.1:5174/');const results=[];
 for(const site of data.sites){
  await probe.setViewportSize({width:1440,height:950});
  await probe.setContent(`<html><head><base href="http://127.0.0.1:5174/"><style>body{margin:0}${data.css}</style></head><body>${site.html}<script>${data.runtime}</script></body></html>`);
  await probe.evaluate(()=>document.fonts.ready);
  if(await probe.evaluate(()=>[...document.fonts].some(f=>f.status==='error')))throw new Error('A local font failed to load');
  await probe.screenshot({path:`output/playwright/world-${site.id}.png`,fullPage:true});
  for(const width of [360,768,1440]){
   await probe.setViewportSize({width,height:950});
   const stats=await probe.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,sections:document.querySelectorAll('[data-section]').length,brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).length,clippedText:[...document.querySelectorAll('h1,h2,.pw-button')].filter(el=>{const r=el.getBoundingClientRect();return r.left<0||r.right>innerWidth+1}).map(el=>el.textContent)}));
   if(stats.scroll>width||stats.sections!==6||stats.brokenImages||stats.clippedText.length)throw new Error(site.id+JSON.stringify(stats));results.push({world:site.id,...stats});
   if(width===360)await probe.screenshot({path:`output/playwright/world-${site.id}-mobile.png`,fullPage:true});
  }
 }
 await probe.close();return results;
}
