"""Crossfade the tail into the head so each ASCII recording loops without a cut."""
from pathlib import Path
import subprocess,shutil,imageio_ffmpeg
root=Path(__file__).resolve().parents[1]
ff=imageio_ffmpeg.get_ffmpeg_exe()
for scene in ['sharks','jellies','galaxy','terrain']:
 source=root/f'output/playwright/ascii-{scene}-raw.webm'
 target=root/f'public/assets/ascii/{scene}.webm'
 # The final frame and first frame both land on source time 1.5s.
 filters='[0:v]setpts=PTS-STARTPTS,fps=24,tpad=stop_mode=clone:stop_duration=1,split[a][b];[a]trim=start_frame=36:end_frame=240,setpts=PTS-STARTPTS,fps=24,settb=AVTB,format=yuv420p[main];[b]trim=start_frame=0:end_frame=36,setpts=PTS-STARTPTS,fps=24,settb=AVTB,format=yuv420p[head];[main][head]xfade=transition=fade:duration=1.5:offset=7,trim=end_frame=204,setpts=N/(24*TB),format=yuv420p[out]'
 result=subprocess.run([ff,'-y','-i',str(source),'-filter_complex',filters,'-map','[out]','-an','-c:v','libvpx-vp9','-b:v','0','-crf','27','-deadline','good','-cpu-used','3',str(target)],capture_output=True)
 if result.returncode:raise RuntimeError(result.stderr.decode(errors='replace'))
 shutil.copyfile(root/f'output/playwright/ascii-{scene}.png',root/f'public/assets/ascii/{scene}.png')
 print(scene,target.stat().st_size,'bytes')
