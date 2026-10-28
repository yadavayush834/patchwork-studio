import { Renderer } from "./render";
import { defaults, styles, type Settings } from "./catalog";
import { ALL_FORMATS, BlobSource, CanvasSink, Input } from "mediabunny";
interface Job {
  image: ImageBitmap;
  file?: File;
  width: number;
  height: number;
  style: string;
  settings: Settings;
  time: number;
  thumbnails?: boolean;
  revision: number;
}
const scope = globalThis as unknown as {
  postMessage: (data: unknown, transfer?: Transferable[]) => void;
  onmessage: (event: MessageEvent<Job>) => void;
  fonts: FontFaceSet;
};
const renderer = new Renderer();
const font = new FontFace(
  "Space Mono",
  `url(${new URL("/fonts/SpaceMono.ttf", import.meta.url)})`,
);
const ready = font.load().then((f) => scope.fonts.add(f));
let history: CanvasSink | undefined,
  input: Input | undefined,
  sourceKey = "";
scope.onmessage = async ({ data: job }) => {
  try {
    await ready;
    if (job.thumbnails) {
      for (const style of styles) {
        const out = renderer.render(
          job.image,
          job.width,
          job.height,
          style.id,
          defaults(style.id),
          job.time,
        );
        const blob = await out.convertToBlob({
          type: "image/webp",
          quality: 0.65,
        });
        scope.postMessage({ type: "thumbnail", id: style.id, blob });
      }
      scope.postMessage({ type: "thumbnails-done" });
    } else {
      let reference: HTMLCanvasElement | OffscreenCanvas | undefined;
      if (job.style === "datamosh" && job.file) {
        const key = `${job.file.name}:${job.file.size}:${job.file.lastModified}:${job.width}`;
        if (sourceKey !== key) {
          input?.dispose();
          input = new Input({
            source: new BlobSource(job.file),
            formats: ALL_FORMATS,
          });
          const track = await input.getPrimaryVideoTrack();
          if (!track) throw new Error("No temporal reference frames.");
          history = new CanvasSink(track, {
            width: job.width,
            height: job.height,
            fit: "contain",
          });
          sourceKey = key;
        }
        reference = (await history!.getCanvas(Math.max(0, job.time - 0.2)))
          ?.canvas;
      }
      const before = performance.now(),
        out = renderer.render(
          job.image,
          job.width,
          job.height,
          job.style,
          job.settings,
          job.time,
          reference,
        ),
        image = out.transferToImageBitmap();
      scope.postMessage(
        {
          type: "frame",
          image,
          text: renderer.text,
          ms: performance.now() - before,
          revision: job.revision,
          time: job.time,
        },
        [image],
      );
    }
  } catch (e) {
    scope.postMessage({ type: "error", message: (e as Error).message });
  } finally {
    job.image.close();
  }
};
