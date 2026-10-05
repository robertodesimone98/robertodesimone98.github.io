export const ZONES = ['gaming', 'brand']

export function isValidZone(zone) {
  return ZONES.includes(zone)
}

export function otherZone(zone) {
  return zone === 'gaming' ? 'brand' : 'gaming'
}
