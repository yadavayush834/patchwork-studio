import { isMotionId, type MotionId } from "./catalog";

export function motionWebsiteUrl(id: MotionId): string {
  return `/?view=motion&motion=${encodeURIComponent(id)}`;
}

export function standaloneMotionId(search: string): MotionId | null {
  const params = new URLSearchParams(search);
  const id = params.get("motion");
  if (!isMotionId(id)) return null;
  // Existing shared template links also open the website. Editing remains explicit.
  return params.get("view") === "motion" || params.get("edit") !== "1" ? id : null;
}
