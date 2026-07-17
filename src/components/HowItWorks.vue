<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/AppIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const steps: Array<{ icon: IconName; step: string; key: string }> = [
  { icon: 'image', step: '01', key: 'access' },
  { icon: 'aperture', step: '02', key: 'read' },
  { icon: 'compass', step: '03', key: 'discover' },
]
</script>

<template>
  <section id="how-it-works" class="section bg-ink-900/[0.02] dark:bg-white/[0.015]">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p v-reveal class="eyebrow">{{ t('how.eyebrow') }}</p>
        <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-5xl">
          {{ t('how.heading') }}
        </h2>
      </div>

      <ol class="relative mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
        <!-- connecting line -->
        <div
          class="pointer-events-none absolute left-0 right-0 top-[2.4rem] hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block"
          aria-hidden="true"
        />
        <li
          v-for="(s, i) in steps"
          :key="s.step"
          v-reveal="i * 120"
          class="relative flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div class="relative mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-violet2-500 text-white shadow-glow">
            <AppIcon :name="s.icon" :size="30" />
            <span class="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-ink-900 text-[11px] font-bold text-white dark:bg-ink-800">
              {{ i + 1 }}
            </span>
          </div>
          <p class="font-mono text-xs font-semibold uppercase text-brand-500 dark:text-brand-300">{{ t('how.stepLabel', { n: s.step }) }}</p>
          <h3 class="mt-1 font-rounded text-xl font-bold">{{ t(`how.steps.${s.key}.title`) }}</h3>
          <p class="mt-2 max-w-sm text-[15px] leading-relaxed text-muted">{{ t(`how.steps.${s.key}.desc`) }}</p>
        </li>
      </ol>

      <p v-reveal class="mx-auto mt-12 max-w-xl text-center text-sm text-muted">
        {{ t('how.footnote') }}
      </p>
    </div>
  </section>
</template>
