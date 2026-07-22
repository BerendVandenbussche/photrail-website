<script lang="ts">
// A single, tree-shakeable inline-SVG icon set so the site ships zero icon-font
// weight. All icons are 24×24, stroke-based and inherit `currentColor`.
export type IconName =
  | 'route'
  | 'sparkles'
  | 'calendar'
  | 'globe'
  | 'pin'
  | 'flag'
  | 'landmark'
  | 'share'
  | 'widget'
  | 'lock'
  | 'shield'
  | 'device'
  | 'cloud-off'
  | 'eye-off'
  | 'github'
  | 'apple'
  | 'sun'
  | 'moon'
  | 'check'
  | 'arrow-right'
  | 'arrow-down'
  | 'upload'
  | 'camera'
  | 'aperture'
  | 'mountain'
  | 'clock'
  | 'compass'
  | 'star'
  | 'image'
  | 'chevron-left'
  | 'chevron-right'
  | 'translate'
  | 'bug'
  | 'code'
  | 'heart'
  | 'flame'
  | 'activity'

// `fill` icons (brand glyphs) vs default stroke icons.
export const FILLED: IconName[] = ['github', 'apple', 'star']

export const PATHS: Record<IconName, string> = {
  route:
    'M6 19a3 3 0 1 0 0-6h8a3 3 0 1 0 0-6M6 19h8M6 6.5A1.5 1.5 0 1 0 6 3.5a1.5 1.5 0 0 0 0 3zM18 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  sparkles:
    'M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4L12 3zM19 14l.9 2.3 2.3.9-2.3.9L19 21l-.9-2.3-2.3-.9 2.3-.9L19 14z',
  calendar:
    'M7 3v3M17 3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM9 13h2M14 13h1M9 16h2',
  globe:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z',
  pin: 'M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  flag: 'M5 21V4M5 4h11l-1.5 3.5L16 11H5',
  landmark: 'M4 21h16M5 21V10M9 21V10M15 21V10M19 21V10M3 10h18L12 4 3 10z',
  share:
    'M16 6l-4-4-4 4M12 2v13M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7',
  widget:
    'M5 4h5v5H5zM14 4h5v5h-5zM5 13h5v5H5zM14 13h5v5h-5z',
  lock: 'M7 11V8a5 5 0 0 1 10 0v3M6 11h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM12 15v2',
  shield:
    'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4',
  device:
    'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2',
  'cloud-off':
    'M4 4l16 16M19 17.5A4 4 0 0 0 18 10h-1.2A6 6 0 0 0 7.5 6.5M5 9a4 4 0 0 0-1 7.9',
  'eye-off':
    'M3 3l18 18M10.6 5.2A9.9 9.9 0 0 1 12 5c5 0 9 5 9 7a13 13 0 0 1-2.2 3M6.6 6.6C4.2 8 2.8 10.2 3 12c0 2 4 7 9 7a9.6 9.6 0 0 0 3.4-.6M9.9 9.9a3 3 0 0 0 4.2 4.2',
  github:
    'M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2z',
  apple:
    'M16.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-.9-2.5-3.8zM14.3 6.1c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3z',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
  check: 'M20 6L9 17l-5-5',
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-down': 'M12 5v14M6 13l6 6 6-6',
  upload: 'M12 16V4M7 9l5-5 5 5M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3',
  camera:
    'M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
  aperture:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 3l3.5 6M21 12h-7M18.7 17.5L15 12M5.3 17.5L9 12M3 12h7M5.3 6.5L9 12',
  mountain: 'M3 20h18L14 7l-3.2 5.5L9 9l-6 11z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  compass:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5 5-2z',
  star: 'M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.8l6.5-.9L12 3z',
  image:
    'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM21 16l-5-5L5 21',
  'chevron-left': 'M15 6l-6 6 6 6',
  'chevron-right': 'M9 6l6 6-6 6',
  translate:
    'M4 6h7M7.5 4.5v1.5M9 6c0 3.6-2.4 6.6-6 8.2M5 10.3c0 1.7 2.4 3.2 5 3.2M12.5 20l4-9 4 9M14 16.7h5',
  bug:
    'M9 6a3 3 0 0 1 6 0M6 12h12M12 9v11M6 12v2a6 6 0 0 0 12 0v-2M5 8.5l2.2 1.6M19 8.5l-2.2 1.6M4.3 17.4l2.5-1.4M19.7 17.4l-2.5-1.4M4 12.5h2M18 12.5h2',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16',
  heart:
    'M12 20.5C6.5 16.5 3.5 13 3.5 9.3A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8.5 2.3c0 3.7-3 7.2-8.5 11.2z',
  flame:
    'M12 2.5c.9 2.8 3.6 4.2 3.6 8.1a3.6 3.6 0 0 1-7.2 0c0-1.4.7-2.6.9-2.8.3.9.9 1.3 1.4 1.3.8 0 1-1.1.8-2.2C11.2 4.4 12 3.3 12 2.5z',
  activity: 'M3 12h4l3 8 4-16 3 8h4',
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{ name: IconName; size?: number | string }>(), {
  size: 24,
})

const filled = (name: IconName) => FILLED.includes(name)
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    :fill="filled(props.name) ? 'currentColor' : 'none'"
    :stroke="filled(props.name) ? 'none' : 'currentColor'"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="PATHS[props.name]" />
  </svg>
</template>
