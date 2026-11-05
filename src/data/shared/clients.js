// Clients / brands shown in the strip between About and Experience.
//
// ClientsSection renders nothing for a zone with an empty list, so to show the
// strip on gaming it is enough to add entries to `gaming` below (and the texts
// gaming.clients.* already exist in the locales).
//   id    unique key
//   name  brand name (not translated); used as alt text of the logo
//   logo  optional path of an image in /public, e.g. '/clients/acme.svg'.
//         Without it the name is shown as text.
//   url   optional link (opens in a new tab). Without it the logo is not clickable.
//   placeholder  true = empty dashed slot (only for slots without a logo yet)
//
// PLACEHOLDER: the brand entries use sample logos (public/clients/brand-N.svg) and a
// sample link. Replace logo, name and url with the real clients.
//
// MARQUEE (scorrimento orizzontale dei loghi), per zona:
//   speed          velocita' in px al secondo (piu' alto = piu' veloce)
//   direction      'left' | 'right'
//   pauseOnHover   true = si ferma col mouse sopra
//   gap            spazio tra i loghi in px
//   fade           true = bordi sfumati a destra e sinistra
//   grayscale      true = loghi in grigio e piu' tenui, a colori pieni in hover
// enabled: false = torna alla riga statica di prima.
const marqueeByZone = {
  gaming: { enabled: true, speed: 40, direction: 'left', pauseOnHover: true, gap: 48, fade: true, grayscale: true },
  brand: { enabled: true, speed: 40, direction: 'left', pauseOnHover: true, gap: 48, fade: true, grayscale: true },
}

const clientsByZone = {
  gaming: [],
  brand: [
    { id: 'slim-dogs', name: 'Slim Dogs', logo: '/clients/slim-dogs.jpg', url: 'https://www.slimdogsproduction.com/' },
    { id: 'pratt-quello', name: 'PrattQuello', logo: '/clients/pratt-quello.jpg', url: 'https://www.youtube.com/@Prattquello' },
    { id: 'san-carlo', name: 'San Carlo', logo: '/clients/san-carlo.png', url: 'https://www.sancarlo.it/it/default.asp' },
    { id: 'gaming-dogs', name: 'Gaming Dogs', logo: '/clients/gaming-dogs.jpg', url: 'https://www.youtube.com/channel/UClhYfl7drwcs2VDJ6F8JaTA' },
    { id: 'prime-video', name: 'Prime Video', logo: '/clients/prime-video.jpg', url: 'https://www.youtube.com/@PrimeVideoIT' },
    { id: 'festa-cinema-roma', name: 'Festa del Cinema di Roma', logo: '/clients/festa-cinema-roma.jpg', url: 'https://www.romacinemafest.it/it/festa-cinema-roma/' },
    { id: 'a-benetton', name: 'Alessandro Benetton', logo: '/clients/a-benetton.jpg', url: 'https://www.youtube.com/alessandrobenetton' },
    { id: 'givova', name: 'Givova', logo: '/clients/givova.jpg', url: 'https://www.givovashopping.it/' },
    { id: 'nuvola-yoga', name: 'Nuvola Yoga', logo: '/clients/nuvola-yoga.jpg', url: 'https://nuvolayoga.com/' },
  ],
}

export function getClients(zone) {
  return clientsByZone[zone] ?? []
}

export function getMarqueeSettings(zone) {
  return marqueeByZone[zone] ?? marqueeByZone.brand
}
