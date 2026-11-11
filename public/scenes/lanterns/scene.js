/* Lantern River: blue hour in a gorge. Paper lanterns drift down the river toward you and others
   rise into the sky, leaning with the pointer's wind; the water mirrors all of it. A click lets a
   handful more go from wherever you clicked. */
PixelScene({
  palette: ["#0a0c1f", "#141a3a", "#22305c", "#34508a", "#5a73b0", "#8ea0d0", "#c7a7c9", "#e9c6b8", "#ff8a3d", "#ffc061", "#fff0c2", "#b8432f", "#10201f", "#213634", "#3a4f4a", "#2a5d72"],
  dither: 0.12,
  mouse: [0.5, 0.5],
  idle: (t) => [0.5 + 0.2 * Math.sin(t * 0.15), 0.55],
  frag: `
const float HOR=.36;
vec3 lantern(vec2 d,float s,float flick,out float a){
  // A paper lantern: rounded body, darker ribs, a hot glowing base.
  vec2 q=d/s;
  a=0.;
  float body=step(length(q*vec2(1.,.78)),1.);
  vec3 c=vec3(0.);
  if(body>0.){
    a=1.;
    c=mix(vec3(1.,.94,.76),vec3(1.,.54,.24),sat(q.y*.6+.5));
    c*=.85+.15*flick;
    if(abs(q.x)>.55&&abs(q.x)<.7) c*=.8;
    if(q.y>.95) c=vec3(.72,.26,.18);
  }
  return c;
}
vec3 sky(vec2 uv,vec2 p){
  vec3 c=mix(vec3(.91,.78,.72),vec3(.55,.62,.82),smoothstep(HOR,.55,uv.y));
  c=mix(c,vec3(.2,.27,.5),smoothstep(.5,.8,uv.y));
  c=mix(c,vec3(.06,.08,.18),smoothstep(.75,1.1,uv.y));
  vec2 sc=floor(p*vec2(220.,220.));
  c+=step(.996,hash(sc))*smoothstep(.65,.95,uv.y)*.7*(.6+.4*sin(uTime*2.+hash(sc)*20.));
  return c;
}
vec3 world(vec2 uv,vec2 m,float wind,bool reflected){
  vec2 p=vec2(uv.x*uAsp,uv.y);
  vec3 c=sky(uv,p);
  float cx=.5*uAsp;
  // Gorge walls: three layers closing in, mist pooled between them.
  for(int i=0;i<3;i++){
    float fi=float(i);
    float par=m.x*(.03+fi*.05);
    float x=p.x+par-cx;
    float open=.5-fi*.1;
    float edge=smoothstep(open*.6,open,abs(x));
    float wall=HOR+edge*(min(.16+fi*.07,(.025+fi*.02)+max(abs(x)-open,0.)*(.3+fi*.25))+.035*fbm(vec2(x*(5.+fi*3.),fi*4.))*(1.+fi));
    if(uv.y<wall){
      vec3 rock=fi==0.?vec3(.32,.4,.6):fi==1.?vec3(.18,.24,.4):vec3(.08,.14,.17);
      // Trees on the near wall.
      if(fi==2.&&fract(x*60.)<.5&&uv.y>wall-.025-.02*hash1(floor(x*60.))) rock=vec3(.06,.12,.12);
      c=rock;
      c=mix(c,vec3(.7,.68,.82),(.35-fi*.12)*smoothstep(HOR+.12,HOR,uv.y));
    }
  }
  // Stone bridge with lanterns along its rail.
  vec2 bq=vec2(p.x+m.x*.06-cx,uv.y);
  float deck=HOR+.13;
  if(abs(bq.x)<.62&&uv.y<deck+.012&&uv.y>HOR){
    float arch=HOR+.1*sqrt(sat(1.-pow(bq.x/.3,2.)));
    if(uv.y>arch||abs(bq.x)>.3){
      c=vec3(.14,.17,.3);
      if(uv.y>deck) c=vec3(.2,.24,.4);
      if(abs(bq.x)>.3&&fract(uv.y*70.+step(.5,fract(bq.x*25.))*.5)<.12) c=vec3(.1,.12,.24);
    }
  }
  for(int i=0;i<7;i++){
    float fi=float(i);
    vec2 lq=bq-vec2(-.54+fi*.18,deck+.03);
    float a; vec3 lc=lantern(lq,.012,sin(uTime*5.+fi*3.),a);
    if(abs(lq.x)<.002&&lq.y<0.&&lq.y>-.02) c=vec3(.1,.12,.24);
    c+=vec3(1.,.6,.3)*.25*exp(-length(lq)*40.);
    if(a>0.) c=lc;
  }
  // Sky lanterns rising, swaying, leaning with the wind; some released by your clicks.
  for(int i=0;i<22;i++){
    float fi=float(i);
    float life=fract(uTime*(.018+.012*hash1(fi*2.))+hash1(fi));
    float x0=cx+(hash1(fi*5.)-.5)*.9;
    vec2 pos=vec2(x0+life*wind*.6+.02*sin(uTime*.8+fi*2.)-m.x*.05,HOR+.12+life*.95);
    float s=.016*(1.-life*.6)*(.7+.5*hash1(fi*9.));
    vec2 d=p-pos; d.x+=d.y*wind*.4;
    float a; vec3 lc=lantern(d,s,sin(uTime*6.+fi),a);
    float fade=smoothstep(1.,.75,life);
    c+=vec3(1.,.62,.3)*.22*fade*exp(-length(d)/s*.55);
    if(a>0.) c=mix(c,lc,fade);
  }
  if(uClick<14.){
    for(int i=0;i<6;i++){
      float fi=float(i);
      float t=max(uClick-fi*.25,0.);
      vec2 o=vec2(uClickPos.x*uAsp,max(uClickPos.y,HOR+.02))+vec2((hash1(fi*3.)-.5)*.3,(hash1(fi*8.)-.5)*.08);
      vec2 pos=o+vec2(t*wind*.05+.02*sin(t+fi),t*(.04+.03*hash1(fi*4.)));
      vec2 d=p-pos;
      float a; vec3 lc=lantern(d,.018,sin(uTime*6.+fi),a);
      c+=vec3(1.,.62,.3)*.22*exp(-length(d)/.018*.55)*step(.01,t);
      if(a>0.&&t>.01) c=lc;
    }
  }
  return c;
}
vec3 scene(vec2 uv,vec2 px){
  vec2 m=uMouse-.5;
  float wind=m.x*1.2;
  if(uv.y>=HOR) return world(uv,m,wind,false);
  // The river: a darkened, rippling mirror, plus lanterns floating toward you.
  float d=HOR-uv.y;
  float rip=(noise(vec2(uv.x*uAsp*12.,d*90.-uTime*.9))-.5)*.02*(.3+d*3.);
  vec3 refl=world(vec2(uv.x+rip,HOR+d*1.15),m,wind,true);
  vec3 c=mix(vec3(.06,.1,.2),refl,.62-d*.5);
  vec2 p=vec2(uv.x*uAsp,uv.y);
  // Slow current lines.
  c+=vec3(.5,.55,.75)*.08*step(.92,fract(d*40./(d+.15)-uTime*.25+noise(vec2(p.x*4.,d*10.))));
  for(int i=0;i<12;i++){
    float fi=float(i);
    float s_=fract(uTime*.035+hash1(fi*7.));
    float lane=(hash1(fi*3.)-.5)*1.4;
    float yy=HOR-s_*s_*HOR*1.05;
    float xx=.5*uAsp+lane*s_*s_*.9+m.x*-.1*s_;
    float sz=.005+.018*s_*s_;
    vec2 q=p-vec2(xx,yy+sz*.5+.002*sin(uTime*2.+fi));
    float a; vec3 lc=lantern(q*vec2(1.,1.35),sz,sin(uTime*5.+fi*1.7),a);
    // A little wooden float under each one.
    if(abs(q.x)<sz*1.25&&q.y<-sz*.45&&q.y>-sz*.85){a=1.;lc=vec3(.22,.14,.16);}
    // Its glow on the water, a long wobbling streak.
    vec2 g=p-vec2(xx,yy);
    c+=vec3(1.,.6,.3)*.35*exp(-abs(g.x)/(sz*.8))*smoothstep(.0,-sz*5.,g.y)*smoothstep(-sz*14.,-sz*4.,g.y)*(.6+.4*sin(g.y*300.+uTime*4.));
    if(a>0.) c=lc;
  }
  return c;
}`,
});
