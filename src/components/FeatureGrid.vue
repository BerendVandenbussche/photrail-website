<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import WorldMapArt from '@/components/WorldMapArt.vue'
import { useI18n } from 'vue-i18n'
import { FEATURES } from '@/data/features'

const { t } = useI18n()
</script>

<template>
  <section id="features" class="section">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p v-reveal class="eyebrow">{{ t('features.eyebrow') }}</p>
        <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-5xl">
          {{ t('features.heading') }}
        </h2>
        <p v-reveal="140" class="mt-4 text-balance text-lg text-muted">
          {{ t('features.subhead') }}
        </p>
      </div>

      <div class="mt-14 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(f, i) in FEATURES"
          :key="f.id"
          v-reveal="(i % 3) * 70"
          class="card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-7"
          :class="f.span ? 'sm:col-span-2 lg:col-span-2' : ''"
        >
          <!-- decorative map on wide cards -->
          <div
            v-if="f.span"
            class="pointer-events-none absolute inset-y-0 right-0 w-1/2 text-brand-300 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
          >
            <div class="h-full w-full mask-fade-x">
              <WorldMapArt :routes="i === 0" />
            </div>
          </div>

          <div class="relative">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 ring-1 ring-inset ring-brand-500/20 dark:bg-brand-500/15 dark:text-brand-300">
              <AppIcon :name="f.icon" :size="20" />
            </div>
            <h3 class="font-rounded text-xl font-bold">{{ t(`features.items.${f.id}.title`) }}</h3>
            <p class="mt-2 max-w-md text-[15px] leading-relaxed text-muted">{{ t(`features.items.${f.id}.blurb`) }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
