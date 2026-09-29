import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './ZonePanel.css'

// zone: 'gaming' | 'brand'
// cover / preview: optional. Without them the panel is text only.
function ZonePanel({ zone, to, eyebrow, title, subtitle, cover, preview }) {
  const videoRef = useRef(null)
  const [previewLoaded, setPreviewLoaded] = useState(false)

  function handleMouseEnter() {
    const video = videoRef.current
    if (!video || !preview) return
    if (!previewLoaded) {
      video.src = preview
      setPreviewLoaded(true)
    }
    video.play().catch(() => {})
  }

  function handleMouseLeave() {
    const video = videoRef.current
    if (!video || !preview) return
    video.pause()
    video.currentTime = 0
  }

  return (
    <Link
      to={to}
      className={`zone-panel theme-${zone}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cover && <img src={cover} alt="" className="zone-panel-cover" />}
      {preview && (
        <video
          ref={videoRef}
          className="zone-panel-preview"
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
