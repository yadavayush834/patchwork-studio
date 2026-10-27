async page => {
 await page.reload();
 await page.getByRole('button',{name:'Make something yours',exact:true}).click();
 await page.getByRole('textbox',{name:'Project name',exact:true}).fill('QA project lifecycle');
 const before=await page.locator('.section-navigator>button:not(.add-section-button)').count();
 await page.getByRole('button',{name:'Duplicate section',exact:true}).click();
 if(await page.locator('.section-navigator>button:not(.add-section-button)').count()!==before+1)throw new Error('Duplicate failed');
 await page.getByRole('button',{name:'Delete section',exact:true}).click();
 await page.getByRole('button',{name:'Undo',exact:true}).click();
 if(await page.locator('.section-navigator>button:not(.add-section-button)').count()!==before+1)throw new Error('Delete undo failed');
 await page.getByRole('button',{name:'Redo',exact:true}).click();
 await page.getByRole('button',{name:'Back to projects',exact:true}).click();
 await page.getByRole('button',{name:'Duplicate QA project lifecycle',exact:true}).click();
 await page.getByRole('button',{name:'Delete QA project lifecycle (copy)',exact:true}).click();
 await page.getByRole('button',{name:'Delete project',exact:true}).click();
 await page.reload();
 if(await page.getByRole('button',{name:'QA project lifecycle (copy)',exact:true}).count())throw new Error('Deleted project reappeared');
 return {sectionDuplicateDeleteUndoRedo:true,projectDuplicateDelete:true,deletionPersists:true};
}
