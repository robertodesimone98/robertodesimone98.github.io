import { useTranslation } from 'react-i18next'
import Highlights from './Highlights'
import { experience } from '../data/shared/experience'
import { education } from '../data/shared/education'
import { formatPeriod } from '../utils/formatPeriod'
import { useInView } from '../hooks/useInView'
import './ExperienceSection.css'

const COLUMNS = 3

function ExperienceCard({ item, index }) {
  const { t, i18n } = useTranslation()
  const [ref, isVisible] = useInView()
  const period = formatPeriod(item.period, i18n.language, t('experience.present'))

  return (
    <li
      ref={ref}
      className={`experience-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ '--stagger-index': index % COLUMNS }}
    >
      <span className="experience-period">{period}</span>
      <h3 className="experience-role">{t(`experience.items.${item.id}.role`)}</h3>
      <span className="experience-org">{item.org}</span>
      <p className="experience-description">
        <Highlights text={t(`experience.items.${item.id}.description`)} />
      </p>
    </li>
  )
}

// Same skeleton in both zones (the look changes in ExperienceSection.css).
// Texts live in the locales (experience.*), companies and periods in data/shared.
function ExperienceSection() {
  const { t, i18n } = useTranslation()
  const [titleRef, isTitleVisible] = useInView()
  const [educationRef, isEducationVisible] = useInView()

  return (
    <section className="experience-section" id="experience">
      <div className="experience-inner">
        <div
          ref={titleRef}
          className={`experience-title-row fade-in-section ${isTitleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="section-title">{t('experience.title')}</h2>
        </div>

        <ul className="experience-list">
          {experience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </ul>

        {education.length > 0 && (
          <div
            ref={educationRef}
            className={`education fade-in-section ${isEducationVisible ? 'is-visible' : ''}`}
          >
            <h3 className="education-label">{t('experience.education')}</h3>
            <ul className="education-list">
              {education.map((item) => (
                <li key={item.id} className="education-item">
                  <span className="education-title">
                    {t(`experience.educationItems.${item.id}.title`)}
                  </span>
                  <span className="education-meta">
                    {item.institution} · {formatPeriod(item.period, i18n.language, t('experience.present'))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default ExperienceSection
