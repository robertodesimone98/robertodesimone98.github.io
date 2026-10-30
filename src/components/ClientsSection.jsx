import { useTranslation } from 'react-i18next'
import { getClients } from '../data/shared/clients'
import { useInView } from '../hooks/useInView'
import './ClientsSection.css'

// Strip of clients / brands. Independent of AboutSection and ExperienceSection:
// it renders nothing when the zone has no clients (data/shared/clients.js), so showing
// it on another zone only needs data, not code.
function ClientsSection({ zone }) {
  const { t } = useTranslation()
  const [ref, isVisible] = useInView()
  const clients = getClients(zone)

  if (clients.length === 0) return null

  const title = t(`${zone}.clients.title`)

  return (
    <section className="clients-section" id="clients" aria-labelledby="clients-title">
      <div className="clients-inner">
        <h2 className="clients-title" id="clients-title">
          {title}
        </h2>
        <ul ref={ref} className={`clients-list fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          {clients.map((client) => (
            <li
              key={client.id}
              className={`client-slot ${client.placeholder ? 'is-placeholder' : ''}`}
            >
              {client.logo ? (
                <img className="client-logo" src={client.logo} alt={client.name} />
              ) : (
                client.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ClientsSection
