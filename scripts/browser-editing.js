async page => {
 if(!await page.getByRole('textbox',{name:'Project name',exact:true}).count())await page.getByRole('button',{name:'Make something yours',exact:true}).click();
 await page.getByRole('textbox', {name:'Project name',exact:true}).fill('My curious corner');
 await page.getByLabel('Headline', {exact:true}).fill('Hello from my own world.');
 await page.getByRole('button',{name:'Undo',exact:true}).click();
 console.log('undo:',await page.getByLabel('Headline',{exact:true}).inputValue());
 await page.getByRole('button',{name:'Redo',exact:true}).click();
 if(await page.getByLabel('Headline',{exact:true}).inputValue()!=='Hello from my own world.')throw new Error('Redo did not restore headline');
 await page.getByRole('button',{name:'Phone',exact:true}).click();
 const f=page.frameLocator('iframe[title="Website canvas"]');
 await f.locator('.pw-mobile').waitFor();
 console.log('mobile:',await f.locator('.pw-site').evaluate(el=>({width:el.clientWidth,scroll:el.scrollWidth})));
 await page.getByRole('button',{name:'Objects',exact:true}).click();
 await page.locator('.decor-grid button').filter({hasText:'Mushroom'}).click();
 console.log('scene controls:',await page.getByLabel('Horizontal position',{exact:false}).count());
 await page.getByLabel('Horizontal position',{exact:false}).fill('22');
 await page.getByLabel('Hide on phone',{exact:true}).check();
 await page.getByRole('button',{name:'Desktop',exact:true}).click();
 await page.getByRole('button',{name:'Back to section',exact:true}).click();
 await page.locator('input[type=file]').nth(1).setInputFiles('public/assets/backgrounds/pixel-1.svg').catch(()=>{});
 // SVG is deliberately rejected for personal uploads; existing content stays intact.
 await page.getByRole('alert').waitFor();
 console.log('unsupported upload rejected');
 await page.getByRole('button',{name:'Dismiss error',exact:true}).click();
 await page.getByRole('button',{name:'Back to projects',exact:true}).click();
 await page.reload();
 await page.getByRole('button',{name:'My curious corner',exact:true}).click();
 if(await page.getByLabel('Headline',{exact:true}).inputValue()!=='Hello from my own world.')throw new Error('Saved headline lost');
 console.log('persistence after reload passed');
}
