<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BrandLogo from '@/components/BrandLogo.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import AppIcon from '@/components/AppIcon.vue'
import { NAV_LINKS, GITHUB_URL, APP_STORE_URL } from '@/data/site'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function close() {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'py-2' : 'py-3.5'"
  >
    <div class="container-page">
      <nav
        class="flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300"
        :class="scrolled ? 'glass-strong shadow-card' : ''"
        aria-label="Primary"
      >
        <a href="#top" class="flex items-center" aria-label="Photrail home">
          <BrandLogo :size="30" />
        </a>

        <ul class="hidden items-center gap-1 lg:flex">
          <li v-for="link in NAV_LINKS" :key="link.href">
            <a
              :href="link.href"
              class="rounded-full px-3.5 py-2 text-sm font-medium text-ink-900/70 transition-colors hover:bg-ink-900/[0.04] hover:text-ink-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <a
            :href="GITHUB_URL"
            target="_blank"
            rel="noopener"
            class="hidden h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 text-ink-900 backdrop-blur transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:inline-flex"
            aria-label="View Photrail on GitHub"
          >
            <AppIcon name="github" :size="18" />
          </a>
          <ThemeToggle />
          <a :href="APP_STORE_URL" target="_blank" rel="noopener" class="btn btn-primary hidden sm:inline-flex">
            Get the app
          </a>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 text-ink-900 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
            :aria-expanded="menuOpen"
            aria-label="Toggle menu"
            @click="menuOpen = !menuOpen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <template v-if="!menuOpen"><path d="M4 7h16M4 12h16M4 17h16" /></template>
              <template v-else><path d="M6 6l12 12M18 6L6 18" /></template>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile dropdown -->
      <Transition name="menu">
        <div v-if="menuOpen" class="mt-2 lg:hidden">
          <div class="glass-strong rounded-3xl p-2 shadow-card">
            <a
              v-for="link in NAV_LINKS"
              :key="link.href"
              :href="link.href"
              class="block rounded-2xl px-4 py-3 text-sm font-medium text-ink-900/80 transition-colors hover:bg-ink-900/5 dark:text-white/80 dark:hover:bg-white/5"
              @click="close"
            >
              {{ link.label }}
            </a>
            <a
              :href="APP_STORE_URL"
              target="_blank"
              rel="noopener"
              class="btn btn-primary mt-1 w-full"
              @click="close"
            >
              Download on the App Store
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
