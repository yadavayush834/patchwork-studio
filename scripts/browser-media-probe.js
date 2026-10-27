async page=>{
 return await page.evaluate(async()=>{
 const db=await new Promise(r=>{const q=indexedDB.open('patchwork-studio');q.onsuccess=()=>r(q.result)});
 const ps=await new Promise(r=>{const q=db.transaction('projects').objectStore('projects').getAll();q.onsuccess=()=>r(q.result)});
 return {labels:[...document.querySelectorAll('.inspector label')].map(x=>x.textContent),current:document.querySelector('[aria-label="Project name"]')?.value,matching:ps.filter(p=>p.name==='My creative corner').map(p=>({id:p.id,sections:p.sections.map(s=>({id:s.id,kind:s.kind,image:s.image,video:s.video}))}))};
 });
}
