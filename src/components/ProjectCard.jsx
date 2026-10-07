import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SiInstagram } from 'react-icons/si'
import { channelLabels, getOriginField } from '../data/projects'
import { useInView } from '../hooks/useInView'
import './ProjectCard.css'

const originIcons = {
  client: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12l0 .01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </svg>
  ),
  personal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7v1" />
    </svg>
  ),
  channel: <SiInstagram aria-hidden="true" />,
  course: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
    </svg>
  ),
}

// Card of the projects grid. Cover + (optional) hover preview video, as in the
// reference. The preview is lazy: the file is only requested on first hover.
function ProjectCard({ zone, project, staggerIndex = 0 }) {
  const { t } = useTranslation()
  const videoRef = useRef(null)
  const [previewLoaded, setPreviewLoaded] = useState(false)
  const [cardRef, isVisible] = useInView()

  const origin = getOriginField(project)
  const originText = origin.value || t('projectDetail.labels.personalValue')

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
          alt={project.title}
          className="card-image"
          loading="lazy"
          style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
        />
        {project.preview && (
          <video ref={videoRef} className="card-hover-preview" muted loop playsInline preload="none" />
        )}
      </div>

      <div className="card-body">
        <div className="card-title-row">
          <span className="card-title">{project.title}</span>
        </div>
        <div className="card-origin">
          {originIcons[project.origin]}
          <span className="card-origin-text">{originText}</span>
        </div>
        <div className="card-footer-row">
          <span className="card-channels">{project.channels.map((c) => channelLabels[c]).join(' · ')}</span>
          <span className="category-badge">{t(`projects.categories.${project.category}`)}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
