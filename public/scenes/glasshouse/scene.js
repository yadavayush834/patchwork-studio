/* Glasshouse. Original botanical interior: a high iron vault, wet glass, tiered
   tropical foliage and a brass lamp whose warmth draws the evening's moths. */
PixelScene({
  controls: "Release the moths",
 palette:["#071c20","#102e31","#1a4341","#2f5b4a","#477351","#749454","#b1b579","#e0d1a2","#f3dbab","#cb9c5c","#916947","#573f36","#36545a","#66817d","#adc0ab","#f1c878"],
 dither:.08,still:13,mouse:[.65,.45],idle:t=>[.60+.15*Math.sin(t*.13),.5],
 frag:`
float ghLine(vec2 p,vec2 a,vec2 b,float r){vec2 v=b-a;return 1.-smoothstep(r,r+.001,length((p-a)-v*clamp(dot(p-a,v)/dot(v,v),0.,1.)));}
float ghLeaf(vec2 p,vec2 base,vec2 tip,float width){vec2 v=tip-base;float len=length(v);vec2 e=v/len;vec2 q=vec2(dot(p-base,e),dot(p-base,vec2(-e.y,e.x)));float t=q.x/len;float span=pow(max(0.,sin(clamp(t,0.,1.)*3.14159)),.8)*width;return band(t,0.,1.)*(1.-smoothstep(span,span+.001,abs(q.y)));}
float ghArch(vec2 p,vec2 c,vec2 halfSize){vec2 q=(p-c)/halfSize;return step(dot(q,q),1.)*step(0.,q.y)+box(p,vec2(c.x,c.y-halfSize.y*.5),vec2(halfSize.x,halfSize.y*.5));}
vec3 scene(vec2 uv,vec2 px){
 vec2 p=vec2(uv.x*uAsp,uv.y),m=uMouse-.5;float X=uAsp;
 vec3 c=mix(vec3(.13,.28,.29),vec3(.025,.10,.13),smoothstep(.15,1.,p.y));
 float moon=length(p-vec2(X*.69,.80));c+=vec3(.14,.20,.18)*exp(-moon*7.);c=mix(c,vec3(.75,.80,.65),1.-smoothstep(.033,.037,moon));
 // Silhouettes of trees are seen through the exterior glass.
 for(int i=0;i<14;i++){float k=float(i),cx=k*X/13.+sin(k)*.03,h=.33+hash1(k+9.)*.22;float trunk=box(p,vec2(cx,.30),vec2(.005,h*.7));float canopy=step(length((p-vec2(cx,h))*vec2(1.7,1.)),.11+hash1(k)*.06);c=mix(c,vec3(.055,.17,.18),max(trunk,canopy)*.6);}
 // A misted curved glass roof. Every arch has its own inset reflection and riveted ribs.
 float centre=X*.5,vy=.35;float dome=sqrt(max(0.,1.-pow((p.x-centre)/(X*.60),2.)))*.64+vy;
 c+=vec3(.025,.06,.045)*fbm(vec2(p.x*5.,p.y*7.));
 for(int i=0;i<7;i++){float k=float(i),cx=centre+(k-3.)*X*.142;float arch=abs(pow((p.x-centre)/(X*.60),2.)+pow((p.y-vy)/.64,2.)-1.);float rib=ghLine(p,vec2(cx,.16),vec2(centre+(cx-centre)*.58,.91-abs(k-3.)*.025),.0035);c=mix(c,vec3(.10,.21,.21),rib);c+=vec3(.12,.16,.12)*ghLine(p,vec2(cx-.005,.16),vec2(centre+(cx-centre)*.58-.005,.91-abs(k-3.)*.025),.001);
 if(k<4.){float yy=.32+k*.155;float cross=1.-smoothstep(.002,.005,abs(p.y-yy-.025*pow((p.x-centre)/X,2.)));c=mix(c,vec3(.12,.24,.23),cross*step(p.y,dome));}
 c=mix(c,vec3(.12,.23,.23),(1.-smoothstep(.008,.02,arch))*step(vy,p.y));}
 // Clear streaks on the wet panes refract the cooler sky.
 float pane=floor(p.x*90.);float track=fract(p.y*2.+hash1(pane)*11.+uTime*.025);float drip=exp(-pow((fract(p.x*90.)-.35)*20.,2.))*step(.92,track)*step(.7,hash1(pane));c+=drip*vec3(.11,.15,.14)*step(.32,p.y);
 // Perspective tiled floor and side brick beds.
 if(p.y<.23){vec2 tile=vec2((p.x-centre)/(.28-p.y),1./(.28-p.y));float seam=max(step(.95,fract(tile.x*1.4)),step(.92,fract(tile.y*.55)));c=mix(vec3(.24,.28,.24),vec3(.12,.18,.18),seam);c+=.025*noise(tile*3.);float reflected=exp(-pow((p.x-X*.65)*4.,2.))*pow(sat(p.y/.23),2.);c+=vec3(.22,.15,.055)*reflected;}
 float bedL=step(p.x,X*.22+.05*(.5-p.y))*step(p.y,.30),bedR=step(X*.79-.04*(.5-p.y),p.x)*step(p.y,.31);float beds=max(bedL,bedR);vec3 brick=vec3(.31,.24,.19)-.055*step(.92,fract(p.y*100.));brick-=.04*step(.93,fract(p.x*37.+mod(floor(p.y*100.),2.)*.5));c=mix(c,brick,beds);
 // Tall bananas and broad split leaves rise above the fern benches.
 for(int i=0;i<8;i++){float k=float(i),side=mod(k,2.),baseX=side<.5?X*(.06+.055*k):X*(.96-.035*k);vec2 base=vec2(baseX,.18);float height=.35+hash1(k+4.)*.28;float sway=sin(uTime*.45+k)*.008+m.x*.018;vec2 tip=base+vec2((side<.5?.07:-.06)+sway,height);c=mix(c,vec3(.30,.42,.25),ghLine(p,base,tip,.004));for(int j=0;j<5;j++){float a=float(j),t=.38+a*.12;vec2 joint=mix(base,tip,t);float direction=mod(a,2.)<.5?-1.:1.;vec2 leafEnd=joint+vec2(direction*(.10+hash1(k*7.+a)*.11)+sway,.05+.045*sin(a));float leaf=ghLeaf(p,joint,leafEnd,.021+height*.02);vec3 green=mix(vec3(.10,.26,.19),vec3(.31,.45,.23),sat(direction*.15+t*.55));c=mix(c,green,leaf);c=mix(c,green+vec3(.09,.10,.025),ghLine(p,joint,leafEnd,.0013)*leaf);}}
 // Fern fronds in both foreground corners, each with tapered alternating leaflets.
 for(int plant=0;plant<6;plant++){float k=float(plant),right=step(3.,k);vec2 base=vec2(mix(.06+k*.06,X-.06-(k-3.)*.06,right),.08);for(int frond=0;frond<3;frond++){float f=float(frond),angle=-.9+f*.8;vec2 end=base+vec2(cos(angle)*(.17+k*.006)*(right>.5?-1.:1.),.18+f*.045);end.x+=sin(uTime*.5+k+f)*.008;float stem=ghLine(p,base,end,.0015);c=mix(c,vec3(.44,.56,.29),stem);for(int leaflet=1;leaflet<8;leaflet++){float a=float(leaflet)/8.;vec2 joint=mix(base,end,a);vec2 axis=normalize(end-base),perp=vec2(-axis.y,axis.x);float len=.050*(1.-a)+.014;for(int sg=0;sg<2;sg++){float signx=float(sg)*2.-1.;vec2 leafTip=joint+perp*len*signx+axis*.019;float leaf=ghLeaf(p,joint,leafTip,.006*(1.-a)+.002);c=mix(c,mix(vec3(.18,.36,.22),vec3(.40,.54,.29),a),leaf);}}}}
 // Brass pendant: light halo, shade, bulb and chain, all anchored to the same point.
 vec2 lamp=vec2(X*.65,.58);float warm=exp(-length((p-lamp)*vec2(1.,.8))*7.);c+=vec3(.19,.13,.035)*warm;
 c=mix(c,vec3(.40,.32,.20),ghLine(p,vec2(lamp.x,1.),lamp+vec2(0,.06),.0017));float shade=step(abs(p.x-lamp.x),.05-(p.y-lamp.y-.025)*.7)*band(p.y,lamp.y+.025,lamp.y+.065);c=mix(c,vec3(.60,.43,.23),shade);c=mix(c,vec3(.97,.85,.55),step(length(p-lamp),.013));
 // Orchid heads on the right; the painting has a warm detail against the foliage.
 for(int i=0;i<5;i++){float k=float(i);vec2 flower=vec2(X*.88+.035*sin(k*1.6),.32+k*.045);c=mix(c,vec3(.31,.42,.27),ghLine(p,vec2(X*.91,.16),flower,.001));vec2 q=p-flower;float petals=0.;for(int j=0;j<5;j++){float a=float(j)*1.2566;petals=max(petals,1.-smoothstep(.005,.008,length(q-vec2(cos(a),sin(a))*.008)));}c=mix(c,vec3(.87,.78,.60),petals);c=mix(c,vec3(.79,.49,.28),1.-smoothstep(.002,.004,length(q)));}
 // Moths gather at the pointer's warm spot; a click releases a new ring from that place.
 vec2 attract=mix(lamp,uMouse*vec2(X,1.),.55);for(int i=0;i<13;i++){float k=float(i),a=uTime*(.4+hash1(k)*.3)+k*2.4;vec2 q=attract+vec2(cos(a)*(.06+hash1(k+2.)*.14),sin(a*1.3)*.08);float flight=sat(uClick*.2);if(uClick<4.)q=mix(uClickPos*vec2(X,1.)+vec2(cos(a),sin(a))*.03,q,flight);vec2 d=p-q;float wings=abs(d.x)*.6+.001*sin(uTime*24.+k);float moth=(1.-smoothstep(.001,.003,abs(d.y-wings)))*step(abs(d.x),.007);c=mix(c,vec3(.91,.84,.64),moth);}
 return c;
}`});
