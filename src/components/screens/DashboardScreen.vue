<script setup lang="ts">
import ScreenChrome from './ScreenChrome.vue'
import WorldMapArt from '@/components/WorldMapArt.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const stats = [
  { key: 'countries', value: '32' },
  { key: 'cities', value: '118' },
  { key: 'continents', value: '5' },
]
const personality = [
  { key: 'urban', pct: 82 },
  { key: 'coastal', pct: 61 },
  { key: 'culture', pct: 47 },
]
const continents = ['europe', 'asia', 'africa', 'northAmerica', 'oceania']
</script>

<template>
  <ScreenChrome>
    <div class="flex h-full flex-col gap-3 overflow-hidden px-4 pt-2">
      <header class="flex items-center justify-between px-1">
        <div>
          <p class="text-[10px] font-medium text-white/50">{{ t('mock.welcomeBack') }}</p>
          <h1 class="font-rounded text-xl font-extrabold tracking-tight">{{ t('mock.yourTravel') }}</h1>
        </div>
        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet2-500 text-base">🌍</div>
      </header>

      <!-- Map card -->
      <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-600">
        <div class="h-40 w-full text-brand-300">
          <WorldMapArt />
        </div>
        <div class="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold">
          {{ t('mock.mapBadge', { countries: 32, continents: 6 }) }}
        </div>
      </div>

      <!-- Stat row -->
      <div class="grid grid-cols-3 gap-2">
        <div v-for="s in stats" :key="s.key" class="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <p class="font-rounded text-2xl font-extrabold leading-none">{{ s.value }}</p>
          <p class="mt-1 text-[10px] text-white/50">{{ t(`mock.stats.${s.key}`) }}</p>
        </div>
      </div>

      <!-- Personality card -->
      <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-xs font-semibold">{{ t('mock.travelPersonality') }}</p>
          <span class="rounded-full bg-brand-500/20 px-2 py-0.5 text-[9px] font-bold text-brand-200">{{ t('mock.urbanExplorer') }}</span>
        </div>
        <div class="space-y-2.5">
          <div v-for="p in personality" :key="p.key">
            <div class="mb-1 flex justify-between text-[10px]">
              <span class="text-white/70">{{ t(`mock.traits.${p.key}`) }}</span>
              <span class="text-white/40">{{ p.pct }}%</span>
            </div>
            <div class="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div class="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet2-500" :style="{ width: `${p.pct}%` }" />
            </div>
          </div>
        </div>
      </div>

      <!-- Continents pills -->
      <div class="flex flex-wrap gap-1.5 px-0.5">
        <span v-for="c in continents" :key="c" class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] text-white/70">{{ t(`mock.continents.${c}`) }}</span>
      </div>
    </div>
  </ScreenChrome>
</template>
