import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'
import { getProjects } from '../data/projects'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useInView } from '../hooks/useInView'
import './ProjectsSection.css'

// Home mounts this with key={`projects-${zone}`}, so the "show all" state starts per zone.
// (The key must differ from the Hero one: siblings cannot share a key.)
function ProjectsSection({ zone }) {
  const { t } = useTranslation()
  const projects = getProjects(zone)
  const storageKey = `projects-show-all-${zone}`

  const [showAll, setShowAll] = useState(() => sessionStorage.getItem(storageKey) === 'true')
  const [titleRef, isTitleVisible] = useInView()

  useEffect(() => {
    sessionStorage.setItem(storageKey, String(showAll))
  }, [showAll, storageKey])

  // 3 columns on desktop, 2 on phones: show two full rows before "show all".
  const isMobile = useMediaQuery('(max-width: 640px)')
  const defaultCount = isMobile ? 4 : 6

  const visibleProjects = showAll ? projects : projects.slice(0, defaultCount)
  const hasMore = projects.length > defaultCount
  const columns = isMobile ? 2 : 3

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <div
          ref={titleRef}
          className={`section-title-row fade-in-section ${isTitleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="section-title">{t('projects.sectionTitle')}</h2>
          {hasMore && (
            <button className="btn btn--secondary btn--sm toggle-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? t('projects.showLess') : t('projects.showAll')}
              <svg
                className={`toggle-icon ${showAll ? 'open' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.slug} zone={zone} project={project} staggerIndex={i % columns} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
