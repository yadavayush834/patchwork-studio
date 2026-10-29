import { ColorLab } from "../color-lab";
export default function Demo({ id }: { id: string; onBack: () => void }) {
  return <ColorLab initialPaletteId={id} />;
}
