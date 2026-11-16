import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { isValidZone } from '../utils/zones'
import { getProjectBySlug } from '../data/projects'

const TITLES = {
  landing: `rawb.start | Roberto De Simone`,
  gaming: `rawb.start`,
  brand: `Roberto De Simone`,
}

// Updates the tab title from the route. Same text in every language.
function DocumentMeta() {
  const { pathname } = useLocation()
  const [zone] = pathname.split('/').filter(Boolean)

  useEffect(() => {
    document.title = isValidZone(zone) ? TITLES[zone] : TITLES.landing
  }, [zone])

  return null
}

export default DocumentMeta