/** Central place for the handful of external links + copy the site reuses. */

export const GITHUB_REPO = 'BerendVandenbussche/Photrail'
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`

// Placeholder App Store URL — swap for the real product page on launch.
export const APP_STORE_URL = 'https://apps.apple.com/app/photrail/id000000000'

// Nav items: `key` maps to an i18n string under `nav.*`; label is resolved in
// the component so it stays in sync with the active language.
export const NAV_LINKS = [
  { key: 'features', href: '#features' },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'privacy', href: '#privacy' },
  { key: 'demo', href: '#exif-demo' },
  { key: 'openSource', href: '#open-source' },
] as const
