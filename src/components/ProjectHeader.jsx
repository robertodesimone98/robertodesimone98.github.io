import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LuLayoutGrid } from 'react-icons/lu'
import LangSwitch from './LangSwitch'
import ZoneSwitch from './ZoneSwitch'
import './ProjectHeader.css'

// Header of the project pages (the home one has the nav, here there is a link back
// to the projects). Same skeleton as Header.css so the house icon, the ZoneSwitch
// and the language switch do not move between home and project.
// The ZoneSwitch leads to the OTHER zone's home (projects do not map across zones).
function ProjectHeader({ zone }) {
  const { t } = useTranslation()

  return (
    <header className="project-header">
      <div className="project-header-inner">
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

        <Link
          to={`/${zone}#projects`}
          className="back-link link-accent"
          aria-label={t('projectDetail.backToProjects')}
        >
          <LuLayoutGrid aria-hidden="true" />
          <span className="back-label back-label--full">{t('projectDetail.backToProjects')}</span>
          <span className="back-label back-label--short">{t('projectDetail.backToProjectsShort')}</span>
        </Link>

        <div className="project-header-actions">
          <ZoneSwitch zone={zone} />
          <LangSwitch />
        </div>
      </div>
    </header>
  )
}

export default ProjectHeader
