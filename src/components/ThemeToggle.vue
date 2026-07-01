<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import AppIcon from '@/components/AppIcon.vue'

const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    @click="toggle"
    class="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 text-ink-900 backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :aria-pressed="isDark"
  >
    <Transition name="theme-swap">
      <AppIcon v-if="isDark" key="moon" name="moon" :size="18" />
      <AppIcon v-else key="sun" name="sun" :size="18" />
    </Transition>
  </button>
</template>

<style scoped>
.theme-swap-enter-active,
.theme-swap-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.theme-swap-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
}
.theme-swap-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}
</style>
