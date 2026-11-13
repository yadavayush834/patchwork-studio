# Video Lab (beta)

> **In beta, not for real use yet.** The lab shows this notice at the top. Results may be unfinished or change. Fix it if it breaks, but hold new features until the owner returns to it.


> `src/video-lab/` · open with `/?lab=video`

**Beta. No new features until it's revisited.** It works, but results vary, and the people using it know that.

The Video Lab turns a video or a picture into a stylised loop: 92 looks in ten families (ASCII & text, pixel & blocks, print & paper, geometric, glass, light & colour, material, glitch, blur, distort). It previews live and exports a video or a GIF, all in the browser.

| File | Job |
|---|---|
| `catalog.ts` | The styles, their families and settings, and `validateStudioSettings`. |
| `render.ts` | Turns decoded frames and preview bitmaps into one RGBA sampling path, then reduces it to the style's logical grid. |
| `gpu.ts` | Original image-space effects in WebGL. No network resources and no third-party shader code. |
| `preview.worker.ts`, `export.worker.ts` | Rendering off the main thread. Export encodes with mediabunny (video) and gifenc (GIF). |
| `VideoLab.tsx` | The interface. |
