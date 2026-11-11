import { standaloneHero } from "./heroes/document";
import { standaloneMotionId } from "./motion/navigation";
import { heroes2Route } from "./heroes2/route";
import { scenesRoute } from "./scenes/route";
import { componentsRoute } from "./components/route";
import { spiritsRoute } from "./spirits/route";

async function start() {
  // Hero Sections II: its own studio and standalone pages, kept separate from the first hero section.
  if (heroes2Route(location.search)) {
    const { startHeroes2 } = await import("./heroes2/entry");
    await startHeroes2(location.search);
    return;
  }
  // Scenes: living pixel-art places, with their own studio and standalone pages.
  if (scenesRoute(location.search)) {
    const { startScenes } = await import("./scenes/entry");
    await startScenes(location.search);
    return;
  }
  // Components: pixel characters with a job, each with its own demo page.
  if (componentsRoute(location.search)) {
    const { startComponents } = await import("./components/entry");
    await startComponents(location.search);
    return;
  }
  // Spirits: creatures that live on a page, each with its own demo.
  if (spiritsRoute(location.search)) {
    const { startSpirits } = await import("./spirits/entry");
    await startSpirits(location.search);
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
