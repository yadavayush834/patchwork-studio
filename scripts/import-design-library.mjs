import ts from "typescript";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
const base = "vendor/design-library/src";
function read(file, variable) {
  const ast = ts.createSourceFile(
    file,
    fs.readFileSync(file, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const imports = new Map();
  for (const statement of ast.statements) {
    if (
      !ts.isImportDeclaration(statement) ||
      !ts.isStringLiteral(statement.moduleSpecifier)
    )
      continue;
    const bindings = statement.importClause?.namedBindings;
    if (!bindings || !ts.isNamedImports(bindings)) continue;
    const target = path.resolve(
      path.dirname(file),
      statement.moduleSpecifier.text,
    );
    for (const binding of bindings.elements)
      for (const suffix of [".tsx", "/index.tsx"])
        if (fs.existsSync(target + suffix))
          imports.set(
            binding.name.text,
            path.relative("vendor/design-library", target + suffix),
          );
  }
  let result;
  function value(node) {
    if (ts.isIdentifier(node)) return imports.get(node.text);
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))
      return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (ts.isArrayLiteralExpression(node))
      return node.elements.map(value).filter((v) => v !== undefined);
    if (ts.isObjectLiteralExpression(node))
      return Object.fromEntries(
        node.properties
          .filter(ts.isPropertyAssignment)
          .map((p) => [
            p.name.getText(ast).replace(/^['"]|['"]$/g, ""),
            value(p.initializer),
          ])
          .filter(([, v]) => v !== undefined),
      );
  }
  function visit(node) {
    if (ts.isVariableDeclaration(node) && node.name.getText(ast) === variable)
      result = value(node.initializer);
    ts.forEachChild(node, visit);
  }
  visit(ast);
  if (!Array.isArray(result)) throw Error("Missing registry " + file);
  return result;
}
const groups = [
  ["templates", "Templates", "data/templates-registry.ts", "templatesRegistry"],
  ["styles", "Style studies", "websites/registry.ts", "websitesRegistry"],
  ["interfaces", "Interface studies", "designs/registry.ts", "designsRegistry"],
  [
    "motion",
    "Motion experiments",
    "motion-lab/registry.ts",
    "MOTION_COMPONENTS",
  ],
  ["svg", "SVG experiments", "svg-lab/registry.ts", "SVG_COMPONENTS"],
];
const templateCategories = {
  ai: "AI & machine learning",
  developer: "Developer tools",
  education: "Education",
  hackathons: "Events",
  authentication: "Authentication",
  portfolios: "Portfolios",
  saas: "Business & SaaS",
  dashboards: "Dashboards",
  ecommerce: "Commerce",
  hospitality: "Hospitality",
};
const styleFamilies = {
  minimalist: "Minimal & restrained",
  modern: "Product & corporate",
  brutalist: "Bold & experimental",
  "neo-brutalist": "Bold & experimental",
  maximalist: "Bold & experimental",
  swiss: "Typography & grids",
  editorial: "Typography & grids",
  luxury: "Luxury & ornamental",
  corporate: "Product & corporate",
  organic: "Nature & craft",
  scandinavian: "Minimal & restrained",
  "japanese-minimalism": "Minimal & restrained",
  bauhaus: "Typography & grids",
  "art-deco": "Luxury & ornamental",
  "retro-futurism": "Bold & experimental",
  "contemporary-art": "Bold & experimental",
  "bento-grid": "Typography & grids",
  asymmetrical: "Typography & grids",
  "swiss-grid": "Typography & grids",
  "broken-grid": "Typography & grids",
};
const techniqueCategories = {
  ascii: "ASCII",
  three: "3D & geometry",
  shaders: "Shaders",
  micro: "Micro-interactions",
  physics: "Physics",
  scroll: "Scroll effects",
  decorative: "Decoration",
  "line-art": "Line drawing",
  morphing: "Shape morphing",
  nature: "Nature",
  math: "Generative geometry",
  masks: "Masks & reveals",
  typography: "Typography",
  icons: "Icons",
  scenes: "Scenes",
  experimental: "Experimental",
};
function category(kind, item) {
  if (kind === "templates") return templateCategories[item.category];
  if (kind === "styles") return styleFamilies[item.id] || "Motion & immersion";
  if (kind === "motion" || kind === "svg")
    return techniqueCategories[item.category] || item.category;
  return item.category;
}
const entries = [];
for (const [kind, , file, variable] of groups)
  for (const item of read(`${base}/${file}`, variable)) {
    const source =
      item.sourcePath ||
      (kind === "styles"
        ? `src/websites/${item.id}/index.tsx`
        : kind === "interfaces"
          ? `src/designs/${item.id}/index.tsx`
          : item.component || null);
    entries.push({
      id: `${kind}:${item.id}`,
      originalId: item.id,
      kind,
      name: item.name.split(/\s*\/\/\s*/)[0].trim(),
      originalName: item.name,
      description: item.description,
      category: category(kind, item),
      tags: [
        ...new Set(
          [
            ...(item.tags || []),
            item.categoryLabel,
            item.styleLabel,
            item.tech,
          ].filter(Boolean),
        ),
      ],
      colors: item.palette?.map((p) => p.hex) || [
        item.accentColor || item.colorTokens?.accent || "#b3a1ef",
      ],
      source,
      metadata: item,
    });
  }
for (let n = 1; n <= 3; n++)
  for (const p of read(
    `${base}/color-lab/data/palettes-batch${n}.ts`,
    `palettesBatch${n}`,
  ))
    entries.push({
      id: `colors:${p.id}`,
      originalId: p.id,
      kind: "colors",
      name: p.name,
      originalName: p.name,
      description: p.description,
      category: p.family,
      tags: [p.theme, p.temperature, ...(p.tags || [])],
      colors: p.swatches?.map((s) => s.hex) || [p.tokens?.primary || "#b3a1ef"],
      source: `src/color-lab/data/palettes-batch${n}.ts`,
      metadata: p,
    });
for (const id of [
  "button",
  "badge",
  "card",
  "input",
  "tabs",
  "modal",
  "accordion",
  "stats-card",
  "skeleton",
])
  entries.push({
    id: `primitives:${id}`,
    originalId: id,
    kind: "primitives",
    name: id
      .split("-")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(" "),
    originalName: id,
    description:
      "Reusable React UI primitive with live examples and copyable usage.",
    category: "UI primitives",
    tags: ["React", "Tailwind CSS"],
    colors: ["#c2b3ec", "#e7dfcf"],
    source: `src/components/ui/${id}.tsx`,
    metadata: {},
  });
const ids = new Set();
for (const e of entries) {
  if (ids.has(e.id)) throw Error("Duplicate ID " + e.id);
  ids.add(e.id);
  if (e.source && !fs.existsSync(path.join("vendor/design-library", e.source)))
    throw Error("Missing " + e.source);
}
// Merge only identical definitions, never distinct studies sharing a design word.
const canonical = [],
  aliases = [];
const hashes = new Map();
for (const e of entries) {
  const signature = crypto
    .createHash("sha256")
    .update(JSON.stringify([e.kind, e.source, e.metadata]))
    .digest("hex");
  if (hashes.has(signature)) {
    aliases.push({ alias: e.id, canonical: hashes.get(signature) });
  } else {
    hashes.set(signature, e.id);
    canonical.push(e);
  }
}
const collections = [
  ["templates", "Templates", "Complete sites organized by use case."],
  [
    "styles",
    "Style studies",
    "Distinct approaches to layout, type and movement.",
  ],
  [
    "interfaces",
    "Interface studies",
    "Interactive recreations for learning and reference.",
  ],
  [
    "colors",
    "Color palettes",
    "Semantic colors, contrast tools and token exports.",
  ],
  [
    "motion",
    "Motion experiments",
    "ASCII, shaders, 3D and interaction studies.",
  ],
  ["svg", "SVG experiments", "Vector scenes, morphs and generative drawing."],
  [
    "primitives",
    "UI primitives",
    "Reusable building blocks with live examples.",
  ],
].map(([id, name, description]) => ({
  id,
  name,
  description,
  count: canonical.filter((e) => e.kind === id).length,
}));
const data = {
  version: 1,
  source: {
    repository:
      "https://github.com/yadavayush834/website-design-template-library",
    commit: "5e36f6275720538eafba279531aa1c8912f3883b",
  },
  collections,
  aliases,
  entries: canonical,
};
fs.writeFileSync(
  `${base}/library-catalog.json`,
  JSON.stringify(data, null, 2) + "\n",
);
console.log(collections.map((c) => `${c.name}: ${c.count}`).join("\n"));
console.log("Exact duplicate definitions merged:", aliases.length);
