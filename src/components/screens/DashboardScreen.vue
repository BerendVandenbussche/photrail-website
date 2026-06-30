<script setup lang="ts">
import ScreenChrome from './ScreenChrome.vue'
import WorldMapArt from '@/components/WorldMapArt.vue'

const stats = [
  { label: 'Countries', value: '32' },
  { label: 'Cities', value: '118' },
  { label: 'Continents', value: '5' },
]
const personality = [
  { label: 'Urban', pct: 82 },
  { label: 'Coastal', pct: 61 },
  { label: 'Culture', pct: 47 },
]
</script>

<template>
  <ScreenChrome>
    <div class="flex h-full flex-col gap-3 overflow-hidden px-4 pt-2">
      <header class="flex items-center justify-between px-1">
        <div>
          <p class="text-[10px] font-medium text-white/50">Welcome back</p>
          <h1 class="font-rounded text-xl font-extrabold tracking-tight">Your Travel</h1>
        </div>
        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet2-500 text-base">🌍</div>
      </header>

      <!-- Map card -->
      <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-600">
        <div class="h-40 w-full text-brand-300">
          <WorldMapArt />
        </div>
        <div class="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold">
          32 countries · 6 continents
        </div>
      </div>

      <!-- Stat row -->
      <div class="grid grid-cols-3 gap-2">
        <div v-for="s in stats" :key="s.label" class="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <p class="font-rounded text-2xl font-extrabold leading-none">{{ s.value }}</p>
          <p class="mt-1 text-[10px] text-white/50">{{ s.label }}</p>
        </div>
      </div>

      <!-- Personality card -->
      <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-xs font-semibold">Travel Personality</p>
          <span class="rounded-full bg-brand-500/20 px-2 py-0.5 text-[9px] font-bold text-brand-200">Urban Explorer</span>
        </div>
        <div class="space-y-2.5">
          <div v-for="p in personality" :key="p.label">
            <div class="mb-1 flex justify-between text-[10px]">
              <span class="text-white/70">{{ p.label }}</span>
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
        <span v-for="c in ['Europe', 'Asia', 'Africa', 'N. America', 'Oceania']" :key="c" class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] text-white/70">{{ c }}</span>
      </div>
    </div>
  </ScreenChrome>
</template>
