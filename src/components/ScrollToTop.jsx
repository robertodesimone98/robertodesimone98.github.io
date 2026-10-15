import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { cancelScrollAnimation } from '../utils/smoothScroll'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // A nav-click animation may still be running (Header stays mounted across
    // zones): stop it, or it keeps overriding the reset below.
    cancelScrollAnimation()

    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

export default ScrollToTop