import { websitesRegistry } from "../websites/registry";
export default function Demo({
  id,
  onBack,
}: {
  id: string;
  onBack: () => void;
}) {
  const C = websitesRegistry.find((e) => e.id === id)!.component;
  return <C onBackToGallery={onBack} />;
}
