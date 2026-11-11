/* Long Night: a cabin on a snowy ridge under the aurora. Snow drifts with the pointer's wind,
   chimney smoke bends with it, the window glows warmer when you come close, a click throws a shooting star. */
PixelScene({
  palette: ["#050814", "#0b1530", "#15264f", "#24406f", "#3d6596", "#1b6e5a", "#35c08a", "#b4ffd6", "#8e4aa0", "#dfe8f5", "#9fb2cf", "#5f7396", "#0d2326", "#1d3e3f", "#ff9f40", "#ffe08a"],
  dither: 0.12,
  mouse: [0.5, 0.5],
  idle: (t) => [0.5 + 0.2 * Math.sin(t * 0.17), 0.5],
  frag: `
float ridge(float x,float seed,float base,float amp,float freq){
  return base+amp*(fbm(vec2(x*freq+seed,seed))-.5)*2.;
}
float pines(vec2 p,float ground,float spacing,float hgt,float seed){
  float col=floor(p.x/spacing);
  float hit=0.;
  for(int k=-1;k<=1;k++){
    float cc=col+float(k);
    if(hash1(cc+seed)<.35) continue;
    float x0=(cc+.5+(hash1(cc*3.+seed)-.5)*.7)*spacing;
    float h=hgt*(.6+.6*hash1(cc*5.+seed));
    float y=p.y-ground;
    if(y<0.||y>h) continue;
    float yy=y/h;
    // Three stacked tiers, each a little triangle.
    float tier=fract(yy*3.);
    float w=(1.-yy)*.45*h*(.55+.45*(1.-tier));
    if(abs(p.x-x0)<w) hit=1.+yy;
  }
  return hit;
}
vec3 scene(vec2 uv,vec2 px){
  vec2 p=vec2(uv.x*uAsp,uv.y);
  vec2 m=uMouse-.5;
  float wind=m.x*.9;
  // Night sky, deepest at the top.
  vec3 c=mix(vec3(.13,.22,.4),vec3(.02,.03,.08),pow(uv.y,.8));
  // Stars, twinkling.
  vec2 sc=floor(px/1.);
  float st=step(.993,hash(sc))*(.5+.5*sin(uTime*(1.+hash(sc+2.)*3.)+hash(sc)*30.));
  c+=st*.8*smoothstep(.45,.8,uv.y);
  // Aurora: curtains that ripple sideways, green at the foot, violet at the hem.
  vec2 ap=vec2(p.x*1.3+m.x*.15,uv.y);
  vec3 aur=vec3(0.);
  for(int i=0;i<3;i++){
    float fi=float(i);
    float base=.55+.08*fi+.07*sin(ap.x*1.4+uTime*.12+fi*2.1)+.05*fbm(vec2(ap.x*1.5+uTime*.04,fi*3.));
    float y=ap.y-base;
    float rays=.45+.55*pow(noise(vec2(ap.x*36.+fi*10.,uTime*.35)),1.5);
    float fall=smoothstep(-.012,.0,y)*exp(-max(y,0.)*(9.-fi*2.));
    float on=.5+.5*sin(ap.x*2.3+fi*1.7+uTime*.2);
    vec3 col=mix(vec3(.25,.85,.58),vec3(.6,.3,.68),smoothstep(.03,.2,y));
    aur+=col*fall*rays*on*(1.-fi*.22);
  }
  c+=aur*1.05;
  // A shooting star where you click (and now and then on its own).
  float sst=min(uClick,mod(uTime+7.,19.));
  vec2 s0=uClick<1.5?vec2(uClickPos.x*uAsp,max(uClickPos.y,.6)):vec2(.4*uAsp,.92);
  vec2 sp=s0+vec2(-.9,-.35)*sst*.6;
  vec2 sd=p-sp; vec2 dir=normalize(vec2(-.9,-.35));
  float along=dot(sd,-dir), across=abs(dot(sd,vec2(-dir.y,dir.x)));
  c+=vec3(.9,1.,.95)*step(across,.003)*step(0.,along)*smoothstep(.18,0.,along)*step(sst,1.2);
  // Far mountains with snow caps, then layered snowy hills.
  float mx=p.x+m.x*.03;
  // Jagged peaks: two rows of triangles, each lit on its left face.
  float mtn=0., slope=0.;
  for(int r=0;r<2;r++){
    float fr=float(r), w=fr==0.?.42:.23;
    float x=mx+fr*.17, cell=floor(x/w), fx=fract(x/w);
    float ph=(fr==0.?.27:.17)*(.55+.45*hash1(cell+fr*9.));
    float pk=.3+ph*(1.-abs(fx*2.-1.))+.012*(noise(vec2(x*40.,fr))-.5);
    if(pk>mtn){mtn=pk;slope=fx<.5?1.:-1.;}
  }
  if(uv.y<mtn){
    c=slope>0.?vec3(.25,.33,.5):vec3(.15,.2,.36);
    float snowline=.43+.025*noise(vec2(mx*25.,4.));
    if(uv.y>snowline) c=slope>0.?vec3(.87,.91,.97):vec3(.55,.62,.78);
    c=mix(c,vec3(.2,.27,.43),smoothstep(.36,.26,uv.y));
  }
  float h1=ridge(p.x+m.x*.07,5.,.33,.05,1.8);
  if(uv.y<h1+.1&&pines(p+vec2(m.x*.07,0.),h1,.045,.07,3.)>0.) c=vec3(.08,.18,.2);
  if(uv.y<h1) c=mix(vec3(.45,.53,.7),vec3(.32,.4,.58),sat((h1-uv.y)*8.));
  float h2=ridge(p.x+m.x*.14,9.,.22,.06,1.4);
  float tr=pines(p+vec2(m.x*.14,0.),h2,.07,.13,7.);
  if(tr>0.) c=mix(vec3(.05,.13,.14),vec3(.12,.24,.25),step(1.5,tr)*.6);
  if(uv.y<h2) c=mix(vec3(.62,.7,.83),vec3(.4,.48,.66),sat((h2-uv.y)*6.));
  // The cabin on the near ridge.
  float cx=1.05+m.x*-.22;
  float h3=.17+.03*sin((p.x-m.x*.22)*2.+.5);
  vec2 q=(p-vec2(cx,h3-.005))/1.35;
  float roofH=.07, wall=.065, halfW=.09;
  float glow=.75+.25*sin(uTime*2.3)*sin(uTime*3.7);
  vec2 win=q-vec2(-.03,.03);
  float near=exp(-length(vec2(uMouse.x*uAsp,uMouse.y)-vec2(cx-.03,h3+.03))*6.);
  glow+=near*.8;
  // Warm light thrown out across the snow.
  c+=vec3(1.,.62,.25)*.28*glow*exp(-length((p-vec2(cx-.03,h3))*vec2(1.,3.))*7.)*step(uv.y,h3+.02);
  if(q.x>-halfW&&q.x<halfW&&q.y>0.&&q.y<wall){
    c=vec3(.18,.13,.16);
    if(fract(q.y*80.)<.18) c=vec3(.1,.07,.1);
    if(abs(win.x)<.018&&abs(win.y)<.016){c=mix(vec3(1.,.62,.25),vec3(1.,.88,.55),sat(glow-.4)); if(abs(win.x)<.002||abs(win.y)<.002) c=vec3(.1,.07,.1);}
    if(abs(q.x-.045)<.016&&q.y<.05) c=vec3(.1,.07,.1);
  }
  // Snow-heavy roof and chimney.
  float roof=wall+roofH*(1.-abs(q.x)/(halfW+.025));
  if(abs(q.x)<halfW+.025&&q.y>=wall-.004&&q.y<roof) c=q.y>roof-.022?vec3(.87,.91,.96):vec3(.1,.07,.1);
  if(q.x>.035&&q.x<.055&&q.y>wall&&q.y<roof+.035){c=vec3(.18,.13,.16); if(q.y>roof+.028) c=vec3(.87,.91,.96);}
  // Smoke curls up and leans with the wind.
  vec2 sm=q-vec2(.045,roof+.04);sm.y*=.75;
  if(sm.y>0.){
    float drift=sm.x-wind*sm.y*1.2-.03*sin(sm.y*14.-uTime*1.5);
    float spread=.012+sm.y*.12;
    float puff=fbm(vec2(drift*14.,sm.y*9.-uTime*.6));
    float smoke=smoothstep(spread,0.,abs(drift))*smoothstep(.3,.0,sm.y)*smoothstep(.35,.65,puff+.25);
    c=mix(c,vec3(.6,.66,.78),smoke*.85);
  }
  // Near ridge of deep snow.
  if(uv.y<h3) c=mix(vec3(.87,.91,.96),vec3(.55,.64,.8),sat((h3-uv.y)*5.));
  // Footprints leading to the door.
  vec2 fp=p-vec2(cx+.045,h3-.02);
  if(fp.x<0.&&fp.x>-.5){float s=floor(fp.x*45.);vec2 f=vec2(fract(fp.x*45.)-.5,(fp.y+.015*sin(s*1.7)+fp.x*.18)*45.+mod(s,2.)*.4);if(length(f*vec2(1.,1.5))<.3) c=vec3(.6,.68,.84);}
  // Falling snow in three depths, blown by the pointer.
  for(int l=0;l<3;l++){
    float fl=float(l);
    float sc_=70.-fl*20.;
    vec2 sp2=vec2(p.x+wind*uv.y*(.4+fl*.3)+uTime*wind*(.05+fl*.04),uv.y+uTime*(.05+fl*.035));
    vec2 cell=floor(sp2*sc_), f=fract(sp2*sc_)-.5;
    f.x+=.25*sin(uTime*1.3+hash(cell)*6.);
    float flake=step(length(f),.1+fl*.05)*step(.94-fl*.01,hash(cell+fl*3.));
    c=mix(c,vec3(.95,.97,1.),flake*(.55+fl*.2));
  }
  return c;
}`,
});
