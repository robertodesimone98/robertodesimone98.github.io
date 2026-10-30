import { useTranslation } from 'react-i18next'
import { SiInstagram, SiYoutube, SiTiktok } from 'react-icons/si'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa6'
import { getContact } from '../data/contact'
import './ContactLinks.css'

const ICONS = {
  instagram: SiInstagram,
  youtube: SiYoutube,
  tiktok: SiTiktok,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
}

// Row of icon buttons between the hero and the projects. Looks come from the shared
// .btn .btn--primary rules in theme.css (gaming: offset shadow that presses; brand:
// HUD corners). The icon is rendered twice: on brand the copy rolls in from below on
// hover (same effect as the text label of .btn--primary); on gaming the copy is hidden.
function ContactLinks({ zone }) {
  const { t } = useTranslation()
  const links = getContact(zone)

  if (links.length === 0) return null

  return (
    <section className="contact-links" id="contact" aria-label={t('header.nav.contact')}>
      <ul className="contact-list">
        {links.map(({ type, label, href }) => {
          const Icon = ICONS[type]
          if (!Icon) return null
          const external = !href.startsWith('mailto:')

          return (
            <li key={type}>
              <a
                className="btn btn--primary contact-link"
                href={href}
                title={label}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-icon-roll" aria-hidden="true">
                  <span className="contact-icon-roll-inner">
                    <span className="contact-icon-cell">
                      <Icon />
                    </span>
                    <span className="contact-icon-cell">
                      <Icon />
                    </span>
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ContactLinks
