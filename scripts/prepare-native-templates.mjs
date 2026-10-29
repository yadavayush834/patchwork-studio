import fs from "node:fs";
const base = "vendor/design-library/src";
const source = JSON.parse(
  fs.readFileSync(`${base}/library-catalog.json`, "utf8"),
);
const records = [];
const loaders = [];
for (const entry of source.entries.filter((e) => e.kind === "templates")) {
  const text = fs.readFileSync(`vendor/design-library/${entry.source}`, "utf8");
  const exported = text.match(/export (?:const|function) (\w+)/)?.[1];
  if (!exported) throw Error(entry.originalId);
  records.push({
    id: entry.originalId,
    name: entry.name,
    description: entry.description,
    category: entry.category,
    tags: entry.tags,
    accent: entry.colors[0],
  });
  loaders.push(
    `'${entry.originalId}':()=>import('./${entry.source.replace(/^src\//, "").replace(/\/index.tsx$/, "")}').then(m=>({default:m.${exported}}))`,
  );
}
fs.writeFileSync(
  `${base}/native-loaders.ts`,
  `export const templateLoaders={${loaders.join(",\n")}};\n`,
);
fs.writeFileSync(
  "src/template-library/catalog.json",
  JSON.stringify(records, null, 2) + "\n",
);
console.log(`Prepared ${records.length} template-only previews.`);
