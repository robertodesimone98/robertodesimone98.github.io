import { placeholderBases } from '../shared/placeholders'

// PLACEHOLDER projects: their layouts/covers/heroes come from data/shared/placeholders.js
// (the same ones Brand uses, to compare the two styles); here only slug, title, category
// and origin are set. Replace with real content: one object per project, newest first,
// with the fields below (delete shared/placeholders.js when done).
//
// Project fields:
//   slug          url + key of the texts in the locales
//   title         shown as is (not translated)
//   category      'social' | 'trailer'  (one per project; label in locales: projects.categories)
//   origin        'client' | 'channel' | 'personal' | 'course'
//                 'channel' = published on Roberto's own channel (CHANNEL below, spread it in)
//   client        client / school name; for 'channel' it is the handle (already in CHANNEL)
//   clientUrl     optional link on that name (detail page); for 'channel' the profile
//   period        { from, to } as 'YYYY' | 'YYYY-MM'; to can be 'present' or omitted
//   channels      where it was published: 'youtube' | 'instagram' | 'tiktok'
//   cover         card image (any ratio: the card crops it)
//   coverPosition optional CSS object-position for the crop, e.g. 'center 20%'
//   preview       optional mp4 for the hover preview on the CARD (not on video tiles)
//   hero          tile at the top of the detail page (always 16:9)
//   link          optional button at the end of the page: { type: 'youtube' | 'instagram' | 'website', url }
//   sections      video blocks, see data/shared/blocks.js
//
// Texts (description, section titles) live in the locales:
//   gaming.projects.items.<slug>.description
//   gaming.projects.items.<slug>.sections.<sectionId>.{title,description}

// Roberto's own Instagram channel: use `origin: 'channel', ...CHANNEL` in the projects
// published there (card: Instagram icon + handle; detail: CHANNEL label + link).
const CHANNEL = { client: '@rawb.start', clientUrl: 'https://www.instagram.com/rawb.start/' }

// One entry per placeholder slot (see shared/placeholders.js).
const CATEGORIES = ['trailer', 'social', 'social', 'social', 'trailer', 'social', 'trailer', 'social', 'trailer']
const ORIGINS = [
  { origin: 'client', client: 'Studio Esempio', clientUrl: 'https://example.com' },
  { origin: 'channel', ...CHANNEL },
  { origin: 'client', client: 'Cliente Esempio' },
  { origin: 'channel', ...CHANNEL },
  { origin: 'client', client: 'Altro Cliente', clientUrl: 'https://example.com' },
  { origin: 'channel', ...CHANNEL },
  { origin: 'channel', ...CHANNEL },
  { origin: 'channel', ...CHANNEL },
  { origin: 'channel', ...CHANNEL },
]

export const gamingProjects = placeholderBases.map((base, i) => ({
  slug: `gaming-placeholder-${i + 1}`,
  title: `Gaming placeholder ${i + 1}`,
  category: CATEGORIES[i],
  ...ORIGINS[i],
  ...base,
}))
