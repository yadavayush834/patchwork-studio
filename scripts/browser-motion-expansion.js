// Staged Playwright CLI probe. Run against production preview on 5177.
async (page) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const results = [];
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('http://127.0.0.1:5177/?collection=motion');
  await page.locator('.motion-template-card').first().waitFor();
  if (await page.locator('.motion-template-card').count() !== 7)
    throw Error('Expected seven motion templates');
  for (const [id,name,stage,target] of [
    ['pelagic','Pelagic','.pl-survey-pin','.pl-survey-notes article:nth-child(3)'],
    ['heliograph','Heliograph','.he-eclipse-pin','.he-totality'],
    ['afterimage','Afterimage','.af-screening-pin','.af-sequence-2 .af-sequence-copy'],
  ]) {
    await page.getByRole('button',{name:`Explore ${name}`,exact:true}).click();
    const frame = await (await page.locator('.motion-preview iframe').elementHandle()).contentFrame();
    await frame.waitForFunction(()=>document.documentElement.dataset.motionReady==='true');
    if (await frame.locator('.pin-spacer').count() !== 3) throw Error(`${id}: missing scroll chapters`);
    // Exercise an actual wheel path before seeking the exact late-stage assertion.
    await page.locator('.motion-preview iframe').hover();
    await page.mouse.wheel(0,700);
    await page.waitForTimeout(900);
    const travelled = await frame.evaluate(()=>scrollY);
    if(travelled<100) throw Error(`${id}: native scrolling did not advance`);
    await frame.evaluate(([selector,fraction])=>{
      const spacer=document.querySelector(selector).parentElement;
      scrollTo({top:spacer.getBoundingClientRect().top+scrollY+(spacer.offsetHeight-innerHeight)*fraction,behavior:'instant'});
    },[stage,id==='heliograph'?.54:.87]);
    await page.waitForTimeout(1400);
    const opacity = Number(await frame.locator(target).evaluate(el=>getComputedStyle(el).opacity));
    if(opacity<.8) throw Error(`${id}: missing late-stage composition (${opacity})`);
    await page.screenshot({path:`output/playwright/${id}-chapter.png`});
    const downloadPromise=page.waitForEvent('download');
    await page.getByRole('button',{name:'Get template',exact:true}).click();
    await (await downloadPromise).saveAs(`output/playwright/${id}-motion-template.zip`);
    await page.emulateMedia({reducedMotion:'reduce'});
    await frame.waitForFunction(()=>document.querySelector('.mt-page').classList.contains('mt-reduced')&&!document.querySelector('.pin-spacer'));
    await page.setViewportSize({width:390,height:844});
    const bounds=await frame.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
    if(bounds.scroll>bounds.width) throw Error(`${id}: horizontal overflow in reading layout`);
    await page.emulateMedia({reducedMotion:'no-preference'});
    await frame.waitForFunction(()=>document.querySelectorAll('.pin-spacer').length===3);
    await page.getByRole('button',{name:'Replay template',exact:true}).click();
    await page.waitForTimeout(1400);
    await page.screenshot({path:`output/playwright/${id}-phone.png`});
    results.push({id,lateChapterOpacity:opacity,phoneWidth:bounds.width});
    await page.setViewportSize({width:1440,height:1000});
    await page.getByRole('button',{name:'The collection',exact:true}).click();
  }
  if(errors.length) throw Error(errors.join('\n'));
  return {templates:7,results,errors};
}
