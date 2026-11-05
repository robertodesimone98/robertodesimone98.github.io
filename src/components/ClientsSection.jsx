import { useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getClients, getMarqueeSettings } from '../data/shared/clients'
import { useInView } from '../hooks/useInView'
import './ClientsSection.css'

// One logo. With `url` it is a link (new tab); the hidden duplicate copies of the
// marquee must not be reachable with the keyboard, hence tabIndex -1.
function ClientItem({ client, hidden = false }) {
  const content = (
    <>
      {client.logo && (
        <img className="client-logo" src={client.logo} alt="" draggable="false" />
      )}
      <span className="client-name">{client.name}</span>
    </>
  )

  return (
    <li className={`client-slot ${client.placeholder ? 'is-placeholder' : ''}`}>
      {client.url ? (
        <a
          className="client-link"
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  )
}

// Horizontal marquee: the track holds two identical groups and slides by exactly one
// group, so the loop is seamless. The spacing between logos is always the fixed `gap`;
// when the list is too short to fill the screen, the set of logos is repeated inside each
// group as many times as needed (measured, so it adapts to 2K/4K screens too).
// The duration is derived from the measured group width, so `speed` (px/s) stays the same
// whatever the number of logos or the screen size.
function ClientsMarquee({ clients, settings }) {
  const { speed, direction, pauseOnHover, gap, fade } = settings
  const marqueeRef = useRef(null)
  const setRef = useRef(null)
  const [repeat, setRepeat] = useState(1)
  const [duration, setDuration] = useState(null)

  useLayoutEffect(() => {
    const marquee = marqueeRef.current
    const set = setRef.current
    if (!marquee || !set) return undefined
    const update = () => {
      const setWidth = set.getBoundingClientRect().width
      const viewWidth = marquee.getBoundingClientRect().width
      if (setWidth <= 0) return
      const copies = Math.max(1, Math.ceil(viewWidth / setWidth))
      setRepeat(copies)
      if (speed > 0) setDuration((setWidth * copies) / speed)
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(marquee)
    observer.observe(set)
    return () => observer.disconnect()
  }, [speed, gap, clients.length])

  const classes = [
    'clients-marquee',
    pauseOnHover ? 'pause-on-hover' : '',
    fade ? 'has-fade' : '',
    direction === 'right' ? 'is-reverse' : '',
  ].join(' ')

  const style = {
    '--marquee-gap': `${gap}px`,
    ...(duration ? { '--marquee-duration': `${duration}s` } : {}),
  }

  const renderGroup = (hidden) => (
    <div className="clients-group" aria-hidden={hidden ? 'true' : undefined}>
      {Array.from({ length: repeat }, (_, i) => (
        <ul
          key={i}
          className="clients-set"
          ref={!hidden && i === 0 ? setRef : undefined}
          aria-hidden={hidden || i > 0 ? 'true' : undefined}
        >
          {clients.map((client) => (
            <ClientItem key={client.id} client={client} hidden={hidden || i > 0} />
          ))}
        </ul>
      ))}
    </div>
  )

  return (
    <div className={classes} style={style} ref={marqueeRef}>
      <div className="clients-track" data-ready={duration ? 'true' : 'false'}>
        {renderGroup(false)}
        {/* Duplicate group for the loop: hidden from assistive tech. */}
        {renderGroup(true)}
      </div>
    </div>
  )
}

// Strip of clients / brands. Independent of AboutSection and ExperienceSection:
// it renders nothing when the zone has no clients (data/shared/clients.js), so showing
// it on another zone only needs data, not code.
function ClientsSection({ zone }) {
  const { t } = useTranslation()
  const [ref, isVisible] = useInView()
  const clients = getClients(zone)
  const settings = getMarqueeSettings(zone)

  if (clients.length === 0) return null

  const title = t(`${zone}.clients.title`)

  return (
    <section
      className={`clients-section ${settings.grayscale ? 'is-grayscale' : ''}`}
      id="clients"
      aria-labelledby="clients-title"
    >
      <div className="clients-inner">
        <h2 className="clients-title" id="clients-title">
          {title}
        </h2>
      </div>
      <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        {settings.enabled ? (
          <ClientsMarquee clients={clients} settings={settings} />
        ) : (
          <div className="clients-inner clients-inner--static">
            <ul className="clients-list">
              {clients.map((client) => (
                <ClientItem key={client.id} client={client} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default ClientsSection
