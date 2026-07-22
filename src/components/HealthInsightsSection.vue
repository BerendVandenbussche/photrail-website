<script setup lang="ts">
import PhoneMockup from '@/components/PhoneMockup.vue'
import AppScreen from '@/components/AppScreen.vue'
import AppIcon, { type IconName } from '@/components/AppIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const insights: Array<{ icon: IconName; key: string; tint: string }> = [
  { icon: 'heart', key: 'excitement', tint: 'text-pink-500 dark:text-pink-400 bg-pink-500/10 ring-pink-500/20' },
  { icon: 'mountain', key: 'vertical', tint: 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 ring-emerald-500/20' },
  { icon: 'flame', key: 'fuel', tint: 'text-orange-500 dark:text-orange-400 bg-orange-500/10 ring-orange-500/20' },
  { icon: 'compass', key: 'persona', tint: 'text-violet2-500 dark:text-violet2-400 bg-violet2-500/10 ring-violet2-500/20' },
  { icon: 'activity', key: 'workouts', tint: 'text-blue-500 dark:text-blue-400 bg-blue-500/10 ring-blue-500/20' },
]
</script>

<template>
  <section id="health" class="section bg-ink-900/[0.02] dark:bg-white/[0.015]">
    <div class="container-page">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Phone -->
        <div v-reveal class="flex justify-center lg:justify-start">
          <PhoneMockup :width="288">
            <AppScreen screen="insights" />
          </PhoneMockup>
        </div>

        <!-- Copy -->
        <div>
          <p v-reveal class="eyebrow inline-flex items-center gap-1.5">
            <AppIcon name="heart" :size="14" class="text-pink-500 dark:text-pink-400" />
            {{ t('health.eyebrow') }}
          </p>
          <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-5xl">
            {{ t('health.heading') }}
          </h2>
          <p v-reveal="140" class="mt-4 text-balance text-lg text-muted">
            {{ t('health.intro') }}
          </p>

          <ul class="mt-8 space-y-4">
            <li v-for="(ins, i) in insights" :key="ins.key" v-reveal="i * 70" class="flex gap-4">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 ring-inset" :class="ins.tint">
                <AppIcon :name="ins.icon" :size="20" />
              </div>
              <div>
                <h3 class="font-rounded font-bold">{{ t(`health.insights.${ins.key}.title`) }}</h3>
                <p class="mt-0.5 text-sm text-muted">{{ t(`health.insights.${ins.key}.desc`) }}</p>
              </div>
            </li>
          </ul>

          <!-- Privacy callout -->
          <div v-reveal class="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
            <AppIcon name="shield" :size="20" class="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <p class="text-sm text-ink-900/80 dark:text-white/80">
              <strong class="text-ink-900 dark:text-white">{{ t('health.privacyTitle') }}</strong>
              {{ ' ' }}{{ t('health.privacyBody') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
