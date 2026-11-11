import { standaloneMotionId } from "./motion/navigation";

async function start() {
  const motion = standaloneMotionId(location.search);
  if (motion) {
    const { openStandaloneMotion } = await import("./motion/standalone");
    openStandaloneMotion(motion);
  } else {
    await import("./studio-entry");
  }
}
void start();
