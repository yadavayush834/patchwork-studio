import { MotionLabPlayground } from "../motion-lab";
export default function Demo({ id }: { id: string; onBack: () => void }) {
  return <MotionLabPlayground initialId={id} />;
}
