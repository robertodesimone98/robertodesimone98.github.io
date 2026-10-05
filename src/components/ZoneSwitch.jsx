import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { otherZone } from '../utils/zones'
import './ZoneSwitch.css'

// Pill with border. The label is the DESTINATION zone, and the pill is styled
// like the destination zone (data-target drives the look, see ZoneSwitch.css).
// It is a <Link> (navigation), not a <button>.
function ZoneSwitch({ zone }) {
  const { t } = useTranslation()
  const target = otherZone(zone)

  return (
    <Link to={`/${target}`} className="zone-switch" data-target={target}>
      {t(`header.zone.${target}`)}
    </Link>
  )
}

export default ZoneSwitch
