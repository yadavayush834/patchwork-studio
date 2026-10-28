async page=>{
  await page.getByRole('button',{name:'Scenes',exact:true}).click();await page.getByRole('button',{name:'Video Lab Your footage, 92 creative looks',exact:false}).click();
  const report=[];
  for(const name of ['portrait.mp4','rotated.mp4']){
    await page.locator('.vl>input[type=file]').first().setInputFiles(`output/playwright/${name}`);
    await page.locator('.vl-source').filter({hasText:name}).waitFor();
    await page.waitForFunction(()=>document.querySelector('.vl-stage canvas')?.height>document.querySelector('.vl-stage canvas')?.width);
    await page.getByLabel('Search styles',{exact:true}).fill('RGB Split');await page.locator('.vl-style').filter({hasText:'RGB Split'}).last().locator('button').first().click();await page.getByLabel('Search styles',{exact:true}).fill('');
    await page.getByRole('button',{name:'Play video',exact:true}).click();await page.waitForFunction(()=>document.querySelector('.vl-stage>video').currentTime>.3);await page.getByRole('button',{name:'Pause video',exact:true}).click();
    await page.getByLabel('Trim start',{exact:true}).fill('.2');await page.getByLabel('Trim end',{exact:true}).fill('.8');
    if(await page.getByRole('button',{name:'Dismiss error',exact:true}).count())await page.getByRole('button',{name:'Dismiss error',exact:true}).click();
    await page.getByLabel('Export format',{exact:true}).selectOption('mp4');if(await page.getByLabel('Keep source audio',{exact:true}).isEnabled())await page.getByLabel('Keep source audio',{exact:true}).uncheck();
    await page.getByRole('button',{name:'Render this style',exact:true}).click();await page.waitForFunction(()=>document.querySelector('.vl-result')||document.querySelector('.vl-error'),null,{timeout:90000});if(await page.locator('.vl-error').count())throw new Error(await page.locator('.vl-error').innerText());
    const card=page.locator('.vl-result').last();const download=page.waitForEvent('download');await card.getByRole('button',{name:'Download',exact:true}).click();await(await download).saveAs(`output/playwright/${name.replace('.mp4','-out.mp4')}`);
    const info=await card.locator('video').evaluate(async v=>{if(v.readyState<1)await new Promise(r=>v.addEventListener('loadedmetadata',r,{once:true}));return {width:v.videoWidth,height:v.videoHeight,duration:v.duration};});if(info.width!==180||info.height!==320)throw new Error('Orientation lost: '+JSON.stringify(info));report.push({name,...info});
  }
  for(const name of ['corrupt.mp4','unsupported.webm']){await page.locator('.vl>input[type=file]').first().setInputFiles(`output/playwright/${name}`);await page.locator('.vl-error').waitFor();report.push({name,error:await page.locator('.vl-error').innerText()});await page.getByRole('button',{name:'Dismiss error',exact:true}).click();}
  let download=page.waitForEvent('download');await page.getByRole('button',{name:'Save recipe',exact:true}).click();await(await download).saveAs('output/playwright/video-lab-recipe.json');
  await page.getByLabel('Effect intensity',{exact:true}).fill('0.15');await page.locator('.vl>input[type=file]').nth(1).setInputFiles('output/playwright/video-lab-recipe.json');await page.waitForFunction(()=>document.querySelector('input[aria-label="Effect intensity"]').value==='0.65');
  await page.getByLabel('Search styles',{exact:true}).fill('Braille');await page.locator('.vl-style').filter({hasText:'Braille'}).locator('button').first().click();await page.getByLabel('Search styles',{exact:true}).fill('');
  download=page.waitForEvent('download');await page.getByRole('button',{name:'Save text frame',exact:true}).click();await(await download).saveAs('output/playwright/video-lab-braille.txt');
  // Exercise the explicit capability error without depending on a particular host codec catalog.
  await page.route('**/src/video-lab/export.worker.ts*',async route=>{const response=await route.fetch();await route.fulfill({response,body:'globalThis.VideoEncoder=undefined;\n'+await response.text()});});
  await page.getByRole('button',{name:'Render this style',exact:true}).click();await page.locator('.vl-error').waitFor({timeout:90000});report.push({capabilityError:await page.locator('.vl-error').innerText()});await page.unroute('**/src/video-lab/export.worker.ts*');
  await page.getByRole('button',{name:'Dismiss error',exact:true}).click();
  await page.locator('.vl').evaluate(el=>el.scrollTo(0,0));await page.screenshot({path:'output/playwright/video-lab-portrait.png'});
  return report;
}
