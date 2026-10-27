async page=>{
 await page.setViewportSize({width:1440,height:1000});
 await page.locator('.section-navigator > button').first().click();
 await page.locator('.selected-heading h3').filter({hasText:/^Hero$/}).waitFor();
 await page.getByRole('textbox',{name:'Project name',exact:true}).fill('My creative corner');
 await page.getByLabel('Headline',{exact:true}).fill('A little curious.\nA little creative.');
 await page.getByLabel('Image description',{exact:true}).fill('An original green arch under a warm sun');
 if(await page.getByRole('button',{name:'Enable animation',exact:true}).count())await page.getByRole('button',{name:'Enable animation',exact:true}).click();
 const video=page.frameLocator('iframe[title="Website canvas"]').locator('video');
 await video.waitFor({state:'attached'});
 const media=await video.evaluate(async v=>{if(v.readyState<1)await new Promise(r=>v.addEventListener('loadedmetadata',r,{once:true}));return {src:v.src,ready:v.readyState,duration:v.duration,muted:v.muted,loop:v.loop,inline:v.playsInline}});
 if(!media.src.startsWith('blob:')||!media.muted||!media.loop||!media.inline||media.duration!==4)throw new Error('User video upload failed: '+JSON.stringify(media));
 await page.getByRole('button',{name:'Export',exact:true}).click();
 let event=page.waitForEvent('download');await page.getByRole('button',{name:'Export website',exact:false}).click();await(await event).saveAs('output/playwright/final-site.zip');
 event=page.waitForEvent('download');await page.getByRole('button',{name:'Download editable project',exact:false}).click();await(await event).saveAs('output/playwright/final-project.zip');
 await page.getByRole('button',{name:'Close dialog',exact:true}).click();
 await page.screenshot({path:'output/playwright/editor-final.png'});
 await page.getByRole('button',{name:'Back to projects',exact:true}).click();
 await page.locator('input[type=file]').first().setInputFiles('output/playwright/final-project.zip');
 await page.getByRole('textbox',{name:'Project name',exact:true}).waitFor();
 const restored=await page.frameLocator('iframe[title="Website canvas"]').locator('video').evaluate(v=>({src:v.src,duration:v.duration}));
 if(!restored.src.startsWith('blob:'))throw new Error('Video not restored from bundle');
 return {userVideo:media,exported:true,restoredVideo:restored};
}
