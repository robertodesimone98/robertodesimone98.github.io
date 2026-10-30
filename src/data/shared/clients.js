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
