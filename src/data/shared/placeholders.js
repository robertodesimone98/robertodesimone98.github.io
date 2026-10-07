import { yt, drive, ig, image, stack, row, section, grid } from './blocks'

// TEMPORARY placeholder content shared by Gaming and Brand, so both zones show the
// SAME layouts/covers/heroes and only the theme differs (style comparison).
// Each item is one "slot": the zone files add slug, title, category and origin.
// When real projects arrive, delete this file and write real objects in
// data/gaming/projects.js and data/brand/projects.js (field reference there).
//
// Videos/links are real ones from the old portfolio so clicks can be tested;
// covers are generated placeholders in public/placeholders/.
//
// Slots (layout ids = section ids, translated in the locales):
//   1 two-h + single-v        4 h-2v                7 grid-2x2 + sizes
//   2 three-v + grid-6v       5 big-2small          8 sizes (large row + 2 small)
//   3 h-v (two rows)          6 v-stack-v           9 single-h-lg

const H = (n) => `/placeholders/h-${n}.svg`
const V = (n) => `/placeholders/v-${n}.svg`

const IG = [
  'https://www.instagram.com/p/DWl4xivDCCp/',
  'https://www.instagram.com/p/DTfzRgWDAvV/',
  'https://www.instagram.com/p/DWZLH9yjBkU/',
  'https://www.instagram.com/p/DLFd-PNtvNt/',
  'https://www.instagram.com/p/DQUv7RfjAA7/',
  'https://www.instagram.com/p/DQZXr1riJFB/',
]

export const placeholderBases = [
  // 1
  {
    cover: V(1),
    hero: yt('CgECediqz7U', H(1)),
    link: { type: 'youtube', url: 'https://www.youtube.com/' },
    channels: ['youtube'],
    period: { from: '2026-03', to: 'present' },
    sections: [
      section('two-h', row([yt('-Ze_h8uSDOo', H(2)), drive('1pa2mvND_4ngHl3_XfLpSijDDoXv2EKl9', H(3))])),
      section('single-v', row([yt('Kw6jHCRJOfo', V(2), 'v')], 'sm')),
    ],
  },
  // 2
  {
    cover: V(2),
    hero: image(H(2)),
    link: { type: 'instagram', url: 'https://www.instagram.com/' },
    channels: ['instagram', 'tiktok'],
    period: { from: '2025' },
    sections: [
      section('three-v', row([ig(IG[0], V(1)), ig(IG[1], V(2)), ig(IG[2], V(3))])),
      section(
        'grid-6v',
        ...grid(
          IG.map((url, i) => ig(url, V((i % 4) + 1))),
          3,
          'sm',
        ),
      ),
    ],
  },
  // 3
  {
    cover: H(3),
    coverPosition: 'center 30%',
    hero: drive('1jGN5bDQwxIDaa8ZiNW9biakCLwO7mIxB', H(3)),
    channels: ['youtube', 'instagram'],
    period: { from: '2024-06', to: '2025-01' },
    sections: [
      section(
        'h-v',
        row([yt('vh-y5n-3uJ8', H(1)), ig(IG[3], V(1))]),
        row([drive('1OdTg7NPlra3F6LjNRNcuBMx3UX-MgQDX', H(2)), ig(IG[4], V(2))]),
      ),
    ],
  },
  // 4
  {
    cover: H(4),
    hero: yt('1QhH5Zr5H74', H(4)),
    link: { type: 'website', url: 'https://example.com' },
    channels: ['youtube'],
    period: { from: '2023' },
    sections: [section('h-2v', row([drive('198fyQs6K2JBqrVcLXisAFerwjCELrL8c', H(1)), ig(IG[0], V(3)), ig(IG[1], V(4))]))],
  },
  // 5
  {
    cover: V(3),
    hero: yt('ekcCjWlMCqs', H(2)),
    link: { type: 'youtube', url: 'https://www.youtube.com/' },
    channels: ['youtube'],
    period: { from: '2025-09', to: '2025-11' },
    sections: [
      section(
        'big-2small',
        row([yt('4iNvc4KeZBE', H(3)), stack(yt('mFmYQ63FspQ', H(4)), drive('1rxC0rnZi8Fm0S7IDW_-h4s5LBqre6fQq', H(1)))]),
      ),
    ],
  },
  // 6 (right-hand vertical is a Drive one: covers Drive + vertical)
  {
    cover: H(1),
    hero: image(H(4)),
    channels: ['instagram', 'tiktok', 'youtube'],
    period: { from: '2026-01' },
    sections: [
      section(
        'v-stack-v',
        row([
          ig(IG[2], V(1)),
          stack(yt('-ZdCb4aEJuU', H(2)), yt('Udy9oktka1o', H(3))),
          drive('1Q74uxeQxjXWIRm1mvr276NEPnTDHMJyo', V(2), 'v'),
        ]),
      ),
    ],
  },
  // 7
  {
    cover: V(4),
    hero: drive('1YCQjhsxtfOKW9je0wCF053lQ6NY42OHD', H(4)),
    channels: ['youtube'],
    period: { from: '2022-05', to: '2022-08' },
    sections: [
      section(
        'grid-2x2',
        row([
          stack(yt('HdjnuoTZAnc', H(1)), yt('4XmCfn8pCfE', H(2))),
          stack(drive('1x5AlfRJUEvDHKdq9xPuwXQJ0lrcNKkns', H(3)), drive('1A6UED7zOLr7LrnV5DbutEp7yR-Aj74qp', H(4))),
        ]),
      ),
      section('sizes', row([yt('ekcCjWlMCqs', H(1))], 'lg'), row([ig(IG[4], V(1)), ig(IG[5], V(2)), ig(IG[0], V(3))], 'sm')),
    ],
  },
  // 8 (same layout as the old "Brand placeholder 4")
  {
    cover: H(4),
    coverPosition: 'center 25%',
    hero: image(H(4)),
    channels: ['youtube'],
    period: { from: '2024' },
    sections: [
      section('sizes', row([yt('-Ze_h8uSDOo', H(1))], 'lg'), row([yt('ekcCjWlMCqs', H(2)), yt('4XmCfn8pCfE', H(3))], 'sm')),
    ],
  },
  // 9 (same layout as the old "Brand placeholder 5")
  {
    cover: H(1),
    hero: yt('ekcCjWlMCqs', H(1)),
    channels: ['youtube'],
    period: { from: '2024-02' },
    sections: [section('single-h-lg', row([drive('1OdTg7NPlra3F6LjNRNcuBMx3UX-MgQDX', H(2))], 'lg'))],
  },
]
