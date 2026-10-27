async page=>{
 await page.goto('http://127.0.0.1:5174/?gallery=ascii');
 await page.getByRole('button',{name:'Make a site with this',exact:true}).click();
 await page.getByLabel('Animation source',{exact:true}).waitFor();
 await page.getByRole('button',{name:'Export',exact:true}).click();let next=page.waitForEvent('download');await page.getByRole('button',{name:'Export website',exact:false}).click();await(await next).saveAs('output/playwright/ascii-live-export.zip');await page.getByRole('button',{name:'Close dialog',exact:true}).click();
 await page.getByLabel('Animation source',{exact:true}).selectOption('video');
 await page.getByRole('button',{name:'Export',exact:true}).click();next=page.waitForEvent('download');await page.getByRole('button',{name:'Export website',exact:false}).click();await(await next).saveAs('output/playwright/ascii-video-export.zip');await page.getByRole('button',{name:'Close dialog',exact:true}).click();
 return {productionExports:true};
}
