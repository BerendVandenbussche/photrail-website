<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/AppIcon.vue'

const examples: Array<{ icon: IconName; label: string; value: string }> = [
  { icon: 'pin', label: 'Where', value: '48.8584° N, 2.2945° E' },
  { icon: 'clock', label: 'When', value: 'Jul 14, 2024 · 18:32' },
  { icon: 'camera', label: 'Camera', value: 'iPhone 15 Pro' },
  { icon: 'mountain', label: 'Altitude', value: '57 m' },
]
</script>

<template>
  <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
    <div>
      <p v-reveal class="eyebrow">What is EXIF, anyway?</p>
      <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-[2.75rem]">
        Your photos quietly remember where you were.
      </h2>
      <p v-reveal="140" class="mt-4 text-balance text-lg text-muted">
        When you take a photo with location enabled, your phone tucks a little note inside the
        file — things like where and when it was taken. It's called <strong class="text-ink-900 dark:text-white">EXIF metadata</strong>,
        and it travels invisibly with the image.
      </p>
      <p v-reveal="200" class="mt-4 text-[15px] text-muted">
        Photrail simply reads that note across your whole library and stitches it into a travel
        history. No guessing, no manual tagging — the information was already there.
      </p>
    </div>

    <!-- a friendly "inside a photo" illustration -->
    <div v-reveal="120" class="relative">
      <div class="card overflow-hidden p-5 sm:p-6">
        <div class="flex items-center gap-3 border-b border-ink-900/5 pb-4 dark:border-white/5">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 text-2xl">🏝️</div>
          <div>
            <p class="font-rounded text-sm font-bold">beach-sunset.jpg</p>
            <p class="text-xs text-muted">2.4 MB · 4032 × 3024</p>
          </div>
          <span class="ml-auto pill">+ hidden note</span>
        </div>
        <dl class="mt-4 grid grid-cols-2 gap-3">
          <div v-for="e in examples" :key="e.label" class="rounded-2xl bg-ink-900/[0.03] p-3 dark:bg-white/[0.03]">
            <dt class="flex items-center gap-1.5 text-[11px] font-medium text-muted">
              <AppIcon :name="e.icon" :size="14" class="text-brand-500 dark:text-brand-300" />
              {{ e.label }}
            </dt>
            <dd class="mt-1 font-mono text-[13px] font-semibold text-ink-900 dark:text-white">{{ e.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
