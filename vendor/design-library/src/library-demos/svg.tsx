import ResourceHandoff from "../resource-handoff";
export default function Demo({ id }: { id: string; onBack: () => void }) {
  return <ResourceHandoff kind="svg" id={id} />;
}
