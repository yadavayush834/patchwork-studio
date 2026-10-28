import {
  ALL_FORMATS,
  BlobSource,
  Input,
  Output,
  BufferTarget,
  Mp4OutputFormat,
  WebMOutputFormat,
  Conversion,
  CanvasSink,
  canEncodeVideo,
  canEncodeAudio,
} from "mediabunny";
import { GIFEncoder, quantize, applyPalette } from "gifenc";
import {
  dimensions,
  frameTimes,
  gifDelay,
  validateTrim,
  type Settings,
} from "./catalog";
import { Renderer } from "./render";
export interface ExportJob {
  file: File;
  style: string;
  settings: Settings;
  start: number;
  end: number;
  format: "mp4" | "webm" | "gif";
  resolution: number;
  audio: boolean;
}
const scope = globalThis as unknown as {
  postMessage: (message: unknown) => void;
  onmessage: (event: MessageEvent<ExportJob>) => void;
  fonts: FontFaceSet;
};
scope.onmessage = async ({ data: job }) => {
  const input = new Input({
      source: new BlobSource(job.file),
      formats: ALL_FORMATS,
    }),
    renderer = new Renderer();
  try {
    const font = new FontFace(
      "Space Mono",
      `url(${new URL("/fonts/SpaceMono.ttf", import.meta.url)})`,
    );
    await font.load();
    scope.fonts.add(font);
    const track = await input.getPrimaryVideoTrack();
    if (!track || !(await track.canDecode()))
      throw new Error("This video codec cannot be decoded.");
    const duration = await input.computeDuration([track]);
    validateTrim(job.start, job.end, duration, job.format === "gif");
    const { width, height } = dimensions(
      track.displayWidth,
      track.displayHeight,
      job.format === "gif"
        ? Math.max(track.displayWidth, track.displayHeight) *
            Math.min(1, 480 / track.displayWidth)
        : (job.resolution * 16) / 9,
    );
    const target = new BufferTarget();
    let blob: Blob;
    const sink = new CanvasSink(track, { width, height, fit: "contain" });
    const historySink = new CanvasSink(track, {
      width,
      height,
      fit: "contain",
    });
    const first = await sink.getCanvas(job.start);
    if (!first) throw new Error("The selected segment has no frames.");
    const firstReference =
      job.style === "datamosh"
        ? (await historySink.getCanvas(Math.max(0, job.start - 0.2)))?.canvas
        : undefined;
    const poster = await renderer
      .render(
        first.canvas,
        width,
        height,
        job.style,
        job.settings,
        job.start,
        firstReference,
      )
      .convertToBlob({ type: "image/png" });
    if (job.format === "gif") {
      const gif = GIFEncoder(),
        times = frameTimes(job.start, job.end, 12);
      let i = 0;
      for await (const frame of sink.canvasesAtTimestamps(times)) {
        if (!frame) throw new Error("Could not decode a selected frame.");
        const reference =
          job.style === "datamosh"
            ? (await historySink.getCanvas(Math.max(0, times[i] - 0.2)))?.canvas
            : undefined;
        const out = renderer.render(
          frame.canvas,
          width,
          height,
          job.style,
          job.settings,
          times[i],
          reference,
        );
        const pixels = out
            .getContext("2d")!
            .getImageData(0, 0, width, height).data,
          palette = quantize(pixels, 128);
        gif.writeFrame(applyPalette(pixels, palette), width, height, {
          palette,
          delay: gifDelay(i, job.end - job.start),
          repeat: 0,
        });
        scope.postMessage({ type: "progress", progress: ++i / times.length });
      }
      gif.finish();
      blob = new Blob([gif.bytes() as BlobPart], { type: "image/gif" });
    } else {
      const codec =
        job.format === "mp4"
          ? "avc"
          : (await canEncodeVideo("vp9", { width, height, frameRate: 24 }))
            ? "vp9"
            : "vp8";
      if (!(await canEncodeVideo(codec, { width, height, frameRate: 24 })))
        throw new Error(
          `${job.format.toUpperCase()} encoding is unavailable in this browser at this size. Try another format or a smaller resolution.`,
        );
      const audioTrack = await input.getPrimaryAudioTrack(),
        keepAudio = job.audio && !!audioTrack,
        audioCodec = job.format === "mp4" ? "aac" : "opus";
      if (
        keepAudio &&
        (!(await audioTrack!.canDecode()) ||
          !(await canEncodeAudio(audioCodec)))
      )
        throw new Error(
          "Source audio cannot be preserved in this format here. Choose mute or another format.",
        );
      const output = new Output({
        format:
          job.format === "mp4" ? new Mp4OutputFormat() : new WebMOutputFormat(),
        target,
      });
      const conversion = await Conversion.init({
        input,
        output,
        tracks: "primary",
        copy: false,
        trim: { start: job.start, end: job.end },
        showWarnings: false,
        video: {
          width,
          height,
          fit: "contain",
          codec,
          frameRate: 24,
          allowTransformationMetadata: false,
          forceTranscode: true,
          process: async (sample) => {
            const time = sample.timestamp + job.start;
            const reference =
              job.style === "datamosh"
                ? (await historySink.getCanvas(Math.max(0, time - 0.2)))?.canvas
                : undefined;
            return renderer.render(
              sample.toCanvasImageSource(),
              width,
              height,
              job.style,
              job.settings,
              time,
              reference,
            );
          },
        },
        audio: keepAudio ? { codec: audioCodec } : { discard: true },
      });
      if (
        !conversion.isValid ||
        conversion.discardedTracks.some((t) => t.reason !== "discarded_by_user")
      )
        throw new Error(
          "This browser cannot encode every requested track. Try muting audio or another format.",
        );
      conversion.onProgress = (progress) =>
        scope.postMessage({ type: "progress", progress });
      await conversion.execute();
      if (!target.buffer) throw new Error("The encoder produced no output.");
      blob = new Blob([target.buffer], {
        type: job.format === "mp4" ? "video/mp4" : "video/webm",
      });
    }
    scope.postMessage({ type: "done", blob, poster, width, height });
  } catch (error) {
    scope.postMessage({
      type: "error",
      message: error instanceof Error ? error.message : String(error),
    });
  } finally {
    input.dispose();
    renderer.dispose();
  }
};
