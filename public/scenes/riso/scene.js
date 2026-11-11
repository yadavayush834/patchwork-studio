/* Riso Swell: a two-ink risograph print that moves. Each ink is its own plate with its own grain;
   where they overlap they multiply, like real overprint. The pointer knocks the plates out of
   register and lifts the sun; a click re-inks the whole print in the next pair of colours. */
(() => {
  const values = { uInk: 0 };
  let lastClick = 1e3;
  PixelScene({
    palette: ["#f4eee0"],
    raw: true,
    mouse: [0.5, 0.5],
    uniforms: ["uInk"],
    values,
    idle: (t) => [0.5 + 0.22 * Math.sin(t * 0.19), 0.5 + 0.12 * Math.sin(t * 0.27)],
    tick: (t, st) => {
      if (st.click < lastClick) values.uInk = (values.uInk + 1) % 3;
      lastClick = st.click;
    },
    frag: `
vec3 inkA(){return uInk<.5?vec3(1.,.36,.62):uInk<1.5?vec3(1.,.48,.2):vec3(1.,.83,.2);}
vec3 inkB(){return uInk<.5?vec3(.13,.45,.75):uInk<1.5?vec3(.18,.3,.62):vec3(.45,.24,.6);}
// Plate A: the sun, its broken reflection, the sail and the crest lines.
float plateA(vec2 uv){
  vec2 p=vec2(uv.x*uAsp,uv.y);
  float hor=.34;
  vec2 sun=vec2(.64*uAsp,.56+(uMouse.y-.5)*.16);
  float d=length(p-sun);
  float cov=0.;
  if(uv.y>hor){
    // Retro sun: solid on top, sliced by ever-wider gaps toward the horizon.
    float slice=step(.5,fract((uv.y-hor)*38.))+smoothstep(sun.y-.02,sun.y+.08,uv.y);
    cov=step(d,.2)*sat(slice);
    cov=max(cov,.28*smoothstep(.45,.2,d));
  }else{
    // Sun road: short dashes that shimmer on the swell.
    float z=(hor-uv.y)/hor;
    float dash=step(.55,noise(vec2(p.x*(30.-z*18.),uv.y*90.-uTime*1.4)));
    cov=dash*smoothstep(.22+z*.12,0.,abs(p.x-sun.x))*.95;
    // Foam crests, as fine lines.
    float rows=(hor-uv.y)*(10./(z+.25));
    float crest=fract(rows-uTime*.35+.15*sin(p.x*6.+floor(rows)));
    cov=max(cov,step(crest,.07)*(.35+.4*z));
  }
  // The sail.
  vec2 b=p-vec2(.42*uAsp,.35+.008*sin(uTime*1.7));
  b.x-=.006*sin(uTime*1.7)*b.y*10.;
  if(b.y>.02&&b.y<.17&&b.x>0.&&b.x<.09*(1.-(b.y-.02)/.15)) cov=1.;
  return cov;
}
// Plate B: sky screen, the sea body, hull, mast and gulls.
float plateB(vec2 uv){
  vec2 p=vec2(uv.x*uAsp,uv.y);
  float hor=.34;
  float cov=0.;
  if(uv.y>hor){
    cov=smoothstep(.62,1.,uv.y)*.75;
    // Clouds printed as solid ink shapes.
    float cl=fbm(vec2(p.x*1.6-uTime*.02,uv.y*5.));
    cov=max(cov,step(.6,cl)*smoothstep(.6,.8,uv.y)*.9);
  }else{
    float z=(hor-uv.y)/hor;
    float rows=(hor-uv.y)*(10./(z+.25));
    float band=fract(rows-uTime*.35+.15*sin(p.x*6.+floor(rows)));
    cov=.45+.45*z+.25*step(band,.45);
  }
  // Hull and mast.
  vec2 b=p-vec2(.42*uAsp,.35+.008*sin(uTime*1.7));
  b.x-=.006*sin(uTime*1.7)*b.y*10.;
  if(b.y>-.01&&b.y<.022&&abs(b.x-.045)<.07-(.022-b.y)*1.4) cov=1.;
  if(abs(b.x+.002)<.003&&b.y>0.&&b.y<.19) cov=1.;
  // Gulls.
  for(int i=0;i<4;i++){
    float fi=float(i);
    vec2 g=p-vec2(mod(.3+fi*.45+uTime*.03*(1.+fi*.2),uAsp+.2)-.1,.72+.06*sin(fi*2.3)+.01*sin(uTime*.7+fi));
    float flap=.5+.45*sin(uTime*5.+fi*1.3);
    if(abs(g.x)<.03&&abs(g.y-abs(g.x)*flap)<.0035) cov=1.;
  }
  return cov;
}
float grain(vec2 px,float seed){return .82+.36*noise(px*.45+seed);}
vec3 scene(vec2 uv,vec2 px){
  // The two drums never quite agree: plate B sits a few pixels off, more as the pointer moves.
  vec2 off=(uMouse-.5)*vec2(.03,.03)+vec2(.003,-.002);
  float a=plateA(uv)*grain(px,1.);
  float b=plateB(uv+off)*grain(px,7.);
  // Each plate screens its tone with its own pattern.
  float ta=bayer4(px), tb=fract(bayer4(px.yx+vec2(1.,2.))+.37*hash(floor(px/2.)));
  vec3 paper=vec3(.96,.93,.87)-.035*hash(floor(px));
  vec3 c=paper;
  if(a>ta) c*=inkA();
  if(b>tb) c*=inkB();
  return c;
}`,
  });
})();
