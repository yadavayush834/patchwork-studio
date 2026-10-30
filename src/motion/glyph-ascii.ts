/** Original sampled surfaces, projected through a character-cell depth buffer. */
type Point = [number, number, number, number, number, number, number];
const TAU = Math.PI * 2;
export class GlyphObservatory {
  private points: Point[][] = [[], [], []];
  private cols = 164;
  private rows = 92;
  private depth = new Float32Array(this.cols * this.rows);
  private light = new Float32Array(this.cols * this.rows);
  private ink = new Uint8Array(this.cols * this.rows);
  constructor(mobile = false) {
    if(mobile){this.cols=108;this.rows=82;this.depth=new Float32Array(this.cols*this.rows);this.light=new Float32Array(this.cols*this.rows);this.ink=new Uint8Array(this.cols*this.rows);}
    const add = (scene: number, x: number, y: number, z: number, nx: number, ny: number, nz: number, kind = 0) => this.points[scene].push([x,y,z,nx,ny,nz,kind]);
    // An armillary instrument: a luminous core held inside three independent gimbals.
    for(let j=1;j<85;j++)for(let i=0;i<190;i++){
      const a=i/190*TAU,b=j/85*Math.PI;
      const r=.68+Math.sin(a*12)*Math.sin(b*9)*.025;
      add(0,Math.sin(b)*Math.cos(a)*r,Math.cos(b)*r,Math.sin(b)*Math.sin(a)*r,Math.sin(b)*Math.cos(a),Math.cos(b),Math.sin(b)*Math.sin(a),0);
    }
    for(let ring=0;ring<3;ring++)for(let i=0;i<400;i++)for(let j=0;j<16;j++){
      const a=i/400*TAU,b=j/16*TAU,r=1.02+ring*.23;
      let x=(r+.055*Math.cos(b))*Math.cos(a),y=(r+.055*Math.cos(b))*Math.sin(a),z=.055*Math.sin(b);
      if(ring===1){const t=y;y=z;z=t}if(ring===2){const t=x;x=z;z=t}
      add(0,x,y,z,Math.cos(a)*Math.cos(b),Math.sin(a)*Math.cos(b),Math.sin(b),ring+1);
    }
    // A long vaulted arcade. Every arch is an actual point surface in depth.
    for(let arch=0;arch<15;arch++){
      const z=arch*1.6;
      for(let i=0;i<150;i++)for(let j=0;j<9;j++){
        const a=i/149*Math.PI,r=1.45+j*.012;
        add(1,Math.cos(a)*r,-.25-Math.sin(a)*r,z,Math.cos(a),-Math.sin(a),.5,arch%3);
      }
      for(let side=-1;side<=1;side+=2)for(let y=0;y<70;y++)for(let j=0;j<10;j++)add(1,side*(1.45+j*.013),-.25+y*.025,z,side,0,.6,arch%3);
      for(let x=0;x<90;x++)for(let y=0;y<14;y++)add(1,(x/89-.5)*3.3,1.5,z+y*.1,0,-1,.4,3);
    }
    // A typographic constellation sampled from original text; no raster art is shipped.
    const mask=document.createElement('canvas');mask.width=700;mask.height=220;
    const mc=mask.getContext('2d')!;mc.fillStyle='white';mc.font='900 100px monospace';mc.textAlign='center';mc.fillText('STAY',350,95);mc.fillText('CURIOUS',350,200);
    const data=mc.getImageData(0,0,700,220).data;
    for(let y=0;y<220;y+=3)for(let x=0;x<700;x+=3)if(data[(y*700+x)*4+3]>120)add(2,(x-350)/180,(y-110)/180,0,0,0,1,1);
    for(let i=0;i<3500;i++){const a=i*2.399963,b=Math.acos(1-2*(i+.5)/3500);add(2,Math.sin(b)*Math.cos(a)*2,Math.cos(b)*2,Math.sin(b)*Math.sin(a)*2,0,0,1,0)}
  }
  render(ctx: CanvasRenderingContext2D, scene: number, progress: number, time: number, mobile: boolean, reduced: boolean) {
    const w=ctx.canvas.width,h=ctx.canvas.height,cols=this.cols,rows=this.rows;
    this.depth.fill(-Infinity);this.light.fill(0);this.ink.fill(0);
    const p=progress, t=reduced?0:time;
    const yaw=scene===1?Math.sin(p*5)*.09:scene===2?.1*Math.sin(t*.12)*(1-p):.55+t*.09+p*1.7;
    const pitch=scene===1?0:scene===2?0:.2+Math.sin(p*3)*.15;
    const cy=Math.cos(yaw),sy=Math.sin(yaw),cx=Math.cos(pitch),sx=Math.sin(pitch);
    for(let i=0;i<this.points[scene].length;i++){
      const point=this.points[scene][i];let [x,y,z,nx,ny,nz,kind]=point;
      if(scene===0){const split=Math.sin(p*Math.PI)*.7;if(kind===1)x+=split*1.2;if(kind===2)y-=split;if(kind===3)z+=split*2;}
      if(scene===1){z-=p*17;z=((z+3)%24+24)%24-3;x+=Math.sin(p*5)*.15;}
      if(scene===2){if(kind===0&&i%3!==0)continue;const assembly=Math.min(1,p/ .78);const scatter=(1-assembly);const a=i*2.399;const r=2+Math.sin(i*7)*.8;x=x*assembly+Math.cos(a+t*.08)*r*scatter;y=y*assembly+Math.sin(a+t*.08)*r*scatter;z=z*scatter+Math.sin(i)*scatter;if(kind===0){x*=1.3;y*=1.3;z=-3+z*.15;}}
      const xx=x*cy+z*sy,zz=-x*sy+z*cy,yy=y*cx-zz*sx,zr=y*sx+zz*cx;
      const camera=scene===1?2.8:scene===2?4.8:4.3-p*.25;
      const distance=scene===1?zr+camera:camera-zr;
      if(distance<.2)continue;
      const scale=(scene===1?52:scene===2?125:98)*(mobile?.72:1);
      const px=Math.round(cols/2+xx*scale*1.5/distance),py=Math.round(rows/2+yy*scale/distance);
      if(px<1||px>=cols-1||py<1||py>=rows-1)continue;
      const index=py*cols+px,depth=-distance;
      if(depth<this.depth[index])continue;
      this.depth[index]=depth;
      const nnx=nx*cy+nz*sy,nnz=-nx*sy+nz*cy;
      const lit=scene===1?Math.max(.15,1-distance/24):Math.max(.12,nnx*-.4+ny*-.6+nnz*.65)*.8+.18;
      this.light[index]=scene===2?(kind===1?1:.14):Math.min(1,lit+.2+(kind? .2:0));this.ink[index]=kind+1;
    }
    ctx.fillStyle='#080b0b';ctx.fillRect(0,0,w,h);
    const cell=Math.min(w/(cols*8),h/(rows*12));const cw=8*cell,ch=12*cell,ox=(w-cols*cw)/2,oy=(h-rows*ch)/2;
    ctx.font=`${Math.max(5,11*cell)}px "Space Mono",monospace`;ctx.textAlign='center';ctx.textBaseline='middle';
    const chars='·:;-=+*#%@';
    const colors=['#35413c','#839a7d','#b2cc9c','#d5e6b7','#f5fad8'];
    for(let bucket=0;bucket<5;bucket++){
      ctx.fillStyle=colors[bucket];
      for(let i=0;i<this.light.length;i++){
        const lit=this.light[i];if(!lit||Math.min(4,Math.floor(lit*5))!==bucket)continue;
        const char=scene===1&&this.ink[i]===4?'─':chars[Math.min(9,Math.floor(lit*9))];
        ctx.fillText(char,ox+(i%cols)*cw,oy+Math.floor(i/cols)*ch);
      }
    }
    // Fine instrument registration marks and a restrained phosphor scan line.
    ctx.strokeStyle='#a9c69525';ctx.lineWidth=1;
    for(const [x,y]of [[w*.04,h*.08],[w*.96,h*.08],[w*.04,h*.92],[w*.96,h*.92]]){ctx.beginPath();ctx.moveTo(x-8,y);ctx.lineTo(x+8,y);ctx.moveTo(x,y-8);ctx.lineTo(x,y+8);ctx.stroke();}
    if(!reduced){ctx.fillStyle='#dbffc805';ctx.fillRect(0,(t*15)%h,w,2)}
    ctx.canvas.dataset.artFrame=String(Number(ctx.canvas.dataset.artFrame||0)+1);
    ctx.canvas.dataset.artReady='true';
    void mobile;
  }
}
