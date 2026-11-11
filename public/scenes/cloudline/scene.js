/* Cloudline. Original moving viewpoint: a timber cable-car cabin above tea terraces,
   a river viaduct and hanging mountain villages, with distance-dependent parallax. */
PixelScene({
  controls: "Ring the cabin bell",
 palette:["#203a3c","#3f5a50","#61764f","#8b965d","#b8b780","#e5d4a0","#f5e5bb","#adc8be","#82a69f","#547d82","#3a5c68","#c48759","#8e533e","#573d35","#e1ae6f","#eee1c2"],
 dither:.07,still:9,mouse:[.5,.5],idle:t=>[.5+.10*Math.sin(t*.12),.5],
 frag:`
float clLine(vec2 p,vec2 a,vec2 b,float r){vec2 v=b-a;return 1.-step(r,length((p-a)-v*clamp(dot(p-a,v)/dot(v,v),0.,1.)));}
float clRound(vec2 p,vec2 c,vec2 b,float r){vec2 q=abs(p-c)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
float clMount(float x,float z){return .46+z*.04+fbm(vec2(x*1.8+z*31.,z))*.28;}
vec3 scene(vec2 uv,vec2 px){
 vec2 p=vec2(uv.x*uAsp,uv.y);float X=uAsp;vec2 look=(uMouse-.5)*vec2(.055,.025);float sway=sin(uTime*.55)*.0025;p.y+=sway;p+=look;
 vec3 c=mix(vec3(.89,.79,.59),vec3(.66,.79,.76),smoothstep(.35,1.,p.y));
 float sun=length(p-vec2(X*.77,.76));c=mix(c,vec3(.98,.91,.72),1.-smoothstep(.049,.053,sun));c+=vec3(.08,.07,.03)*exp(-sun*8.);
 float cloud=fbm(vec2(p.x*3.+uTime*.005,p.y*11.));c=mix(c,vec3(.92,.90,.75),smoothstep(.56,.7,cloud)*smoothstep(.64,.85,p.y)*.65);
 // Four ridges move at different speeds; snow is attached to the high peaks.
 for(int i=0;i<4;i++){float k=float(i),x=p.x+uTime*(.002+k*.003);float peak=pow(max(0.,1.-abs(fract(x*.65+.13+k*.12)-.5)*2.),2.);float mountain=clMount(x,k)-k*.065+peak*.17*(1.-k/4.);vec3 rock=mix(vec3(.52,.66,.64),vec3(.22,.39,.38),k/3.);float snow=step(mountain-.035-noise(vec2(x*25.,k))* .03,p.y);rock=mix(rock,vec3(.87,.88,.75),snow*step(1.5,2.-k));c=mix(c,rock,step(p.y,mountain));}
 // River bends through the valley; horizontal steps describe cultivated terraces.
 float y=p.y;float river=X*.56+.13*sin(y*7.4)+.06*sin(y*17.);float ground=.45+.10*fbm(vec2(p.x*4.+uTime*.025,15.));
 if(y<ground){float terraces=floor(y*47.)/47.;vec3 tea=mix(vec3(.32,.47,.30),vec3(.60,.65,.37),noise(vec2(p.x*2.+uTime*.02,terraces*4.)));tea-=.08*step(.76,fract(y*47.+noise(vec2(p.x*3.,4.))* .2));c=tea;float rw=.011+pow(max(.5-y,0.),1.4)*.35;float water=1.-smoothstep(rw,rw+.003,abs(p.x-river));c=mix(c,vec3(.61,.74,.65)+sin(p.x*140.+uTime*.6)*.035,water);}
 // Arched railway viaduct in the middle distance, carved openings show the valley beneath.
 float bridgeY=.338;float span=band(p.x,X*.34,X*.72)*band(y,bridgeY-.075,bridgeY+.005);float cell=fract((p.x-X*.34)/.057);float arch=step(length(vec2((cell-.5)*.057,y-(bridgeY-.045))),.020)*step(y,bridgeY-.025)+band(cell,.14,.86)*band(y,bridgeY-.075,bridgeY-.045);span*=1.-sat(arch);c=mix(c,vec3(.61,.61,.45),span);c=mix(c,vec3(.80,.76,.55),band(y,bridgeY,bridgeY+.008)*band(p.x,X*.34,X*.72));
 // A hillside settlement follows the contour rather than a flat skyline.
 for(int i=0;i<10;i++){float k=float(i),cx=X*.62+k*.035-uTime*.006;cx=mod(cx+X*.7,X*1.4)-X*.2;float gy=.43+.035*sin(k*.8);vec2 q=p-vec2(cx,gy);float wall=box(q,vec2(0,.012),vec2(.014,.017));c=mix(c,vec3(.85,.76,.54),wall);float roof=step(abs(q.x)+max(q.y-.027,0.)*.7,.019)*band(q.y,.027,.044);c=mix(c,vec3(.54,.29,.21),roof);c=mix(c,vec3(.20,.31,.30),box(q,vec2(.003,.014),vec2(.004,.006)));}
 // Two cables cross the opening. A small opposing gondola approaches, then passes out of view.
 float cableY=.86-.07*p.x/X-.025*sin(p.x/X*3.14159);c=mix(c,vec3(.19,.25,.24),1.-smoothstep(.001,.0025,abs(y-cableY)));
 float cable2=cableY+.014;c=mix(c,vec3(.26,.31,.28),1.-smoothstep(.0007,.002,abs(y-cable2)));
 float travel=fract(uTime*.018+.32),gx=mix(X*1.14,-X*.14,travel),gy=.86-.07*gx/X-.025*sin(gx/X*3.14159);float gs=.018+travel*.035;vec2 g=(p-vec2(gx,gy-gs*1.4))/gs;
 float hang=clLine(g,vec2(0,1.4),vec2(0,.65),.035);float cabin=step(abs(g.x),.70)*band(g.y,-.55,.65);c=mix(c,vec3(.28,.32,.29),hang);c=mix(c,vec3(.69,.35,.22),cabin);c=mix(c,vec3(.77,.84,.70),box(g,vec2(0,.24),vec2(.55,.25)));c=mix(c,vec3(.28,.33,.28),box(g,vec2(0,.24),vec2(.025,.27)));
 // Foreground timber frame, recessed rubber seal and a wide sill. It is a cable-car bay, not a train window.
 vec2 center=vec2(X*.5,.57),halfWindow=vec2(X*.5-.085,.345);float outer=clRound(p,center,halfWindow+.026,.07),inner=clRound(p,center,halfWindow,.055);
 if(outer>0.){float grain=sin(p.y*185.+noise(vec2(p.x*12.,p.y*5.))*4.);c=mix(vec3(.26,.20,.16),vec3(.52,.34,.22),sat(p.y))+.018*grain;float board=step(.97,fract(p.x*11.));c-=board*.08;}
 float seal=step(outer,0.)*step(0.,inner);c=mix(c,vec3(.15,.23,.22),seal);float rim=1.-smoothstep(.002,.007,abs(outer));c=mix(c,vec3(.72,.58,.37),rim);
 // The centre mullion, its bolts and an openable upper vent catch morning light.
 float mullion=box(p,vec2(X*.55,.57),vec2(.012,.355));c=mix(c,vec3(.33,.31,.23),mullion);c=mix(c,vec3(.77,.65,.43),box(p,vec2(X*.55-.008,.57),vec2(.002,.35)));
 float sill=band(y,.15,.205);c=mix(c,vec3(.60,.40,.25),sill);c=mix(c,vec3(.79,.58,.35),band(y,.199,.207));
 // A ceramic cup on the sill, soft steam and a little paper ticket.
 vec2 cup=p-vec2(X*.78,.214);float body=box(cup,vec2(0,.021),vec2(.025,.023));c=mix(c,vec3(.90,.86,.68),body);float handle=1.-smoothstep(.003,.006,abs(length(cup-vec2(.029,.022))-.012));c=mix(c,vec3(.86,.82,.64),handle);c=mix(c,vec3(.31,.24,.17),step(length(cup-vec2(0,.044)),.021)*band(cup.y,.042,.047));float steam=exp(-pow((cup.x-.006*sin(cup.y*70.-uTime))*120.,2.))*band(cup.y,.05,.13);c+=steam*vec3(.15,.16,.13)*.45;
 float ticket=box(p,vec2(X*.67,.176),vec2(.036,.009));c=mix(c,vec3(.87,.77,.56),ticket);
 // A bell ring sends a train of birds over the valley, not a cosmetic button flash.
 float pulse=exp(-uClick*.5);for(int j=0;j<7;j++){float k=float(j),bx=uClickPos.x*X+uClick*.16+k*.023,by=.57+uClick*.045+sin(k*3.)*.025;vec2 bird=p-vec2(bx,by);float wing=abs(bird.x)*.5+.003*sin(uTime*9.+k);float b=1.-smoothstep(.0008,.002,abs(bird.y-wing));c=mix(c,vec3(.18,.29,.28),b*step(abs(bird.x),.010)*pulse);}
 return c;
}`});
