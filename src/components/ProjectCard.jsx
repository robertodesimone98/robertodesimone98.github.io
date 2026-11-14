import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ChannelIcons from './ChannelIcons'
import { useInView } from '../hooks/useInView'
import { categoryLabel } from '../utils/categories'
import { showsMeta } from '../data/projects'
import { projectTitle } from '../utils/projectTitle'
import './ProjectCard.css'

// Card of the projects grid. Cover + (optional) hover preview video, as in the
// reference. The preview is lazy: the file is only requested on first hover.
function ProjectCard({ zone, project, staggerIndex = 0 }) {
  const { t } = useTranslation()
  const videoRef = useRef(null)
  const [previewLoaded, setPreviewLoaded] = useState(false)
  const [cardRef, isVisible] = useInView()

  // Client name: only for the projects made for a client (list "work"), in both zones.
  const clientName = project.origin === 'client' ? project.client : null

  const showMeta = showsMeta(zone, project)
  const title = projectTitle(project, zone, t)

  function handleMouseEnter() {
    const video = videoRef.current
    if (!video) return
    if (!previewLoaded) {
      video.src = project.preview
      setPreviewLoaded(true)
    }
    video.play().catch(() => {})
  }

  function handleMouseLeave() {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  return (
    <Link
      ref={cardRef}
      to={`/${zone}/projects/${project.slug}`}
      className={`card fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ '--stagger-index': staggerIndex }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-media">
        <img
          src={project.cover}
          alt={title}
          className="card-image"
          loading="lazy"
          style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
        />
        {project.preview && (
          <video ref={videoRef} className="card-hover-preview" muted loop playsInline preload="none" />
        )}
      </div>

      <div className="card-body">
        {showMeta && <span className="card-category">{categoryLabel(project, t)}</span>}
        <div className="card-title-row">
          <span className="card-title">{title}</span>
          <span className="card-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </span>
        </div>
        <div className="card-meta-row">
          {clientName && <span className="card-client">{clientName}</span>}
          <ChannelIcons channels={project.channels} />
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
