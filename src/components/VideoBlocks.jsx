import { useTranslation } from 'react-i18next'
import VideoTile from './VideoTile'
import Highlights from './Highlights'
import './VideoBlocks.css'

const ASPECT = { h: 16 / 9, v: 9 / 16 }

const tileAspect = (tile) => ASPECT[tile.orientation]

// Aspect ratio (width / height) of a row item. A stack is "tiles one above the
// other", so the heights add up: 1 / sum(1 / aspect).
function itemAspect(item) {
  if (item.stack) return 1 / item.stack.reduce((sum, tile) => sum + 1 / tileAspect(tile), 0)
  return tileAspect(item)
}

// All items of a row get flex-grow proportional to their own aspect ratio, so they
// end up with the same height whatever the mix of horizontal/vertical. The row is
// capped at (sum of aspects x max height), so a lone vertical never becomes huge.
// The weights are multiplied by WEIGHT: flex-grow factors whose sum is below 1 do
// NOT fill the free space (a lone 9:16 has a sum of 0.5625 and would stay at 56%).
const WEIGHT = 1000

function Row({ row, title }) {
  const items = row.items
  const sum = items.reduce((total, item) => total + itemAspect(item), 0)

  return (
    <div className={`vrow vrow--${row.size ?? 'md'}`} style={{ '--sum': sum, '--n': items.length }}>
      {items.map((item, i) => {
        const aspect = itemAspect(item)
        const itemStyle = { flex: `${aspect * WEIGHT} 1 0%`, aspectRatio: aspect }

        if (item.stack) {
          return (
            <div className="vstack" key={i} style={itemStyle}>
              {item.stack.map((tile, j) => (
                <VideoTile
                  key={j}
                  tile={tile}
                  title={title}
                  style={{ flex: `${(1 / tileAspect(tile)) * WEIGHT} 1 0%`, minHeight: 0 }}
                />
              ))}
            </div>
          )
        }

        return <VideoTile key={i} tile={item} title={title} style={itemStyle} />
      })}
    </div>
  )
}

function VideoBlocks({ zone, project }) {
  const { t, i18n } = useTranslation()
  const base = `${zone}.projects.items.${project.slug}.sections`

  const text = (sectionId, field) => {
    const key = `${base}.${sectionId}.${field}`
    return i18n.exists(key) ? t(key) : ''
  }

  return (
    <div className="vblocks">
      {project.sections.map((section) => {
        const title = text(section.id, 'title')
        const description = text(section.id, 'description')

        return (
          <section className="vsection" key={section.id}>
            {title && <h2 className="vsection-title">{title}</h2>}
            {description && (
              <p className="vsection-description">
                <Highlights text={description} />
              </p>
            )}
            <div className="vrows">
              {section.rows.map((row, i) => (
                <Row key={i} row={row} title={project.title} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default VideoBlocks
