import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { zoneMedia } from '../data/shared/zoneMedia'
import './ZonePanel.css'

// zone: 'gaming' | 'brand'. The preview video comes from
// zoneMedia[zone].landing (same pattern as Hero); without it the panel is text only.
function ZonePanel({ zone, to, eyebrow, title, subtitle }) {
  const { video: preview, poster } = zoneMedia[zone].landing ?? {}
  const videoRef = useRef(null)
  const [previewLoaded, setPreviewLoaded] = useState(false)

  // Preview only where hover exists (not on touch) and when motion is allowed.
  function canPreview() {
    return (
      window.matchMedia('(hover: hover)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }

  function startPreview() {
    const video = videoRef.current
    if (!video || !preview || !canPreview()) return
    if (!previewLoaded) {
      video.src = preview
      setPreviewLoaded(true)
    }
    // React does not reliably reflect the `muted` attribute; autoplay needs it.
    video.muted = true
    video.play().catch(() => {})
  }

  function stopPreview() {
    const video = videoRef.current
    if (!video || !preview) return
    video.pause()
    video.currentTime = 0
  }

  return (
    <Link
      to={to}
      className={`zone-panel theme-${zone}`}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onFocus={startPreview}
      onBlur={stopPreview}
    >
      {preview && (
        <video
          ref={videoRef}
          className="zone-panel-preview"
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
        />
      )}

      <div className="zone-panel-text">
        <span className="zone-panel-eyebrow">{eyebrow}</span>
        <span className="zone-panel-title">{title}</span>
        <span className="zone-panel-subtitle">{subtitle}</span>
      </div>
    </Link>
  )
}

export default ZonePanel
