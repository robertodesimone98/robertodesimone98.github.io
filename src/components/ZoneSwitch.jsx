import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { otherZone } from '../utils/zones'
import './ZoneSwitch.css'

// Pill with border, modeled on LangSwitch. The label is the DESTINATION zone.
// It is a <Link> (navigation), not a <button>.
function ZoneSwitch({ zone }) {
  const { t } = useTranslation()
  const target = otherZone(zone)

  return (
    <Link to={`/${target}`} className="zone-switch">
      {t(`header.zone.${target}`)}
    </Link>
  )
}

export default ZoneSwitch
