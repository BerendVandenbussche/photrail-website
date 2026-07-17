import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { LOCALE_STORAGE_KEY, SUPPORTED_LOCALES, type Locale } from '@/i18n'

const LABELS: Record<Locale, string> = { en: 'English', nl: 'Nederlands' }
// Short flag-ish code shown in the compact picker button.
const SHORT: Record<Locale, string> = { en: 'EN', nl: 'NL' }

/**
 * Language controller. Persists the visitor's choice and keeps <html lang>,
 * the document title and meta description in sync with the active locale.
 */
export function useLocale() {
  const { locale, t } = useI18n()

  const current = computed<Locale>(() => locale.value as Locale)
  const locales = computed(() =>
    SUPPORTED_LOCALES.map((code) => ({ code, label: LABELS[code], short: SHORT[code] })),
  )

  function syncDocument() {
    document.documentElement.lang = locale.value
    document.title = t('meta.title')
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'))
  }

  function setLocale(next: Locale) {
    locale.value = next
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    syncDocument()
  }

  return { current, locales, setLocale, syncDocument }
}
