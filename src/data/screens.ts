import type { Component } from 'vue'
import DashboardScreen from '@/components/screens/DashboardScreen.vue'
import PersonalityScreen from '@/components/screens/PersonalityScreen.vue'
import RecapScreen from '@/components/screens/RecapScreen.vue'
import MapScreen from '@/components/screens/MapScreen.vue'
import CountryScreen from '@/components/screens/CountryScreen.vue'
import ShareCardScreen from '@/components/screens/ShareCardScreen.vue'

/**
 * The phone screens shown across the site.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *  HOW TO USE YOUR OWN APP SCREENSHOTS
 * ──────────────────────────────────────────────────────────────────────────
 *  1. Take screenshots in the app (a tall iPhone capture, e.g. 1290×2796).
 *  2. Drop them into `public/screenshots/` using the file names below
 *     (dashboard.png, personality.png, recap.png, map.png, country.png,
 *      share.png). PNG or JPG both work — just match the `image` path here.
 *  3. That's it. Each screen automatically uses your image; any screen whose
 *     file is missing quietly falls back to the built-in SVG mockup, so the
 *     site never breaks while you fill them in.
 *
 *  Tip: keep the status bar in the capture — the phone frame's Dynamic Island
 *  sits neatly over it. To hide the island for a screen, pass `:island="false"`
 *  to <PhoneMockup>.
 * ──────────────────────────────────────────────────────────────────────────
 */
export interface ScreenEntry {
  /** Path to your screenshot in /public. Set to `null` to always use the mockup. */
  image: string | null
  /** SVG mockup shown until a real screenshot exists at `image`. */
  fallback: Component
  title: string
  desc: string
}

export type ScreenKey = 'dashboard' | 'personality' | 'recap' | 'map' | 'country' | 'share'

export const SCREENS: Record<ScreenKey, ScreenEntry> = {
  dashboard: {
    image: '/screenshots/dashboard.png',
    fallback: DashboardScreen,
    title: 'Dashboard',
    desc: 'Your travel at a glance',
  },
  personality: {
    image: '/screenshots/personality.png',
    fallback: PersonalityScreen,
    title: 'Travel Personality',
    desc: 'Discover your style',
  },
  recap: {
    image: '/screenshots/recap.png',
    fallback: RecapScreen,
    title: 'Year in Travel',
    desc: 'Your year, replayed',
  },
  map: {
    image: '/screenshots/map.png',
    fallback: MapScreen,
    title: 'Travel Map',
    desc: 'Every country, lit up',
  },
  country: {
    image: '/screenshots/country.png',
    fallback: CountryScreen,
    title: 'Country detail',
    desc: 'Trips, cities & photos',
  },
  share: {
    image: '/screenshots/share.png',
    fallback: ShareCardScreen,
    title: 'Share cards',
    desc: 'Ready for your story',
  },
}

/** Order used by the screenshots carousel. */
export const CAROUSEL_ORDER: ScreenKey[] = [
  'dashboard',
  'personality',
  'recap',
  'map',
  'country',
  'share',
]
