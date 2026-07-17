<script setup lang="ts">
import ScreenChrome from './ScreenChrome.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const traits = [
  { key: 'urban', pct: 82 },
  { key: 'coastal', pct: 61 },
  { key: 'culture', pct: 47 },
  { key: 'nature', pct: 34 },
  { key: 'mountain', pct: 22 },
  { key: 'adventure', pct: 18 },
]

// Build a hexagonal radar polygon from the trait percentages.
const points = computed(() => {
  const cx = 120
  const cy = 120
  const r = 92
  return traits
    .map((trait, i) => {
      const a = (Math.PI * 2 * i) / traits.length - Math.PI / 2
      const rr = (r * trait.pct) / 100
      return `${cx + rr * Math.cos(a)},${cy + rr * Math.sin(a)}`
    })
    .join(' ')
})
const rings = [0.33, 0.66, 1]
const axes = computed(() =>
  traits.map((_, i) => {
    const a = (Math.PI * 2 * i) / traits.length - Math.PI / 2
    return { x: 120 + 92 * Math.cos(a), y: 120 + 92 * Math.sin(a) }
  }),
)
</script>

<template>
  <ScreenChrome>
    <div class="flex h-full flex-col gap-4 overflow-hidden px-5 pt-4">
      <header>
        <p class="text-[10px] font-medium text-white/50">{{ t('mock.travelPersonality') }}</p>
        <h1 class="font-rounded text-2xl font-extrabold">{{ t('mock.urbanExplorer') }}</h1>
      </header>

      <div class="flex items-center justify-center">
        <svg viewBox="0 0 240 240" class="h-48 w-48">
          <g class="text-white/10" stroke="currentColor" fill="none">
            <circle v-for="r in rings" :key="r" cx="120" cy="120" :r="92 * r" />
            <line v-for="(p, i) in axes" :key="i" x1="120" y1="120" :x2="p.x" :y2="p.y" />
          </g>
          <polygon :points="points" class="fill-brand-500/30 stroke-brand-400" stroke-width="2" />
        </svg>
      </div>

      <div class="space-y-2 overflow-hidden">
        <div v-for="trait in traits.slice(0, 4)" :key="trait.key" class="flex items-center gap-3">
          <span class="w-16 text-[11px] text-white/70">{{ t(`mock.traits.${trait.key}`) }}</span>
          <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div class="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet2-500" :style="{ width: `${trait.pct}%` }" />
          </div>
          <span class="w-8 text-right text-[10px] text-white/40">{{ trait.pct }}%</span>
        </div>
      </div>
    </div>
  </ScreenChrome>
</template>
