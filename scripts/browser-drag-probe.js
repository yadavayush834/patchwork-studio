async page=>{
 if(!await page.getByRole('textbox',{name:'Project name',exact:true}).count())await page.getByRole('button',{name:'Make something yours',exact:true}).click();
 if(await page.getByRole('button',{name:'Edit website',exact:true}).count())await page.getByRole('button',{name:'Edit website',exact:true}).click();
 await page.getByRole('button',{name:'Desktop',exact:true}).click();
 await page.locator('.section-navigator>button').first().click();
 const frame=page.frameLocator('iframe[title="Website canvas"]');
 const before=await frame.locator('[data-element]').first().evaluate(el=>({style:el.getAttribute('style'),box:el.getBoundingClientRect().toJSON(),scroll:scrollY,section:el.closest('section').getBoundingClientRect().toJSON()}));
 await page.evaluate(()=>window.__events=[]);
 await frame.locator('body').evaluate(el=>{['pointerdown','pointermove','pointerup','click'].forEach(type=>el.ownerDocument.addEventListener(type,e=>parent.__events.push({type,target:e.target.className,element:e.target.closest('[data-element]')?.dataset.element,x:e.clientX,y:e.clientY}),true))});
 const box=await frame.locator('[data-element]').first().boundingBox();
 await page.screenshot({path:'output/playwright/before-drag.png'});
 await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+box.width/2+35,box.y+box.height/2-25,{steps:6});await page.mouse.up();
 if(await page.locator('.selected-heading').textContent().then(t=>!t.includes('SELECTED OBJECT')))throw new Error('Dragging did not select an object');
 return {box,before,events:await page.evaluate(()=>window.__events),inspector:await page.locator('.selected-heading').textContent(),after:await frame.locator('[data-element]').first().getAttribute('style')};
}
