<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { APP_STORE_URL } from '@/data/site'
import AppIcon from '@/components/AppIcon.vue'

const { t } = useI18n()
withDefaults(defineProps<{ height?: number }>(), { height: 54 })
</script>

<template>
  <a
    :href="APP_STORE_URL"
    target="_blank"
    rel="noopener"
    class="group inline-flex items-center gap-3 rounded-2xl bg-ink-900 px-5 text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:bg-white dark:text-ink-900"
    :style="{ height: `${height}px` }"
    :aria-label="t('appStore.aria')"
  >
    <AppIcon name="apple" :size="height * 0.5" />
    <span class="flex flex-col leading-none">
      <span class="text-[10px] font-medium opacity-70">{{ t('appStore.downloadOn') }}</span>
      <span class="text-lg font-semibold tracking-tight">{{ t('appStore.appStore') }}</span>
    </span>
  </a>
</template>
