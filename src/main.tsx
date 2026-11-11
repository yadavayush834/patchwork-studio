import { standaloneHero } from "./heroes/document";
import { standaloneMotionId } from "./motion/navigation";
import { heroes2Route } from "./heroes2/route";

async function start() {
  // Hero Sections II: its own studio and standalone pages, kept separate from the first hero section.
  if (heroes2Route(location.search)) {
    const { startHeroes2 } = await import("./heroes2/entry");
    await startHeroes2(location.search);
    return;
  }
  const hero = standaloneHero(location.search);
  if (hero) {
    const { openStandaloneHero } = await import("./heroes/standalone");
    openStandaloneHero(hero);
    return;
  }
  const motion = standaloneMotionId(location.search);
  if (motion) {
    const { openStandaloneMotion } = await import("./motion/standalone");
    openStandaloneMotion(motion);
  } else {
    await import("./studio-entry");
  }
}
void start();
