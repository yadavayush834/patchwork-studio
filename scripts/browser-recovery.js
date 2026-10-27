async page => {
 if(await page.getByRole('button',{name:'Edit website',exact:true}).count())await page.getByRole('button',{name:'Edit website',exact:true}).click();
 if(!await page.getByRole('textbox',{name:'Project name',exact:true}).count())await page.getByRole('button',{name:'Make something yours',exact:true}).click();
 await page.locator('.section-navigator>button').first().click();
 await page.getByRole('button',{name:'Desktop',exact:true}).click();
 await page.evaluate(()=>{window.__originalTransaction=IDBDatabase.prototype.transaction;IDBDatabase.prototype.transaction=function(){throw new Error('Simulated storage full')};});
 await page.getByLabel('Headline',{exact:true}).fill('A recoverable little idea.');
 await page.getByRole('alert').filter({hasText:'Could not save'}).waitFor();
 if(!await page.getByText('Save failed',{exact:true}).count())throw new Error('Save failure not visible');
 await page.evaluate(()=>{IDBDatabase.prototype.transaction=window.__originalTransaction;});
 await page.getByRole('button',{name:'Dismiss error',exact:true}).click();
 await page.getByLabel('Headline',{exact:true}).fill('A recovered little idea.');
 await page.getByText('Saved locally',{exact:true}).waitFor();
 const name=await page.getByRole('textbox',{name:'Project name',exact:true}).inputValue();
 await page.locator('input[type=file]').first().setInputFiles('output/playwright/invalid-project.zip');
 await page.getByRole('alert').filter({hasText:'version is not supported'}).waitFor();
 if(await page.getByRole('textbox',{name:'Project name',exact:true}).inputValue()!==name)throw new Error('Invalid import replaced current project');
 await page.getByRole('button',{name:'Dismiss error',exact:true}).click();
 return {saveFailureRecovery:true,invalidImportPreservedProject:true};
}
