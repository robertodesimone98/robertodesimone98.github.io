import './AvatarLink.css'

/**
 * Cerchio con logo, a cavallo tra il video dell'hero e il blocco sotto.
 * Solo zona gaming. Link esterno (Instagram).
 *
 * Props:
 *  - href:  URL del profilo (prenderlo da data/gaming/contact.js)
 *  - label: nome accessibile del link, es. "Instagram @rawb.start"
 *  - src:   immagine del logo (import da src/assets)
 */
export default function AvatarLink({ href, label, src }) {
  return (
    <a
      className="avatar-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <img className="avatar-link__img" src={src} alt="" width="320" height="320" />
    </a>
  )
}
