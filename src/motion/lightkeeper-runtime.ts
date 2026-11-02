import * as THREE from 'three';
import gsap from 'gsap';
import { lightkeeperChapters, lightkeeperState, easeUnit } from './lightkeeper-story';

export function animateLightkeeper(reduced:boolean) {
 const host=document.querySelector<HTMLElement>('.lk-world'); if(!host)return;
 if(reduced){const log=document.querySelector<HTMLDetailsElement>('.lk-log');if(log)log.open=true;}
 let renderer:THREE.WebGLRenderer;
 try {renderer=new THREE.WebGLRenderer({antialias:false,alpha:true,powerPreference:'low-power'});} catch {const journey=document.querySelector<HTMLElement>('.lk-journey');if(journey)journey.style.height='100svh';return;}
 host.append(renderer.domElement);host.classList.add('has-webgl');
 renderer.setPixelRatio(1);renderer.setClearColor(0x0b1720,1);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene();scene.fog=new THREE.Fog(0x0b1720,45,100);
 const camera=new THREE.OrthographicCamera(-20,20,14,-14,.1,200);
 const ambient=new THREE.AmbientLight(0x9fc4cb,2);scene.add(ambient);
 const sun=new THREE.DirectionalLight(0xffc494,3);sun.position.set(-15,25,10);scene.add(sun);
 const blue=new THREE.DirectionalLight(0x4b8b9b,2);blue.position.set(10,6,-10);scene.add(blue);
 const geo=new THREE.BoxGeometry(1,1,1), mats=new Map<string,THREE.MeshStandardMaterial>();
 function mat(color:string,glow=false){const key=color+glow;if(!mats.has(key))mats.set(key,new THREE.MeshStandardMaterial({color,roughness:1,emissive:glow?color:0,emissiveIntensity:glow?1.7:0}));return mats.get(key)!;}
 function box(parent:THREE.Object3D,x:number,y:number,z:number,w:number,h:number,d:number,color:string,glow=false){const m=new THREE.Mesh(geo,mat(color,glow));m.position.set(x,y,z);m.scale.set(w,h,d);parent.add(m);return m;}
 const world=new THREE.Group();scene.add(world);
 // A carved island: individual, square-cut strata, never a flat background plane.
 const terrain=new THREE.Group();world.add(terrain);
 let seed=41;const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
 const temp=new THREE.Object3D();const terrainData:{x:number;y:number;z:number;s:number;c:THREE.Color}[]=[];
 for(let x=-12;x<=12;x++)for(let z=-10;z<=10;z++){const dist=Math.sqrt(x*x+z*z*1.25);if(dist>12+random()*1.5)continue;const y=-3+Math.floor(Math.sin(x*.5)*.7+Math.cos(z*.4)*.9+random());const depth=Math.max(1,Math.floor((13-dist)*.5));for(let k=0;k<depth;k++)terrainData.push({x,y:y-k,z,s:1,c:new THREE.Color(k===0?(random()>.7?'#78958c':'#496c69'):(random()>.5?'#263f49':'#34505a'))});}
 const island=new THREE.InstancedMesh(geo,mat('#ffffff'),terrainData.length);terrainData.forEach((v,i)=>{temp.position.set(v.x,v.y,v.z);temp.scale.set(1,1,1);temp.updateMatrix();island.setMatrixAt(i,temp.matrix);island.setColorAt(i,v.c);});terrain.add(island);
 // Stair path climbs the mountain to a brass landing.
 for(let i=0;i<15;i++){box(world,7-i*.32,-2+i*.28,8-i*.6,2.2,.25,.7,'#829588');}
 for(let i=0;i<25;i++){const a=random()*Math.PI*2,r=8+random()*3;const x=Math.cos(a)*r,z=Math.sin(a)*r;if(z>3&&x>3)continue;box(world,x,-1.7,z,.3,2,.3,'#384b4c');for(let j=0;j<4;j++)box(world,x,-1+j*.6,z,2.4-j*.5,.7,2.4-j*.5,j%2?'#345f59':'#416f63');}
 const tower=new THREE.Group();world.add(tower);
 // Four cutaway floors with buttresses, inset windows and balcony rails.
 const floors:THREE.Group[]=[];
 for(let level=0;level<4;level++){const g=new THREE.Group();g.position.y=level*3;floors.push(g);tower.add(g);box(g,0,0,0,8,.45,7,'#5b7373');box(g,0,.32,0,7.5,.2,6.5,'#96a499');for(const x of [-3.5,3.5])for(const z of [-3,3]){box(g,x,1.5,z,.65,2.7,.65,'#78938b');box(g,x,2.8,z,.9,.25,.9,'#a4afa0');}box(g,0,1.5,-3.1,6.8,2.7,.45,'#35545c');for(let j=-2;j<=2;j++){box(g,j*1.15,1.65,-2.84,.5,1.15,.1,'#192f3a');box(g,j*1.15,1.65,-2.76,.18,.6,.08,'#b7885d',true);}box(g,-3.7,1.4,0,.3,2.8,6,'#496970');for(let j=-2;j<=2;j++)box(g,-3.47,1.5,j,.08,.8,.4,'#ba9164',true);for(let j=-3;j<=3;j++){box(g,j,1,3.2,.13,1.2,.13,'#a2a48b');}box(g,0,1.6,3.2,7.5,.12,.13,'#b1ae91');}
 // Roof petals hinge outward, revealing the lens chamber.
 const roofs:THREE.Group[]=[];
 for(let i=0;i<4;i++){const hinge=new THREE.Group();hinge.position.y=12;hinge.rotation.y=i*Math.PI/2;tower.add(hinge);const petal=new THREE.Group();hinge.add(petal);petal.position.z=-3.4;for(let k=0;k<6;k++)box(petal,0,k*.4,k*.55,7-k*.8,.45,.7,k%2?'#536d77':'#68858b');roofs.push(petal);}
 box(tower,0,12,0,8.6,.35,8.2,'#a7a78d');
 // The tiny keeper: coat, square boots, face and a luminous lantern.
 const keeper=new THREE.Group();world.add(keeper);box(keeper,0,.6,0,.6,.9,.5,'#e5b06c');box(keeper,0,1.3,0,.55,.5,.5,'#e7d5a8');box(keeper,0,1.65,0,.75,.2,.65,'#c57452');box(keeper,-.2,.05,0,.25,.3,.45,'#1a303c');box(keeper,.2,.05,0,.25,.3,.45,'#1a303c');const lantern=box(keeper,.48,.65,0,.25,.45,.25,'#f2cd8a',true);
 const core=new THREE.Group();core.position.y=4.7;world.add(core);
 const star=new THREE.Mesh(new THREE.OctahedronGeometry(1.2,0),mat('#ffc278',true));core.add(star);
 const rings:THREE.Group[]=[];
 for(let r=0;r<3;r++){const ring=new THREE.Group();core.add(ring);for(let i=0;i<40;i++){const a=i/40*Math.PI*2;const b=box(ring,Math.cos(a)*(2.1+r*.7),Math.sin(a)*(2.1+r*.7),0,.3,.3,.35,i%5===0?'#edc686':'#6b8c86',i%5===0);b.rotation.z=a;}rings.push(ring);}
 // Signal nodes throughout the valley are connected to the ending.
 const lights:THREE.Mesh[]=[];
 for(let i=0;i<34;i++){const a=random()*6.28,r=8+random()*3,x=Math.cos(a)*r,z=Math.sin(a)*r;box(world,x,-4,z,1.6,.7,1.2,'#213b45');box(world,x,-3.4,z,1.2,.6,1,'#547370');lights.push(box(world,x,-3.35,z+.52,.5,.3,.05,'#f5b76e',true));}
 // A lift, geared drive and a physical socket make the keeper's task legible.
 const lift=new THREE.Group();world.add(lift);box(lift,0,0,0,1.9,.18,1.7,'#b3a481');for(const x of [-.85,.85]){box(lift,x,.55,.7,.1,1.2,.1,'#9da795');box(lift,x,.55,-.7,.1,1.2,.1,'#9da795');}
 const cables=[box(world,2.1,7,3,.06,10,.06,'#7b8e89'),box(world,3.9,7,3,.06,10,.06,'#7b8e89')];
 const socket=new THREE.Group();socket.position.set(0,3.6,6);world.add(socket);box(socket,0,0,0,1.4,.35,1.4,'#667c77');box(socket,0,.3,0,.65,.4,.65,'#1a343a');const socketLight=box(socket,0,.55,0,.4,.45,.4,'#ffce83',true);
 const gears:THREE.Group[]=[];for(let j=0;j<4;j++){const g=new THREE.Group();g.position.set(3.9,2.1+j*2,3.4);world.add(g);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;const tooth=box(g,Math.cos(a)*.65,Math.sin(a)*.65,0,.3,.3,.22,k%2?'#a1a18a':'#79918a');tooth.rotation.z=a;}box(g,0,0,0,.3,.3,.35,'#d0b17a');gears.push(g);}
 const catwalk=new THREE.Group();world.add(catwalk);for(let i=0;i<9;i++)box(catwalk,3-i*.36,3.45,3+i*.36,.7,.16,.7,'#a3a48a');
 // Copper plumbing, maintenance ladder, weather vane and a pivoting telescope.
 for(let i=0;i<20;i++){box(tower,4.3,i*.6,0,.13,.5,.13,'#8b9b8b');box(tower,4.7,i*.6,0,.13,.5,.13,'#8b9b8b');box(tower,4.5,i*.6,.04,.5,.08,.13,'#a3ac96');}
 box(tower,-4.15,5.8,-1,.25,11.5,.25,'#ac8a68');for(let i=0;i<5;i++)box(tower,-4.15,1+i*2.2,-1,.4,.18,.4,'#c7ab7d');
 const telescope=new THREE.Group();telescope.position.set(0,14.8,0);world.add(telescope);box(telescope,0,0,0,1.1,1.4,1.1,'#8f9a88');const barrel=new THREE.Group();barrel.position.y=.8;telescope.add(barrel);for(let i=0;i<6;i++)box(barrel,0,0,i*.6,1.35-i*.12,1.35-i*.12,.7,i%2?'#cfb68b':'#637e7e');box(barrel,0,0,3.5,.8,.8,.12,'#c7e3d0',true);
 const vane=new THREE.Group();vane.position.set(-3,16.8,-2);world.add(vane);box(vane,0,-1,0,.1,2,.1,'#c6ba97');box(vane,0,0,0,1.7,.16,.16,'#e2c28e');box(vane,.8,.2,0,.45,.6,.12,'#d6b887');
 // Far islands hold an actual village. Windows stay dark until the pulse arrives.
 const village=new THREE.Group();village.position.set(-20,-5,14);world.add(village);
 const villageWindows:THREE.Mesh[][]=[];const smoke:THREE.Mesh[]=[];
 for(let i=0;i<12;i++){const row=Math.floor(i/4),col=i%4;const x=(col-1.5)*4.3,z=(row-1)*4.4,y=row*.55;box(village,x,y-1.2,z,4.1,2,4.1,'#3b595c');box(village,x,y-2.6,z,3.1,1,3.1,'#29434e');box(village,x,y-.12,z,4.2,.25,4.2,'#779383');box(village,x,y+1,z,2.8,2.1,2.6,['#71938c','#a1aa94','#658b85'][i%3]);for(let k=0;k<4;k++)box(village,x,y+2.15+k*.25,z,3.3-k*.65,.3,3,'#425e64');box(village,x+.8,y+2.6,z-.5,.4,1.1,.4,'#8b9a87');const windows:THREE.Mesh[]=[];for(const dx of [-.7,.7])windows.push(box(village,x+dx,y+1.1,z+1.32,.48,.6,.06,'#ffcb83',true));windows.push(box(village,x+1.42,y+1.1,z,.06,.65,.6,'#ffcb83',true));villageWindows.push(windows);box(village,x,y+.45,z+1.34,.42,.9,.06,'#304e50');const puff=box(village,x+.8,y+3.5,z-.5,.4,.4,.4,'#9aafa3');smoke.push(puff);}
 // Each bridge plank and hanging cable becomes a point on the route home.
 const bridge=new THREE.Group();world.add(bridge);for(let i=0;i<36;i++){const t=i/35,x=-7-t*12,z=3+t*11,y=-1.8-Math.sin(t*Math.PI)*2.5;box(bridge,x,y,z,.7,.16,1.65,'#7e8e7b');for(const side of [-1,1]){box(bridge,x,y+.65,z+side*.8,.07,1.25,.07,'#8e9a85');box(bridge,x,y+1.2,z+side*.8,.75,.07,.07,'#c2b18b');}}
 const outgoing=new THREE.CatmullRomCurve3([new THREE.Vector3(0,14,0),new THREE.Vector3(-6,20,4),new THREE.Vector3(-15,12,11),new THREE.Vector3(-20,0,14)]);
 const incoming=new THREE.CatmullRomCurve3([new THREE.Vector3(-20,1,14),new THREE.Vector3(-15,10,16),new THREE.Vector3(-7,17,9),new THREE.Vector3(1.7,12.6,3)]);
 const pulse=new THREE.Group();world.add(pulse);for(let i=0;i<22;i++)box(pulse,0,0,0,i? .14:.45,i?.14:.45,i?.14:.45,i?'#e6c78b':'#fff1b3',true);
 const response=new THREE.Group();world.add(response);for(let i=0;i<16;i++)box(response,0,0,0,i?.12:.35,i?.12:.35,i?.12:.35,'#cce6c1',true);
 const beaconHalo=new THREE.Group();beaconHalo.position.y=14;world.add(beaconHalo);for(let i=0;i<52;i++){const a=i/52*Math.PI*2;box(beaconHalo,Math.cos(a),0,Math.sin(a),.12,.12,.12,'#ffe2a1',true);}
 // A companion appears only after the village answers, making the last shot personal.
 const companion=new THREE.Group();world.add(companion);box(companion,0,0,0,.12,.3,.12,'#e4d5ad');box(companion,-.18,.08,0,.3,.35,.06,'#c9edd2',true);box(companion,.18,.08,0,.3,.35,.06,'#c9edd2',true);

 const sparks=new THREE.Group();world.add(sparks);for(let i=0;i<70;i++){const a=random()*6.28,r=5+random()*15;box(sparks,Math.cos(a)*r,random()*25-4,Math.sin(a)*r,.08,.08,.08,'#c8dcab',true);}
 const state={p:0};let shown=-1;let visible=true;let frame=0;let prev=0;
 const cameraTarget=new THREE.Vector3();
 function draw(time=0){
  const s=lightkeeperState(state.p),p=s.p;
  const reveal=easeUnit((p-.70)/.22),aspect=host!.clientWidth/Math.max(1,host!.clientHeight);
  const span=14-s.descend*2+s.close*2+reveal*9;camera.left=-span*aspect;camera.right=span*aspect;camera.top=span;camera.bottom=-span;camera.updateProjectionMatrix();
  const angle=.72+s.open*.33+s.align*.18-s.close*.35;
  cameraTarget.set((innerWidth<760?-1:-5)-reveal*5,5.5-s.descend*1.8+reveal*.5,reveal*6);
  camera.position.set(cameraTarget.x+Math.sin(angle)*36,22-s.descend*8+reveal*11,cameraTarget.z+Math.cos(angle)*36);camera.lookAt(cameraTarget);
  const unfold=s.open*(1-s.close);
  roofs.forEach((r,i)=>{r.rotation.x=-unfold*1.48;r.position.y=unfold*(i%2)*.4;});
  floors.forEach((g,i)=>{g.position.x=(i%2?1:-1)*s.descend*7.7*(1-s.close);g.position.y=i*3+unfold*i*.35;});
  // The same keeper rides the same lift, places the lantern, and comes back.
  let kx=3,ky=1+s.open*10-s.descend*7.4,kz=3;
  kx=kx*(1-s.spark);kz=3+s.spark*3;
  kx=kx*(1-s.returnHome)+s.returnHome*1.7;ky=ky*(1-s.returnHome)+s.returnHome*12.5;kz=kz*(1-s.returnHome)+s.returnHome*3;
  keeper.position.set(kx,ky,kz);keeper.rotation.y=.3+s.descend*.7-s.returnHome*.9;keeper.scale.setScalar(1.2);
  lift.position.set(3,.85+s.open*10-s.descend*7.4+s.returnHome*7.4,3);cables.forEach((c,i)=>{c.position.set(2.1+i*1.8,(lift.position.y+12)/2,3);c.scale.y=Math.max(.2,12-lift.position.y);});
  lantern.visible=s.spark<.75;socketLight.visible=s.spark>.1;socketLight.scale.setScalar(.3+s.spark*.7);
  core.position.set(0,4.7+s.close*8,6*(1-s.close));core.rotation.y=angle;core.scale.setScalar(.28+s.descend*.82-s.close*.5);
  star.rotation.set(p*5,p*9,p*2);star.scale.setScalar(.25+s.spark*.9);star.material=mat(s.spark>.5?'#ffe8a3':'#526c71',s.spark>.5);
  rings.forEach((r,i)=>{r.rotation.set((1-s.align)*(i+1)*.8,(1-s.align)*(i+1)*1.1,p*(1-s.align)*(i%2?1:-1)*6);r.scale.setScalar(.6+s.spark*.4);});
  catwalk.visible=s.descend>.6&&s.close<.5;gears.forEach((g,i)=>g.rotation.z=s.spark*(p-.4)*28*(i%2?1:-1));barrel.rotation.x=-.2-s.align*.6;barrel.rotation.y=-s.transmit*.7;vane.rotation.y=Math.sin(time*.35)*.3;
  villageWindows.forEach((windows,i)=>windows.forEach(w=>w.visible=s.village>(i+.3)/13));lights.forEach((l,i)=>l.visible=s.village>i/38+.05);
  smoke.forEach((m,i)=>{m.visible=s.village>i/13;m.position.y=3+Math.floor(i/4)*.55+(time*.45+i*.3)%2.2;m.scale.setScalar(.3+(time*.45+i*.3)%2.2*.2);});
  pulse.visible=p>=.65&&p<.80;pulse.children.forEach((m,i)=>{const t=Math.max(0,s.transmit-i*.014);m.position.copy(outgoing.getPoint(t));m.visible=s.transmit>=i*.014;});
  response.visible=p>.88&&p<.965;response.children.forEach((m,i)=>{const t=Math.max(0,s.reply-i*.018);m.position.copy(incoming.getPoint(t));m.visible=s.reply>=i*.018;});
  beaconHalo.visible=s.transmit>0;beaconHalo.scale.setScalar(1);beaconHalo.position.y=15+s.transmit*2;beaconHalo.children.forEach((m,i)=>{const a=i/52*Math.PI*2;m.position.set(Math.cos(a)*(1+s.transmit*12),0,Math.sin(a)*(1+s.transmit*12));m.visible=s.transmit<.85;});
  companion.visible=s.reply>.9;companion.position.set(2.4+Math.sin(time*.6)*.3,13.6+Math.sin(time*.8)*.2,3.5);companion.rotation.y=Math.sin(time*3)*.4;
  sparks.rotation.y=time*.012+p*.12;ambient.intensity=1.7+s.dawn*1.5;sun.intensity=2.3+s.dawn*2;
  const bg=new THREE.Color('#0b1720').lerp(new THREE.Color('#789d96'),s.dawn*.75);renderer.setClearColor(bg,1);scene.fog!.color.copy(bg);
  renderer.render(scene,camera);host!.dataset.scrollProgress=p.toFixed(3);host!.dataset.storyBeat=String(s.chapter+1);host!.dataset.litWindows=String(villageWindows.filter((_,i)=>s.village>(i+.3)/13).length);
  if(s.chapter!==shown){shown=s.chapter;const c=lightkeeperChapters[s.chapter];const caption=document.querySelector('.lk-caption')!;caption.querySelector('small')!.textContent=c[0];caption.querySelector('h2')!.textContent=c[1];caption.querySelector('p')!.textContent=c[2];}
  const v=easeUnit((p-.09)/.04);gsap.set('.lk-caption',{opacity:v,y:20*(1-v)});
  document.querySelector('.lk-stage')?.classList.toggle('is-ending',p>.72);document.querySelector('.lk-stage')?.classList.toggle('is-dawn',s.dawn>.5);
  gsap.set('.lk-hero',{opacity:1-easeUnit(p/.12),y:-easeUnit(p/.12)*50});gsap.set('.lk-transmission',{opacity:1-easeUnit(p/.15)});gsap.set('.lk-coordinate',{opacity:1-s.open});
  gsap.set('.lk-track i',{scaleX:p});document.querySelector('.lk-progress-count')!.textContent=`${String(s.chapter+1).padStart(2,'0')} / 07`;
  document.querySelector('.lk-depth b')!.textContent=Math.round(1240-s.descend*230+s.returnHome*230).toLocaleString();
 }
 function resize(){renderer.setSize(Math.min(680,Math.round(host!.clientWidth*.48)),Math.min(460,Math.round(host!.clientHeight*.48)),false);draw();}resize();
 const timeline=!reduced?gsap.timeline({scrollTrigger:{trigger:'.lk-journey',start:'top top',end:'bottom bottom',scrub:.9},defaults:{ease:'none'}}).to(state,{p:1,duration:1}):undefined;
 const observer=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)schedule();});observer.observe(host);
 function tick(t:number){frame=0;if(document.hidden||!visible)return;if(t-prev>40){draw(reduced?0:t*.001);prev=t;}schedule();}
 function schedule(){if(!frame&&!document.hidden&&visible&&!reduced)frame=requestAnimationFrame(tick);}
 const visibility=()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else schedule();};document.addEventListener('visibilitychange',visibility);window.addEventListener('resize',resize);schedule();
 return()=>{cancelAnimationFrame(frame);observer.disconnect();timeline?.scrollTrigger?.kill();timeline?.kill();window.removeEventListener('resize',resize);document.removeEventListener('visibilitychange',visibility);geo.dispose();(star.geometry as THREE.BufferGeometry).dispose();mats.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();};
}
