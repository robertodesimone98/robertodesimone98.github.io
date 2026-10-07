import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SiYoutube, SiInstagram, SiTiktok } from 'react-icons/si'
import { getProjectBySlug, getAdjacentProjects, getOriginField, channelLabels } from '../data/projects'
import { formatPeriod } from '../utils/formatPeriod'
import { useInView } from '../hooks/useInView'
import ProjectHeader from '../components/ProjectHeader'
import ProjectNav from '../components/ProjectNav'
import VideoTile from '../components/VideoTile'
import VideoBlocks from '../components/VideoBlocks'
import Highlights from '../components/Highlights'
import '../components/ProjectDetail.css'

const channelIcons = {
  youtube: SiYoutube,
  instagram: SiInstagram,
  tiktok: SiTiktok,
}

// Zone is already validated by ZoneLayout. Same page for both zones; the
// content comes from data/<zone>/projects.js and the texts from the locales.
function ProjectDetail() {
  const { t, i18n } = useTranslation()
  const { zone, slug } = useParams()
  const project = getProjectBySlug(zone, slug)

  const [contentRef, isContentVisible] = useInView()
  const [ctaRef, isCtaVisible] = useInView()

  if (!project) {
    return (
      <>
        <ProjectHeader zone={zone} />
        <div className="project-detail-wrap project-not-found">
          <p>{t('projectDetail.notFound')}</p>
          <Link to={`/${zone}#projects`} className="link-accent">
            {t('projectDetail.backToProjects')}
          </Link>
        </div>
      </>
    )
  }

  const { previous, next } = getAdjacentProjects(zone, slug)
  const origin = getOriginField(project)
  const originValue = origin.value || t('projectDetail.labels.personalValue')
  const period = formatPeriod(project.period, i18n.language, t('projectDetail.labels.present'))
  const description = t(`${zone}.projects.items.${slug}.description`, { defaultValue: '' })

  // key={slug}: the page is remounted when going to the previous/next project,
  // so the tiles that were playing go back to their cover.
  return (
    <div key={slug}>
      <ProjectHeader zone={zone} />

      <div className="project-detail-wrap">
        <div className="project-hero">
          <VideoTile tile={project.hero} title={project.title} style={{ height: '100%' }} />
        </div>

        <div className="project-body">
          <div ref={contentRef} className={`fade-in-section ${isContentVisible ? 'is-visible' : ''}`}>
            <div className="project-title-row">
              <h1>{project.title}</h1>
              <span className="category-badge">{t(`projects.categories.${project.category}`)}</span>
            </div>

            {description && (
              <p className="project-description">
                <Highlights text={description} />
              </p>
            )}

            <div className="metadata-row">
              <div>
                <div className="metadata-label">{t('projectDetail.labels.channels')}</div>
                <div className="channel-icons">
                  {project.channels.map((channel) => {
                    const Icon = channelIcons[channel]
                    return Icon ? <Icon key={channel} title={channelLabels[channel]} aria-label={channelLabels[channel]} /> : null
                  })}
                </div>
              </div>
              <div>
                <div className="metadata-label">{t('projectDetail.labels.period')}</div>
                <div className="metadata-value">{period}</div>
              </div>
              <div>
                <div className="metadata-label">{t(`projectDetail.labels.${origin.labelKey}`)}</div>
                <div className="metadata-value">
                  {origin.url ? (
                    <a href={origin.url} target="_blank" rel="noopener noreferrer" className="link-accent">
                      {originValue} ↗
                    </a>
                  ) : (
                    originValue
                  )}
                </div>
              </div>
            </div>
          </div>

          <VideoBlocks zone={zone} project={project} />

          {project.link && (
            <div ref={ctaRef} className={`fade-in-section ${isCtaVisible ? 'is-visible' : ''}`}>
              <a
                href={project.link.url}
                className="btn btn--secondary external-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(`projectDetail.externalLinkLabels.${project.link.type}`)} ↗
              </a>
            </div>
          )}
        </div>
      </div>

      <ProjectNav zone={zone} previous={previous} next={next} />
    </div>
  )
}

export default ProjectDetail
