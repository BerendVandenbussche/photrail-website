<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/AppIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const examples: Array<{ icon: IconName; key: string }> = [
  { icon: 'pin', key: 'where' },
  { icon: 'clock', key: 'when' },
  { icon: 'camera', key: 'camera' },
  { icon: 'mountain', key: 'altitude' },
]
</script>

<template>
  <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
    <div>
      <p v-reveal class="eyebrow">{{ t('exifEdu.eyebrow') }}</p>
      <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-[2.75rem]">
        {{ t('exifEdu.heading') }}
      </h2>
      <i18n-t keypath="exifEdu.p1" tag="p" scope="global" v-reveal="140" class="mt-4 text-balance text-lg text-muted">
        <template #term>
          <strong class="text-ink-900 dark:text-white">{{ t('exifEdu.p1Term') }}</strong>
        </template>
      </i18n-t>
      <p v-reveal="200" class="mt-4 text-[15px] text-muted">
        {{ t('exifEdu.p2') }}
      </p>
    </div>

    <!-- a friendly "inside a photo" illustration -->
    <div v-reveal="120" class="relative">
      <div class="card overflow-hidden p-5 sm:p-6">
        <div class="flex items-center gap-3 border-b border-ink-900/5 pb-4 dark:border-white/5">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 text-2xl">🏝️</div>
          <div>
            <p class="font-rounded text-sm font-bold">{{ t('exifEdu.fileName') }}</p>
            <p class="text-xs text-muted">{{ t('exifEdu.fileMeta') }}</p>
          </div>
          <span class="ml-auto pill">{{ t('exifEdu.hiddenNote') }}</span>
        </div>
        <dl class="mt-4 grid grid-cols-2 gap-3">
          <div v-for="e in examples" :key="e.key" class="rounded-2xl bg-ink-900/[0.03] p-3 dark:bg-white/[0.03]">
            <dt class="flex items-center gap-1.5 text-[11px] font-medium text-muted">
              <AppIcon :name="e.icon" :size="14" class="text-brand-500 dark:text-brand-300" />
              {{ t(`exifEdu.examples.${e.key}.label`) }}
            </dt>
            <dd class="mt-1 font-mono text-[13px] font-semibold text-ink-900 dark:text-white">{{ t(`exifEdu.examples.${e.key}.value`) }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
