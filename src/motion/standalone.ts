import { defaultMotionConfig, type MotionId } from "./catalog";
import { readMotionConfigs } from "./config-storage";
import { motionDocument } from "./document";

export function openStandaloneMotion(id: MotionId) {
  const config = readMotionConfigs()[id] ?? defaultMotionConfig(id);
  // Render the same complete document used by preview/export, as the top-level page.
  // Its trusted markup escapes customization; no studio root, iframe or toolbar is mounted.
  const html = motionDocument(id, config, true);
  document.open();
  document.write(html);
  document.close();
}
