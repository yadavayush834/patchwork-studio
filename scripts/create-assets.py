"""Build original distributable Patchwork artwork and fetch OFL fonts."""
from pathlib import Path
import urllib.request, concurrent.futures, json
root=Path(__file__).resolve().parents[1]/'public'
for p in ['assets/decor','assets/backgrounds','fonts','licenses']:(root/p).mkdir(parents=True,exist_ok=True)
worlds={'pixel':('#e8defa','#9973cf','#5b496c'),'terminal':('#10211c','#2a6856','#a6e7ac'),'scrapbook':('#f9e5d8','#d98666','#758250'),'editorial':('#e1e9db','#92a48b','#35483f')}
ids=[['sprout','mushroom','cloud','star','ghost','heart'],['cursor','orbit','brackets','globe','spark','cube'],['flower','tape','butterfly','stamp','sun','leaf'],['ring','arch','asterisk','wave','diamond','grid']]
shapes=[
'<path d="M48 90V47M48 62C18 65 13 40 14 26c26 0 40 10 34 36Zm2-12c-3-25 17-33 36-32 1 20-10 34-36 32Z" fill="currentColor"/>',
'<path d="M37 53h26v37H37z" fill="#f9e5c0"/><path d="M8 54C8 3 92 3 92 54Z" fill="currentColor"/><path d="M26 30h12v10H26zm34-8h12v10H60zm-9 22h10v8H51z" fill="#fff8eb"/>',
'<path d="M17 70C-5 63 6 35 25 38 24 8 65 5 71 33 100 24 111 68 84 72Z" fill="currentColor"/>',
'<path d="m50 4 12 30 33 3-25 22 7 33-27-17-28 17 8-33L5 37l33-3Z" fill="currentColor"/>',
'<path d="M18 87V39C18 0 82 0 82 39v48L65 75 50 88 34 75Z" fill="currentColor"/><path d="M32 37h9v15h-9zm27 0h9v15h-9z" fill="#3a3052"/>',
'<path d="M50 88 12 51C-17 16 26-9 50 21 74-9 117 16 88 51Z" fill="currentColor"/>',
'<path d="M25 10v70l20-19 17 29 14-8-17-28h28Z" fill="currentColor"/>',
'<ellipse cx="50" cy="50" rx="47" ry="18" transform="rotate(-35 50 50)" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="50" cy="50" r="23" fill="currentColor"/><circle cx="83" cy="24" r="7" fill="#fff"/>',
'<path d="M35 15H15v70h20m30-70h20v70H65" fill="none" stroke="currentColor" stroke-width="7"/>',
'<g fill="none" stroke="currentColor" stroke-width="3"><circle cx="50" cy="50" r="43"/><ellipse cx="50" cy="50" rx="20" ry="43"/><path d="M8 50h84M15 27h70M15 73h70"/></g>',
'<path d="m50 0 10 36 34-14-24 29 30 20-37-3-13 32-10-36L6 78l24-29L0 29l37 3Z" fill="currentColor"/>',
'<g fill="none" stroke="currentColor" stroke-width="4"><path d="m50 5 42 23v45L50 96 8 73V28Zm0 45 42-22M50 50 8 28m42 22v46"/></g>',
'<g fill="currentColor"><ellipse cx="50" cy="28" rx="16" ry="27"/><ellipse cx="50" cy="72" rx="16" ry="27"/><ellipse cx="28" cy="50" rx="27" ry="16"/><ellipse cx="72" cy="50" rx="27" ry="16"/></g><circle cx="50" cy="50" r="16" fill="#f0c458"/>',
'<path d="m3 25 13-5 8 4 7-5 10 4 9-5 10 4 9-5 11 4 10-4 7 56-12 4-9-4-10 5-10-4-9 5-10-4-10 5-11-4-9 4Z" fill="currentColor" opacity=".7"/>',
'<path d="M49 48C-15-20-12 82 45 64 10 112 88 107 56 64 115 82 112-20 51 48Z" fill="currentColor"/><path d="M50 40v42" stroke="#624654" stroke-width="4"/>',
'<path d="M8 8h84v84H8z" fill="currentColor"/><path d="M20 20h60v60H20z" fill="none" stroke="#fff7e5" stroke-width="3" stroke-dasharray="5 4"/><path d="m50 30 5 13 15 1-11 10 3 15-12-8-12 8 3-15-11-10 15-1Z" fill="#fff7e5"/>',
'<g stroke="currentColor" stroke-width="5"><path d="M50 0v15m0 70v15M0 50h15m70 0h15M15 15l12 12m46 46 12 12M15 85l12-12m46-46 12-12"/></g><circle cx="50" cy="50" r="29" fill="currentColor"/>',
'<path d="M17 85C-4 7 60 0 88 10 99 70 49 94 17 85Z" fill="currentColor"/><path d="m17 85 54-56" stroke="#fff7e5" stroke-width="3"/>',
'<circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="14"/>',
'<path d="M15 93V43a35 35 0 0 1 70 0v50" fill="none" stroke="currentColor" stroke-width="13"/>',
'<path d="M50 5v90M11 28l78 44M11 72l78-44" stroke="currentColor" stroke-width="12"/>',
'<path d="M0 40q25-45 50 0t50 0M0 65q25-45 50 0t50 0" fill="none" stroke="currentColor" stroke-width="7"/>',
'<path d="m50 0 45 50-45 50L5 50Z" fill="currentColor"/>',
'<path d="M20 0v100M50 0v100M80 0v100M0 20h100M0 50h100M0 80h100" stroke="currentColor" stroke-width="3"/>'
]
artwork={}
for wi,(world,colors) in enumerate(worlds.items()):
 for j,name in enumerate(ids[wi]):
  svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" color="{colors[1]}">{shapes[wi*6+j]}</svg>'
  (root/f'assets/decor/{name}.svg').write_text(svg)
  artwork[name]=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">{shapes[wi*6+j]}</svg>'
 for n in range(1,5):
  a,b,c=colors
  if world=='pixel':
   art=f'<rect width="1200" height="700" fill="{a}"/><circle cx="890" cy="180" r="80" fill="#fff1cb"/><path d="M0 575h90v-25h90v-40h90v35h90v40h90v-25h90v-45h90v30h90v30h90v-20h90v40h180v115H0Z" fill="{b}"/><path d="M0 640h150v-30h120v30h150v-40h120v15h150v-30h120v30h120v-20h150v35h120v80H0Z" fill="{c}"/>'
  elif world=='terminal':
   art=f'<rect width="1200" height="700" fill="{a}"/><defs><pattern id="p" width="35" height="35" patternUnits="userSpaceOnUse"><text x="4" y="22" fill="{b}" font-family="monospace" font-size="12">{["+",".","0","/"][n-1]}</text></pattern></defs><rect width="1200" height="700" fill="url(#p)"/><g fill="none" stroke="{c}" opacity=".2"><ellipse cx="900" cy="350" rx="240" ry="240"/><ellipse cx="900" cy="350" rx="100" ry="240"/><ellipse cx="900" cy="350" rx="240" ry="80"/></g>'
  elif world=='scrapbook':
   art=f'<rect width="1200" height="700" fill="{a}"/><defs><pattern id="p" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0v28" fill="none" stroke="{b}" opacity=".2"/></pattern></defs><rect width="1200" height="700" fill="url(#p)"/><circle cx="1080" cy="90" r="190" fill="{b}" opacity=".2"/><path d="M850 700q-70-220 200-290l150 290Z" fill="{c}" opacity=".2"/>'
  else:
   art=f'<rect width="1200" height="700" fill="{a}"/><circle cx="990" cy="300" r="250" fill="{b}" opacity=".3"/><path d="M790 700V380a170 170 0 0 1 340 0v320Z" fill="{c}" opacity=".12"/>'
  if n==2:
   art=f'<defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="{a}"/><stop offset="1" stop-color="{b}" stop-opacity=".27"/></linearGradient></defs><rect width="1200" height="700" fill="{a}"/><rect width="1200" height="700" fill="url(#g)"/>'
  if n==3:
   if world=='pixel':
    art='<rect width="1200" height="700" fill="#dedff1"/><circle cx="960" cy="140" r="65" fill="#fff9dd"/>'+''.join(f'<path d="M{x} {y-5}v10m-5-5h10" stroke="#aab0d2" stroke-width="3"/>' for x,y in [(110,80),(270,150),(430,70),(780,90),(1090,280),(50,270),(670,230)])+'<path d="M0 620h100v-35h100v20h100v-30h150v35h150v-45h150v20h200v-40h150v30h100v125H0Z" fill="#929dba"/>'
   elif world=='terminal':
    art=f'<rect width="1200" height="700" fill="{a}"/>'+''.join(f'<path d="M{x} 0v700" stroke="{b}" opacity=".35"/>' for x in range(0,1200,45))+''.join(f'<path d="M0 {y}h1200" stroke="{b}" opacity=".35"/>' for y in range(0,700,45))+f'<circle cx="980" cy="220" r="170" fill="none" stroke="{c}" opacity=".2"/>'
   elif world=='scrapbook':
    art=f'<rect width="1200" height="700" fill="#e8ebd8"/><path d="M920 700V260a140 140 0 0 1 280 0v440Z" fill="#c6cfaf"/><path d="M30 700Q160 550 90 400Q250 470 240 700" fill="#9eae87" opacity=".5"/><path d="M110 700V500m0 65-40-35m40 80 50-50" stroke="#7a9069" stroke-width="5"/>'
   else:
    art='<rect width="1200" height="700" fill="#efeee7"/><path d="M0 520h1200M880 0v700" stroke="#c4c3b6" stroke-width="2"/><rect x="930" y="110" width="180" height="250" fill="#d6d5c6"/><circle cx="1020" cy="220" r="60" fill="#999d89"/><path d="M940 350v-90a80 80 0 0 1 160 0v90Z" fill="#6f7c65"/>'
  svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">{art}</svg>'
  (root/f'assets/backgrounds/{world}-{n}.svg').write_text(svg)
fonts=[('SpaceGrotesk','spacegrotesk','SpaceGrotesk[wght].ttf'),('DMSans','dmsans','DMSans[opsz,wght].ttf'),('SpaceMono','spacemono','SpaceMono-Regular.ttf'),('Silkscreen','silkscreen','Silkscreen-Regular.ttf'),('PlayfairDisplay','playfairdisplay','PlayfairDisplay[wght].ttf'),('Caveat','caveat','Caveat[wght].ttf'),('Outfit','outfit','Outfit[wght].ttf'),('LibreBaskerville','librebaskerville','LibreBaskerville[wght].ttf')]
def fetch_font(item):
 name,folder,file=item
 base=f'https://raw.githubusercontent.com/google/fonts/main/ofl/{folder}/'
 for remote,target in [(file,root/f'fonts/{name}.ttf'),('OFL.txt',root/f'licenses/{name}-OFL.txt')]:
  if not target.exists():
   with urllib.request.urlopen(base+urllib.parse.quote(remote),timeout=50) as r:target.write_bytes(r.read())
 return name
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
 for name in pool.map(fetch_font,fonts):print('Font:',name)
(root/'licenses/ARTWORK.txt').write_text('Patchwork Studio original SVG artwork and generated background loops. Copyright 2026 Patchwork Studio contributors. Licensed under CC0 1.0 Universal. You may use, modify, and redistribute these assets, including in exported websites. https://creativecommons.org/publicdomain/zero/1.0/\nFonts are distributed under their individual SIL Open Font Licenses in this directory.\n')
(root.parent/'src/artwork.json').write_text(json.dumps(artwork))
print('Created 24 original decorations, 16 original backgrounds and eight locally bundled fonts.')
