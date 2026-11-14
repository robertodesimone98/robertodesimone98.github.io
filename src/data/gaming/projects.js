import { image, yt, ig, row, section, columns } from '../shared/blocks'

// Gaming projects: one object per project, in the order they are shown, with the
// fields below. Covers/heroes are still PLACEHOLDERS (public/placeholders): replace them.
// (Brand still uses data/shared/placeholders.js.)
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

// TEMPORARY placeholder images, replace with the real ones.
const V = (n) => `/placeholders/v-${n}.svg`
const H = (n) => `/placeholders/h-${n}.svg`

export const gamingProjects = [
  {
    slug: 'trailers',
    title: 'Trailer',
    category: 'trailer',
    origin: 'channel',
    ...CHANNEL,
    channels: ['instagram', 'tiktok', 'youtube'],
    cover: V(1),
    hero: image('/heroes/trailers-hero.jpg'),
    // Three sections side by side (one vertical each), titles centered over the video.
    // 'lg' so each video fills its column (a smaller size would leave it narrower).
    sections: [
      columns(
        section('fist', row([ig('https://www.instagram.com/rawb.start/reel/DfAmfXPNC2r/', '/ig-previews/fist-trailer.jpg')], 'lg')),
        section('metro', row([ig('https://www.instagram.com/rawb.start/reel/DehrK4nuzUK/', '/ig-previews/metro-trailer.jpg')], 'lg')),
        section('constance', row([ig('https://www.instagram.com/rawb.start/reel/DeOxKRzMOHE/', '/ig-previews/constance-trailer.jpg')], 'lg')),
      ),
    ],
  },
  {
    slug: 'ambient-overviews',
    title: 'Panoramiche ambientali',
    category: 'overview',
    origin: 'channel',
    ...CHANNEL,
    channels: ['instagram', 'tiktok', 'youtube'],
    cover: V(2),
    hero: image('/heroes/environments-hero.jpg'),
    // Two sections of 3 verticals, with NO title/description (no keys in the locales).
    sections: [
      section('set-1', row([
        ig('https://www.instagram.com/rawb.start/reel/DfDBB4iBLd5/', '/ig-previews/rdr2-panoramic.jpg'), //rdr2
        ig('https://www.instagram.com/rawb.start/reel/DfSqshQt-K8/', '/ig-previews/stray-panoramic.jpg'), //stray
        ig('https://www.instagram.com/rawb.start/reel/DfKWvKghKV1/', '/ig-previews/hogwarts-panoramic.jpg'), //hogwarts
      ], 'lg')),
      section('set-2', row([
        ig('https://www.instagram.com/rawb.start/reel/DeALaIxsuLu/', '/ig-previews/tw3-panoramic.jpg'), //tw
        ig('https://www.instagram.com/rawb.start/reel/Decdal6Mehp/', '/ig-previews/fh6-panoramic.jpg'), //fh
        ig('https://www.instagram.com/rawb.start/reel/DezwelrpPD9/', '/ig-previews/fist-panoramic.jpg'), //fist
      ], 'lg')),
    ],
  },
  {
    slug: 'miniatures',
    title: 'Miniature',
    category: 'miniatures',
    origin: 'channel',
    ...CHANNEL,
    channels: ['instagram', 'tiktok', 'youtube'],
    cover: V(3),
    hero: image('/heroes/miniatures-hero.jpg'),
    // Two sections, no title/description: first 3 verticals, then 2.
    sections: [
      section('set-1', row([
        ig('https://www.instagram.com/rawb.start/reel/De2GD2thXIs/', '/ig-previews/rdr2-miniature.jpg'), //rdr2
        ig('https://www.instagram.com/rawb.start/reel/DeEo9UEssNJ/', '/ig-previews/cp2077-miniature.jpg'), //cp
        ig('https://www.instagram.com/rawb.start/reel/DfaeZdvhihC/', '/ig-previews/gtav-miniature.jpg'), //gta
      ], 'lg')),
      section('set-2', row([
        ig('https://www.instagram.com/rawb.start/reel/DfFyZ_Euqqb/', '/ig-previews/yakuza-miniature.jpg'), //yakuza
        ig('https://www.instagram.com/rawb.start/reel/DeXIDPgMbK0/', '/ig-previews/tw3-miniature.jpg'), //tw
      ], 'lg')),
    ],
  },
  {
    // Client work (list "Lavori").
    slug: 'camas-game-slice',
    title: "A Slice of Indie",
    category: ['trailer', 'web'],
    origin: 'client',
    client: "Cama's Game Slice",
    clientUrl: 'https://camilla-bianca.github.io/', // the client name links to the portfolio
    channels: ['youtube'],
    period: { from: '2024-03', to: 'present' },
    cover: '/covers/cama-cover.jpg',
    hero: image('/heroes/cama-hero.jpg'),
    link: { type: 'website', url: 'https://camilla-bianca.github.io/' }, // button at the end of the page
    // One section, no title/description: two horizontals.
    sections: [
      section('videos', row([yt('-Ze_h8uSDOo'), yt('CgECediqz7U')])),
    ],
  },
]
