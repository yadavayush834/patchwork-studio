async page=>{
 const results=[];
 const only=await page.evaluate(()=>new URLSearchParams(location.search).get('only'));
 for(const scene of ['sharks','jellies','galaxy','terrain'].filter(s=>!only||s===only)){
  await page.setViewportSize({width:1280,height:720});
  await page.goto(`http://127.0.0.1:5175/output/playwright/ascii-capture.html?scene=${scene}`);
  await page.locator('canvas[data-ready=true]').waitFor();await page.evaluate(()=>document.fonts.ready);
  await page.waitForFunction(()=>Number(document.querySelector('canvas').dataset.frame)>20);
  await page.locator('canvas').screenshot({path:`output/playwright/ascii-${scene}.png`});
  const download=page.waitForEvent('download');
  const info=await page.evaluate(async(scene)=>{
   const canvas=document.querySelector('canvas');const stream=canvas.captureStream(24);
   const mime=['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm'].find(t=>MediaRecorder.isTypeSupported(t));
   const recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:5000000});const chunks=[];
   recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
   const done=new Promise(resolve=>recorder.onstop=resolve);recorder.start();await new Promise(r=>setTimeout(r,10000));recorder.stop();await done;stream.getTracks().forEach(t=>t.stop());
   const blob=new Blob(chunks,{type:'video/webm'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=scene+'-raw.webm';link.click();
   return {scene,bytes:blob.size,frames:canvas.dataset.frame,width:canvas.width,height:canvas.height};
  },scene);
  await(await download).saveAs(`output/playwright/ascii-${scene}-raw.webm`);results.push(info);
 }
 return results;
}
