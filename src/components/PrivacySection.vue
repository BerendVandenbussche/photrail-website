<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import BrandLogo from '@/components/BrandLogo.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const guarantees = ['leave', 'metadata', 'servers', 'tracking', 'openSource']
const photrail = ['onDevice', 'offline', 'noAccount', 'openSource']
const others = ['upload', 'online', 'account', 'closed']
</script>

<template>
  <section id="privacy" class="section">
    <div class="container-page">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Left: message + guarantees -->
        <div>
          <p v-reveal class="eyebrow">{{ t('privacy.eyebrow') }}</p>
          <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-5xl">
            {{ t('privacy.heading') }}
          </h2>
          <p v-reveal="140" class="mt-4 text-balance text-lg text-muted">
            {{ t('privacy.intro') }}
          </p>

          <ul class="mt-8 space-y-3">
            <li v-for="(g, i) in guarantees" :key="g" v-reveal="i * 60" class="flex items-start gap-3">
              <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-500 dark:text-brand-300">
                <AppIcon name="check" :size="14" />
              </span>
              <span class="text-[15px] text-ink-900/80 dark:text-white/80">{{ t(`privacy.guarantees.${g}`) }}</span>
            </li>
          </ul>

          <p v-reveal class="mt-6 text-sm text-muted">
            {{ t('privacy.note') }}
          </p>
        </div>

        <!-- Right: comparison -->
        <div v-reveal="120" class="card overflow-hidden p-1.5">
          <div class="grid grid-cols-2 gap-1.5">
            <!-- Photrail -->
            <div class="rounded-[1.35rem] bg-gradient-to-b from-brand-500/[0.08] to-violet2-500/[0.06] p-5 ring-1 ring-inset ring-brand-500/20">
              <div class="mb-4 flex items-center gap-2">
                <BrandLogo :size="22" :wordmark="false" />
                <span class="font-rounded text-sm font-bold">{{ t('privacy.photrailTitle') }}</span>
              </div>
              <ul class="space-y-3">
                <li v-for="p in photrail" :key="p" class="flex items-start gap-2 text-[13px] text-ink-900/80 dark:text-white/80">
                  <AppIcon name="check" :size="15" class="mt-0.5 shrink-0 text-emerald-500" />
                  <span>{{ t(`privacy.photrail.${p}`) }}</span>
                </li>
              </ul>
            </div>
            <!-- Others -->
            <div class="rounded-[1.35rem] bg-ink-900/[0.03] p-5 dark:bg-white/[0.02]">
              <div class="mb-4 flex items-center gap-2">
                <span class="flex h-[22px] w-[22px] items-center justify-center rounded-lg bg-ink-900/10 text-xs dark:bg-white/10">☁️</span>
                <span class="font-rounded text-sm font-bold text-muted">{{ t('privacy.othersTitle') }}</span>
              </div>
              <ul class="space-y-3">
                <li v-for="o in others" :key="o" class="flex items-start gap-2 text-[13px] text-muted">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="mt-0.5 shrink-0 text-rose-400"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  <span>{{ t(`privacy.others.${o}`) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
