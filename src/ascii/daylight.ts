import { clamp } from "./cells";

/**
 * Living sites follow the visitor's own clock. This turns an hour (0–24, local
 * time) into how dark it is and how much dawn or dusk is in the air, so CSS and
 * the ASCII scenes can change with the time of day. No location, no network.
 */
export type Daypart = "dawn" | "day" | "dusk" | "night";
export interface Daylight {
  /** 0 at midday, 1 in the dead of night. */
  night: number;
  /** 1 at sunrise and sunset, fading to 0 either side. */
  twilight: number;
  hour: number;
  part: Daypart;
}
/** The look every scene has without a clock: night, which is how they were made. */
export const NIGHT: Daylight = { night: 1, twilight: 0, hour: 23, part: "night" };
/** Hours the editor offers for previewing each part of the day. */
export const PREVIEW_HOURS: Record<Daypart, number> = { dawn: 6.5, day: 13, dusk: 19.5, night: 23.5 };

export function daylightAt(hour: number): Daylight {
  const h = ((hour % 24) + 24) % 24;
  // Height of the sun: 1 at 13:00, -1 at 01:00; it crosses the horizon near 06:30 and 19:30.
  const sun = Math.cos(((h - 13) / 24) * Math.PI * 2);
  const k = clamp((0.1 - sun) / 0.45);
  const night = k * k * (3 - 2 * k);
  const twilight = Math.exp(-(((sun + 0.13) / 0.25) ** 2));
  const part: Daypart = twilight > 0.5 ? (h < 12 ? "dawn" : "dusk") : night > 0.5 ? "night" : "day";
  return { night, twilight, hour: h, part };
}
