import type { IconName } from '@/components/AppIcon.vue'

export interface Feature {
  icon: IconName
  title: string
  /** Benefit-led blurb — what the user gets, not what the code does. */
  blurb: string
  span?: boolean // render across two columns in the bento grid
}

export const FEATURES: Feature[] = [
  {
    icon: 'route',
    title: 'Automatic trip detection',
    blurb:
      'No tagging, no folders, no spreadsheets. Photrail groups your photos into real trips by where and when they were taken — your journeys reappear on their own.',
    span: true,
  },
  {
    icon: 'sparkles',
    title: 'Travel personality',
    blurb:
      'Are you a city wanderer, a coastline chaser, or a mountain soul? An on-device profile reveals your travel style from how you actually travel.',
  },
  {
    icon: 'calendar',
    title: 'Year in Travel',
    blurb:
      'A cinematic, Wrapped-style recap of your year — distance, top destinations, first-ever countries and a hero finale. Every slide is shareable.',
  },
  {
    icon: 'globe',
    title: 'World map',
    blurb:
      'Every country you have set foot in, lit up on one interactive map. Watch your world fill in, year after year.',
    span: true,
  },
  {
    icon: 'pin',
    title: 'Countries & cities',
    blurb:
      'Tally the countries, cities and continents you have explored — and the percentage of the planet you have covered so far.',
  },
  {
    icon: 'flag',
    title: 'Travel milestones',
    blurb:
      'Furthest from home, biggest trip, highest peak, most-photographed country — your records, surfaced automatically.',
  },
  {
    icon: 'landmark',
    title: 'World wonders',
    blurb:
      'Photrail recognises the New 7 Wonders and famous landmarks in your library — tap any to revisit the photos you took there.',
  },
  {
    icon: 'share',
    title: 'Shareable cards',
    blurb:
      'Beautiful, branded travel cards at story resolution — personality, summaries, wonders and trips, ready for Instagram in a tap.',
  },
  {
    icon: 'widget',
    title: 'Home-screen widgets',
    blurb:
      'A travel-stats widget and a world-wonders widget keep your journey one glance away — small, medium and lock-screen sizes.',
  },
]
