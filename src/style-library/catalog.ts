import catalog from '../../vendor/design-library/src/library-catalog.json';
export interface Study {
  id: string; name: string; description: string; category: string; colors: string[];
  style: string; concept: string; typography: string; features: string[]; source: string;
}
export const studies: Study[] = catalog.entries.filter(e => e.kind === 'styles').map(entry => {
  const metadata = entry.metadata as { styleLabel?: string; concept?: string; typography?: string; keyFeatures?: string[] };
  return { id: entry.originalId, name: entry.name, description: entry.description, category: entry.category,
    colors: entry.colors, style: metadata.styleLabel || entry.category, concept: metadata.concept || entry.description,
    typography: metadata.typography || '', features: metadata.keyFeatures || [], source: entry.source || '' };
});
export function studyURL(id: string, thumbnail = false) {
  return `/design-library/index.html?${thumbnail ? 'preview=1&' : ''}embedded=1#render/styles/${encodeURIComponent(id)}`;
}
export function findStudies(query: string, category: string, saved: string[] | null = null) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return studies.filter(study => (category === 'all' || study.category === category) &&
    (!saved || saved.includes(`styles:${study.id}`)) &&
    words.every(word => `${study.name} ${study.style} ${study.category} ${study.concept} ${study.description}`.toLowerCase().includes(word)));
}
