<script setup lang="ts">
import ScreenChrome from './ScreenChrome.vue'
</script>

<template>
  <ScreenChrome>
    <div class="relative h-full overflow-hidden bg-gradient-to-b from-ink-800 to-ink-600">
      <!-- ambient blobs -->
      <div class="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-500/40 blur-3xl" />
      <div class="pointer-events-none absolute -right-8 bottom-16 h-40 w-40 rounded-full bg-violet2-500/40 blur-3xl" />

      <div class="relative flex h-full flex-col px-6 py-6">
        <div class="flex items-center gap-2">
          <span class="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold tracking-wide">YEAR IN TRAVEL</span>
        </div>

        <div class="mt-6">
          <p class="font-rounded text-7xl font-black leading-none">2025</p>
          <p class="mt-2 text-sm text-white/70">You went the distance.</p>
        </div>

        <div class="mt-8">
          <p class="text-[11px] uppercase tracking-widest text-white/50">Total distance</p>
          <p class="font-rounded text-5xl font-extrabold">48,210<span class="ml-1 text-2xl font-bold text-white/70">km</span></p>
          <p class="mt-1 text-xs text-white/60">That's 1.2× around the Earth 🌍</p>
        </div>

        <div class="mt-auto grid grid-cols-2 gap-3">
          <div class="rounded-2xl bg-white/15 p-3">
            <p class="font-rounded text-2xl font-extrabold">12</p>
            <p class="text-[10px] text-white/60">trips</p>
          </div>
          <div class="rounded-2xl bg-white/15 p-3">
            <p class="font-rounded text-2xl font-extrabold">9</p>
            <p class="text-[10px] text-white/60">countries</p>
          </div>
          <div class="rounded-2xl bg-white/15 p-3">
            <p class="font-rounded text-2xl font-extrabold">🇯🇵</p>
            <p class="text-[10px] text-white/60">most photographed</p>
          </div>
          <div class="rounded-2xl bg-white/15 p-3">
            <p class="font-rounded text-2xl font-extrabold">4</p>
            <p class="text-[10px] text-white/60">new countries</p>
          </div>
        </div>

        <div class="mt-4 flex items-center justify-center gap-1.5">
          <span v-for="i in 7" :key="i" class="h-1 rounded-full" :class="i === 2 ? 'w-6 bg-white' : 'w-1.5 bg-white/30'" />
        </div>
      </div>
    </div>
  </ScreenChrome>
</template>
