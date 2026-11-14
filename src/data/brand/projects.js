import { placeholderBases } from '../shared/placeholders'

// PLACEHOLDER projects: same layouts/covers/heroes as Gaming (data/shared/placeholders.js),
// to compare the two styles; here only slug, title, category and origin are set.
// Same field reference as data/gaming/projects.js (see the comment there).
// Brand categories: 'social' | 'events' | 'motion' | 'color' | 'short-film'.
// Texts live in the locales: brand.projects.items.<slug>...

// One entry per placeholder slot (see shared/placeholders.js).
const CATEGORIES = ['social', ['social', 'food', 'storytelling', 'travel'], 'social', 'social', 'social', 'social', 'social', 'backstage', 'masterclass', 'color', 'motion', 'motion', 'social', 'short-film', 'short-film']
const ORIGINS = [
  { origin: 'client', client: 'Gaming Dogs', clientUrl: 'https://www.youtube.com/@gamingdogs' },
  { origin: 'client', client: 'https://www.youtube.com/@Prattquello' },
  { origin: 'client', client: 'Brand Esempio' },
  { origin: 'personal' },
  { origin: 'client', client: 'Evento Esempio', clientUrl: 'https://example.com' },
  { origin: 'personal' },
  { origin: 'client', client: 'Brand Esempio', clientUrl: 'https://example.com' },
  { origin: 'personal' },
  { origin: 'personal' },
  { origin: 'course', client: 'ITS Esempio' },
]

// Hover preview of each card, same order as the slots above (null = no video).
const PREVIEWS = [
  //'/videos/preview/preview-bosque.mp4',
  null,
  null,
  null,
  null,
  null,
  null,
  null, 
  null,
]

// Card cover of each project, same order (null = keep the placeholder cover).
const COVERS = [
  '/covers/cover-bosque.jpg',
  '/covers/cover-coi.jpg',
  '/covers/cover-af.jpg',
  '/covers/cover-ct.jpg',
  '/covers/cover-gb.jpg',
  '/covers/cover-gbnd.jpg',
  '/covers/cover-pr.jpg',
  '/covers/cover-pr.jpg',
  '/covers/cover-pr.jpg',
]

export const brandProjects = placeholderBases.map((base, i) => ({
  slug: `brand-placeholder-${i + 1}`,
  title: `Brand placeholder ${i + 1}`,
  category: CATEGORIES[i],
  ...ORIGINS[i],
  ...base,
  //cover: COVERS[i] ?? base.cover,
  preview: PREVIEWS[i],
}))
