/* Tidewatch. Original pixel painting: a working lighthouse on a basalt headland,
   a tide-cut causeway, fishing village and a harbor that answers the light. */
PixelScene({
  controls: "Send a harbor signal",
  palette: ["#091723","#142b3b","#254857","#3a6570","#59848a","#89aaa3","#c8d2b4","#f2dfad","#e8ae61","#b56d49","#684a47","#393d48","#202c35","#71817d","#a8b3a5","#ead0a0"],
  dither: .08, mouse:[.5,.5], still:11,
  idle:t=>[.5+.22*Math.sin(t*.09),.56],
  frag:`
float twLine(vec2 p,vec2 a,vec2 b,float w){vec2 q=p-a,v=b-a;float t=clamp(dot(q,v)/dot(v,v),0.,1.);return 1.-step(w,length(q-v*t));}
float twRoof(vec2 p,vec2 c,vec2 s){vec2 q=(p-c)/s;return step(abs(q.x)+q.y,1.)*step(0.,q.y)*step(abs(q.x),1.);}
float twBoat(vec2 p,vec2 c,float s){vec2 q=(p-c)/s;float hull=step(abs(q.x),.9)*band(q.y,-.20,0.)*step(-.9+q.y*1.3,q.x)*step(q.x,.9-q.y*1.3);return max(hull,twLine(q,vec2(0.,0.),vec2(0.,1.25),.022));}
vec3 scene(vec2 uv,vec2 px){
 vec2 p=vec2(uv.x*uAsp,uv.y),m=uMouse-.5;float X=uAsp;
 vec3 c=mix(vec3(.30,.45,.49),vec3(.045,.10,.16),smoothstep(.37,1.,uv.y));
 float cloud=fbm(vec2(p.x*2.+uTime*.015,p.y*6.5));c+=vec3(.065,.08,.075)*smoothstep(.39,.78,cloud)*smoothstep(.45,.92,p.y);
 float moon=length((p-vec2(X*.19,.79))*vec2(1.,1.));c=mix(c,vec3(.8,.82,.65),(1.-smoothstep(.037,.041,moon))*.75);
 c+=vec3(.14,.17,.12)*exp(-moon*17.);
 // A distant island, the harbor mouth and its far breakwater.
 float far=.405+.022*sin(p.x*3.)+.02*noise(vec2(p.x*8.,3.));c=mix(c,vec3(.11,.22,.27),step(p.y,far));
 if(p.y<.40){
  float y=.40-p.y;float wave=sin(p.x*(26.+y*70.)+uTime*1.2+sin(y*31.))*sin(y*120.-uTime*.9);
  c=mix(vec3(.14,.29,.34),vec3(.045,.15,.22),sat(y*2.3));c+=vec3(.05,.10,.11)*wave;
  float streak=step(.66,noise(vec2(p.x*15.+uTime*.13,p.y*180.)))*pow(sat(1.-abs(p.x-X*.19)/(.025+y*.6)),2.);c+=streak*vec3(.16,.21,.16);
  float white=step(.88,sin(p.x*54.+sin(p.y*61.)*2.+uTime)*.5+.5)*step(.68,noise(vec2(p.x*19.,p.y*60.-uTime*.3)));c+=white*vec3(.12,.19,.18);
 }
 // The inhabited island is deliberately off-centre; the upper-left sky remains a quiet place for words.
 float hill=.19+.26*exp(-pow((p.x-X*.71)*3.5,2.))+.09*exp(-pow((p.x-X*.99)*4.,2.));
 float rock=step(p.y,hill);if(rock>.5){c=mix(vec3(.07,.12,.16),vec3(.18,.26,.28),sat(p.y*2.));float seams=step(.75,noise(vec2(p.x*32.+floor(p.y*25.)*.7,p.y*3.)));c-=seams*.045;c+=step(.84,hash(floor(p*vec2(150.,75.))))*.05;float grass=step(hill-.018,p.y);c=mix(c,vec3(.24,.32,.29),grass);}
 // Foam runs around the actual headland instead of floating over the rocks.
 float shore=abs(p.y-hill);float foam=(1.-smoothstep(.004,.017,shore))*step(p.y,hill+.01)*(.45+.55*sin(p.x*40.+uTime*2.));c=mix(c,vec3(.62,.72,.66),foam*.7);
 float pathX=X*.70+.045*sin(p.y*18.);float path=step(abs(p.x-pathX),.009+.04*sat(.4-p.y))*step(p.y,.44);c=mix(c,vec3(.42,.45,.39),path*rock);
 // Five small harbor buildings, individually lit, tiled and roofed.
 for(int i=0;i<5;i++){float k=float(i),cx=X*.79+k*.064,gy=.305+.028*sin(k*.9);vec2 q=p-vec2(cx,gy);float house=box(q,vec2(0.,.022),vec2(.028,.028));vec3 plaster=mix(vec3(.48,.43,.35),vec3(.32,.35,.33),hash1(k+6.));c=mix(c,plaster,house);float mortar=step(.9,fract((q.y+.15)*150.))*house;c=mix(c,plaster*.72,mortar);float roof=twRoof(q,vec2(0.,.05),vec2(.036,.035));c=mix(c,vec3(.20,.24,.26),roof);for(int j=0;j<2;j++){float wx=-.013+float(j)*.026;float glow=exp(-length((q-vec2(wx,.027))*vec2(1.,1.4))*100.);c+=vec3(.22,.12,.035)*glow;float window=box(q,vec2(wx,.027),vec2(.005,.008));c=mix(c,vec3(.94,.68,.33),window);}}
 // Tapered masonry lighthouse, red gallery and a rotating Fresnel beam.
 vec2 l=p-vec2(X*.69,.43);float taper=.030-l.y*.038;float tower=step(abs(l.x),taper)*band(l.y,0.,.24);
 vec3 stone=mix(vec3(.46,.50,.45),vec3(.78,.79,.65),sat(.5-l.x*13.));stone-=.07*step(.88,fract(l.y*64.))*step(.4,hash(vec2(floor(l.x*180.+mod(floor(l.y*64.),2.)*.5),floor(l.y*64.))));c=mix(c,stone,tower);
 c=mix(c,vec3(.28,.25,.24),box(l,vec2(0.,.014),vec2(.009,.017)));c=mix(c,vec3(.89,.66,.35),box(l,vec2(.001,.13),vec2(.005,.013)));
 float gallery=box(l,vec2(0.,.244),vec2(.047,.006));c=mix(c,vec3(.52,.28,.22),gallery);
 float rail=twLine(l,vec2(-.044,.252),vec2(.044,.252),.002);for(int j=0;j<9;j++)rail=max(rail,box(l,vec2(-.04+float(j)*.01,.248),vec2(.001,.008)));c=mix(c,vec3(.12,.18,.22),rail);
 float glass=box(l,vec2(0.,.269),vec2(.026,.017));c=mix(c,vec3(.97,.83,.52),glass);
 c=mix(c,vec3(.16,.21,.23),twRoof(l,vec2(0.,.285),vec2(.036,.025)));
 for(int j=0;j<3;j++)c=mix(c,vec3(.18,.24,.25),box(l,vec2(-.02+float(j)*.02,.27),vec2(.0015,.019)));
 vec2 lamp=vec2(X*.69,.699);vec2 d=p-lamp;float angle=sin(uTime*.16+m.x*.8)*1.1;float aim=atan(d.y,-d.x);float beam=exp(-pow((aim-angle)*11.,2.))*exp(-length(d)*1.1)*step(-d.x,1.9)*step(.0,-d.x);
 float signal=exp(-uClick*1.3);c+=vec3(.26,.24,.13)*beam*(.55+signal*.8);c+=vec3(.50,.37,.14)*exp(-length(d)*57.);
 // Stone jetty, mooring ropes and a little trawler rolling on the tide.
 float quayY=.155+p.x*.035;float jetty=band(p.y,quayY-.02,quayY)*band(p.x,X*.25,X*.59);c=mix(c,vec3(.27,.32,.31),jetty);c=mix(c,vec3(.47,.51,.43),twLine(p,vec2(X*.25,.155+X*.25*.035),vec2(X*.59,.155+X*.59*.035),.003));
 vec2 boat=vec2(X*.33,.205+sin(uTime*.6)*.003);float b=twBoat(p,boat,.041);c=mix(c,vec3(.10,.18,.22),b);c=mix(c,vec3(.76,.43,.28),box(p,boat+vec2(.008,.012),vec2(.012,.010)));c=mix(c,vec3(.9,.73,.43),box(p,boat+vec2(.006,.013),vec2(.005,.005)));
 // Wind-blown drizzle and a brief, physically local pulse on the water after signalling.
 float rain=step(.986,fract((p.x+(p.y+uTime*.75)*(m.x*.12+.06))*95.))*step(.36,hash(vec2(floor(p.x*95.),floor((p.y+uTime)*38.))));c+=rain*vec3(.10,.13,.13)*.5;
 float ring=abs(length((p-uClickPos*vec2(X,1.))*vec2(1.,.5))-uClick*.15);c+=vec3(.23,.27,.17)*(1.-smoothstep(.002,.009,ring))*exp(-uClick*1.4)*step(p.y,.39)*(1.-rock);
 return c;
}`});
