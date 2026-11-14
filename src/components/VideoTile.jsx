import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SiYoutube, SiInstagram, SiGoogledrive } from 'react-icons/si'
import { LuArrowUpRight } from 'react-icons/lu'
import './VideoTile.css'

const PLATFORMS = {
  youtube: { Icon: SiYoutube, label: 'YouTube' },
  drive: { Icon: SiGoogledrive, label: 'Google Drive' },
  instagram: { Icon: SiInstagram, label: 'Instagram' },
}

function embedSrc(tile) {
  if (tile.kind === 'youtube') {
    return `https://www.youtube.com/embed/${tile.id}?autoplay=1&rel=0`
  }
  return `https://drive.google.com/file/d/${tile.id}/preview`
}

// YouTube thumbnails from best to smallest. If a size doesn't exist, YouTube still
// answers with a 120px grey placeholder (no error), so we detect it by its width.
const YT_SIZES = ['maxresdefault', 'sddefault', 'hqdefault']

function nextYoutubeThumb(img) {
  if (!img.src.includes('i.ytimg.com') || img.naturalWidth > 120) return
  const i = YT_SIZES.findIndex((s) => img.src.includes(s))
  if (i >= 0 && i < YT_SIZES.length - 1) {
    img.src = img.src.replace(YT_SIZES[i], YT_SIZES[i + 1])
  }
}

// One video of the portfolio. Same mechanism everywhere (hero and blocks):
// cover image, light hover effect, click.
//   youtube / drive -> click swaps the cover for the player, in place
//   instagram       -> click opens the post in a new tab (it cannot be played here)
//   image           -> hero only: plain picture, not clickable
// The size comes from the parent through `style` / `className`.
function VideoTile({ tile, title, className = '', style }) {
  const { t } = useTranslation()
  const [playing, setPlaying] = useState(false)

  const orientationClass = tile.orientation === 'v' ? 'vtile--v' : 'vtile--h'
  const rootClass = `vtile ${orientationClass} ${className}`.trim()

  if (tile.kind === 'image') {
    return (
      <div className={`${rootClass} vtile--static`} style={style}>
        <img className="vtile-cover" src={tile.src} alt={title} />
      </div>
    )
  }

  const { Icon, label } = PLATFORMS[tile.kind]

  if (playing) {
    return (
      <div className={`${rootClass} vtile--playing`} style={style}>
        <iframe
          src={embedSrc(tile)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  const inner = (
    <>
      <img
        className="vtile-cover"
        src={tile.cover}
        alt=""
        loading="lazy"
        onLoad={(e) => nextYoutubeThumb(e.currentTarget)}
      />
      <span className="vtile-action" aria-hidden="true">
        {tile.kind === 'instagram' ? (
          <LuArrowUpRight />
        ) : (
          <svg viewBox="0 0 24 24">
            <polygon points="9,6 9,18 18,12" />
          </svg>
        )}
      </span>
      <span className="vtile-badge" aria-hidden="true">
        <Icon />
      </span>
    </>
  )

  if (tile.kind === 'instagram') {
    return (
      <a
        className={`${rootClass} vtile--clickable`}
        style={style}
        href={tile.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('video.openOn', { platform: label, title })}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`${rootClass} vtile--clickable`}
      style={style}
      onClick={() => setPlaying(true)}
      aria-label={t('video.play', { platform: label, title })}
    >
      {inner}
    </button>
  )
}

export default VideoTile
