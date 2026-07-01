<script setup lang="ts">
import AmbientBackground from '@/components/AmbientBackground.vue'
import PhoneMockup from '@/components/PhoneMockup.vue'
import AppScreen from '@/components/AppScreen.vue'
import AppStoreBadge from '@/components/AppStoreBadge.vue'
import AppIcon from '@/components/AppIcon.vue'
import { GITHUB_URL } from '@/data/site'

const trustPoints = ['100% on-device', 'No account', 'No cloud', 'Open source']
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
    <AmbientBackground />

    <div class="container-page">
      <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <!-- Copy -->
        <div class="text-center lg:text-left">
          <div class="mb-6 flex justify-center lg:justify-start">
            <span class="pill animate-fade-up">
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Now on the App Store · iOS 18+
            </span>
          </div>

          <h1 class="display text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Your travel history,
            <span class="gradient-text">automatically.</span>
          </h1>

          <p class="mx-auto mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl lg:mx-0">
            Photrail reads the location data already inside your photos and turns it into a
            beautiful map of everywhere you've been — countries, cities, trips and a cinematic
            Year in Travel. No tagging. No account. Nothing ever leaves your phone.
          </p>

          <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <AppStoreBadge />
            <a :href="GITHUB_URL" target="_blank" rel="noopener" class="btn btn-ghost h-[54px] px-6">
              <AppIcon name="github" :size="18" />
              View on GitHub
            </a>
          </div>

          <ul class="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
            <li v-for="p in trustPoints" :key="p" class="flex items-center gap-1.5 text-sm font-medium text-muted">
              <AppIcon name="check" :size="16" class="text-brand-500 dark:text-brand-300" />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- Phones -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="relative">
            <div class="absolute -right-2 top-10 hidden rotate-[7deg] sm:block" style="filter: saturate(1.05)">
              <PhoneMockup :width="210" :glow="false">
                <AppScreen screen="recap" />
              </PhoneMockup>
            </div>
            <div class="relative sm:animate-float">
              <PhoneMockup :width="288">
                <AppScreen screen="dashboard" />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- scroll hint -->
    <div class="mt-16 flex justify-center pb-4 text-ink-900/40 dark:text-white/40 sm:mt-20">
      <AppIcon name="arrow-down" :size="22" class="animate-bounce" />
    </div>
  </section>
</template>
