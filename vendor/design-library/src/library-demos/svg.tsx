import { SvgLabPlayground } from "../svg-lab";
export default function Demo({ id }: { id: string; onBack: () => void }) {
  return <SvgLabPlayground initialId={id} />;
}
