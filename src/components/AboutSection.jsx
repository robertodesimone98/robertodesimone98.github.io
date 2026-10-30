import { Trans, useTranslation } from 'react-i18next'
import { scrollToSection } from '../utils/smoothScroll'
import { tools } from '../data/shared/about'
import { useInView } from '../hooks/useInView'
import './AboutSection.css'

// Generic icon for tools without their own image (see data/shared/about.js).
function PlaceholderToolIcon() {
  return (
    <svg
      className="tool-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 9h6v6H9z" />
    </svg>
  )
}

// Same skeleton in both zones; only the intro text and the CTA label change.
// The title reuses .section-title (ProjectsSection.css) so all section titles match.
function AboutSection({ zone }) {
  const { t } = useTranslation()
  const [titleRef, isTitleVisible] = useInView()
  const [bodyRef, isBodyVisible] = useInView()

  const introKey = zone === 'gaming' ? 'about.introGaming' : 'about.introBrand'
  const ctaLabel = t(`${zone}.about.cta`)

  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div
          ref={titleRef}
          className={`about-title-row fade-in-section ${isTitleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="section-title">{t('about.title')}</h2>
        </div>

        <div ref={bodyRef} className={`fade-in-section ${isBodyVisible ? 'is-visible' : ''}`}>
          <p className="about-intro">
            <Trans i18nKey={introKey} components={{ hl: <span className="highlight" /> }} />
          </p>

          <div className="about-tools">
            <h3 className="about-label">{t('about.toolsLabel')}</h3>
            <ul className="tool-list">
              {tools.map((tool) => (
                <li key={tool.id} className="tool-pill">
                  {tool.icon ? (
                    <img className="tool-icon" src={tool.icon} alt="" width="18" height="18" />
                  ) : (
                    <PlaceholderToolIcon />
                  )}
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-cta">
            <button className="btn btn--primary" onClick={() => scrollToSection('contact')}>
              <span className="btn-label">
                <span className="btn-label-inner" data-label={ctaLabel}>
                  {ctaLabel}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
