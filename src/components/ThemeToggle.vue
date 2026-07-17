<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import AppIcon from '@/components/AppIcon.vue'

const { t } = useI18n()
const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    @click="toggle"
    class="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 text-ink-900 backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
    :aria-label="isDark ? t('theme.toLight') : t('theme.toDark')"
    :aria-pressed="isDark"
  >
    <AppIcon :name="isDark ? 'moon' : 'sun'" :size="18" />
  </button>
</template>
