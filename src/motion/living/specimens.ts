import * as T from 'three';
import type { Subject } from './look';
export type Specimen = 'nereid' | 'zephyr' | 'vernant' | 'volute';
/** Original botanical and marine geometry; all animation is evaluated live. */
export function specimen(kind: Specimen): Subject {
 const scene=new T.Scene(), camera=new T.PerspectiveCamera(36,1,.1,80), root=new T.Group();
 camera.position.set(0,0,9);scene.add(root,new T.AmbientLight(0xffffff,1.2));
 const light=new T.DirectionalLight(0xffe8cf,3);light.position.set(3,4,5);scene.add(light);
 const mat=(color:string)=>new T.MeshStandardMaterial({color,roughness:.3,metalness:.25,side:T.DoubleSide,emissive:color,emissiveIntensity:.16});
 const motions:((t:number)=>void)[]=[];
 const line=(points:T.Vector3[],color:string)=>{const g=new T.BufferGeometry().setFromPoints(points);const m=new T.Line(g,new T.LineBasicMaterial({color}));root.add(m);return m;};
 if(kind==='nereid'){
  const bell=new T.Mesh(new T.SphereGeometry(1.35,64,32,0,Math.PI*2,0,Math.PI*.56),mat('#9ccff2'));bell.position.y=.55;root.add(bell);
  for(let j=0;j<28;j++){const a=j/28*Math.PI*2,pts=Array.from({length:85},(_,i)=>new T.Vector3(Math.cos(a)*1.13,.5-i*.046,Math.sin(a)*1.13));const strand=line(pts,j%3?'#6285de':'#e4a1eb');motions.push(t=>{const p=strand.geometry.attributes.position;for(let i=0;i<85;i++){const u=i/84;p.setXYZ(i,Math.cos(a)*(1.13-.5*u)+Math.sin(u*10-t*1.2+a)*u*.3,.5-u*3.4,Math.sin(a)*(1.13-.5*u)+Math.cos(u*8-t+a)*u*.25);}p.needsUpdate=true;});}
  motions.push(t=>{bell.scale.set(1+Math.sin(t*1.6)*.07,1-Math.sin(t*1.6)*.12,1+Math.sin(t*1.6)*.07);});root.position.y=.6;
 }else if(kind==='zephyr'){
  const core=new T.Mesh(new T.SphereGeometry(.18,20,16),mat('#c2a272'));root.add(core);
  for(let i=0;i<150;i++){const y=1-2*(i+.5)/150,a=i*2.399963,r=Math.sqrt(1-y*y),v=new T.Vector3(Math.cos(a)*r,y,Math.sin(a)*r);line([v.clone().multiplyScalar(.15),v.clone().multiplyScalar(1.55)],'#aaa18c');const tip=v.clone().multiplyScalar(1.55);for(let k=0;k<7;k++){const q=k/7*Math.PI*2;line([tip,tip.clone().add(new T.Vector3(Math.cos(q)*.21,.17,Math.sin(q)*.21))],'#e8e4d6');}}
  const stem=new T.Mesh(new T.CylinderGeometry(.022,.04,2.7,8),mat('#7d8775'));stem.position.y=-1.5;root.add(stem);
 }else if(kind==='vernant'){
  for(let j=0;j<7;j++){const frond=new T.Group();root.add(frond);frond.rotation.z=(j-3)*.29;frond.rotation.y=j*.65;frond.position.y=-2;
   const spine=new T.CatmullRomCurve3(Array.from({length:25},(_,i)=>new T.Vector3(0,i/24*3.9,Math.sin(i/24*2)*.3)));frond.add(new T.Mesh(new T.TubeGeometry(spine,32,.018,5,false),mat("#819e68")));
   for(let i=0;i<24;i++){const u=i/24,span=Math.sin(Math.PI*u)*.85;for(const sign of [-1,1]){const leaf=new T.Mesh(new T.SphereGeometry(1,12,6),mat(i%3?'#70b896':'#c5db98'));leaf.scale.set(span,.045,.12*(1-u)+.015);leaf.position.set(sign*span*.8,u*3.9,Math.sin(u*2)*.3);leaf.rotation.z=sign*.3;frond.add(leaf);}}
   motions.push(t=>{frond.rotation.z=(j-3)*.29+Math.sin(t*.65+j)*.055;frond.rotation.x=Math.sin(t*.45+j)*.12;});}
 }else{
  const points=Array.from({length:320},(_,i)=>{const a=i/319*Math.PI*5,r=.09*Math.exp(a*.19);return new T.Vector3(Math.cos(a)*r,Math.sin(a)*r,0);});
  const curve=new T.CatmullRomCurve3(points);const shell=new T.Mesh(new T.TubeGeometry(curve,380,.14,12,false),mat('#f4b78e'));root.add(shell);
  for(let i=15;i<310;i+=3){const p=points[i],a=i/319*Math.PI*5;const rib=new T.Mesh(new T.TorusGeometry(.16,.012,5,28),mat(i%2?'#c15c60':'#ffe0ae'));rib.position.copy(p);rib.rotation.set(Math.PI/2, a,0);root.add(rib);}
  root.rotation.z=-.8;
 }
 let x=0,y=0;
 return {scene,camera,resize(aspect){camera.position.z=aspect<1?12:9; if(kind==="vernant"){root.scale.setScalar(.82);root.position.x=-.3;}},update(t,p){x+=(p.x*p.on-x)*.035;y+=(p.y*p.on-y)*.035;root.rotation.y=Math.sin(t*.18)*.24+x*.35;root.rotation.x=y*.15;for(const fn of motions)fn(t);if(kind==='zephyr')root.rotation.z=Math.sin(t*.4)*.08;if(kind==='volute')root.rotation.z=-.8+t*.06;}};
}
