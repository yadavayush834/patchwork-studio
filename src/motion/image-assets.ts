import type { MotionId } from "./catalog";
import { overnightAssets } from "./overnight";
import { atriumAssets } from "./atrium";
/** Exact asset manifest shared by preview tests and portable ZIP packaging. */
export function imageMotionAssets(id: MotionId): readonly string[] {
  if (id === "overnight") return overnightAssets();
  if (id === "atrium") return atriumAssets();
  if (id === "reverie")
    return [
      "motion/art/reverie-desert.webp",
      "motion/art/reverie-garden.webp",
      "motion/art/reverie-sky.webp",
      "motion/art/reverie-artwork.json",
    ];
  if (id === "traverse")
    return [
      "motion/art/traverse-ridge.webp",
      "motion/art/traverse-glacier.webp",
      "motion/art/traverse-summit.webp",
      "motion/art/traverse-artwork.json",
    ];
  return [];
}
