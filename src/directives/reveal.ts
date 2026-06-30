import type { Directive } from 'vue'

/**
 * v-reveal — fades + lifts an element into view on first scroll.
 * Usage: <div v-reveal> or <div v-reveal="120"> (delay in ms).
 * Falls back to instantly visible when IntersectionObserver is unavailable
 * or the user prefers reduced motion (handled in CSS).
 */
let observer: IntersectionObserver | null = null
const delays = new WeakMap<Element, number>()

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        const delay = delays.get(el) ?? 0
        window.setTimeout(() => {
          el.classList.remove('reveal-init')
          el.classList.add('reveal-in')
        }, delay)
        obs.unobserve(el)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    const obs = getObserver()
    if (!obs) return
    delays.set(el, binding.value ?? 0)
    el.classList.add('reveal-init')
    obs.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
    delays.delete(el)
  },
}
