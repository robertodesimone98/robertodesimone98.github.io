const SCROLL_DURATION = 1500 // ms — desktop only
const MOBILE_BREAKPOINT = 640 // px — matches Header.css

// easeInOutExpo (same curve as jQuery's easing plugin / Bootstrap Agency theme).
// Desktop only — the slow start feels off on a direct mobile tap.
function easeInOutExpo(t) {
  if (t === 0) return 0
  if (t === 1) return 1
  return t < 0.5
    ? 0.5 * Math.pow(2, 20 * t - 10)
    : 0.5 * (2 - Math.pow(2, -20 * t + 10))
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isMobileViewport() {
  return window.innerWidth <= MOBILE_BREAKPOINT
}

// The animation currently running, if any: { rafId, onDone }.
let activeScroll = null

// Stops the running scroll animation (e.g. on a route change) and calls its
// onDone, so callers like Header can reset their "click scrolling" flag.
export function cancelScrollAnimation() {
  if (!activeScroll) return
  cancelAnimationFrame(activeScroll.rafId)
  const { onDone } = activeScroll
  activeScroll = null
  onDone?.()
}

// Animates scroll to targetY with easing. onDone fires when the animation
// actually finishes (or is cancelled), not on a guessed timeout.
export function animatedScrollTo(targetY, duration = SCROLL_DURATION, onDone) {
  const startY = window.scrollY
  const diff = targetY - startY

  if (diff === 0 || prefersReducedMotion()) {
    window.scrollTo(0, targetY)
    onDone?.()
    return
  }

  const me = { rafId: 0, onDone }
  activeScroll = me
  const startTime = performance.now()

  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutExpo(progress)
    window.scrollTo(0, startY + diff * eased)

    if (progress < 1) {
      me.rafId = requestAnimationFrame(step)
    } else {
      if (activeScroll === me) activeScroll = null
      onDone?.()
    }
  }

  me.rafId = requestAnimationFrame(step)
}

// Scrolls to a section by id, accounting for the sticky header height.
// Mobile: instant jump, no animation. Desktop: animated with easeInOutExpo.
export function scrollToSection(id, onDone) {
  const el = document.getElementById(id)
  if (!el) return false

  const header = document.querySelector('.header')
  const headerHeight = header ? header.offsetHeight : 0
  const targetY = el.offsetTop - headerHeight

  if (isMobileViewport()) {
    window.scrollTo(0, targetY)
    onDone?.()
    return true
  }

  animatedScrollTo(targetY, undefined, onDone)
  return true
}