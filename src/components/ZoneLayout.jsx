import { useLayoutEffect } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import { isValidZone } from '../utils/zones'

// Layout route for /:zone/*. Validates the zone and applies the theme class
// to <body> (not to a wrapper div), so the overscroll area and the page
// background always match the zone. useLayoutEffect avoids a one-frame flash
// of the wrong theme when switching zones.
function ZoneLayout() {
  const { zone } = useParams()
  const valid = isValidZone(zone)

  useLayoutEffect(() => {
    if (!valid) return undefined
    const className = `theme-${zone}`
    document.body.classList.add(className)
    return () => document.body.classList.remove(className)
  }, [zone, valid])

  if (!valid) return <Navigate to="/" replace />
  return <Outlet />
}

export default ZoneLayout
