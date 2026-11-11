import { useEffect } from "react";
export default function ResourceHandoff({kind, id}: {kind: string; id: string}) {
  const href = `/?collection=library&library=${encodeURIComponent(kind)}&resource=${encodeURIComponent(id)}`;
  useEffect(() => {
    if (parent !== window) parent.postMessage({type: "patchwork-open-collection", section: kind, resource: id}, location.origin);
    else location.replace(href);
  }, [kind, id, href]);
  return <main className="lib-empty"><h1>Opening the new playground…</h1><a href={href} target="_top">Continue to the resource</a></main>;
}
