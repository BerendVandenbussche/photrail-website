<script setup lang="ts">
import BrandLogo from '@/components/BrandLogo.vue'
import AppIcon from '@/components/AppIcon.vue'
import { GITHUB_URL, APP_STORE_URL, NAV_LINKS } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-ink-900/10 dark:border-white/10">
    <div class="container-page py-14">
      <div class="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <!-- Brand -->
        <div>
          <BrandLogo :size="32" />
          <p class="mt-4 max-w-xs text-sm text-muted">
            Your travel history, automatically. Built privacy-first and entirely on-device.
          </p>
          <div class="mt-5 flex gap-2">
            <a :href="APP_STORE_URL" target="_blank" rel="noopener" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-900 transition-colors hover:bg-ink-900/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5" aria-label="App Store">
              <AppIcon name="apple" :size="18" />
            </a>
            <a :href="GITHUB_URL" target="_blank" rel="noopener" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-900 transition-colors hover:bg-ink-900/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5" aria-label="GitHub">
              <AppIcon name="github" :size="18" />
            </a>
          </div>
        </div>

        <!-- Explore -->
        <nav aria-label="Footer">
          <h3 class="text-xs font-semibold uppercase tracking-wider text-muted">Explore</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="l in NAV_LINKS" :key="l.href">
              <a :href="l.href" class="text-sm text-ink-900/70 transition-colors hover:text-ink-900 dark:text-white/70 dark:hover:text-white">{{ l.label }}</a>
            </li>
          </ul>
        </nav>

        <!-- Get it -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-muted">Get Photrail</h3>
          <ul class="mt-4 space-y-2.5">
            <li><a :href="APP_STORE_URL" target="_blank" rel="noopener" class="text-sm text-ink-900/70 transition-colors hover:text-ink-900 dark:text-white/70 dark:hover:text-white">Download on the App Store</a></li>
            <li><a :href="GITHUB_URL" target="_blank" rel="noopener" class="text-sm text-ink-900/70 transition-colors hover:text-ink-900 dark:text-white/70 dark:hover:text-white">Source on GitHub</a></li>
            <li><a :href="`${GITHUB_URL}/blob/main/LICENSE`" target="_blank" rel="noopener" class="text-sm text-ink-900/70 transition-colors hover:text-ink-900 dark:text-white/70 dark:hover:text-white">MIT License</a></li>
          </ul>
        </div>
      </div>

      <!-- Privacy statement -->
      <div class="mt-12 rounded-2xl border border-ink-900/10 bg-ink-900/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.02]">
        <p class="flex items-start gap-2.5 text-sm text-muted">
          <AppIcon name="shield" :size="18" class="mt-0.5 shrink-0 text-brand-500 dark:text-brand-300" />
          <span>
            <strong class="text-ink-900 dark:text-white">Privacy statement:</strong>
            Photrail processes your photos entirely on your device. It never uploads your images,
            requires no account, and includes no advertising or privacy-compromising analytics.
            The only network use is optionally resolving city names from coordinates via Apple's
            geocoder. The full source code is available for inspection on GitHub.
          </span>
        </p>
      </div>

      <div class="mt-8 flex flex-col items-center justify-between gap-3 border-t border-ink-900/10 pt-6 text-center text-xs text-muted dark:border-white/10 sm:flex-row sm:text-left">
        <p>© {{ year }} Photrail. All rights reserved.</p>
        <p>Open source under the MIT License · Made for travelers, not advertisers.</p>
      </div>
    </div>
  </footer>
</template>
