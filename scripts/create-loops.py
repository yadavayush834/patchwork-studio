"""Generate four original, silent, seamlessly looping WebM backgrounds."""
from pathlib import Path
from PIL import Image,ImageDraw
import imageio_ffmpeg,subprocess,math
root=Path(__file__).resolve().parents[1]/'public/assets/backgrounds'
palettes={'pixel':('#e8defa','#9973cf','#5b496c'),'terminal':('#10211c','#2a6856','#a6e7ac'),'scrapbook':('#f9e5d8','#d98666','#758250'),'editorial':('#e1e9db','#92a48b','#35483f')}
for world,(bg,mid,fg) in palettes.items():
 target=root/f'{world}-4.webm'
 proc=subprocess.Popen([imageio_ffmpeg.get_ffmpeg_exe(),'-y','-f','rawvideo','-vcodec','rawvideo','-s','640x360','-pix_fmt','rgb24','-r','12','-i','-','-an','-c:v','libvpx-vp9','-b:v','140k','-pix_fmt','yuv420p',str(target)],stdin=subprocess.PIPE,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
 for frame in range(48):
  phase=frame/48*math.tau;im=Image.new('RGB',(640,360),bg);d=ImageDraw.Draw(im)
  if world=='pixel':
   d.ellipse((450,45,520,115),fill='#fff1cb')
   for j in range(4):
    x=int((j*180+math.sin(phase)*16)%760)-80;y=45+j%2*35;d.rectangle((x,y,x+48,y+16),fill='#f8f1fd');d.rectangle((x+12,y-10,x+35,y+22),fill='#f8f1fd')
   for layer,col in [(0,mid),(1,fg)]:
    for x in range(0,640,32):
     y=220+layer*60+int(math.sin(x/100+layer*2)*30)//16*16;d.rectangle((x,y,x+32,360),fill=col)
  elif world=='terminal':
   for x in range(0,640,25):
    for y in range(0,360,25):
     if math.sin(x*.01+y*.02+phase)>.5:d.text((x,y),'+',fill=mid)
   cx=490;cy=180;r=112;d.ellipse((cx-r,cy-r,cx+r,cy+r),outline=fg,width=1)
   for k in range(4):
    w=abs(math.sin(phase+k*math.pi/4))*r;d.ellipse((cx-w,cy-r,cx+w,cy+r),outline=mid,width=1)
   d.ellipse((cx-r,cy-35,cx+r,cy+35),outline=fg)
  elif world=='scrapbook':
   for x in range(0,640,20):d.line((x,0,x,360),fill='#ecd3c0')
   for y in range(0,360,20):d.line((0,y,640,y),fill='#ecd3c0')
   for j in range(6):
    x=500+math.sin(phase+j)*55;y=40+j*52+math.cos(phase+j)*8;d.ellipse((x-22,y-12,x+22,y+12),fill=mid if j%2 else '#c3cbaa')
  else:
   x=505+math.sin(phase)*25;d.ellipse((x-150,15,x+150,315),fill=mid);d.rounded_rectangle((450,120,600,400),radius=75,fill=fg)
  proc.stdin.write(im.tobytes())
 proc.stdin.close();err=proc.stderr.read();code=proc.wait()
 if code:raise RuntimeError(err.decode())
 print(world,target.stat().st_size,'bytes')
