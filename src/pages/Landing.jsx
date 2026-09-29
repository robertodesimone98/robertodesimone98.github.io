import { useTranslation } from 'react-i18next'
import ZonePanel from '../components/ZonePanel'
import './Landing.css'

function Landing() {
  const { t } = useTranslation()

  return (
    <main className="landing">
      <ZonePanel
        zone="gaming"
        to="/gaming"
        eyebrow={t('landing.eyebrow')}
        title={t('landing.titleGaming')}
        subtitle={t('landing.subtitleGaming')}
      />
      <ZonePanel
        zone="brand"
        to="/brand"
        eyebrow={t('landing.eyebrow')}
        title={t('landing.titleBrand')}
        subtitle={t('landing.subtitleBrand')}
      />
    </main>
  )
}

export default Landing
