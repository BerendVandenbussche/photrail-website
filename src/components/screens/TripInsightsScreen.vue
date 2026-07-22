<script setup lang="ts">
import ScreenChrome from './ScreenChrome.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cards = [
  { key: 'excitement', icon: '❤️', tint: 'text-pink-400', ring: 'ring-pink-400/20 bg-pink-400/10' },
  { key: 'vertical', icon: '⛰️', tint: 'text-emerald-400', ring: 'ring-emerald-400/20 bg-emerald-400/10' },
  { key: 'fuel', icon: '🔥', tint: 'text-orange-400', ring: 'ring-orange-400/20 bg-orange-400/10' },
] as const
</script>

<template>
  <ScreenChrome>
    <div class="flex h-full flex-col gap-3 overflow-hidden px-4 pt-2">
      <header class="flex items-center justify-between px-1">
        <div>
          <h1 class="font-rounded text-xl font-extrabold tracking-tight">{{ t('mock.insights.title') }}</h1>
          <p class="flex items-center gap-1 text-[10px] font-medium text-white/50">
            <span aria-hidden="true">❤️</span> {{ t('mock.insights.poweredBy') }}
          </p>
        </div>
        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-brand-500 text-base">🇯🇵</div>
      </header>

      <!-- Insight cards -->
      <div
        v-for="c in cards"
        :key="c.key"
        class="rounded-3xl border border-white/10 bg-white/[0.04] p-3.5"
      >
        <div class="flex items-start gap-3">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-base ring-1 ring-inset" :class="c.ring">
            {{ c.icon }}
          </div>
          <div class="min-w-0">
            <p class="text-[10px] font-semibold uppercase tracking-wide" :class="c.tint">{{ t(`mock.insights.${c.key}.title`) }}</p>
            <p class="mt-0.5 text-[13px] font-bold leading-tight">{{ t(`mock.insights.${c.key}.value`) }}</p>
            <p class="mt-0.5 text-[11px] text-white/55">{{ t(`mock.insights.${c.key}.sub`) }}</p>
          </div>
        </div>
      </div>

      <!-- Workout chapters -->
      <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-3.5">
        <div class="mb-2.5 flex items-center gap-2">
          <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-400/10 text-base ring-1 ring-inset ring-blue-400/20">🏃</div>
          <div>
            <p class="text-[10px] font-semibold uppercase tracking-wide text-blue-400">{{ t('mock.insights.workouts.title') }}</p>
            <p class="text-[12px] font-bold">{{ t('mock.insights.workouts.value') }}</p>
          </div>
        </div>
        <div class="space-y-1.5">
          <div v-for="w in ['🥾 2h 14m', '🏊 48m', '🚴 1h 02m']" :key="w" class="flex items-center justify-between rounded-xl bg-white/[0.04] px-2.5 py-1.5 text-[11px]">
            <span>{{ w.split(' ')[0] }} {{ w.split(' ').slice(1).join(' ') }}</span>
            <span class="text-white/40">›</span>
          </div>
        </div>
      </div>
    </div>
  </ScreenChrome>
</template>
