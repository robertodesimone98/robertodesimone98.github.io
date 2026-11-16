import { image, yt, ig, row, section } from '../shared/blocks'

export const brandProjects = [
  {
    slug: 'gaming-dogs',            // URL + chiave dei testi nei locales
    title: 'Gaming Dogs',           // mostrato così com'è, non tradotto
    category: ['social', 'gaming'],               // 'social' | 'motion' | 'color' | 'short-film' | ...
    origin: 'client',                 // 'client' | 'channel' | 'personal' | 'course'
    client: 'Gaming Dogs',
    clientUrl: 'https://www.youtube.com/@gamingdogs',         // facoltativo, il nome diventa un link
    channels: ['youtube', 'instagram'],
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