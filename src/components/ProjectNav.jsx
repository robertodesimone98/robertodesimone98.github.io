import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './ProjectNav.css'

// Previous / next project, limited to the current zone.
function ProjectNav({ zone, previous, next }) {
  const { t } = useTranslation()

  return (
    <nav className="project-nav-fixed" aria-label={t('projectNav.label')}>
      <div className="project-nav-fixed-inner">
        {previous ? (
          <Link to={`/${zone}/projects/${previous.slug}`} className="nav-link prev">
            <span className="nav-label">{t('projectNav.previous')}</span>
            <span className="nav-title">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/${zone}/projects/${next.slug}`} className="nav-link next">
            <span className="nav-label">{t('projectNav.next')}</span>
            <span className="nav-title">{next.title}</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default ProjectNav
