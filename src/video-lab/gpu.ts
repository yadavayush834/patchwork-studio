import type { Settings } from "./catalog";

// Original image-space effects. No network resources or third-party shader code.
export const gpuStyles = [
  "duotone",
  "gradient",
  "posterize",
  "thermal",
  "rgb",
  "scanline",
  "crt",
  "gaussian",
  "ripple",
  "fluted",
  "frosted",
  "orb",
  "shatter",
  "tinted",
  "vitrine",
  "aberration",
  "anaglyph",
  "dreamdust",
  "edgeglow",
  "kaleidoscope",
  "lightwind",
  "prism",
  "warpbloom",
  "chrome",
  "emboss",
  "marble",
  "molten",
  "thinfilm",
  "waves",
  "glitch",
  "beacon",
  "datamosh",
  "digital",
  "forensics",
  "lofi",
  "pixelsort",
  "motion",
  "radial",
  "tiltshift",
  "pinch",
  "polar",
  "shear",
  "smudge",
  "spherize",
  "twirl",
  "zigzag",
  "droste",
  "disco",
  "watercolor",
  "oil",
];
const vertex = `#version 300 es
in vec2 p; out vec2 uv; void main(){uv=(p+1.)*.5;gl_Position=vec4(p,0,1);}`;
const fragment = `#version 300 es
precision highp float;
in vec2 uv; out vec4 frag; uniform sampler2D image,previous; uniform vec2 size; uniform int mode;
uniform float amount,cell,time,seed; uniform vec3 fg,bg;
float lum(vec3 c){return dot(c,vec3(.2126,.7152,.0722));}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7))+seed*74.7)*43758.5453);}
vec3 tex(vec2 p){return texture(image,clamp(p,vec2(0),vec2(1))).rgb;}
vec3 ramp(float l){return clamp(abs(fract(l+vec3(0,.33,.67))*6.-3.)-1.,0.,1.);}
vec3 blur(vec2 p,vec2 direction){vec3 c=vec3(0);for(int i=-8;i<=8;i++){float f=float(i)/8.; c+=tex(p+direction*f)*exp(-f*f*2.);}return c/10.27172;}
void main(){
 vec2 p=vec2(uv.x,1.-uv.y), d=p-.5, px=1./size; float r=length(d),a=atan(d.y,d.x),k=amount,s=max(4.,cell);
 vec2 q=p; vec3 c=tex(p); float l=lum(c); vec2 grad=vec2(lum(tex(p+vec2(px.x*2.,0)))-lum(tex(p-vec2(px.x*2.,0))),lum(tex(p+vec2(0,px.y*2.)))-lum(tex(p-vec2(0,px.y*2.))));
 float e=length(grad);
 if(mode==0)c=mix(bg,fg,l);
 if(mode==1)c=ramp(l*.8+k*.3);
 if(mode==2)c=floor(c*(2.+k*7.))/(2.+k*7.);
 if(mode==3)c=mix(vec3(0,0,.15),ramp(.75-l*.8),smoothstep(0.,.2,l));
 if(mode==4)c=vec3(tex(p+vec2(k*.045,0)).r,c.g,tex(p-vec2(k*.045,0)).b);
 if(mode==5)c*=1.-k*.65*step(.45,fract(p.y*size.y/3.));
 if(mode==6){q=.5+d*(1.+k*r*r*.5);c=tex(q);c*=.7+.3*sin(p.y*size.y*2.);c*=1.-smoothstep(.35,.75,r)*k;c*=vec3(.85,1.1,.95);}
 if(mode==7)c=blur(p,vec2(px.x*k*25.,0));
 if(mode==50)c=blur(p,vec2(0,px.y*k*25.));
 if(mode==8)c=tex(p+normalize(d+vec2(.0001))*sin(r*80.-time*2.)*.025*k);
 if(mode==9){q.x+=sin(p.x*size.x/s*6.283)*s/size.x*k;c=tex(q)*(.85+.15*cos(p.x*size.x/s*6.283));}
 if(mode==10){vec2 tile=floor(p*size/s);q+=vec2(hash(tile),hash(tile+9.))*.045*k;c=blur(q,px*s*.2*k);}
 if(mode==11){float f=sqrt(max(0.,1.-r*r*4.));c=tex(.5+d*(1.-k*f*.7));c+=pow(max(0.,1.-length(d-vec2(-.13,-.17))*4.),12.)*.6;}
 if(mode==12){vec2 t=floor(p*size/(s*3.));float n=hash(t);q+=vec2(n-.5,hash(t+2.)-.5)*k*.15;c=tex(q);float line=min(fract(p.x*size.x/(s*3.)),fract(p.y*size.y/(s*3.)));c+=step(line,.025)*.7;}
 if(mode==13){vec2 t=floor(p*size/(s*2.));c=tex(p+vec2(hash(t)-.5,hash(t+2.)-.5)*k*.025)*mix(vec3(.5),ramp(hash(t)),.4);vec2 f=fract(p*size/(s*2.));c*=smoothstep(0.,.06,min(min(f.x,1.-f.x),min(f.y,1.-f.y)));}
 if(mode==14){vec2 f=fract(p*size/(s*2.))-.5;q+=f*vec2(abs(f.y),abs(f.x))*.15*k;c=tex(q)*(1.+.3*length(f));}
 if(mode==15){vec2 offset=d*r*k*.12;c=vec3(tex(p+offset).r,c.g,tex(p-offset).b);}
 if(mode==16)c=vec3(tex(p+vec2(k*.025,0)).r,tex(p-vec2(k*.025,0)).gb);
 if(mode==17){float dust=hash(floor((p+vec2(time*.002,-time*.003))*size/3.));c+=vec3(1.,.75,.9)*pow(dust,70.)*k*1.5;c=mix(c,blur(p,px*8.),.2*k);}
 if(mode==18)c=mix(bg,fg,clamp(e*12.*k,0.,1.))+vec3(.1,.2,.1)*e;
 if(mode==19){float n=3.+floor(k*9.);a=abs(mod(a,6.283/n)-3.14159/n);c=tex(.5+vec2(cos(a),sin(a))*r);}
 if(mode==20){c=tex(p);for(int i=1;i<12;i++){vec3 v=tex(p-vec2(float(i)*.012*k,sin(p.y*50.)*.002));c+=v*pow(lum(v),4.)*.2;}}
 if(mode==21){c=vec3(tex(p+vec2(k*.03,k*.015)).r,tex(p).g,tex(p-vec2(k*.03,k*.015)).b);c+=ramp(fract(p.x+p.y))*.15*k;}
 if(mode==22){vec2 warp=grad*k*.5;c=tex(p+warp);vec3 b=blur(p+warp,px*24.*k);c+=b*b*k;}
 if(mode==23){float metal=.5+.5*sin(l*22.+grad.x*50.);c=mix(vec3(.04,.07,.1),vec3(.95,1.,1.),metal);c+=pow(max(0.,dot(normalize(vec3(-grad*20.,1.)),normalize(vec3(-1.,-1.,1.)))),16.);}
 if(mode==24){float relief=.5+(grad.x+grad.y)*7.*k;c=vec3(.85,.78,.62)*relief;}
 if(mode==25){float vein=sin(p.x*18.+sin(p.y*14.+l*10.)*3.+l*22.);c=mix(vec3(.12,.16,.22),vec3(.9,.88,.83),smoothstep(-.5,.15,vein));c*=.7+.3*l;}
 if(mode==26){float m=.5+.5*sin(l*25.+grad.y*40.);c=mix(vec3(.08,.025,.01),vec3(1.,.35,.025),m);c+=vec3(1.,.85,.4)*pow(m,8.)*k;}
 if(mode==27)c=mix(c,ramp(l*2.+r*2.+e*8.),.4+k*.6)*(.5+l);
 if(mode==28)c=tex(p+vec2(sin(p.y*35.+time),cos(p.x*28.+time))*.025*k);
 if(mode==29){float n=hash(vec2(floor(p.y*40.),floor(time*8.)));q.x+=step(.7,n)*(n-.5)*k*.25;c=vec3(tex(q+vec2(.012*k,0)).r,tex(q).g,tex(q-vec2(.012*k,0)).b);c*=.8+.2*sin(p.y*size.y*2.);}
 if(mode==30){c*=.6;for(int i=1;i<16;i++){vec3 b=tex(p+vec2(float(i)*.006*k,-float(i)*.012*k));c+=b*pow(lum(b),5.)*.15;}}
 if(mode==31){vec2 tile=floor(p*size/(s*2.));float n=hash(tile);q.x-=sin(time*3.+n*6.)*.12*k*n;q.y-=cos(n*7.+time)*.04*k;vec3 old=texture(previous,clamp(q,vec2(0),vec2(1))).rgb;c=mix(tex(p),old,step(.35,n)*k);c=floor(c*12.)/12.;}
 if(mode==32){float n=hash(vec2(floor(p.y*size.y/s),floor(time*12.)));q.x+=(n-.5)*k*.2;c=vec3(tex(q+vec2(.02*k,0)).r,tex(q).g,tex(q-vec2(.02*k,0)).b);c+=step(.96,hash(floor(p*size/4.)))*k;}
 if(mode==33){vec3 quant=floor(c*15.)/15.;c=ramp(clamp(length(c-quant)*25.*k,0.,1.));}
 if(mode==34){q.x+=sin(p.y*70.+time*3.)*.003*k;c=mix(vec3(l),tex(q),.55);c=c*.8+.08;c+=(hash(floor(p*size)+floor(time*24.))-.5)*k*.15;}
 if(mode==35){vec3 best=c;for(int i=1;i<24;i++){vec3 v=tex(p-vec2(float(i)*px.x*s*k,0));if(lum(v)>.35&&lum(v)<.8&&lum(v)>lum(best))best=v;}c=mix(c,best,k);}
 if(mode==36)c=blur(p,vec2(k*.09,k*.025));
 if(mode==37){c=vec3(0);for(int i=0;i<16;i++){float f=float(i)/15.;c+=tex(.5+d*(1.-f*k*.25));}c/=16.;}
 if(mode==38){float f=smoothstep(.07,.35,abs(p.y-.5));c=blur(p,vec2(k*.035*f,0))*.5+blur(p,vec2(0,k*.035*f))*.5;}
 if(mode==39)c=tex(.5+d*pow(max(r*2.,.001),-k*.65));
 if(mode==40)c=tex(vec2(a/6.283+.5,r*1.4));
 if(mode==41)c=tex(p+vec2((p.y-.5)*k*.6,0));
 if(mode==42)c=blur(p+vec2(sin(p.y*12.)*l*.1*k,0),vec2(l*.06*k,0));
 if(mode==43)c=tex(.5+d*(1.-k*.65*max(0.,1.-r*1.5)));
 if(mode==44){a+=max(0.,.7-r)*k*8.;c=tex(.5+r*vec2(cos(a),sin(a)));}
 if(mode==45)c=tex(p+vec2(abs(fract(p.y*12.)-.5)-.25,abs(fract(p.x*12.)-.5)-.25)*k*.15);
 if(mode==46){float rr=max(abs(d.x),abs(d.y));float level=floor(-log2(max(rr*2.,.0001)));a+=level*k*.4;c=tex(.5+vec2(cos(a),sin(a))*r*exp2(level));}
 if(mode==47){float z=sqrt(max(0.,1.-4.*r*r));q=vec2(atan(d.x,z)/6.283+.5,asin(clamp(d.y*2.,-1.,1.))/3.14159+.5);q=floor(q*size/s)*s/size;c=tex(q)*(.4+z);c+=pow(hash(floor(q*size/s)),40.)*k;c*=1.-smoothstep(.49,.5,r);}
 if(mode==48){vec3 wash=blur(p+grad*k*.02,px*s*.3);c=mix(vec3(1.,.97,.9),floor(wash*7.)/7.,.8);c-=e*.5;c+=(hash(floor(p*size))-.5)*.09;}
 if(mode==49){vec2 direction=normalize(vec2(-grad.y,grad.x)+vec2(.00001));vec3 paint=blur(p,direction*px*s*.7);c=floor(paint*9.)/9.;c+=sin(dot(p*size,direction)*1.8)*e*.4;}
 c=mix(tex(p),c,min(1.,amount*1.6));
 frag=vec4(clamp(c,0.,1.),1.);
}`;
function color(hex: string) {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
}
export class GPU {
  private intermediate = new OffscreenCanvas(2, 2);
  canvas: OffscreenCanvas;
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram;
  private texture: WebGLTexture;
  private previous: WebGLTexture;
  constructor() {
    this.canvas = new OffscreenCanvas(2, 2);
    const gl = this.canvas.getContext("webgl2", {
      preserveDrawingBuffer: true,
      premultipliedAlpha: false,
    });
    if (!gl)
      throw new Error(
        "Video Lab needs WebGL 2. Enable graphics acceleration in your browser.",
      );
    this.gl = gl;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        throw new Error(
          gl.getShaderInfoLog(shader) || "Effect compilation failed",
        );
      return shader;
    };
    const vs = compile(gl.VERTEX_SHADER, vertex),
      fs = compile(gl.FRAGMENT_SHADER, fragment),
      program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
      throw new Error("Could not initialize video effects.");
    this.program = program;
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const attr = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);
    this.texture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    this.previous = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, this.previous);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }
  render(
    source: OffscreenCanvas,
    id: string,
    s: Settings,
    time: number,
    reference?: OffscreenCanvas,
  ) {
    const gl = this.gl;
    if (gl.isContextLost())
      throw new Error(
        "Graphics context lost. Close and reopen Video Lab to recover.",
      );
    this.canvas.width = source.width;
    this.canvas.height = source.height;
    gl.viewport(0, 0, source.width, source.height);
    gl.useProgram(this.program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    const u = (n: string) => gl.getUniformLocation(this.program, n);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.previous);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      reference || source,
    );
    gl.uniform1i(u("previous"), 1);
    gl.uniform1i(u("image"), 0);
    gl.uniform1i(u("mode"), gpuStyles.indexOf(id));
    gl.uniform2f(u("size"), source.width, source.height);
    for (const [n, v] of Object.entries({
      amount: s.amount,
      cell: s.cell,
      time,
      seed: s.seed,
    }))
      gl.uniform1f(u(n), v);
    gl.uniform3fv(u("fg"), color(s.foreground));
    gl.uniform3fv(u("bg"), color(s.background));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (id === "gaussian") {
      this.intermediate.width = source.width;
      this.intermediate.height = source.height;
      this.intermediate.getContext("2d")!.drawImage(this.canvas, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        this.intermediate,
      );
      gl.uniform1i(u("mode"), 50);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    return this.canvas;
  }
  dispose() {
    this.gl.getExtension("WEBGL_lose_context")?.loseContext();
  }
}
