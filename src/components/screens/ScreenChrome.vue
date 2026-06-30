<script setup lang="ts">
// Shared status bar + dark app canvas for every mock screen, so they all feel
// like the same (dark-first) Photrail build.
withDefaults(defineProps<{ time?: string }>(), { time: '9:41' })
</script>

<template>
  <div class="absolute inset-0 flex flex-col bg-ink-900 text-white">
    <!-- Status bar -->
    <div class="relative z-10 flex items-center justify-between px-6 pt-3.5 text-[11px] font-semibold">
      <span>{{ time }}</span>
      <span class="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden="true">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="14" height="7" rx="1.5" fill="currentColor" />
          <rect x="19.5" y="3.5" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.6" />
        </svg>
      </span>
    </div>
    <div class="relative flex-1 overflow-hidden">
      <slot />
    </div>
  </div>
</template>
