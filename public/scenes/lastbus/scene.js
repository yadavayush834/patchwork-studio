/* Last Bus: a wet city street at night. Rain leans with the pointer, the road mirrors everything,
   the last bus hums past every so often, and a click splits the sky with lightning. */
PixelScene({
  palette: ["#07070f", "#11142a", "#1c2042", "#2c2f5e", "#463f7d", "#6d5a9a", "#9b7fb8", "#e0643c", "#ffae5c", "#ffe3a6", "#1f6f80", "#5fd0c8", "#d2457e", "#ff9ec4", "#9aa6d4", "#f3f0ff"],
  dither: 0.13,
  mouse: [0.55, 0.6],
  idle: (t) => [0.5 + 0.18 * Math.sin(t * 0.13), 0.6],
  frag: `
const float ROAD=.25;
float flash(){
  float auto_=mod(uTime,23.);
  return exp(-uClick*5.)*step(uClick,1.5)+exp(-(auto_-9.)*7.)*step(9.,auto_)*.8;
}
vec3 windowCol(vec2 cell,float seed){
  float h=hash(cell+seed);
  // A few rooms change their lights as people come and go.
  float on=step(.72,hash(cell+seed+floor(uTime*.08+h*7.)*.37));
  vec3 w=mix(vec3(.88,.39,.24),vec3(1.,.89,.65),step(.5,h));
  w=mix(w,vec3(.37,.82,.78),step(.93,h));
  return w*on;
}
vec3 skyline(vec2 p,float par,float w,float h0,float hv,float seed,vec3 body,float win,inout float hit){
  float x=p.x+par;
  float cell=floor(x/w), fx=fract(x/w);
  float ht=h0+hv*hash1(cell+seed);
  // Narrow gaps between towers, the odd stepped roof.
  float gap=step(.06,fx)*step(fx,.94);
  ht+=step(.6,hash1(cell+seed+3.))*step(.3,fx)*step(fx,.7)*.025;
  if(p.y<ht&&gap>0.){
    hit=1.;
    vec2 g=vec2(fx*w/.0105,(p.y-ROAD)/.016);
    vec2 inCell=fract(g);
    float pane=step(.25,inCell.x)*step(inCell.x,.75)*step(.3,inCell.y)*step(inCell.y,.8)*step(p.y,ht-.02);
    return mix(body,windowCol(floor(g)+cell*31.,seed)*win+body,pane*step(.001,win));
  }
  return vec3(0.);
}
vec3 world(vec2 uv,vec2 m,float wind,out float lampLight){
  vec2 p=vec2(uv.x*uAsp,uv.y);
  float fl=flash();
  // Sky: storm cloud over city glow.
  float t=sat((uv.y-ROAD)/(1.-ROAD));
  vec3 c=mix(vec3(.40,.32,.55),vec3(.07,.08,.17),pow(t,.55));
  float cl=fbm(vec2(p.x*2.2-uTime*.03+m.x*.2,p.y*3.5));
  c=mix(c,vec3(.13,.14,.27),smoothstep(.45,.75,cl)*smoothstep(.45,.75,uv.y));
  c+=fl*vec3(.55,.55,.75)*smoothstep(.3,.9,cl+.2);
  // Lightning bolt near where you clicked.
  if(uClick<.35){
    float bx=uClickPos.x*uAsp+(fbm(vec2(p.y*9.,uClickPos.x*40.))-.5)*.18;
    float bolt=smoothstep(.006,0.,abs(p.x-bx))*step(.55,uv.y);
    c=mix(c,vec3(.95,.94,1.),bolt*(1.-uClick*2.5));
  }
  // Two layers of towers that slide apart with the pointer.
  float hit=0.;
  vec3 far=skyline(p,m.x*.04,.07,.42,.2,3.,vec3(.27,.25,.47),.35,hit);
  if(hit>0.) c=mix(far,vec3(.4,.33,.56),.35*smoothstep(.5,.3,uv.y))+fl*.12;
  hit=0.;
  vec3 near=skyline(p,m.x*.1+.3,.15,.45,.2,11.,vec3(.15,.15,.33),.8,hit);
  if(hit>0.) c=mix(near,vec3(.3,.27,.5),.3*smoothstep(.45,.3,uv.y))+fl*.06;
  // A pink neon sign hangs off one tower and buzzes.
  vec2 sp=p-vec2(.62-m.x*.1,.55);
  float buzz=step(.08,hash1(floor(uTime*9.)));
  if(abs(sp.x)<.014&&abs(sp.y)<.07){c=vec3(.07,.07,.15); if(abs(sp.x)<.008&&abs(sp.y)<.062&&mod(floor((sp.y+.07)/.019),2.)<1.) c=vec3(.82,.27,.5)+buzz*vec3(.18,.35,.3);}
  c+=vec3(.82,.27,.5)*.18*buzz*exp(-length(sp*vec2(1.,.4))*14.);
  // Pavement.
  if(uv.y<ROAD+.035){c=mix(vec3(.1,.1,.22),vec3(.05,.05,.11),step(uv.y,ROAD+.028)); }
  // Streetlamp: pole, arm, sodium head and its cone of light.
  float lx=.36-m.x*.14;
  lampLight=0.;
  vec2 head=vec2(lx+.05,.77);
  if(abs(p.x-lx)<.006&&uv.y<.79&&uv.y>ROAD+.02) c=vec3(.03,.03,.06);
  if(abs(p.y-.79)<.005&&p.x>lx-.006&&p.x<head.x+.02) c=vec3(.03,.03,.06);
  vec2 dl=p-head;
  float cone=smoothstep(.3,.22,abs(dl.x)/max(.02,-dl.y))*step(dl.y,-.005)*smoothstep(-.6,-.1,dl.y);
  lampLight=cone*(1.-smoothstep(0.,.5,-dl.y)*.6);
  c+=vec3(1.,.6,.3)*lampLight*.3;
  // A warm pool of light where the cone meets the pavement.
  c+=vec3(1.,.66,.33)*.75*exp(-pow((p.x-head.x)*4.,2.)-pow((uv.y-ROAD-.017)*60.,2.))*step(uv.y,ROAD+.035);
  c+=vec3(1.,.68,.36)*.5*exp(-length(dl)*28.);
  if(abs(dl.x)<.022&&dl.y>-.012&&dl.y<.004) c=vec3(1.,.89,.65);
  // Bus shelter with a backlit poster and a bench.
  float sx=1.02-m.x*.14;
  vec2 q=p-vec2(sx,ROAD+.03);
  if(q.x>-.2&&q.x<.22&&q.y>0.&&q.y<.24){
    if(q.y>.222) c=q.y<.228?vec3(1.,.89,.65):vec3(.03,.03,.06);
    else if(abs(q.x+.2)<.006||abs(q.x-.22)<.006) c=vec3(.03,.03,.06);
    else c=mix(c,vec3(.24,.26,.48),.12)+step(.985,fract((q.x-q.y)*9.))*.08;
  }
  vec2 ad=q-vec2(.15,.115);
  if(abs(ad.x)<.055&&abs(ad.y)<.095){
    c=abs(ad.x)<.05&&abs(ad.y)<.09?mix(vec3(.37,.82,.78),vec3(.12,.44,.5),sat(ad.y*4.+.5)):vec3(.07,.075,.16);
    float sun=length(ad-vec2(0.,.025));
    if(sun<.03) c=vec3(.82,.27,.5);
    if(ad.y<-.045&&abs(ad.x)<.05) c=vec3(.03,.03,.06)+step(.5,fract(ad.x*60.))*step(ad.y,-.06)*step(-.075,ad.y)*vec3(.6);
  }
  c+=vec3(.37,.82,.78)*.22*exp(-length(ad*vec2(.7,1.))*9.)*step(.0,q.y);
  if(q.x>-.16&&q.x<.06&&abs(q.y-.05)<.006) c=vec3(.17,.18,.37);
  return c;
}
vec4 bus(vec2 uv,vec2 m){
  vec2 p=vec2(uv.x*uAsp,uv.y);
  float period=17., ph=mod(uTime+15.,period);
  float x0=uAsp+.15-ph*.36-m.x*.18;
  vec2 b=(p-vec2(x0,.055))*1.55;
  // Rocking on the springs.
  b.y-=.004*sin(uTime*11.)*step(0.,b.x);
  if(b.x<0.||b.x>.98||b.y<0.||b.y>.25) {
    // Headlight beam on the road ahead of it.
    float beam=smoothstep(.0,-.5,b.x)*smoothstep(.06,.0,abs(b.y-.03+b.x*.02))*step(b.x,0.);
    return vec4(vec3(1.,.89,.65),beam*.55*step(-.7,b.x));
  }
  vec3 c=mix(vec3(.12,.44,.5),vec3(.07,.3,.38),step(b.y,.1));
  if(b.y<.05) c=vec3(.03,.03,.06);
  if(b.y>.226) c=vec3(.37,.82,.78);
  if(abs(b.y-.092)<.008) c=vec3(.82,.27,.5);
  // Rain sheen sliding down the paintwork.
  c+=step(.92,fract(b.x*14.+b.y*3.-uTime*.6))*step(.1,b.y)*.05;
  // Lit windows with a few silhouettes riding home.
  if(b.y>.11&&b.y<.21&&b.x>.12&&b.x<.94){
    float wx=fract((b.x-.12)/.088);
    if(wx>.08){
      c=vec3(1.,.89,.65);
      float seat=floor((b.x-.12)/.088);
      if(hash1(seat+3.)>.5&&wx>.35&&wx<.7&&b.y<.165+.02*step(.5,fract(b.x*30.))) c=vec3(.11,.12,.25);
    }
  }
  // Doors, destination board, headlight.
  if(b.x>.025&&b.x<.1&&b.y>.06&&b.y<.21) c=b.y>.11?vec3(1.,.89,.65)*.85:vec3(.11,.12,.25);
  if(b.x>.02&&b.x<.3&&b.y>.215&&b.y<.232) c=vec3(.88,.39,.24)*(.7+.3*step(.5,fract(b.x*40.-uTime*3.)));
  if(b.x<.018&&b.y>.06&&b.y<.085) c=vec3(1.,.95,.8);
  // Wheels.
  for(int i=0;i<2;i++){
    float wx=i==0?.18:.8;
    float d=length(b-vec2(wx,.03));
    if(d<.045) c=d<.02?vec3(.27,.25,.45):vec3(.03,.03,.06);
  }
  return vec4(c,1.);
}
vec3 rain(vec2 uv,float wind,float lamp,float fl){
  vec3 add=vec3(0.);
  for(int l=0;l<2;l++){
    float fl_=float(l);
    float sc=fl_==0.?90.:150.;
    vec2 r=vec2(uv.x*uAsp+uv.y*wind,uv.y);
    float col=floor(r.x*sc);
    float sp=1.6+hash1(col+fl_*7.)*.8;
    float y=fract(r.y*(1.6+fl_)+uTime*sp+hash1(col*3.1+fl_));
    float streak=step(y,.05+.02*fl_)*step(.72,hash1(col+floor(r.y*(1.6+fl_)+uTime*sp)*1.7+fl_*13.));
    add+=streak*(fl_==0.?.16:.09)*(1.+lamp*3.+fl*2.);
  }
  return add*vec3(.6,.65,.85);
}
vec3 scene(vec2 uv,vec2 px){
  vec2 m=uMouse-.5;
  float wind=-m.x*.7;
  float lamp;
  vec3 c;
  float fl=flash();
  if(uv.y>=ROAD){
    c=world(uv,m,wind,lamp);
  }else{
    // Wet road: a squashed, rippling reflection of everything above it.
    float d=ROAD-uv.y;
    float rip=(noise(vec2(uv.x*uAsp*14.,uv.y*140.-uTime*2.))-.5)*.008*(1.+d*4.);
    float lamp2;
    vec3 refl=world(vec2(uv.x+rip,ROAD+.035+d*.75),m,wind,lamp2);
    float lum=dot(refl,vec3(.3,.55,.15));
    c=vec3(.045,.05,.11)+refl*smoothstep(.4,.75,lum)*(.9-d*2.)+refl*.18*(1.-d*2.);
    lamp=lamp2*.4;
    // Lane dashes and splashes.
    vec2 p=vec2(uv.x*uAsp,uv.y);
    if(abs(uv.y-.2)<.005&&fract(p.x*3.5-m.x*.4)<.45) c=mix(c,vec3(.45,.47,.66),.5);
    vec2 cell=floor(p*vec2(14.,40.)); vec2 f=fract(p*vec2(14.,40.))-.5;
    float age=fract(uTime*.9+hash(cell)*7.);
    float ring=abs(length(f*vec2(1.,3.))-age*.5);
    c+=step(ring,.04)*(1.-age)*step(.55,hash(cell+1.))*.35*vec3(.6,.65,.85);
  }
  vec4 b=bus(uv,m);
  c=mix(c,b.rgb,b.a);
  // The bus is mirrored in the wet tarmac under its wheels.
  if(uv.y<.055){vec4 br=bus(vec2(uv.x,.11-uv.y+(noise(vec2(uv.x*200.,uTime*2.))-.5)*.006),m); c=mix(c,br.rgb*.5,br.a*step(.5,br.a)*.8);}
  c+=rain(uv,wind,lamp,fl);
  return c;
}`,
});
