import rawCatalog from '../../vendor/design-library/src/resources/catalog.json';
import base from '../../vendor/design-library/src/resources/base.js?raw';
import { bundle } from './portable';
import type { Resource } from './types';
export const resources = rawCatalog as Resource[];
const sources = import.meta.glob('../../vendor/design-library/src/resources/*.js', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
export function sourceFor(resource: Resource) {
  const body = sources[`../../vendor/design-library/src/resources/${resource.id}.js`];
  if (!body) throw new Error(`Missing resource source: ${resource.id}`);
  return bundle(resource, base, body);
}
