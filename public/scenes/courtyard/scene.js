/* Pomegranate Court. Original sunlit courtyard painting with converging plaster walls,
   a tiled fountain, rippling shade, hanging linen and a sleeping terracotta cat. */
PixelScene({
  controls: "Wake the courtyard",
 palette:["#393d47","#68534d","#986b58","#bf8a69","#d9ad81","#edcca0","#f5e4bc","#9cbbc0","#698e91","#43696b","#475b42","#72854b","#a3a65c","#bd543c","#e3934f","#ede0c4"],
 dither:.065,still:10,mouse:[.6,.5],idle:t=>[.5+.15*Math.sin(t*.12),.55],
 frag:`
float pcLine(vec2 p,vec2 a,vec2 b,float r){vec2 v=b-a;return 1.-smoothstep(r,r+.001,length(p-a-v*clamp(dot(p-a,v)/dot(v,v),0.,1.)));}
float pcRound(vec2 p,vec2 c,vec2 b,float r){vec2 q=abs(p-c)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
float pcArch(vec2 p,vec2 c,vec2 size){vec2 q=p-c;return max(box(q,vec2(0.,-size.y*.5),vec2(size.x,size.y*.5)),step(length(q*vec2(1.,size.x/size.y)),size.x)*step(0.,q.y));}
vec3 scene(vec2 uv,vec2 px){
 vec2 p=vec2(uv.x*uAsp,uv.y),m=uMouse-.5;float X=uAsp;
 vec3 c=mix(vec3(.82,.84,.72),vec3(.61,.74,.75),p.y);float glow=exp(-length(p-vec2(X*.38,.8))*2.);c+=vec3(.09,.08,.02)*glow;
 float cloud=smoothstep(.58,.72,fbm(vec2(p.x*3.-uTime*.007,p.y*8.)));c=mix(c,vec3(.94,.90,.75),cloud*.35);
 // Perspective floor, with tile joints converging into a shaded rear passage.
 float floorY=.34;
 if(p.y<floorY){vec2 tile=vec2((p.x-X*.54)/(.46-p.y),1./(.46-p.y));float joint=max(step(.96,fract(tile.x*2.)),step(.94,fract(tile.y*.8)));c=mix(vec3(.76,.56,.39),vec3(.60,.44,.34),joint);c+=.025*noise(tile*4.);}
 // Quiet back facade with an arched passage, handmade tiles and uneven plaster.
 float back=box(p,vec2(X*.53,.49),vec2(X*.31,.27));vec3 plaster=vec3(.84,.64,.43)+.022*fbm(p*45.);c=mix(c,plaster,back);
 float door=pcArch(p,vec2(X*.56,.43),vec2(.085,.14));c=mix(c,vec3(.24,.33,.32),door);float inner=pcArch(p,vec2(X*.56,.432),vec2(.065,.12));c=mix(c,vec3(.13,.23,.24),inner);float stair=band(p.y,.285,.31)*band(p.x,X*.56-.10,X*.56+.10);c=mix(c,vec3(.72,.62,.46),stair);
 float tileBand=band(p.y,.32,.37)*back;float tx=fract(p.x*55.),ty=fract(p.y*85.);vec3 tileColor=mix(vec3(.26,.43,.44),vec3(.77,.78,.61),step(.5,mod(floor(p.x*55.)+floor(p.y*85.),2.)));c=mix(c,tileColor,tileBand);c=mix(c,vec3(.80,.72,.55),tileBand*max(step(.91,tx),step(.91,ty)));
 // Left wall extends toward the viewer, with a shadowed shop shutter and tile trim.
 float leftEdge=X*.19+p.y*.22;float left=step(p.x,leftEdge)*step(p.y,.92-.13*p.x/X);if(left>.5){c=vec3(.72,.45,.31)+.025*noise(p*55.);float shadow=step(p.x,leftEdge-.015);c-=shadow*vec3(.04,.015,0.);}
 float shop=pcArch(p,vec2(X*.11,.49),vec2(.061,.17));c=mix(c,vec3(.29,.42,.40),shop);float slat=step(.84,fract(p.x*150.))*shop;c=mix(c,vec3(.18,.32,.32),slat);c=mix(c,vec3(.78,.58,.35),box(p,vec2(X*.11,.47),vec2(.064,.004)));
 // Right wall is in full sunlight. Arched windows have blue shutters and deep reveals.
 float rightEdge=X*.82-p.y*.11;float right=step(rightEdge,p.x);if(right>.5)c=vec3(.92,.73,.50)+.018*noise(p*67.);
 for(int i=0;i<2;i++){float k=float(i),wx=X*.91,wy=.48+k*.24;float reveal=pcArch(p,vec2(wx,wy),vec2(.043,.055));c=mix(c,vec3(.44,.42,.34),reveal);float window=pcArch(p,vec2(wx+.006,wy+.004),vec2(.034,.048));c=mix(c,vec3(.23,.39,.40),window);c=mix(c,vec3(.17,.30,.31),window*step(.8,fract(p.y*160.)));c=mix(c,vec3(.82,.61,.37),box(p,vec2(wx,wy-.058),vec2(.054,.006)));}
 // Terracotta roof tiles cast individual shadows along the rear eave.
 for(int i=0;i<35;i++){float k=float(i),x=X*.23+k*X*.018;vec2 q=p-vec2(x,.76);float tile=box(q,vec2(0.,0.),vec2(X*.010,.008));c=mix(c,mix(vec3(.61,.30,.22),vec3(.78,.43,.27),hash1(k)),tile);c=mix(c,vec3(.42,.28,.22),box(q,vec2(.008,-.007),vec2(.002,.004)));}
 // Three hanging linen pieces, moved by the courtyard wind.
 float lineY=.79-.035*sin(p.x/X*3.14159);c=mix(c,vec3(.40,.35,.27),1.-smoothstep(.001,.0025,abs(p.y-lineY))*band(p.x,X*.14,X*.93));
 for(int i=0;i<3;i++){float k=float(i),cx=X*(.36+k*.14);float wave=sin(uTime*.8+k+p.y*8.)*(.003+m.x*.008);vec2 q=p-vec2(cx+wave,.705);float cloth=box(q,vec2(0.,.015),vec2(.042,.055));vec3 fabric=k<1.?vec3(.90,.86,.69):k<2.?vec3(.58,.70,.65):vec3(.79,.49,.34);fabric-=.04*sin(q.x*180.+uTime*.6);c=mix(c,fabric,cloth);c=mix(c,vec3(.43,.36,.24),box(q,vec2(-.032,.073),vec2(.004,.007)));c=mix(c,vec3(.43,.36,.24),box(q,vec2(.032,.073),vec2(.004,.007)));}
 // The round tiled fountain: rear rim, water plane, raised centre and front wall.
 vec2 f=p-vec2(X*.52,.17);float ell=length(f*vec2(1.,2.6));float outer=step(ell,.137),pool=step(ell,.118);c=mix(c,vec3(.61,.62,.45),outer);float waterNoise=sin(ell*220.-uTime*2.)*.025;c=mix(c,vec3(.34,.56,.53)+waterNoise,pool);
 float radius=length((p-uClickPos*vec2(X,1.))*vec2(1.,2.6));float ring=(1.-smoothstep(.002,.005,abs(radius-uClick*.12)))*exp(-uClick*.8)*pool;c+=ring*vec3(.28,.31,.20);
 float front=step(abs(f.x),.137)*band(f.y,-.052,-.008)*(1.-pool);c=mix(c,vec3(.32,.47,.44),front);float mosaic=step(.83,fract((f.x+.15)*210.))*front;c=mix(c,vec3(.76,.76,.56),mosaic);c=mix(c,vec3(.89,.80,.58),(1.-smoothstep(.002,.006,abs(ell-.128))));
 c=mix(c,vec3(.74,.67,.47),box(f,vec2(0.,.025),vec2(.012,.03)));float bowl=step(length((f-vec2(0.,.052))*vec2(1.,3.)),.043);c=mix(c,vec3(.86,.77,.55),bowl);
 float stream=pcLine(f,vec2(0.,.064),vec2(.003*sin(uTime*2.),.11),.002);c=mix(c,vec3(.88,.91,.73),stream);for(int i=0;i<5;i++){float k=float(i);vec2 drop=vec2(sin(uTime*1.5+k)*.015,.11-fract(uTime*.45+k*.2)*.065);c=mix(c,vec3(.82,.88,.72),step(length(f-drop),.002));}
 // Pomegranate canopy and fruit; dappled shade crosses the plaster and floor.
 float canopy=fbm(vec2(p.x*7.+m.x*.07,p.y*8.+sin(uTime*.2)*.04));float leaves=step(.45,canopy)*step(.81,p.y)*step(X*.51,p.x);c=mix(c,vec3(.25,.36,.22),leaves);float fruits=step(.982,hash(floor(p*vec2(100.,65.))))*leaves;c=mix(c,vec3(.72,.28,.20),fruits);
 float dapple=step(.64,noise(vec2(p.x*19.+sin(uTime*.45)*.08,p.y*24.+m.x*.12)))*sat((p.x-X*.65)*3.)*(1.-leaves);c*=1.-dapple*.13;
 // A glazed planter and a cat sleeping on the warm stone step.
 vec2 pot=p-vec2(X*.27,.21);float pbody=step(abs(pot.x),.030+pot.y*.2)*band(pot.y,-.05,.025);c=mix(c,vec3(.59,.31,.23),pbody);c=mix(c,vec3(.81,.48,.28),box(pot,vec2(0.,.026),vec2(.037,.006)));for(int i=0;i<7;i++){float k=float(i);vec2 tip=vec2(sin(k*2.4)*.048,.07+hash1(k)*.06);c=mix(c,vec3(.34,.46,.25),pcLine(p,vec2(X*.27,.24),vec2(X*.27,.21)+vec2(tip.x,tip.y),.002));}
 vec2 cat=(p-vec2(X*.75,.135))/1.18;float awake=exp(-uClick*.55);float body=step(length(cat*vec2(1.,1.9)),.046);vec2 head=cat-vec2(-.035,.020);float face=step(length(head),.021);float ears=step(abs(head.x+.012)+max(head.y-.011,0.)*.7,.008)*band(head.y,.01,.033);ears=max(ears,step(abs(head.x-.012)+max(head.y-.011,0.)*.7,.008)*band(head.y,.01,.031));c=mix(c,vec3(.70,.37,.22),max(body,max(face,ears)));c=mix(c,vec3(.89,.61,.34),body*step(.75,fract(cat.x*150.)));c=mix(c,vec3(.90,.65,.40),max(box(cat,vec2(-.022,-.014),vec2(.025,.008)),step(length((head-vec2(0.,-.006))*vec2(1.,1.6)),.013)));c=mix(c,vec3(.86,.56,.36),box(head,vec2(-.012,.020),vec2(.003,.006)));c=mix(c,vec3(.86,.56,.36),box(head,vec2(.012,.020),vec2(.003,.006)));float eyes=box(head,vec2(-.009,.003),vec2(.004,.001+awake*.0015))+box(head,vec2(.006,.003),vec2(.004,.001+awake*.0015));c=mix(c,vec3(.20,.26,.24),sat(eyes));c=mix(c,vec3(.26,.26,.24),pcLine(head,vec2(-.005,-.009),vec2(.018,-.013),.0009));float tail=1.-smoothstep(.003,.006,abs(length(cat-vec2(.035,-.005))-.024));c=mix(c,vec3(.66,.34,.22),tail*step(cat.x,.065));
 // A click wakes the court: sparrows lift from the fountain and disperse.
 for(int i=0;i<6;i++){float k=float(i),t=min(uClick,8.);vec2 bird=vec2(X*.52+(k-2.5)*.015+sin(k*7.)*t*.08,.22+t*.08+k*.012);vec2 q=p-bird;float wing=.003*sin(uTime*16.+k)+abs(q.x)*.5;float shape=(1.-smoothstep(.0008,.002,abs(q.y-wing)))*step(abs(q.x),.009);c=mix(c,vec3(.24,.28,.24),shape*exp(-t*.3));}
 return c;
}`});
