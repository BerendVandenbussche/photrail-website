<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import type { Locale } from '@/i18n'

const { t } = useI18n()
const { current, locales, setLocale } = useLocale()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

function choose(code: Locale) {
  setLocale(code)
  open.value = false
}
function onClickOutside(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) open.value = false
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}
onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="inline-flex h-10 items-center gap-1.5 rounded-full border border-ink-900/10 bg-white/60 px-3 text-sm font-semibold text-ink-900 backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      :aria-label="t('nav.chooseLanguage')"
      aria-haspopup="listbox"
      :aria-expanded="open"
      @click="open = !open"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
      </svg>
      <span>{{ locales.find((l) => l.code === current)?.short }}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform" :class="open ? 'rotate-180' : ''" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>

    <Transition name="lang-pop">
      <ul
        v-if="open"
        class="glass-strong absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-2xl p-1.5 shadow-card"
        role="listbox"
        :aria-label="t('nav.language')"
      >
        <li v-for="l in locales" :key="l.code" role="option" :aria-selected="l.code === current">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
            :class="
              l.code === current
                ? 'bg-brand-500/10 text-brand-600 dark:text-brand-300'
                : 'text-ink-900/80 hover:bg-ink-900/5 dark:text-white/80 dark:hover:bg-white/5'
            "
            @click="choose(l.code)"
          >
            <span>{{ l.label }}</span>
            <svg v-if="l.code === current" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.lang-pop-enter-active,
.lang-pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.lang-pop-enter-from,
.lang-pop-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>
