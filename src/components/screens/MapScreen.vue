<script setup lang="ts">
import ScreenChrome from './ScreenChrome.vue'
import WorldMapArt from '@/components/WorldMapArt.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <ScreenChrome>
    <div class="relative h-full overflow-hidden bg-gradient-to-br from-ink-800 to-ink-600 text-brand-300">
      <WorldMapArt />
      <!-- top search-ish bar -->
      <div class="absolute inset-x-4 top-3">
        <div class="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/50 px-3 py-2 text-white">
          <span class="text-sm">🔎</span>
          <span class="text-[11px] text-white/50">{{ t('mock.map.search') }}</span>
        </div>
      </div>
      <!-- bottom sheet -->
      <div class="absolute inset-x-3 bottom-3 rounded-3xl border border-white/10 bg-black/60 p-4 text-white">
        <div class="mx-auto mb-3 h-1 w-10 rounded-full bg-white/30" />
        <div class="flex items-center justify-between">
          <div>
            <p class="font-rounded text-lg font-extrabold">{{ t('mock.map.italy') }} 🇮🇹</p>
            <p class="text-[10px] text-white/60">{{ t('mock.map.italyStats') }}</p>
          </div>
          <span class="rounded-full bg-brand-500/25 px-3 py-1 text-[10px] font-bold text-brand-200">{{ t('mock.map.mostVisited') }}</span>
        </div>
      </div>
    </div>
  </ScreenChrome>
</template>
