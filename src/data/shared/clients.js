// Clients / brands shown in the strip between About and Experience.
//
// ClientsSection renders nothing for a zone with an empty list, so to show the
// strip on gaming it is enough to add entries to `gaming` below (and the texts
// gaming.clients.* already exist in the locales).
//   id    unique key
//   name  brand name (not translated); used as alt text of the logo
//   logo  optional path of an image in /public, e.g. '/clients/acme.svg'.
//         Without it the name is shown as text.
//
// PLACEHOLDER: the brand entries are empty slots (dashed box). Replace them with the
// real clients; `placeholder: true` is only for these empty slots.
//
// MARQUEE (scorrimento orizzontale dei loghi), per zona:
//   speed          velocita' in px al secondo (piu' alto = piu' veloce)
//   direction      'left' | 'right'
//   pauseOnHover   true = si ferma col mouse sopra
//   gap            spazio tra i loghi in px
//   fade           true = bordi sfumati a destra e sinistra
// enabled: false = torna alla riga statica di prima.
const marqueeByZone = {
  gaming: { enabled: true, speed: 40, direction: 'left', pauseOnHover: true, gap: 48, fade: true },
  brand: { enabled: true, speed: 40, direction: 'left', pauseOnHover: true, gap: 48, fade: true },
}

const clientsByZone = {
  gaming: [],
  brand: [
    { id: 'client-1', name: '[Logo 1]', placeholder: true },
    { id: 'client-2', name: '[Logo 2]', placeholder: true },
    { id: 'client-3', name: '[Logo 3]', placeholder: true },
    { id: 'client-4', name: '[Logo 4]', placeholder: true },
    { id: 'client-5', name: '[Logo 5]', placeholder: true },
    { id: 'client-6', name: '[Logo 6]', placeholder: true },
  ],
}

export function getClients(zone) {
  return clientsByZone[zone] ?? []
}

export function getMarqueeSettings(zone) {
  return marqueeByZone[zone] ?? marqueeByZone.brand
}
