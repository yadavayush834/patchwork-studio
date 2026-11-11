import { motionTemplates, normalizeMotionConfig, type MotionId, type MotionConfig } from "./catalog";

/** Shared by the studio customizer and the independent website entry. */
export function readMotionConfigs(): Partial<Record<MotionId, MotionConfig>> {
  try {
    const data = JSON.parse(localStorage.getItem("patchwork-motion-v1") ?? "null");
    if (data?.version !== 1) return {};
    return Object.fromEntries(motionTemplates.map(t => [t.id, normalizeMotionConfig(data.configs?.[t.id] ?? {}, t.id)]));
  } catch {
    return {};
  }
}
