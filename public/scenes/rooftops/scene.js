/* Rooftops: a city roof at golden hour. Washing flaps in the pointer's wind, string lights sway,
   a water tower stands against a low sun, and a click sends the pigeons up off the line. */
PixelScene({
  palette: ["#120d1c", "#2a1a33", "#4a2742", "#7a3a4f", "#b4555a", "#e07a5f", "#f4b183", "#ffe1b0", "#3c3f78", "#6a7bb0", "#9fa9d6", "#3b2d3d", "#8a4b3c", "#f2efe6", "#5fb3a8", "#e9c46a"],
  dither: 0.13,
  mouse: [0.6, 0.5],
  idle: (t) => [0.55 + 0.3 * Math.sin(t * 0.23) * Math.sin(t * 0.07), 0.5],
  frag: `
float rope(float x,float x0,float x1,float y0,float sag){float t=(x-x0)/(x1-x0);return y0-sag*4.*t*(1.-t);}
vec3 scene(vec2 uv,vec2 px){
  vec2 p=vec2(uv.x*uAsp,uv.y);
  vec2 m=uMouse-.5;
  float wind=m.x*1.6+.25*sin(uTime*.7)*sin(uTime*.31);
  // Dusk sky: lilac overhead, rose, then gold at the horizon.
  vec3 c=mix(vec3(.96,.69,.51),vec3(.71,.33,.35),smoothstep(.25,.6,uv.y));
  c=mix(c,vec3(.42,.3,.48),smoothstep(.5,.78,uv.y));
  c=mix(c,vec3(.24,.25,.47),smoothstep(.72,1.05,uv.y));
  // The low sun and long streaks of cloud lit from below.
  vec2 sun=vec2(.63*uAsp-m.x*.04,.4);
  float sd=length(p-sun);
  c=mix(c,vec3(1.,.88,.69),smoothstep(.2,.0,sd)*.6);
  if(sd<.085) c=vec3(1.,.95,.8);
  float streak=noise(vec2(p.x*2.+uTime*.01,uv.y*28.));
  float cloud=smoothstep(.62,.72,streak)*smoothstep(.45,.6,uv.y)*smoothstep(.95,.75,uv.y);
  c=mix(c,mix(vec3(.48,.15,.26),vec3(.96,.69,.51),smoothstep(.75,.5,uv.y)),cloud*.85);
  // Birds crossing far away.
  for(int i=0;i<5;i++){
    float fi=float(i);
    vec2 b=vec2(mod(uTime*.05+fi*.13+hash1(fi)*2.,uAsp+.4)-.2,.78+fi*.025+.01*sin(uTime+fi));
    vec2 d=p-b; float wing=abs(d.x)*(.6+.5*sin(uTime*8.+fi*2.));
    if(abs(d.x)<.011&&abs(d.y-wing)<.0025) c=vec3(.29,.15,.24);
  }
  // Far skyline in haze, a mast with a blinking light.
  float fx=p.x+m.x*.03, fc=floor(fx/.05);
  float fh=.3+.12*hash1(fc)+.05*step(.85,hash1(fc+2.));
  if(uv.y<fh&&fract(fx/.05)>.05) c=mix(vec3(.71,.33,.35),vec3(.96,.69,.51),.25);
  vec2 mst=p-vec2(1.12+m.x*-.03,.3);
  if(abs(mst.x)<.003&&mst.y<.2&&mst.y>0.) c=vec3(.48,.15,.26);
  if(length(mst-vec2(0.,.2))<.007&&fract(uTime*.6)<.5) c=vec3(1.,.42,.37);
  // Mid rooftops: blocks, chimneys, a water tower on legs.
  float mx=p.x+m.x*.09, mc=floor(mx/.16);
  float mh=.2+.09*hash1(mc*3.+1.);
  if(uv.y<mh&&fract(mx/.16)>.03){
    c=vec3(.29,.15,.26);
    vec2 g=vec2(fract(mx/.022),fract(uv.y/.03));
    if(g.x>.3&&g.x<.7&&g.y>.3&&g.y<.7&&hash(floor(vec2(mx/.022,uv.y/.03)))>.7) c=vec3(.96,.69,.51);
  }
  if(hash1(mc*7.)>.5&&abs(fract(mx/.16)-.7)<.04&&uv.y<mh+.03) c=vec3(.29,.15,.26);
  vec2 wt=vec2(mx-1.27,uv.y-.33);
  if(abs(wt.x)<.055&&wt.y>0.&&wt.y<.1){c=mix(vec3(.54,.29,.24),vec3(.29,.15,.26),step(0.,wt.x)); if(fract(wt.y*40.)<.2) c=vec3(.29,.15,.26);}
  if(wt.y>=.1&&wt.y<.1+.04*(1.-abs(wt.x)/.06)) c=vec3(.23,.18,.24);
  if(wt.y<0.&&wt.y>-.13&&(abs(abs(wt.x)-.045)<.004||abs(abs(wt.x)-(.045+wt.y*.25))<.003||abs(fract(wt.y*12.)-.5)<.04&&abs(wt.x)<.045)) c=vec3(.18,.1,.2);
  // Our roof: the parapet in front, a stair hut on the right.
  float roofY=.17;
  vec2 hut=p-vec2(1.5+m.x*.16,roofY);
  if(hut.x>-.12&&hut.x<.12&&hut.y<.26){c=vec3(.23,.18,.24); if(hut.x>-.04&&hut.x<.03&&hut.y<.17) c=vec3(.95,.6,.38)*.9; if(hut.y>.24) c=vec3(.16,.1,.2);}
  // String lights swagging between poles, bulbs that flicker gently.
  vec3 laundry=vec3(0.); float la=0.;
  float x0=.06+m.x*-.16, x1=.86+m.x*-.16;
  float ly=rope(p.x,x0,x1,.6,.09+.015*wind);
  for(int k=0;k<2;k++){
    float xa=k==0?x0:x1;
    if(abs(p.x-xa)<.006&&uv.y<.63&&uv.y>roofY) c=vec3(.16,.1,.2);
  }
  if(p.x>x0&&p.x<x1){
    if(abs(uv.y-ly)<.0035) c=vec3(.16,.1,.2);
    // Washing pegged along the line: sheets, shirts, a towel, each blown by the wind.
    float slot=floor((p.x-x0)/.11), sx=fract((p.x-x0)/.11);
    float kind=hash1(slot*3.7);
    float below=ly-uv.y;
    float sway=wind*.18*below/(.2)+.012*sin(uTime*3.+slot*1.3+below*20.)*abs(wind+.3);
    float lx=(p.x-x0)-slot*.11-sway;
    float hgt=kind<.35?.2:kind<.7?.12:.15;
    float w=kind<.35?.09:.075;
    float inCloth=step(.012,lx)*step(lx,.012+w)*step(0.,below)*step(below,hgt);
    // Shirts get sleeves and a narrower body.
    if(kind>=.35&&kind<.7){float cx=lx-.012-w*.5; inCloth=step(0.,below)*step(below,hgt)*step(abs(cx),below<.04?w*.5:w*.3);}
    if(inCloth>0.&&slot<7.){
      vec3 cc=kind<.35?vec3(.95,.94,.9):kind<.7?vec3(.37,.7,.66):vec3(.91,.77,.42);
      if(hash1(slot*9.1)>.6&&kind<.35) cc=vec3(.95,.94,.9)-step(.5,fract(lx*40.))*vec3(0.,.3,.35);
      // Folds catch the low sun.
      float fold=sin(lx*90.+uTime*4.*abs(wind)+below*30.);
      cc*=.82+.18*fold;
      c=cc;
    }
    // Pegs.
    if(abs(uv.y-ly)<.008&&fract((p.x-x0)/.11)>.08&&fract((p.x-x0)/.11)<.11) c=vec3(.54,.29,.24);
  }
  // String lights from the hut to the left pole.
  float sx0=x1, sx1=1.4+m.x*.16;
  float sy=rope(p.x,sx0,sx1,.56,.08)+.006*sin(uTime*1.5)*wind;
  if(p.x>sx0&&p.x<sx1){
    if(abs(uv.y-sy)<.002) c=vec3(.16,.1,.2);
    float bi=floor((p.x-sx0)/.06), bx=fract((p.x-sx0)/.06);
    vec2 bq=vec2((bx-.5)*.06,uv.y-(sy-.008));
    float on=.75+.25*sin(uTime*3.+bi*1.9);
    c+=vec3(1.,.7,.4)*.18*on*exp(-length(bq)*70.);
    if(length(bq)<.006) c=mix(vec3(1.,.76,.45),vec3(1.,.96,.82),on-.5);
  }
  // Parapet and roof floor.
  if(uv.y<roofY){c=vec3(.23,.18,.24); if(uv.y>roofY-.015) c=vec3(.54,.29,.24); if(uv.y<roofY-.015&&fract(p.x*30.+step(.5,fract(uv.y*60.))*.5)<.06) c=vec3(.16,.1,.2);}
  // The roof itself: door light spilling out, pots of herbs, a folding chair.
  if(uv.y<roofY-.015){
    c+=vec3(1.,.55,.3)*.3*exp(-length((p-vec2(1.49+m.x*.16,roofY-.02))*vec2(1.2,5.))*6.);
    for(int i=0;i<3;i++){
      float fi=float(i);
      vec2 pt=p-vec2(.35+fi*.09+m.x*-.25,.04+fi*.012);
      if(pt.y>0.&&pt.y<.035&&abs(pt.x)<.02-pt.y*.15) c=vec3(.54,.29,.24);
      float leaf=length((pt-vec2(.008*sin(uTime*1.5+fi),.05))*vec2(1.,1.3));
      if(pt.y>.03&&leaf<.03+.006*sin(atan(pt.y-.05,pt.x)*7.)) c=mix(vec3(.24,.42,.36),vec3(.37,.7,.66),step(.012,pt.x+pt.y-.05));
    }
  }
  // Pigeons on the parapet. Click and they take off.
  for(int i=0;i<6;i++){
    float fi=float(i);
    vec2 home=vec2(.25+fi*.17+hash1(fi)*.05+m.x*-.2,roofY+.012);
    float t=uClick<4.?uClick:0.;
    float delay=hash1(fi*3.)*.25;
    float ft=max(t-delay,0.);
    vec2 pos=home+vec2(ft*(.18+.1*hash1(fi*5.))*(hash1(fi*7.)>.5?1.:-1.),ft*ft*.12+ft*.18);
    vec2 d=p-pos;
    if(ft>0.){
      float flap=sin(uTime*24.+fi)*.9;
      float wing=abs(d.x)*flap;
      if(abs(d.x)<.016&&abs(d.y-wing)<.003) c=vec3(.23,.18,.28);
      if(length(d*vec2(1.,1.6))<.006) c=vec3(.42,.42,.55);
    }else{
      float hop=step(.97,hash1(floor(uTime*2.)+fi))*.004;
      d.y-=hop;
      if(length((d-vec2(0.,.008))*vec2(1.,1.3))<.011) c=vec3(.42,.42,.55);
      if(length(d-vec2(.009*(mod(fi,2.)*2.-1.),.02))<.005) c=vec3(.33,.33,.46);
      if(length(d-vec2(.009*(mod(fi,2.)*2.-1.),.0205))<.0017) c=vec3(.12,.07,.12);
    }
  }
  return c;
}`,
});
