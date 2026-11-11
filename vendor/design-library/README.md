# Patchwork Design Library

Imported from https://github.com/yadavayush834/website-design-template-library at commit `5e36f6275720538eafba279531aa1c8912f3883b`.

This separate React/Tailwind application is embedded in Patchwork through an iframe. Its dependencies, CSS, routes and namespaced storage do not replace the main editor or Motion Studies.

## Organization

182 resources: 14 Templates, 28 Style studies, 10 Interface studies, 105 Color palettes, 8 original Motion experiments, 8 original SVG experiments, 9 original UI systems. Counts come from actual source registries rather than historical README claims. The former Websites/28 Websites/Styles routes become Style studies; Designs/Recreations/UI Lab become Interface studies; Components/Primitives become UI primitives. The full original names remain in metadata. Swiss and Swiss Grid, for example, are distinct authored studies and are both retained. No exact duplicate definitions were found.

The canonical index is `src/library-catalog.json`, regenerated with the parent repository's `scripts/import-design-library.mjs`. It uses namespaced IDs, one display name, original ID/name, kind, category, description, tags, colors, source and complete original metadata. The old motion/SVG labs and primitives explorer were explicitly replaced at the user’s request. Their new sources and metadata are under `src/resources`, hosted by the parent Patchwork native ResourceStudio. Shared UI helpers used by retained templates remain. `UPSTREAM_README.md` and historical progress notes preserve upstream context; active navigation is `App.tsx`.

## Run independently

Node 22: `npm ci`, then `npm run dev`. `npm run build` checks TypeScript and builds an independent static app into `dist/`. The parent Patchwork build sets `PATCHWORK_LIBRARY_OUTPUT` to its public directory.

Examples contain simulated data and product actions. Interface recreations are independent studies, not official products. The repository had no standalone license file at this snapshot; no new blanket license is asserted. Source attribution remains attached. Local system font fallbacks replace the upstream Google Fonts request; no remote font service is needed.
