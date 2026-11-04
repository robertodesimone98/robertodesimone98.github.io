import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProjectGroup } from '../data/projects'
import './ProjectNav.css'

// Arrows (same icon style as the other inline SVGs). Decorative: the label says it.
const arrowLeft = (
  <svg className="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l14 0" />
    <path d="M5 12l6 6" />
    <path d="M5 12l6 -6" />
  </svg>
)

const arrowRight = (
  <svg className="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l14 0" />
    <path d="M13 18l6 -6" />
    <path d="M13 6l6 6" />
  </svg>
)

// Previous / next project, limited to the current zone, in the order of the home (list by
// list). Under the label, the list each project belongs to; it is highlighted when it is
// not the list of the project being read, so crossing from one list to the other is visible.
function ProjectNav({ zone, current, previous, next }) {
  const { t } = useTranslation()
  const currentGroup = getProjectGroup(current)

  function groupLabel(project) {
    const group = getProjectGroup(project)
    return (
      <span className={`nav-group${group !== currentGroup ? ' is-other' : ''}`}>
        {t(`projects.groups.${group}.title`)}
      </span>
    )
  }

  return (
    <nav className="project-nav-fixed" aria-label={t('projectNav.label')}>
      <div className="project-nav-fixed-inner">
        {previous ? (
          <Link to={`/${zone}/projects/${previous.slug}`} className="nav-link prev">
            <span className="nav-label">
              {arrowLeft}
              {t('projectNav.previous')}
            </span>
            {groupLabel(previous)}
            <span className="nav-title">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/${zone}/projects/${next.slug}`} className="nav-link next">
            <span className="nav-label">
              {t('projectNav.next')}
              {arrowRight}
            </span>
            {groupLabel(next)}
            <span className="nav-title">{next.title}</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default ProjectNav
