import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { zoneMedia } from '../data/shared/zoneMedia'
import { gamingContact } from '../data/gaming/contact'
import rawbLogo from '../assets/rawb-logo.jpg'
import AvatarLink from './AvatarLink'
import './Hero.css'

// Home mounts this with key={zone}, so state and the video reset on zone switch.
// Layout: video on top, then eyebrow, name (title, or its wordmark image) and a short
// description below it. On gaming, a round logo (link to Instagram) straddles the
// bottom edge of the video.
function Hero({ zone }) {
  const { t } = useTranslation()
  const { video, poster, wordmark } = zoneMedia[zone].hero
  const title = t(`${zone}.hero.title`)
  const videoRef = useRef(null)
  const [videoFailed, setVideoFailed] = useState(false)
  const instagram = zone === 'gaming' ? gamingContact.find((c) => c.type === 'instagram') : null

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
      <div className="hero-media">
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
      </div>

      {/* Sibling of .hero-media (not a child): the video wrapper may clip overflow. */}
      {instagram && (
        <AvatarLink
          href={instagram.href}
          label={`${instagram.label} @rawb.start`}
          src={rawbLogo}
        />
      )}

      <div className="hero-content-wrap">
        <div className="hero-content">
          <span className="hero-eyebrow">{t(`${zone}.hero.eyebrow`)}</span>
          {/* Zones with a wordmark show the image; the alt keeps the h1 readable for screen readers. */}
          <h1>
            {wordmark ? <img className="hero-wordmark" src={wordmark} alt={title} /> : title}
          </h1>
          <p>{t(`${zone}.hero.subtitle`)}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
