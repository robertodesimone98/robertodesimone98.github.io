import { gamingContact } from './gaming/contact'
import { brandContact } from './brand/contact'

const contactByZone = {
  gaming: gamingContact,
  brand: brandContact,
}

export function getContact(zone) {
  return contactByZone[zone] ?? []
}
