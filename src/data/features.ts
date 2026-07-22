import type { IconName } from '@/components/AppIcon.vue'

export interface Feature {
  /** Maps to i18n keys `features.items.<id>.title` / `.blurb`. */
  id: string
  icon: IconName
  span?: boolean // render across two columns in the bento grid
}

export const FEATURES: Feature[] = [
  { id: 'trips', icon: 'route', span: true },
  { id: 'personality', icon: 'sparkles' },
  { id: 'recap', icon: 'calendar' },
  { id: 'health', icon: 'heart' },
  { id: 'map', icon: 'globe', span: true },
  { id: 'places', icon: 'pin' },
  { id: 'milestones', icon: 'flag' },
  { id: 'wonders', icon: 'landmark' },
  { id: 'onThisDay', icon: 'clock' },
  { id: 'share', icon: 'share' },
  { id: 'widgets', icon: 'widget' },
]
