import { templatesRegistry } from "../data/templates-registry";
export default function Demo({
  id,
  onBack,
}: {
  id: string;
  onBack: () => void;
}) {
  const C = templatesRegistry.find((e) => e.id === id)!.component;
  return <C />;
}
