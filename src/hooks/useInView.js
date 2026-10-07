import { useEffect, useState } from 'react'

// Detects when an element enters the viewport, to trigger scroll animations.
// Once visible it stays visible (once: true), so the animation does not
// restart when scrolling back up. threshold 0 + negative bottom rootMargin:
// fires as soon as the element starts entering, whatever its height.
//
// The returned ref is a CALLBACK ref kept in state, so the observer is (re)created
// every time the element changes: an element that appears later (e.g. a button that
// only some projects have) or one that is replaced when navigating between projects
// is always observed. With a plain useRef + [] effect, an element that was missing at
// mount was never observed and stayed at opacity 0 forever.
export function useInView(options = {}) {
  const { threshold = 0, rootMargin = '0px 0px -80px 0px', once = true } = options
  const [node, setNode] = useState(null)
  // The element that was seen: "visible" is only true for THAT element, so a new
  // element starts hidden and animates in, instead of inheriting the old state.
  const [seenNode, setSeenNode] = useState(null)

  useEffect(() => {
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeenNode(node)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setSeenNode(null)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [node, threshold, rootMargin, once])

  return [setNode, node !== null && seenNode === node]
}