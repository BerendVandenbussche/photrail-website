<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/AppIcon.vue'
import { useI18n } from 'vue-i18n'
import {
  GITHUB_URL,
  GITHUB_NEW_ISSUE,
  GITHUB_CONTRIBUTE,
  GITHUB_STRINGS,
} from '@/data/site'

const { t } = useI18n()

// Languages the app ships today. Add new codes here as translations land.
const languages = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'nl', flag: '🇳🇱' },
]

const steps: Array<{ icon: IconName; key: string }> = [
  { icon: 'compass', key: 'find' },
  { icon: 'translate', key: 'translate' },
  { icon: 'github', key: 'pr' },
]

const other: Array<{ icon: IconName; key: string; href: string }> = [
  { icon: 'bug', key: 'bugs', href: GITHUB_NEW_ISSUE },
  { icon: 'sparkles', key: 'ideas', href: GITHUB_NEW_ISSUE },
  { icon: 'code', key: 'code', href: GITHUB_CONTRIBUTE },
  { icon: 'star', key: 'star', href: GITHUB_URL },
]
</script>

<template>
  <section id="contribute" class="section bg-ink-900/[0.02] dark:bg-white/[0.015]">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p v-reveal class="eyebrow">{{ t('contribute.eyebrow') }}</p>
        <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-5xl">
          {{ t('contribute.heading') }}
        </h2>
        <p v-reveal="140" class="mt-4 text-balance text-lg text-muted">
          {{ t('contribute.intro') }}
        </p>
      </div>

      <!-- Language availability -->
      <div v-reveal class="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        <span class="text-xs font-semibold uppercase tracking-wide text-muted">{{ t('contribute.availableNow') }}</span>
        <span
          v-for="l in languages"
          :key="l.code"
          class="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1.5 text-sm font-medium text-ink-900 dark:text-white"
        >
          <span aria-hidden="true">{{ l.flag }}</span>
          {{ t(`lang.${l.code}`) }}
          <AppIcon name="check" :size="14" class="text-emerald-500" />
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink-900/20 px-3 py-1.5 text-sm font-medium text-muted dark:border-white/20">
          <span aria-hidden="true">✨</span>
          {{ t('contribute.yourLanguageNext') }}
        </span>
      </div>

      <!-- Translate in 3 steps -->
      <ol class="mt-12 grid gap-4 md:grid-cols-3">
        <li
          v-for="(s, i) in steps"
          :key="s.key"
          v-reveal="i * 80"
          class="card relative p-6"
        >
          <div class="mb-4 flex items-center justify-between">
            <div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet2-500 text-white shadow-glow">
              <AppIcon :name="s.icon" :size="20" />
            </div>
            <span class="font-rounded text-3xl font-extrabold text-ink-900/10 dark:text-white/10">{{ i + 1 }}</span>
          </div>
          <h3 class="font-rounded text-lg font-bold">{{ t(`contribute.steps.${s.key}.title`) }}</h3>
          <p class="mt-1.5 text-sm text-muted">{{ t(`contribute.steps.${s.key}.desc`) }}</p>
        </li>
      </ol>

      <!-- Translation CTAs -->
      <div v-reveal class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a :href="GITHUB_NEW_ISSUE" target="_blank" rel="noopener" class="btn btn-primary">
          <AppIcon name="translate" :size="18" />
          {{ t('contribute.startTranslating') }}
        </a>
        <a :href="GITHUB_STRINGS" target="_blank" rel="noopener" class="btn btn-ghost">
          <AppIcon name="code" :size="18" />
          {{ t('contribute.browseStrings') }}
        </a>
      </div>

      <!-- Other ways to help -->
      <div class="mt-16">
        <h3 v-reveal class="text-center font-rounded text-lg font-bold">{{ t('contribute.otherTitle') }}</h3>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="(o, i) in other"
            :key="o.key"
            :href="o.href"
            target="_blank"
            rel="noopener"
            v-reveal="i * 50"
            class="card group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          >
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 ring-1 ring-inset ring-brand-500/20 dark:bg-brand-500/15 dark:text-brand-300">
              <AppIcon :name="o.icon" :size="18" />
            </div>
            <h4 class="flex items-center gap-1 font-rounded font-bold">
              {{ t(`contribute.other.${o.key}.title`) }}
              <AppIcon name="arrow-right" :size="15" class="text-muted transition-transform duration-300 group-hover:translate-x-1" />
            </h4>
            <p class="mt-1 text-sm text-muted">{{ t(`contribute.other.${o.key}.desc`) }}</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
