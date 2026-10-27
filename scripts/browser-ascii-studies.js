async page=>{
 const result=[];
 for(const scene of ['sharks','jellies','galaxy','terrain']){
  await page.setViewportSize({width:1280,height:720});await page.goto(`http://127.0.0.1:5175/output/playwright/ascii-capture.html?scene=${scene}`);
  await page.locator('canvas[data-ready=true]').waitFor();await page.evaluate(()=>document.fonts.ready);await page.waitForFunction(()=>Number(document.querySelector('canvas').dataset.frame)>15);
  await page.locator('canvas').screenshot({path:`output/playwright/study-${scene}.png`});
  result.push(await page.locator('canvas').evaluate(c=>({scene:c.dataset.ascii,frames:c.dataset.frame,width:c.width,height:c.height,hasInk:c.getContext('2d').getImageData(0,0,c.width,c.height).data.some((v,i)=>i%4!==3&&v>90)})));
 }
 return result;
}
