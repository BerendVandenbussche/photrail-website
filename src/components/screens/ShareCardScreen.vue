<script setup lang="ts">
import ScreenChrome from './ScreenChrome.vue'
import BrandLogo from '@/components/BrandLogo.vue'
import WorldMapArt from '@/components/WorldMapArt.vue'
</script>

<template>
  <ScreenChrome>
    <div class="flex h-full items-center justify-center bg-gradient-to-b from-ink-900 to-ink-800 p-4">
      <!-- the exportable card -->
      <div class="relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-600 shadow-2xl">
        <div class="absolute inset-0 text-brand-300/60 opacity-50">
          <WorldMapArt :routes="true" />
        </div>
        <div class="relative flex h-full flex-col p-5 text-white">
          <BrandLogo :size="26" />
          <div class="mt-auto">
            <p class="text-[10px] uppercase tracking-widest text-white/60">My 2025 in travel</p>
            <p class="font-rounded text-5xl font-black leading-none">32</p>
            <p class="text-sm font-semibold">countries · 5 continents</p>
            <div class="mt-3 flex flex-wrap gap-1.5">
              <span class="rounded-full bg-white/15 px-2 py-0.5 text-[9px]">🗼 Eiffel Tower</span>
              <span class="rounded-full bg-white/15 px-2 py-0.5 text-[9px]">🏛️ Colosseum</span>
              <span class="rounded-full bg-white/15 px-2 py-0.5 text-[9px]">⛩️ Kyoto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ScreenChrome>
</template>
