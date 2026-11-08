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
  { id: 'films', icon: 'camera', span: true },
  { id: 'postcard', icon: 'image', span: true },
  { id: 'health', icon: 'heart' },
  { id: 'map', icon: 'globe', span: true },
  { id: 'places', icon: 'pin' },
  { id: 'milestones', icon: 'flag' },
  { id: 'wonders', icon: 'landmark', span: true },
  { id: 'onThisDay', icon: 'clock' },
  { id: 'compare', icon: 'star', span: true },
  { id: 'plan', icon: 'compass' },
  { id: 'share', icon: 'share' },
  { id: 'widgets', icon: 'widget' },
]
