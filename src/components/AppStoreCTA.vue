<script setup lang="ts">
import AmbientBackground from '@/components/AmbientBackground.vue'
import AppStoreBadge from '@/components/AppStoreBadge.vue'
import PhoneMockup from '@/components/PhoneMockup.vue'
import AppScreen from '@/components/AppScreen.vue'
import AppIcon from '@/components/AppIcon.vue'
import { GITHUB_URL } from '@/data/site'
</script>

<template>
  <section id="download" class="section">
    <div class="container-page">
      <div v-reveal class="relative overflow-hidden rounded-[2.5rem] border border-ink-900/10 bg-ink-900/[0.02] px-6 py-16 text-center dark:border-white/10 dark:bg-white/[0.02] sm:px-12 sm:py-20">
        <AmbientBackground :grid="false" />

        <h2 class="display mx-auto max-w-3xl text-balance text-4xl sm:text-5xl lg:text-6xl">
          Every trip you've ever taken,
          <span class="gradient-text">waiting in your photos.</span>
        </h2>
        <p class="mx-auto mt-5 max-w-xl text-balance text-lg text-muted">
          Download Photrail and watch your travel history appear in minutes — privately, automatically,
          and for free.
        </p>

        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <AppStoreBadge :height="58" />
          <a :href="GITHUB_URL" target="_blank" rel="noopener" class="btn btn-ghost h-[58px] px-6">
            <AppIcon name="github" :size="18" />
            View source
          </a>
        </div>

        <p class="mt-5 text-sm text-muted">Requires iOS 18 or later · No account · No in-app tracking</p>

        <!-- trio of phones -->
        <div class="mt-14 flex items-end justify-center gap-3 sm:gap-6">
          <div class="hidden translate-y-4 opacity-90 sm:block">
            <PhoneMockup :width="180" :glow="false"><AppScreen screen="personality" /></PhoneMockup>
          </div>
          <PhoneMockup :width="230"><AppScreen screen="dashboard" /></PhoneMockup>
          <div class="hidden translate-y-4 opacity-90 sm:block">
            <PhoneMockup :width="180" :glow="false"><AppScreen screen="map" /></PhoneMockup>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
