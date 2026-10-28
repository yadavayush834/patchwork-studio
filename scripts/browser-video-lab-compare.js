async page=>{
  if(!await page.locator('.vl-source').count()){await page.locator('.vl>input[type=file]').first().setInputFiles('output/playwright/video-lab-source.webm');await page.locator('.vl-source').waitFor();}
  const comparison=await page.evaluate(async()=>{
    const moduleUrl=performance.getEntriesByType('resource').find(r=>r.name.includes('/mediabunny.js?')).name;
    const m=await import(moduleUrl),{Renderer}=await import('/src/video-lab/render.ts'),{defaults}=await import('/src/video-lab/catalog.ts');
    const source=new m.Input({source:new m.BlobSource(await(await fetch('/output/playwright/video-lab-source.webm')).blob()),formats:m.ALL_FORMATS});
    const encoded=new m.Input({source:new m.BlobSource(await(await fetch('/output/playwright/video-lab-audio.mp4')).blob()),formats:m.ALL_FORMATS});
    const src=await new m.CanvasSink(await source.getPrimaryVideoTrack(),{width:320,height:180,fit:'contain'}).getCanvas(.5);
    const actual=await new m.CanvasSink(await encoded.getPrimaryVideoTrack(),{width:320,height:180,fit:'contain'}).getCanvas(0);
    const renderer=new Renderer(),expected=renderer.render(src.canvas,320,180,'rgb',defaults('rgb'),.5);
    const canvas=document.createElement('canvas');canvas.width=320;canvas.height=180;canvas.getContext('2d').drawImage(actual.canvas,0,0);
    const a=expected.getContext('2d').getImageData(0,0,320,180).data,b=canvas.getContext('2d').getImageData(0,0,320,180).data;let total=0;for(let i=0;i<a.length;i++)if(i%4!==3)total+=Math.abs(a[i]-b[i]);
    const mae=total/(320*180*3);source.dispose();encoded.dispose();renderer.dispose();if(mae>12)throw new Error('Preview/export mismatch: '+mae);return {meanAbsoluteChannelError:mae};
  });
  await page.getByLabel('Search styles',{exact:true}).fill('Voxel Cubes');await page.locator('.vl-style').filter({hasText:'Voxel Cubes'}).locator('button').first().click();await page.getByLabel('Search styles',{exact:true}).fill('');
  await page.getByRole('button',{name:'Play video',exact:true}).click();
  const responsiveness=await page.evaluate(async()=>{const c=document.querySelector('.vl-stage canvas');let frames=0;const observer=new MutationObserver(events=>frames+=events.filter(e=>e.attributeName==='width').length);observer.observe(c,{attributes:true});const delays=[];let last=performance.now();const timer=setInterval(()=>{const now=performance.now();delays.push(now-last);last=now;},20);await new Promise(r=>setTimeout(r,1500));clearInterval(timer);observer.disconnect();return {framesIn1_5Seconds:frames,maxMainThreadTimerGap:Math.max(...delays)};});
  await page.getByRole('button',{name:'Pause video',exact:true}).click();
  await page.getByLabel('Search styles',{exact:true}).fill('Datamosh');await page.locator('.vl-style').filter({hasText:'Datamosh'}).locator('button').first().click();await page.getByLabel('Search styles',{exact:true}).fill('');
  await page.getByLabel('Video position',{exact:true}).fill('0.5');
  await page.getByLabel('Trim start',{exact:true}).fill('0.5');await page.getByLabel('Trim end',{exact:true}).fill('1.0');await page.getByLabel('Export format',{exact:true}).selectOption('webm');
  const count=await page.locator('.vl-result').count();await page.getByRole('button',{name:'Render this style',exact:true}).click();await page.waitForFunction(n=>document.querySelectorAll('.vl-result').length>n||document.querySelector('.vl-error'),count,{timeout:90000});if(await page.locator('.vl-error').count())throw new Error(await page.locator('.vl-error').innerText());
  return {comparison,responsiveness,temporalDatamosh:true};
}
