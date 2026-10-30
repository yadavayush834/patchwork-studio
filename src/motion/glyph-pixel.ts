/** Original 480×300 pixel illustrations. Everything is drawn on an integer grid. */
const W=480,H=300;
const palette={ink:'#232843',shadow:'#303b58',deep:'#405575',rock:'#5a6680',stone:'#aaa0a0',sand:'#d9bd9a',light:'#f8d9ab',roof:'#b15b78',roofLight:'#dc8a91',green:'#4c8172',leaf:'#81ae84',gold:'#f7c576',water:'#75bfc2'};
function hash(n:number){return ((Math.sin(n*127.1+311.7)*43758.5453)%1+1)%1}
export class PixelExpedition {
  private ctx!:CanvasRenderingContext2D;
  private r(x:number,y:number,w:number,h:number,color:string){this.ctx.fillStyle=color;this.ctx.fillRect(Math.round(x),Math.round(y),Math.ceil(w),Math.ceil(h))}
  private poly(points:number[][],color:string){this.ctx.fillStyle=color;this.ctx.beginPath();points.forEach(([x,y],i)=>i?this.ctx.lineTo(Math.round(x),Math.round(y)):this.ctx.moveTo(Math.round(x),Math.round(y)));this.ctx.closePath();this.ctx.fill()}
  private tree(x:number,y:number,size=1){const r=this.r.bind(this);r(x-1,y,3,17*size,palette.shadow);for(let i=0;i<4;i++){const w=(19-i*3)*size;r(x-w/2,y-8-i*5*size,w,8*size,i%2?palette.leaf:palette.green);r(x-w/2,y-8-i*5*size,w/3,4*size,'#b3c694')}r(x+3,y+5,8,2,palette.ink)}
  private house(x:number,y:number,w:number,h:number,roof:string=palette.roof){const r=this.r.bind(this);r(x+2,y+2,w,h,palette.ink);r(x,y,w,h,palette.sand);r(x+w*.65,y,w*.35,h,palette.stone);r(x+2,y+3,w*.6,2,palette.light);this.poly([[x-3,y],[x+w/2,y-w*.42],[x+w+3,y]],roof);r(x-3,y, w+6,2,palette.ink);for(let i=0;i<Math.floor(w/6);i++)r(x+i*6,y-w*.13,3,1,palette.roofLight);for(let i=0;i<Math.floor(w/9);i++){r(x+4+i*9,y+7,3,6,palette.ink);r(x+4+i*9,y+8,2,3,palette.gold)}r(x+w/2-2,y+h-8,5,8,palette.shadow);r(x+w/2,y+h-8,1,8,palette.light)}
  private tower(x:number,y:number,w:number,h:number){const r=this.r.bind(this);r(x,y,w,h,palette.stone);r(x,y,w*.6,h,palette.sand);for(let j=0;j<h;j+=6)for(let i=0;i<w;i+=7)r(x+i+(j%12?3:0),y+j,4,1,'#bcae9c');for(let j=8;j<h;j+=14){r(x+w/2-2,y+j,4,8,palette.shadow);r(x+w/2-1,y+j+1,2,4,palette.gold)}this.poly([[x-4,y],[x+w/2,y-15],[x+w+4,y]],palette.roof);r(x+w/2,y-26,1,11,palette.ink);this.poly([[x+w/2+1,y-26],[x+w/2+12,y-23],[x+w/2+1,y-20]],palette.gold)}
  private cloud(x:number,y:number,s:number){const r=this.r.bind(this);r(x,y,34*s,5*s,'#f6d9bd');r(x+6*s,y-5*s,20*s,6*s,'#f6d9bd');r(x+12*s,y-9*s,10*s,6*s,'#f6d9bd');r(x+4*s,y+4*s,26*s,2*s,'#b9a6ba')}
  private island(cx:number,cy:number,size:number,seed:number,t:number,detail=true){
    const r=this.r.bind(this);const half=size/2;
    this.poly([[cx-half,cy],[cx-half*.8,cy+12],[cx-half*.45,cy+size*.42],[cx,cy+size*.65],[cx+half*.48,cy+size*.26],[cx+half,cy+3]],palette.ink);
    this.ctx.save();this.ctx.clip();
    for(let i=0;i<60;i++){const x=cx-half+hash(i+seed)*size,y=cy+hash(i*3+seed)*size*.45;const width=size*(.22+hash(i)*.2)*(1-(y-cy)/(size*.6));r(x,y,Math.max(2,width),3+hash(i*4)*6,i%3?palette.rock:palette.shadow)}
    this.ctx.restore();
    this.poly([[cx-half,cy],[cx-half*.65,cy-10],[cx+half*.2,cy-14],[cx+half,cy],[cx+half*.7,cy+8],[cx-half*.6,cy+10]],palette.green);
    for(let i=0;i<80;i++){const x=cx-half+hash(i+seed)*size,y=cy-5+hash(i*7)*12;r(x,y,1+hash(i*8)*3,1,i%4?palette.leaf:palette.light)}
    // A segmented waterfall, with highlights moving down while the land stays solid.
    r(cx+half*.57,cy+3,7,size*.58,palette.deep);r(cx+half*.58,cy+4,4,size*.57,palette.water);
    for(let i=0;i<8;i++){const y=cy+5+((i*7+t*9)%(size*.55));r(cx+half*.58,y,3,2,'#dcf7da')}
    if(detail){this.house(cx-25,cy-31,29,30);this.tower(cx+8,cy-58,17,60);this.house(cx+33,cy-21,20,21,'#757dab');this.tree(cx-half*.65,cy-8,.8);this.tree(cx+half*.78,cy-1,.6)}
  }
  render(ctx:CanvasRenderingContext2D,scene:number,p:number,time:number,reduced:boolean){
    this.ctx=ctx;const r=this.r.bind(this),t=reduced?0:time;
    r(0,0,W,H,scene===1?'#212b4c':'#52678d');
    // Stepped palette bands keep the sky strictly pixel art, without smooth gradients.
    const bands=scene===1?['#202744','#2d3553','#414763','#65566c','#93737c']:['#52678d','#6d7f9e','#93a0b5','#bab3bf','#e4c5bd'];
    for(let band=0;band<60;band++){
      const f=band/59*4,index=Math.min(3,Math.floor(f)),mix=f-index;
      const a=parseInt(bands[index].slice(1),16),b=parseInt(bands[index+1].slice(1),16);
      const channel=(shift:number)=>Math.round(((a>>shift)&255)*(1-mix)+((b>>shift)&255)*mix);
      r(0,band*5,W,5,`rgb(${channel(16)},${channel(8)},${channel(0)})`);
    }
    for(let i=0;i<170;i++){const x=hash(i)*W,y=hash(i+500)*190;if(scene===1||i%5===0){r(x,y,1,i%19?1:2,i%3?'#e8d6b3':'#9eb8c6');if(i%29===0){r(x-2,y,5,1,'#e8d6b3');r(x,y-2,1,5,'#e8d6b3')}}}
    const moonX=scene===1?365:92,moonY=47;
    for(let row=-14;row<=14;row++){const half=Math.floor(Math.sqrt(196-row*row));r(moonX-half,moonY+row,half*2+1,1,palette.light)}
    if(scene===1)for(let row=-13;row<=13;row++){const half=Math.floor(Math.sqrt(169-row*row));r(moonX-7-half,moonY-3+row,half*2+1,1,'#2d3553')}
    for(let layer=0;layer<3;layer++){
      const pts:number[][]=[[0,H]];for(let x=0;x<=W;x+=2){const shift=p*(layer+1)*70;const peak=Math.abs(Math.sin((x+shift)*.014+layer*4))*36+Math.sin((x+shift)*.033)*8;pts.push([x,155+layer*27-peak])}pts.push([W,H]);this.poly(pts,['#7b829d','#5d6c8b','#435b7a'][layer]);
      for(let i=0;i<30;i++){const x=hash(i+layer*700)*W;r(x,150+layer*25,2,1,'#b3bac030')}
    }
    if(scene===0){
      for(let i=0;i<7;i++)this.cloud(((i*94-p*30+t*.25)%640)-50,50+(i%3)*31,.55+i%2*.3);
      const zoom=1+p*.6;ctx.save();ctx.translate(300,176);ctx.scale(zoom,zoom);ctx.translate(-300,-176);
      this.island(300,174,185,24,t,false);
      // Cliff-top settlement with terraces, archways, windmill and pennants.
      r(239,160,125,12,palette.stone);r(236,157,131,4,palette.sand);
      for(let i=0;i<9;i++){r(240+i*14,157,5,5,palette.sand);r(240+i*14,165,10,1,palette.light)}
      this.house(250,133,24,25);this.house(279,117,30,40);this.house(316,138,22,21,'#6f7fa2');this.tower(308,79,17,79);this.tower(345,117,13,43);
      // The gate and clock remain readable as the scroll brings the island closer.
      r(292,145,16,16,palette.ink);r(295,142,10,19,palette.shadow);r(298,147,3,14,palette.gold);
      r(312,89,9,9,palette.light);r(316,91,1,5,palette.shadow);r(316,94,3,1,palette.shadow);
      r(232,124,5,32,palette.sand);const a=t*.35+p*2;for(let i=0;i<4;i++){const angle=a+i*Math.PI/2;this.poly([[234,126],[234+Math.cos(angle)*18,126+Math.sin(angle)*18],[234+Math.cos(angle+.25)*14,126+Math.sin(angle+.25)*14]],palette.light)}
      this.tree(226,160,1);this.tree(365,159,.8);this.tree(275,169,.45);
      for(let i=0;i<12;i++){r(251+i*8,171+Math.sin(i)*2,2,2,i%3?'#f8d9ab':'#dc8a91')}
      r(261,108,67,1,palette.ink);for(let i=0;i<8;i++)this.poly([[262+i*8,108],[267+i*8,108],[264+i*8,114]],i%2?palette.gold:palette.roofLight);
      ctx.restore();
      this.island(85-p*110,202,65,58,t);this.island(443+p*80,153,58,71,t);
      for(let i=0;i<18;i++){const x=hash(i)*W,y=215+hash(i+50)*70;r(x,y,4,1,'#222f48');r(x+2,y-2,1,4,'#222f48')}
    }else if(scene===1){
      // A continuous railway panorama: the camera travels; distant mountains lag behind.
      const offset=p*540;
      r(0,222,W,78,palette.deep);for(let i=0;i<95;i++){const x=hash(i)*W,y=230+hash(i+9)*60;r(x,y,3+hash(i+88)*10,1,i%4?'#597f99':'#b4a6a4')}
      for(let i=-2;i<13;i++){const x=i*58-offset%58;r(x,224,8,76,palette.ink);r(x,224,8,2,palette.stone);this.poly([[x+8,237],[x+29,254],[x+50,237],[x+50,243],[x+29,261],[x+8,243]],palette.shadow)}
      r(0,211,W,12,palette.ink);r(0,211,W,3,palette.stone);for(let x=0;x<W;x+=6)r(x,209,2,3,palette.sand);
      const trainX=140+Math.sin(p*Math.PI)*80;
      for(let car=0;car<3;car++){let x=trainX+car*38;r(x,193,35,16,palette.roof);r(x+2,190,31,4,palette.roofLight);for(let j=0;j<4;j++)r(x+4+j*7,196,4,5,palette.gold);r(x+4,209,5,3,palette.ink);r(x+26,209,5,3,palette.ink)}
      for(let i=0;i<8;i++){const x=trainX-4-i*7,y=180-Math.sin(i*.6+t)*3-i*.8;r(x,y,7,4,'#b0a3af')}
      const lighthouse=390-p*180;this.tower(lighthouse,139,17,71);this.house(lighthouse-25,185,24,25);
      for(let i=0;i<14;i++){const x=((i*47-offset*1.6)%680+680)%680-80;this.tree(x,285,1.6)}
      // Fireflies sit in the foreground instead of a uniform star texture.
      for(let i=0;i<24;i++)if(Math.sin(t*1.4+i)>0)r(hash(i)*W,232+hash(i+99)*60,1,1,palette.gold);
    }else{
      // Seven islands unfold into a route chart, with an advancing traveler.
      const positions=[[75,160],[145,100],[230,150],[322,95],[397,161],[310,224],[170,234]];
      ctx.strokeStyle='#f8d9ab66';ctx.setLineDash([2,4]);ctx.lineWidth=1;ctx.beginPath();positions.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();ctx.setLineDash([]);
      positions.forEach(([x,y],i)=>{const lift=Math.max(0,1-p*2-i*.04)*100;this.island(x,y+lift,45+i%3*9,i*57,t,true);r(x-3,y-70+lift,7,9,palette.light);const digits=['010110010010111','110001010100111','110001010001110','101101111001001','111100110001110','011100110101010','111001010010010'];for(let cell=0;cell<15;cell++)if(digits[i][cell]==='1')r(x-1+cell%3,y-68+lift+Math.floor(cell/3),1,1,palette.shadow)});
      const route=Math.max(0,(p-.45)/.55)*(positions.length-1),index=Math.min(5,Math.floor(route)),f=route-index;const a=positions[index],b=positions[index+1];const x=a[0]+(b[0]-a[0])*f,y=a[1]+(b[1]-a[1])*f+Math.max(0,1-p*2-index*.04)*100*(1-f)+Math.max(0,1-p*2-(index+1)*.04)*100*f-13;
      r(x-2,y-4,5,5,palette.light);r(x-3,y+1,7,6,palette.roofLight);r(x-2,y+7,2,3,palette.ink);r(x+1,y+7,2,3,palette.ink);
    }
    ctx.canvas.dataset.artFrame=String(Number(ctx.canvas.dataset.artFrame||0)+1);ctx.canvas.dataset.artReady='true';
  }
}
