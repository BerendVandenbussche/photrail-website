import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import nl from '@/locales/nl'

export const SUPPORTED_LOCALES = ['en', 'nl'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const LOCALE_STORAGE_KEY = 'photrail-lang'

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'nl'
}

/** Persisted choice → browser preference → English. */
export function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    /* localStorage unavailable */
  }
  const nav = (navigator.language || 'en').toLowerCase()
  return nav.startsWith('nl') ? 'nl' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, nl },
})
