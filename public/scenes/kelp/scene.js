/* Kelp: a forest under the sea. Light falls in shafts, three depths of kelp sway in the current,
   a school of fish follows the pointer and bursts apart on a click, and a manta passes far behind. */
PixelScene({
  palette: ["#03101a", "#062636", "#0a3a4c", "#0f5566", "#177480", "#26988f", "#5cc8b0", "#bff0dc", "#4f5a3c", "#a8955e", "#e3d49a", "#173d2a", "#2f6b34", "#86a83a", "#f2a33a", "#ff6a4d"],
  dither: 0.12,
  mouse: [0.62, 0.5],
  follow: 1.6,
  idle: (t) => [0.55 + 0.25 * Math.sin(t * 0.21), 0.5 + 0.14 * Math.sin(t * 0.33)],
  frag: `
vec3 water(vec2 uv){
  float d=1.-uv.y;
  vec3 c=mix(vec3(.15,.6,.56),vec3(.02,.09,.14),pow(d,.7));
  return c;
}
float kelpLayer(vec2 p,float spacing,float seed,float base,float hmax,float amp,float w,out float hgt,out float leafy){
  float x=p.x;
  float col=floor(x/spacing);
  float best=0.; hgt=0.; leafy=0.;
  for(int k=-1;k<=1;k++){
    float cc=col+float(k);
    if(hash1(cc+seed)<.25) continue;
    float x0=(cc+.5+(hash1(cc*1.7+seed)-.5)*.6)*spacing;
    float top=base+hmax*(.55+.45*hash1(cc*2.3+seed));
    if(p.y>top||p.y<base-.05) continue;
    float yy=sat((p.y-base)/(top-base));
    float current=(uMouse.x-.5)*.12;
    float off=(sin(uTime*.7+cc*1.3+p.y*3.)*amp+current)*pow(yy,1.4);
    float d=x-(x0+off);
    float stalk=step(abs(d),w);
    // Blades alternate sides along the stalk, each a leaf that flutters.
    float ls=.045, seg=floor((p.y-base)/ls), fy=fract((p.y-base)/ls);
    float side=mod(seg+cc,2.)*2.-1.;
    float flutter=.8+.2*sin(uTime*2.+seg+cc);
    float leafW=.03*sin(fy*3.1416)*flutter*(.4+.6*sin(yy*3.1416*.9+.3));
    float ld=d*side-w;
    float leaf=step(0.,ld)*step(ld,leafW)*step(.15,yy);
    float hit=max(stalk,leaf);
    if(hit>best){best=hit;hgt=yy;leafy=leaf*(1.-ld/max(leafW,.001));}
  }
  return best;
}
vec3 fish(vec2 p,float t,out float a){
  vec2 C=vec2(uMouse.x*uAsp,uMouse.y);
  float scatter=1.+3.5*exp(-uClick*1.6);
  a=0.; vec3 c=vec3(0.);
  for(int i=0;i<34;i++){
    float fi=float(i);
    float r=(.04+.11*hash1(fi*3.1))*scatter;
    float sp=.9+.5*hash1(fi*7.7);
    float ph=fi*2.399+t*sp;
    vec2 pos=C+vec2(cos(ph)*r*1.7,sin(ph*1.3)*r*.7);
    vec2 vel=vec2(-sin(ph)*1.7,cos(ph*1.3)*.91);
    vec2 dir=normalize(vel+vec2(.0001));
    vec2 q=p-pos;
    vec2 l=vec2(dot(q,dir),dot(q,vec2(-dir.y,dir.x)));
    float body=step(length(l/vec2(.017,.0065)),1.);
    float tail=step(l.x,-.013)*step(-.026,l.x)*step(abs(l.y),(-.013-l.x)*.9+.0015*sin(t*14.+fi));
    if(body+tail>0.){
      a=1.;
      float belly=step(l.y*sign(dir.x+.001),-.0015);
      c=mix(vec3(.95,.64,.23),vec3(1.,.42,.3),step(.5,hash1(fi)));
      c=mix(c,vec3(.89,.83,.6),belly*body*.7);
      if(length(l-vec2(.009,.002*sign(dir.x+.001)))<.0028) c=vec3(.02,.06,.1);
      // Fish further back are hazier.
      c=mix(c,water(vec2(0.,p.y)),.35*hash1(fi*5.));
    }
  }
  return c;
}
vec3 scene(vec2 uv,vec2 px){
  vec2 p=vec2(uv.x*uAsp,uv.y);
  vec2 m=uMouse-.5;
  vec3 c=water(uv);
  // Shafts of sunlight fanning down from the surface.
  vec2 sun=vec2(.62*uAsp+m.x*.1,1.6);
  float ang=atan(p.x-sun.x,sun.y-p.y);
  float rays=pow(noise(vec2(ang*14.+uTime*.12,0.))*noise(vec2(ang*31.-uTime*.08,3.)),1.6)*2.2;
  c+=vec3(.6,.95,.85)*rays*.22*smoothstep(0.,.9,uv.y);
  // The surface: a bright rippled ceiling.
  float surf=.94+.012*sin(p.x*18.+uTime*1.3)+.008*sin(p.x*41.-uTime*2.);
  if(uv.y>surf) c=mix(vec3(.37,.8,.7),vec3(.75,.95,.88),step(.6,noise(vec2(p.x*30.,uTime*1.5))));
  // A manta glides far behind, once in a while.
  float mt=mod(uTime,38.);
  vec2 mp=vec2(uAsp+.3-mt*.07,.68+.05*sin(mt*.3));
  vec2 mq=p-mp;
  float flap=sin(uTime*1.6)*.35;
  float wing=.06*(1.-abs(mq.x)/.17)+mq.x*mq.x*flap*1.5;
  if(abs(mq.x)<.17&&mq.y<wing&&mq.y>-.025*(1.-abs(mq.x)/.17)) c=mix(c,vec3(.05,.2,.27),.55);
  if(mq.x>-.01&&mq.x<.15&&abs(mq.y+.005)<.004) c=mix(c,vec3(.05,.2,.27),.5);
  // Far rocks, then three depths of kelp, haze between them.
  float rock=.2+.08*fbm(vec2(p.x*3.+m.x*.3,1.))+.05*sin(p.x*2.);
  if(uv.y<rock) c=mix(vec3(.04,.18,.24),c,.35);
  float h,lf;
  vec2 p1=p+vec2(m.x*.04,0.);
  if(kelpLayer(p1,.11,3.,.1,.5,.025,.004,h,lf)>0.) c=mix(c,mix(vec3(.08,.3,.3),vec3(.13,.43,.4),h),.75);
  vec2 p2=p+vec2(m.x*.1,0.);
  float kh=kelpLayer(p2,.17,9.,.06,.75,.04,.006,h,lf);
  if(kh>0.) c=mix(vec3(.09,.24,.17),vec3(.27,.5,.25),h*.8+lf*.25);
  // Sea floor: sand with dancing caustics and a few stones.
  float floorY=.13+.03*sin(p.x*3.+1.)+.015*fbm(vec2(p.x*8.,2.));
  if(uv.y<floorY){
    float depth=sat((floorY-uv.y)/floorY);
    c=mix(vec3(.6,.55,.36),vec3(.28,.32,.24),depth);
    vec2 cp=p*7.;
    float ca=abs(fbm(cp+uTime*.25)-fbm(cp*1.1-uTime*.2+4.));
    c+=vec3(.6,.9,.75)*smoothstep(.06,0.,ca)*.45*(1.-depth);
    vec2 sc=floor(p*vec2(30.,60.));
    if(hash(sc)>.985) c=vec3(.3,.34,.25);
  }
  // Fish, swimming among the near kelp.
  float fa;
  vec3 fc=fish(p,uTime*.9,fa);
  if(fa>0.) c=fc;
  vec2 p3=p+vec2(m.x*.2,0.);
  kh=kelpLayer(p3,.29,17.,-.02,.95,.05,.009,h,lf);
  if(kh>0.){
    c=mix(vec3(.05,.15,.1),vec3(.22,.42,.16),h*.7+lf*.3);
    // Little golden floats where the blades join the stalk.
    if(lf>.85&&fract((p3.y+.02)/.045)<.25) c=vec3(.7,.63,.22);
  }
  // Bubbles rising from the floor, and a burst where you click.
  for(int i=0;i<10;i++){
    float fi=float(i);
    float bx=hash1(fi*9.1)*uAsp;
    float by=fract(uTime*(.07+.05*hash1(fi*3.3))+hash1(fi));
    vec2 bp=vec2(bx+.012*sin(uTime*3.+fi*2.),by*1.1-.05);
    float r=.004+.004*hash1(fi*2.);
    float d=length(p-bp);
    if(abs(d-r)<.0022) c=vec3(.75,.95,.88);
  }
  if(uClick<3.){
    for(int i=0;i<14;i++){
      float fi=float(i);
      vec2 bp=vec2(uClickPos.x*uAsp+(hash1(fi)-.5)*.08+.01*sin(uClick*6.+fi),uClickPos.y+uClick*(.08+.1*hash1(fi*4.))-.02);
      float d=length(p-bp), r=.003+.005*hash1(fi*7.);
      if(abs(d-r)<.0022) c=vec3(.85,1.,.94);
    }
  }
  // Distance haze toward the deep.
  c=mix(c,vec3(.02,.09,.14),.25*smoothstep(.5,0.,uv.y)*(1.-step(uv.y,floorY)));
  return c;
}`,
});
