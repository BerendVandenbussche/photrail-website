<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/AppIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const cards: Array<{ icon: IconName; key: string }> = [
  { icon: 'device', key: 'onDevice' },
  { icon: 'eye-off', key: 'noAccount' },
  { icon: 'cloud-off', key: 'noCloud' },
  { icon: 'github', key: 'openSource' },
  { icon: 'shield', key: 'privacyFirst' },
]
</script>

<template>
  <section class="section pt-12 sm:pt-16">
    <div class="container-page">
      <p v-reveal class="eyebrow text-center">{{ t('trust.eyebrow') }}</p>
      <h2 v-reveal="80" class="display mx-auto mt-3 max-w-2xl text-balance text-center text-3xl sm:text-4xl lg:text-5xl">
        {{ t('trust.heading') }}
      </h2>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(c, i) in cards"
          :key="c.key"
          v-reveal="i * 60"
          class="card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          :class="i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''"
        >
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet2-500 text-white shadow-glow">
            <AppIcon :name="c.icon" :size="22" />
          </div>
          <h3 class="font-rounded text-lg font-bold">{{ t(`trust.cards.${c.key}.title`) }}</h3>
          <p class="mt-1.5 text-sm text-muted">{{ t(`trust.cards.${c.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
