import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../utils/smoothScroll'
import { zoneMedia } from '../data/shared/zoneMedia'
import './Hero.css'

// Home mounts this with key={zone}, so state and the video reset on zone switch.
function Hero({ zone }) {
  const { t } = useTranslation()
  const { video, poster } = zoneMedia[zone].hero
  const videoRef = useRef(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    // Reduced motion: keep the poster frame, don't play.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // React does not reliably reflect the `muted` attribute, and autoplay
    // requires muted: set it on the element before play().
    el.muted = true
    el.defaultMuted = true
    el.play().catch(() => {
      // Autoplay blocked (e.g. low-power mode): the poster stays visible.
    })
  }, [])

  return (
    <section className="hero" id="hero">
      {!videoFailed && (
        <video
          ref={videoRef}
          className="hero-bg"
          src={video}
          poster={poster}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        />
      )}
      <div className="hero-scrim" />

      <div className="hero-content-wrap">
        <div className="hero-content">
          <span className="hero-eyebrow">{t(`${zone}.hero.eyebrow`)}</span>
          <h1>{t(`${zone}.hero.title`)}</h1>
          <p>{t(`${zone}.hero.subtitle`)}</p>
          <div className="cta-row">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              {t(`${zone}.hero.ctaProjects`)}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
