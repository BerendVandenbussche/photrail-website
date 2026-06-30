<script setup lang="ts">
import { computed } from 'vue'

/**
 * A premium, abstract travel map: an equirectangular graticule with glowing
 * destination pins and dotted great-circle routes between them. Pure SVG, theme
 * aware via currentColor-ish opacity. No tiles, no network.
 */
const props = withDefaults(
  defineProps<{
    pins?: Array<{ x: number; y: number; label?: string; big?: boolean }>
    routes?: boolean
    compact?: boolean
  }>(),
  { routes: true, compact: false },
)

// Default constellation of destinations (x: 0–1000, y: 0–500).
const defaultPins = [
  { x: 470, y: 150, label: 'Paris', big: true },
  { x: 520, y: 175, label: 'Rome' },
  { x: 590, y: 215, label: 'Cairo' },
  { x: 705, y: 250, label: 'Bali' },
  { x: 250, y: 200, label: 'NYC', big: true },
  { x: 175, y: 300, label: 'Lima' },
  { x: 620, y: 175, label: 'Tokyo' },
  { x: 560, y: 320, label: 'Cape Town' },
  { x: 760, y: 360, label: 'Sydney' },
]

const pins = computed(() => props.pins ?? defaultPins)

// Curved dotted routes between consecutive pins (gentle arc above the chord).
const routePaths = computed(() => {
  const p = pins.value
  const paths: string[] = []
  for (let i = 0; i < p.length - 1; i++) {
    const a = p[i]
    const b = p[i + 1]
    const mx = (a.x + b.x) / 2
    const my = (a.y + b.y) / 2 - Math.abs(b.x - a.x) * 0.18 - 20
    paths.push(`M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`)
  }
  return paths
})

// Faint scattered "land" dots to give the graticule a sense of geography.
const landDots = [
  [250, 180], [270, 200], [300, 170], [230, 230], [200, 280], [180, 320], [210, 350],
  [460, 140], [490, 160], [520, 150], [540, 180], [500, 200], [470, 190],
  [580, 160], [610, 180], [640, 160], [600, 210], [560, 230], [630, 240],
  [700, 250], [730, 270], [750, 350], [770, 330],
  [540, 300], [560, 330], [520, 340],
]
</script>

<template>
  <svg viewBox="0 0 1000 500" class="h-full w-full" preserveAspectRatio="xMidYMid slice" role="img" aria-label="World travel map">
    <defs>
      <radialGradient id="map-vignette" cx="0.5" cy="0.45" r="0.75">
        <stop offset="0" stop-color="#4f45e6" stop-opacity="0.18" />
        <stop offset="1" stop-color="#4f45e6" stop-opacity="0" />
      </radialGradient>
    </defs>

    <rect width="1000" height="500" fill="url(#map-vignette)" />

    <!-- Graticule -->
    <g stroke="currentColor" class="text-brand-500/15 dark:text-white/10" fill="none" stroke-width="1">
      <line v-for="i in 9" :key="`h${i}`" x1="0" :y1="i * 50" x2="1000" :y2="i * 50" />
      <line v-for="i in 19" :key="`v${i}`" :x1="i * 50" y1="0" :x2="i * 50" y2="500" />
    </g>

    <!-- Faint land dots -->
    <g class="fill-brand-500/25 dark:fill-white/20">
      <circle v-for="(d, i) in landDots" :key="`l${i}`" :cx="d[0]" :cy="d[1]" r="3.2" />
    </g>

    <!-- Routes -->
    <g v-if="routes" class="text-violet2-500 dark:text-brand-300" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="1 12" stroke-linecap="round" opacity="0.8">
      <path v-for="(d, i) in routePaths" :key="`r${i}`" :d="d" />
    </g>

    <!-- Pins. A static translucent halo replaces a per-pin SVG blur filter,
         which is far cheaper to composite (especially on mobile Safari). -->
    <g>
      <g v-for="(pin, i) in pins" :key="`p${i}`" :transform="`translate(${pin.x} ${pin.y})`">
        <circle :r="pin.big ? 18 : 13" class="fill-brand-500/20 dark:fill-brand-400/25" />
        <circle :r="pin.big ? 9 : 6" class="fill-brand-500 dark:fill-brand-400" />
        <circle :r="pin.big ? 4 : 2.6" fill="#fff" />
      </g>
    </g>
  </svg>
</template>
