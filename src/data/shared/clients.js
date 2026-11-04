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
    { id: 'client-1', name: 'Brand 1', logo: '/clients/brand-1.svg', url: 'https://example.com' },
    { id: 'client-2', name: 'Brand 2', logo: '/clients/brand-2.svg', url: 'https://example.com' },
    { id: 'client-3', name: 'Brand 3', logo: '/clients/brand-3.svg', url: 'https://example.com' },
    { id: 'client-4', name: 'Brand 4', logo: '/clients/brand-4.svg', url: 'https://example.com' },
    { id: 'client-5', name: 'Brand 5', logo: '/clients/brand-5.svg', url: 'https://example.com' },
    { id: 'client-6', name: 'Brand 6', logo: '/clients/brand-6.svg', url: 'https://example.com' },
  ],
}

export function getClients(zone) {
  return clientsByZone[zone] ?? []
}

export function getMarqueeSettings(zone) {
  return marqueeByZone[zone] ?? marqueeByZone.brand
}
