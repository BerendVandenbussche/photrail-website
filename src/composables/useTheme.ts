import { onMounted, onUnmounted, ref } from 'vue'

const STORAGE_KEY = 'photrail-theme'
type Theme = 'light' | 'dark'

// Module-level singleton so every component shares one source of truth.
const isDark = ref(true)
const hasExplicitChoice = ref(false)
let initialised = false

function apply(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}

function systemPrefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Theme controller. Defaults to the OS preference (prefers-color-scheme) and
 * only overrides it once the visitor explicitly toggles — that choice is then
 * persisted. Clearing it (resetToSystem) returns to following the OS.
 */
export function useTheme() {
  const media = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

  function onSystemChange(e: MediaQueryListEvent) {
    if (!hasExplicitChoice.value) {
      isDark.value = e.matches
      apply(isDark.value)
    }
  }

  if (!initialised && typeof window !== 'undefined') {
    initialised = true
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    hasExplicitChoice.value = stored === 'light' || stored === 'dark'
    isDark.value = hasExplicitChoice.value ? stored === 'dark' : systemPrefersDark()
    apply(isDark.value)
  }

  function toggle() {
    isDark.value = !isDark.value
    hasExplicitChoice.value = true
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
    apply(isDark.value)
  }

  function resetToSystem() {
    hasExplicitChoice.value = false
    localStorage.removeItem(STORAGE_KEY)
    isDark.value = systemPrefersDark()
    apply(isDark.value)
  }

  onMounted(() => media?.addEventListener('change', onSystemChange))
  onUnmounted(() => media?.removeEventListener('change', onSystemChange))

  return { isDark, hasExplicitChoice, toggle, resetToSystem }
}
