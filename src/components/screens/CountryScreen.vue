<script setup lang="ts">
import ScreenChrome from './ScreenChrome.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// A simple deterministic palette so the "photo grid" reads as photos without
// shipping any image weight.
const tiles = [
  'from-sky-400 to-indigo-500', 'from-amber-300 to-rose-400', 'from-emerald-300 to-teal-500',
  'from-fuchsia-400 to-purple-600', 'from-orange-300 to-red-500', 'from-cyan-300 to-blue-500',
  'from-lime-300 to-emerald-500', 'from-pink-300 to-rose-500', 'from-violet-400 to-indigo-600',
]
</script>

<template>
  <ScreenChrome>
    <div class="flex h-full flex-col overflow-hidden">
      <div class="relative h-28 bg-gradient-to-br from-brand-500 to-violet2-600 px-5 pb-3 pt-4">
        <p class="text-4xl">🇯🇵</p>
        <h1 class="mt-1 font-rounded text-2xl font-extrabold text-white">{{ t('mock.country.japan') }}</h1>
        <p class="text-[10px] text-white/70">{{ t('mock.country.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-3 gap-2 px-4 py-3">
        <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 text-center">
          <p class="font-rounded text-lg font-extrabold">6</p>
          <p class="text-[9px] text-white/50">{{ t('mock.country.cities') }}</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 text-center">
          <p class="font-rounded text-lg font-extrabold">312</p>
          <p class="text-[9px] text-white/50">{{ t('mock.country.photos') }}</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 text-center">
          <p class="font-rounded text-lg font-extrabold">21</p>
          <p class="text-[9px] text-white/50">{{ t('mock.country.days') }}</p>
        </div>
      </div>

      <p class="px-5 pb-2 text-[11px] font-semibold text-white/70">{{ t('mock.country.photosHeading') }}</p>
      <div class="grid grid-cols-3 gap-1.5 px-4">
        <div v-for="(tile, i) in tiles" :key="i" class="aspect-square rounded-xl bg-gradient-to-br" :class="tile" />
      </div>
    </div>
  </ScreenChrome>
</template>
