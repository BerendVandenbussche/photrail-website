<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { useI18n } from 'vue-i18n'
import { useGitHubStars } from '@/composables/useGitHubStars'
import { GITHUB_REPO, GITHUB_URL } from '@/data/site'

const { t } = useI18n()
const { stars, loading } = useGitHubStars()

const points = ['read', 'audit', 'contribute', 'license']
const techStack = ['SwiftUI', 'SwiftData', 'Swift Concurrency', 'Vision', 'MapKit']
</script>

<template>
  <section id="open-source" class="section">
    <div class="container-page">
      <div v-reveal class="card relative overflow-hidden p-8 sm:p-12 lg:p-16">
        <!-- ambient accent -->
        <div class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />

        <div class="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <span class="pill"><AppIcon name="github" :size="14" /> {{ t('openSource.badge') }}</span>
            <h2 class="display mt-4 text-balance text-3xl sm:text-4xl lg:text-5xl">
              {{ t('openSource.heading') }}
            </h2>
            <p class="mt-4 text-balance text-lg text-muted">
              {{ t('openSource.intro') }}
            </p>

            <ul class="mt-6 space-y-2.5">
              <li v-for="p in points" :key="p" class="flex items-start gap-2.5 text-[15px]">
                <AppIcon name="check" :size="18" class="mt-0.5 shrink-0 text-brand-500 dark:text-brand-300" />
                <span class="text-ink-900/80 dark:text-white/80">{{ t(`openSource.points.${p}`) }}</span>
              </li>
            </ul>

            <div class="mt-8 flex flex-wrap items-center gap-3">
              <a :href="GITHUB_URL" target="_blank" rel="noopener" class="btn btn-primary">
                <AppIcon name="github" :size="18" />
                {{ t('openSource.star') }}
              </a>
              <a :href="`${GITHUB_URL}/fork`" target="_blank" rel="noopener" class="btn btn-ghost">
                {{ t('openSource.fork') }}
              </a>
            </div>
          </div>

          <!-- GitHub repo card -->
          <div class="rounded-3xl border border-ink-900/10 bg-ink-900/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-white dark:bg-white dark:text-ink-900">
                <AppIcon name="github" :size="22" />
              </div>
              <div class="min-w-0">
                <p class="truncate font-mono text-sm font-semibold">{{ GITHUB_REPO }}</p>
                <p class="text-xs text-muted">{{ t('openSource.repoMeta') }}</p>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-3">
              <div class="rounded-2xl bg-white p-4 text-center shadow-card dark:bg-ink-800">
                <div class="flex items-center justify-center gap-1.5 text-amber-500">
                  <AppIcon name="star" :size="18" />
                  <span class="font-rounded text-2xl font-extrabold text-ink-900 dark:text-white">
                    <span v-if="loading" class="inline-block h-6 w-10 animate-pulse rounded bg-ink-900/10 align-middle dark:bg-white/10" />
                    <span v-else>{{ stars != null ? stars.toLocaleString() : '★' }}</span>
                  </span>
                </div>
                <p class="mt-1 text-[11px] text-muted">{{ stars != null ? t('openSource.stars') : t('openSource.starUs') }}</p>
              </div>
              <div class="rounded-2xl bg-white p-4 text-center shadow-card dark:bg-ink-800">
                <p class="font-rounded text-2xl font-extrabold">100%</p>
                <p class="mt-1 text-[11px] text-muted">{{ t('openSource.onDevice') }}</p>
              </div>
            </div>

            <div class="mt-3 rounded-2xl bg-white p-4 shadow-card dark:bg-ink-800">
              <p class="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted">{{ t('openSource.builtWith') }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in techStack" :key="tech" class="rounded-full bg-brand-500/10 px-2.5 py-1 text-[11px] font-medium text-brand-600 dark:text-brand-300">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
