import { image, yt, ig, drive, row, section } from '../shared/blocks'

export const brandProjects = [
  {
    slug: 'gaming-dogs',            // URL + chiave dei testi nei locales
    title: 'Gaming Dogs',           // mostrato così com'è, non tradotto
    category: ['social', 'gaming'],               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Gaming Dogs',
    clientUrl: 'https://www.youtube.com/@gamingdogs',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram', 'tiktok'],
    period: { from: '2026-01', to: '2026-04' },   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/gaming-dogs-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: { type: 'youtube', url: 'https://www.youtube.com/@gamingdogs' },// facoltativo, bottone in fondo
    sections: [
      section('film', row([
        yt('Kw6jHCRJOfo'),
        ig('https://www.instagram.com/reel/DYhgNiUqLCu/', '/ig-previews/brand/gaming_dogs-preview.jpg'),
      ])),
    ],
  },
  {
    slug: 'pratt',            // URL + chiave dei testi nei locales
    title: 'Prattquello',           // mostrato così com'è, non tradotto
    category: ['social', 'travel', 'food', 'storytelling'],               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Prattquello',
    clientUrl: 'https://www.youtube.com/@Prattquello',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
    period: { from: '2025-03', to: '2026-04' },   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/pratt-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: { type: 'youtube', url: 'https://www.youtube.com/@Prattquello' },// facoltativo, bottone in fondo
    sections: [
      section('stories', row([
        yt('4iNvc4KeZBE'),
        ig('https://www.instagram.com/reel/DWl4xivDCCp/', '/ig-previews/brand/pratt1-preview.jpg'),
      ])),
      section('mulino', row([
        yt('mFmYQ63FspQ'),
        ig('https://www.instagram.com/reel/DTfzRgWDAvV/', '/ig-previews/brand/pratt2-preview.jpg'),
      ])),
      section('travel', row([
        yt('-ZdCb4aEJuU'),
        ig('https://www.instagram.com/reel/DWZLH9yjBkU/', '/ig-previews/brand/pratt3-preview.jpg'),
      ])),
    ],
  },
  {
    slug: 'alessandro-benetton',            // URL + chiave dei testi nei locales
    title: 'Alessandro Benetton: Business Stories',           // mostrato così com'è, non tradotto
    category: ['social', 'storytelling'],               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Alessandro Benetton',
    clientUrl: 'https://www.youtube.com/@AlessandroBenetton',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
    period: { from: '2025-04', to: '2026-04' },   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/ale-benetton-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: { type: 'youtube', url: 'https://www.youtube.com/@AlessandroBenetton' },// facoltativo, bottone in fondo
    sections: [
      section('film', row([
        yt('Udy9oktka1o'),
        ig('https://www.instagram.com/reel/DLFd-PNtvNt/', '/ig-previews/brand/ale_benetton-preview.jpg'),
      ])),
    ],
  },
  {
    slug: 'san-carlo',            // URL + chiave dei testi nei locales
    title: 'San Carlo Taste Hunter',           // mostrato così com'è, non tradotto
    category: ['social', 'food', 'storytelling'],               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'San Carlo',
    clientUrl: 'https://www.instagram.com/piugusto_tastehunter/',         // facoltativo, il nome diventa un link
    channels: ['instagram'],
    period: { from: '2025-07', to: '2026-03' },   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/san-carlo-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: { type: 'instagram', url: 'https://www.instagram.com/piugusto_tastehunter/' },// facoltativo, bottone in fondo
    sections: [
      section('reels', row([
        ig('https://www.instagram.com/reel/DQZXr1riJFB/', '/ig-previews/brand/san_carlo1-preview.jpg'),
        ig('https://www.instagram.com/reel/DSKpwoOiNDq/', '/ig-previews/brand/san_carlo2-preview.jpg'),
        ig('https://www.instagram.com/reel/DTh6ZW9iBuu/', '/ig-previews/brand/san_carlo3-preview.jpg'),
      ])),
    ],
  },
  {
    slug: 'slim-dogs',            // URL + chiave dei testi nei locales
    title: 'Slim Dogs',           // mostrato così com'è, non tradotto
    category: 'social',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Slim Dogs',
    clientUrl: 'https://www.slimdogsproduction.com/',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram', 'tiktok'],
    period: { from: '2025-03', to: '2026-04' },   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/slim-dogs-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: { type: 'website', url: 'https://www.slimdogsproduction.com/' },// facoltativo, bottone in fondo
    sections: [
      section('youtube', row([
        yt('vh-y5n-3uJ8'),
        yt('1QhH5Zr5H74'),
      ])),
      section('social', row([
        ig('https://www.instagram.com/reel/DRUkSqtDIcz/', '/ig-previews/brand/slim_dogs1-preview.jpg'),
        ig('https://www.instagram.com/reel/DWWY-63DMld/', '/ig-previews/brand/slim_dogs2-preview.jpg'),
        ig('https://www.instagram.com/reel/DUD0BT9DKC8/', '/ig-previews/brand/slim_dogs3-preview.jpg'),
      ])),
    ],
  },
  {
    slug: 'prime-video',            // URL + chiave dei testi nei locales
    title: 'Prime Video',           // mostrato così com'è, non tradotto
    category: 'social',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Prime Video',
    clientUrl: 'https://www.youtube.com/@PrimeVideoIT',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
    period: { from: '2025-05', to: '2025-10' },   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/prime-video-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: { type: 'youtube', url: 'https://www.youtube.com/@PrimeVideoIT' },// facoltativo, bottone in fondo
    sections: [
      section('film', row([
        yt('HdjnuoTZAnc'),
        ig('https://www.instagram.com/reel/DQUv7RfjAA7/', '/ig-previews/brand/prime-preview.jpg'),
      ])),
    ],
  },
  {
    slug: 'nuvola-yoga',            // URL + chiave dei testi nei locales
    title: 'Nuvola Yoga',           // mostrato così com'è, non tradotto
    category: 'social',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Nuvola Yoga',
    clientUrl: 'https://www.youtube.com/@nuvolayoga',         // facoltativo, il nome diventa un link
    channels: ['youtube'],
    period: { from: '2025-05', to: '2026-01' },   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/nuvola-yoga-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: { type: 'youtube', url: 'https://www.youtube.com/@nuvolayoga' },// facoltativo, bottone in fondo
    sections: [
      section('video', row([yt('4XmCfn8pCfE')]))
    ],
  },
  {
    slug: 'backstage-hiver',            // URL + chiave dei testi nei locales
    title: 'Backstage Hiver',           // mostrato così com'è, non tradotto
    category: 'backstage',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'course',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'ITS Rossellini',
    clientUrl: 'https://itsrossellini.it/',         // facoltativo, il nome diventa un link
    channels: [],
    period: { from: '2025-02', to: '2025-05' },   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/its-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: { type: 'instagram', url: 'https://www.instagram.com/lhiver_corto/' },// facoltativo, bottone in fondo
    sections: [
      section('film', row([
        drive('1pa2mvND_4ngHl3_XfLpSijDDoXv2EKl9', '/covers/brand/its-cover.jpg'),
      ])),
    ],
  },
  {
    slug: 'masterclass-festa-cinema-roma',            // URL + chiave dei testi nei locales
    title: 'Festa del Cinema di Roma: D\'Innocenzo Brothers Masterclass',           // mostrato così com'è, non tradotto
    category: 'masterclass',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'course',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'ITS Rossellini',
    clientUrl: 'https://itsrossellini.it/',         // facoltativo, il nome diventa un link
    channels: [],
    period: { from: '2024-10'},   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/festa-cinema-roma-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '/videos/preview/nome-progetto.mp4', // facoltativo
    link: { type: 'website', url: 'https://www.romacinemafest.it/it/festa-cinema-roma/' },// facoltativo, bottone in fondo
    sections: [
      section('film', row([
        drive('198fyQs6K2JBqrVcLXisAFerwjCELrL8c', '/covers/brand/its-cover.jpg'),
      ])),
    ],
  },
  {
    slug: 'color-grading',            // URL + chiave dei testi nei locales
    title: 'Color Grading',           // mostrato così com'è, non tradotto
    category: 'color',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'personal',                 // 'client' | 'channel' | 'personal' | 'course'
    client: '',
    clientUrl: '',         // facoltativo, il nome diventa un link
    channels: [],
    period: { from: '2024'},   // 'to' può essere 'present' o mancare
    cover: '/covers/brand/color-cover.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '', // facoltativo
    link: null, // facoltativo, bottone in fondo
    sections: [
      section('video', row([yt('ID_YOUTUBE'), yt('ALTRO_ID')])),
      section('reels', row([ig('https://www.instagram.com/reel/...', '/ig-previews/x.jpg')], 'lg')),
    ],
  },
  {
    slug: 'nome-progetto',            // URL + chiave dei testi nei locales
    title: 'Nome Progetto',           // mostrato così com'è, non tradotto
    category: 'social',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Nome Cliente',
    clientUrl: 'https://...',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
    period: { from: '2025-03', to: '2025-09' },   // 'to' può essere 'present' o mancare
    cover: '/covers/nome-progetto.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '/videos/preview/nome-progetto.mp4', // facoltativo
    link: { type: 'website', url: 'https://...' },// facoltativo, bottone in fondo
    sections: [
      section('video', row([yt('ID_YOUTUBE'), yt('ALTRO_ID')])),
      section('reels', row([ig('https://www.instagram.com/reel/...', '/ig-previews/x.jpg')], 'lg')),
    ],
  },
  {
    slug: 'nome-progetto',            // URL + chiave dei testi nei locales
    title: 'Nome Progetto',           // mostrato così com'è, non tradotto
    category: 'social',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Nome Cliente',
    clientUrl: 'https://...',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
    period: { from: '2025-03', to: '2025-09' },   // 'to' può essere 'present' o mancare
    cover: '/covers/nome-progetto.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '/videos/preview/nome-progetto.mp4', // facoltativo
    link: { type: 'website', url: 'https://...' },// facoltativo, bottone in fondo
    sections: [
      section('video', row([yt('ID_YOUTUBE'), yt('ALTRO_ID')])),
      section('reels', row([ig('https://www.instagram.com/reel/...', '/ig-previews/x.jpg')], 'lg')),
    ],
  },
  {
    slug: 'nome-progetto',            // URL + chiave dei testi nei locales
    title: 'Nome Progetto',           // mostrato così com'è, non tradotto
    category: 'social',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Nome Cliente',
    clientUrl: 'https://...',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
    period: { from: '2025-03', to: '2025-09' },   // 'to' può essere 'present' o mancare
    cover: '/covers/nome-progetto.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '/videos/preview/nome-progetto.mp4', // facoltativo
    link: { type: 'website', url: 'https://...' },// facoltativo, bottone in fondo
    sections: [
      section('video', row([yt('ID_YOUTUBE'), yt('ALTRO_ID')])),
      section('reels', row([ig('https://www.instagram.com/reel/...', '/ig-previews/x.jpg')], 'lg')),
    ],
  },
  {
    slug: 'nome-progetto',            // URL + chiave dei testi nei locales
    title: 'Nome Progetto',           // mostrato così com'è, non tradotto
    category: 'social',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Nome Cliente',
    clientUrl: 'https://...',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
    period: { from: '2025-03', to: '2025-09' },   // 'to' può essere 'present' o mancare
    cover: '/covers/nome-progetto.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '/videos/preview/nome-progetto.mp4', // facoltativo
    link: { type: 'website', url: 'https://...' },// facoltativo, bottone in fondo
    sections: [
      section('video', row([yt('ID_YOUTUBE'), yt('ALTRO_ID')])),
      section('reels', row([ig('https://www.instagram.com/reel/...', '/ig-previews/x.jpg')], 'lg')),
    ],
  },
  {
    slug: 'nome-progetto',            // URL + chiave dei testi nei locales
    title: 'Nome Progetto',           // mostrato così com'è, non tradotto
    category: 'social',               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Nome Cliente',
    clientUrl: 'https://...',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
    period: { from: '2025-03', to: '2025-09' },   // 'to' può essere 'present' o mancare
    cover: '/covers/nome-progetto.jpg',
    hero: image('/heroes/nome-progetto.jpg'),     // oppure yt('ID_VIDEO')
    preview: '/videos/preview/nome-progetto.mp4', // facoltativo
    link: { type: 'website', url: 'https://...' },// facoltativo, bottone in fondo
    sections: [
      section('video', row([yt('ID_YOUTUBE'), yt('ALTRO_ID')])),
      section('reels', row([ig('https://www.instagram.com/reel/...', '/ig-previews/x.jpg')], 'lg')),
    ],
  },
]