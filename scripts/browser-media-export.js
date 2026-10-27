async page => {
 const input=page.locator('input[type=file]').nth(1);
 await input.setInputFiles('output/playwright/upload.png');
 await page.getByLabel('Image description',{exact:true}).fill('An original green arch under a warm sun');
 await page.getByRole('button',{name:'Scenes',exact:true}).click();
 await page.locator('.asset-card').filter({hasText:'Cloud drift'}).click();
 const f=page.frameLocator('iframe[title="Website canvas"]');
 await f.locator('video').waitFor();
 await page.getByRole('button',{name:'Preview reduced motion',exact:true}).click();
 const motion=await f.locator('video').evaluate(v=>({paused:v.paused,visibility:getComputedStyle(v).visibility,poster:getComputedStyle(v.closest('section')).backgroundImage}));
 if(!motion.paused||motion.visibility!=='hidden'||!motion.poster.includes('pixel-4.svg'))throw new Error('Reduced motion poster behavior failed');
 await page.getByRole('button',{name:'Export',exact:true}).click();
 const siteDownload=page.waitForEvent('download');
 await page.getByRole('button',{name:'Export website',exact:false}).click();
 const site=await siteDownload;await site.saveAs('output/playwright/site.zip');
 const projectDownload=page.waitForEvent('download');
 await page.getByRole('button',{name:'Download editable project',exact:false}).click();
 const backup=await projectDownload;await backup.saveAs('output/playwright/project.zip');
 await page.getByRole('button',{name:'Close dialog',exact:true}).click();
 await page.getByRole('button',{name:'Back to projects',exact:true}).click();
 await page.locator('input[type=file]').first().setInputFiles('output/playwright/project.zip');
 await page.getByRole('textbox',{name:'Project name',exact:true}).waitFor();
 if(!(await page.getByRole('textbox',{name:'Project name',exact:true}).inputValue()).endsWith('(imported)'))throw new Error('Import not opened');
 await page.getByRole('button',{name:'Preview',exact:true}).click();
 await page.frameLocator('iframe[title="Website canvas"]').getByRole('img',{name:'An original green arch under a warm sun',exact:true}).waitFor();
 return {exported:true, importedWithImage:true, reducedMotion:motion};
}
