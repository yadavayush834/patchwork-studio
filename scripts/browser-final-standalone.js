async page=>{
 const studio=page;await studio.goto('http://127.0.0.1:5180/nested/index.html');
 const result=[];
 for(const width of [360,768,1440]){
  await studio.setViewportSize({width,height:900});await studio.evaluate(()=>document.fonts.ready);
  const metrics=await studio.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,sections:document.querySelectorAll('[data-section]').length,image:[...document.images].every(i=>i.complete&&i.naturalWidth>0),video:document.querySelector('video').readyState,fonts:[...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family),svg:document.querySelectorAll('[data-element] svg').length,foreign:performance.getEntriesByType('resource').filter(r=>r.name.startsWith('http')&&!r.name.startsWith('http://127.0.0.1:5180/nested/')).map(r=>r.name)}));
  if(metrics.scroll>metrics.width||!metrics.image||metrics.video<1||metrics.fonts.length<2||metrics.svg<1||metrics.foreign.length)throw new Error(JSON.stringify(metrics));result.push(metrics);
 }
 await studio.emulateMedia({reducedMotion:'reduce'});const reduced=await studio.locator('video').evaluate(v=>({paused:v.paused,hidden:getComputedStyle(v).visibility==='hidden',poster:getComputedStyle(v.closest('section')).backgroundImage}));
 if(!reduced.paused||!reduced.hidden||reduced.poster==='none')throw new Error('Reduced-motion poster missing');
 await studio.getByRole('link',{name:'Explore my work',exact:false}).click();if(!studio.url().endsWith('#work'))throw new Error('Navigation failed');
 return {nestedFolder:true,result,reduced,navigation:true};
}
