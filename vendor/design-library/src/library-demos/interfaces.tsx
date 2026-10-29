import { designsRegistry } from "../designs/registry";
export default function Demo({
  id,
  onBack,
}: {
  id: string;
  onBack: () => void;
}) {
  const C = designsRegistry.find((e) => e.id === id)!.component;
  return <C onBackToGallery={onBack} />;
}
