<script setup lang="ts">
import PhoneMockup from '@/components/PhoneMockup.vue'
import AppScreen from '@/components/AppScreen.vue'
import AppIcon, { type IconName } from '@/components/AppIcon.vue'

const highlights: Array<{ icon: IconName; title: string; desc: string }> = [
  { icon: 'route', title: 'Your year as a story', desc: 'A paged, Wrapped-style recap you swipe through — distance traveled with relatable comparisons, your route mapped chronologically, and a hero finale.' },
  { icon: 'flag', title: 'Biggest trips & firsts', desc: 'Your standout journey, the countries you set foot in for the very first time, your highest peak and furthest point from home.' },
  { icon: 'sparkles', title: 'Personality evolution', desc: 'See how your travel style shifted over the year — and which destinations defined it.' },
  { icon: 'share', title: 'Every slide is shareable', desc: 'Export any slide as its own branded card; the finale even comes in light, dark and transparent themes.' },
]
</script>

<template>
  <section class="relative overflow-hidden py-24 sm:py-32">
    <!-- immersive gradient backdrop -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-600" aria-hidden="true" />
    <div class="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-brand-500/30 blur-[120px]" aria-hidden="true" />
    <div class="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-violet2-500/30 blur-[120px]" aria-hidden="true" />

    <div class="container-page">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="order-2 text-white lg:order-1">
          <p v-reveal class="eyebrow !text-brand-300">Year in Travel</p>
          <h2 v-reveal="80" class="display mt-3 text-balance text-3xl text-white sm:text-4xl lg:text-5xl">
            Your year, replayed like a highlight reel.
          </h2>
          <p v-reveal="140" class="mt-4 text-balance text-lg text-white/70">
            Once a year, Photrail turns your travels into a cinematic recap worth waiting for —
            personal, beautiful, and made entirely from photos you already took.
          </p>

          <div class="mt-8 space-y-5">
            <div v-for="(h, i) in highlights" :key="h.title" v-reveal="i * 80" class="flex gap-4">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
                <AppIcon :name="h.icon" :size="20" />
              </div>
              <div>
                <h3 class="font-rounded font-bold text-white">{{ h.title }}</h3>
                <p class="mt-1 text-sm text-white/65">{{ h.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-reveal="120" class="order-1 flex justify-center lg:order-2">
          <div class="animate-float">
            <PhoneMockup :width="300" :glow="false">
              <AppScreen screen="recap" />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
