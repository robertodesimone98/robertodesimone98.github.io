import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../utils/smoothScroll'
import LangSwitch from './LangSwitch'
import ZoneSwitch from './ZoneSwitch'
import './Header.css'

const SECTIONS = ['hero', 'projects', 'about', 'contact']

const NAV_ITEMS = [
  { id: 'hero', labelKey: 'home' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'about', labelKey: 'about' },
  { id: 'contact', labelKey: 'contact' },
]

// Home-only header. Project pages use their own header (as in the reference),
// so ZoneSwitch is automatically absent there.
//
// Layout: 3 columns (logo | nav centered | actions). Same skeleton in both
// zones; Header.css changes only the look per zone (.theme-gaming/.theme-brand).
// Narrow screens (<= 960px, the width below which the centered nav no longer
// fits next to the buttons): ZoneSwitch stays visible in the bar next to the
// menu toggle; LangSwitch moves into the open menu.
function Header({ zone }) {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const isClickScrolling = useRef(false)

  // Brand nav: ONE dot that slides under the hovered link (or the active one
  // when nothing is hovered). Position is measured, so it is recomputed on
  // resize and once fonts are loaded (they change the link widths).
  const navRef = useRef(null)
  const linkRefs = useRef({})
  const [hoveredId, setHoveredId] = useState(null)
  const [dotX, setDotX] = useState(0)
  const [dotReady, setDotReady] = useState(false)
  const dotTarget = hoveredId ?? activeSection

  useLayoutEffect(() => {
    const place = () => {
      const el = linkRefs.current[dotTarget]
      if (el) setDotX(el.offsetLeft + el.offsetWidth / 2)
    }
    place()

    const nav = navRef.current
    const observer = nav ? new ResizeObserver(place) : null
    if (nav) observer.observe(nav)
    document.fonts?.ready.then(place)
    return () => observer?.disconnect()
  }, [dotTarget, zone])

  // Slide transition only after the first placement, so the dot does not
  // fly in from the left on load.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setDotReady(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return

      const scrollY = window.scrollY

      if (scrollY < 10) {
        setActiveSection(SECTIONS[0])
        return
      }

      const header = document.querySelector('.header')
      const headerHeight = header ? header.offsetHeight : 0
      const triggerPoint = scrollY + headerHeight + 1
      let current = SECTIONS[0]

      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= triggerPoint) {
          current = id
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (id) => (activeSection === id ? 'active' : '')

  const handleNavClick = (id, e) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return

    e.preventDefault()
    setActiveSection(id)
    setMenuOpen(false)

    window.history.pushState(null, '', `#${id}`)

    isClickScrolling.current = true
    scrollToSection(id, () => {
      isClickScrolling.current = false
    })
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label={t('header.homeLabel')}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </Link>

        <nav className="nav" ref={navRef} onMouseLeave={() => setHoveredId(null)}>
          {NAV_ITEMS.map(({ id, labelKey }) => (
            <a
              key={id}
              ref={(el) => {
                linkRefs.current[id] = el
              }}
              href={`#${id}`}
              className={linkClass(id)}
              onClick={(e) => handleNavClick(id, e)}
              onMouseEnter={() => setHoveredId(id)}
              onFocus={() => setHoveredId(id)}
              onBlur={() => setHoveredId(null)}
            >
              {t(`header.nav.${labelKey}`)}
            </a>
          ))}
          <span
            className={`nav-dot${dotReady ? ' is-ready' : ''}`}
            style={{ transform: `translateX(${dotX}px)` }}
            aria-hidden="true"
          />
        </nav>

        <div className="header-actions">
          <ZoneSwitch zone={zone} />
          <span className="header-lang">
            <LangSwitch />
          </span>
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(({ id, labelKey }) => (
          <a
            key={id}
            href={`#${id}`}
            className={linkClass(id)}
            onClick={(e) => handleNavClick(id, e)}
          >
            {t(`header.nav.${labelKey}`)}
          </a>
        ))}
        <div className="mobile-menu-actions">
          <LangSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header
