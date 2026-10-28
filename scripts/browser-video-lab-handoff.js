// Run after browser-video-lab-flow.js in the same isolated session.
async page=>{
  await page.getByRole('button',{name:'Back to studio',exact:true}).click();
  if(!await page.getByRole('textbox',{name:'Project name',exact:true}).count())await page.getByRole('button',{name:'Make something yours',exact:true}).click();
  await page.getByRole('textbox',{name:'Project name',exact:true}).fill('Video Lab handoff QA');
  await page.getByRole('button',{name:'Scenes',exact:true}).click();
  await page.getByRole('button',{name:'Video Lab Your footage, 92 creative looks',exact:false}).click();
  await page.locator('.vl-result').first().getByRole('button',{name:'Add to website',exact:true}).click();
  await page.getByText('Clip added to your website.',{exact:false}).waitFor();
  await page.getByRole('button',{name:'Back to studio',exact:true}).click();
  const frame=page.frameLocator('iframe[title="Website canvas"]');await frame.locator('video.pw-bg-video').first().waitFor();
  await page.getByRole('button',{name:'Undo',exact:true}).click();await page.waitForFunction(()=>!document.querySelector('iframe[title="Website canvas"]').contentDocument.querySelector('video.pw-bg-video'));
  await page.getByRole('button',{name:'Redo',exact:true}).click();await frame.locator('video.pw-bg-video').first().waitFor();
  await page.getByRole('button',{name:'Export',exact:true}).click();
  let download=page.waitForEvent('download');await page.getByRole('button',{name:'Export website',exact:false}).click();await(await download).saveAs('output/playwright/video-lab-site.zip');
  download=page.waitForEvent('download');await page.getByRole('button',{name:'Download editable project',exact:false}).click();await(await download).saveAs('output/playwright/video-lab-project.zip');
  await page.getByRole('button',{name:'Close dialog',exact:true}).click();
  await page.getByRole('button',{name:'Back to projects',exact:true}).click();
  // Reopen the saved browser project and check its generated media.
  await page.locator('.project-card').filter({hasText:'Video Lab handoff QA'}).first().getByRole('button').first().click();
  await frame.locator('video.pw-bg-video').first().waitFor();
  await page.getByRole('button',{name:'Back to projects',exact:true}).click();
  await page.locator('input[type=file]').first().setInputFiles('output/playwright/video-lab-project.zip');
  await page.getByRole('textbox',{name:'Project name',exact:true}).waitFor();
  const name=await page.getByRole('textbox',{name:'Project name',exact:true}).inputValue();if(!name.endsWith('(imported)'))throw new Error('Project bundle did not import');
  const media=await frame.locator('video.pw-bg-video').first().evaluate(async v=>{if(v.readyState<1)await new Promise(r=>v.addEventListener('loadedmetadata',r,{once:true}));return {w:v.videoWidth,h:v.videoHeight,duration:v.duration,muted:v.muted,poster:v.poster};});
  if(!media.muted||!media.poster.startsWith('blob:'))throw new Error('Imported background clip/poster missing');
  await page.screenshot({path:'output/playwright/video-lab-editor-handoff.png'});
  return {undoRedo:true,savedProjectReopened:true,editableProjectImported:true,media};
}
