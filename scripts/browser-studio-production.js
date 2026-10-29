// Open the built app in an isolated session; quality probe must have saved its source fixture.
async page => {
  await page.locator('.vl').waitFor();
  await page.locator('.vl>input[type=file]').first().setInputFiles('output/playwright/studio-quality-source.webm');
  await page.locator('.vl-source').waitFor();
  await page.getByLabel('Trim start',{exact:true}).fill('0.25');
  await page.getByLabel('Trim end',{exact:true}).fill('0.75');
  await page.getByLabel('Export format',{exact:true}).selectOption('gif');
  const outcomes=[];
  for(const name of ['ASCII Studio','Pixel Art']) {
    await page.locator('.vl-style>button:first-child').filter({hasText:name}).click();
    const count=await page.locator('.vl-result').count();
    await page.getByRole('button',{name:'Render this style',exact:true}).click();
    await page.waitForFunction(count=>document.querySelectorAll('.vl-result').length>count||document.querySelector('.vl-error'),count,{timeout:90000});
    if(await page.locator('.vl-error').count())throw new Error(await page.locator('.vl-error').innerText());
    const card=page.locator('.vl-result').last();
    await card.locator('img').evaluate(async img=>{await img.decode();if(img.naturalWidth!==480||img.naturalHeight!==270)throw new Error('GIF dimensions incorrect');});
    const download=page.waitForEvent('download');await card.getByRole('button',{name:'Download',exact:true}).click();
    const path=`output/playwright/${name==='ASCII Studio'?'ascii':'pixel'}-quality.gif`;await(await download).saveAs(path);
    outcomes.push({name,gif:true,path});
  }
  await page.getByLabel('Export format',{exact:true}).selectOption('webm');
  await page.getByRole('button',{name:'Render this style',exact:true}).click();
  await page.getByRole('button',{name:'Cancel export',exact:true}).click();
  await page.waitForFunction(()=>!document.querySelector('.vl-cancel'));
  if(await page.locator('.vl-result').count()!==2)throw new Error('Cancel lost completed results');
  await page.getByRole('button',{name:'Dismiss error',exact:true}).click();
  await page.getByRole('button',{name:'Back to studio',exact:true}).click();
  await page.getByRole('button',{name:'Video Lab',exact:true}).click();
  await page.locator('.vl-source').waitFor();
  if(await page.locator('.vl-result').count()!==2)throw new Error('Reopening lost results');
  return outcomes;
}
