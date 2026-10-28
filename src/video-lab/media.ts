import { ALL_FORMATS, BlobSource, CanvasSink, Input } from "mediabunny";
export async function inspectVideo(file: File) {
  if (file.size > 250 * 1024 * 1024)
    throw new Error("Choose a video smaller than 250 MB.");
  if (
    !/\.(mp4|webm)$/i.test(file.name) ||
    (file.type && !["video/mp4", "video/webm"].includes(file.type))
  )
    throw new Error("Choose a local MP4 or WebM video.");
  const input = new Input({
    source: new BlobSource(file),
    formats: ALL_FORMATS,
  });
  try {
    const track = await input.getPrimaryVideoTrack();
    if (!track || !(await track.canDecode()))
      throw new Error(
        "This video codec cannot be decoded here. Try an H.264 MP4 or VP8/VP9 WebM.",
      );
    const duration = await input.computeDuration([track]);
    if (
      !Number.isFinite(duration) ||
      duration <= 0 ||
      !track.displayWidth ||
      !track.displayHeight
    )
      throw new Error("This video has no readable frames or duration.");
    const first = await new CanvasSink(track, { width: 64 }).getCanvas(0);
    if (!first) throw new Error("Could not decode the first video frame.");
    return {
      duration,
      width: track.displayWidth,
      height: track.displayHeight,
      audio: !!(await input.getPrimaryAudioTrack()),
    };
  } finally {
    input.dispose();
  }
}
export type VideoInfo = Awaited<ReturnType<typeof inspectVideo>>;
export function saveFile(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
