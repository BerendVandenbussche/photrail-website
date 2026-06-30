<script setup lang="ts">
// Photrail brand lockup — the gradient "tile" badge with the trail mark, plus
// an optional wordmark. Recreated as inline SVG from the app's LogoView.swift.
withDefaults(
  defineProps<{
    size?: number
    wordmark?: boolean
    label?: string
  }>(),
  { size: 36, wordmark: true, label: 'Photrail' },
)
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 100 100"
      class="shrink-0"
      role="img"
      aria-label="Photrail logo"
    >
      <defs>
        <linearGradient :id="`tile-${size}`" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#12173d" />
          <stop offset="1" stop-color="#38216b" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" rx="26" :fill="`url(#tile-${size})`" />
      <g transform="translate(22 22) scale(0.56)">
        <path
          d="M22 80 C 30 30, 70 72, 78 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="12"
          stroke-linecap="round"
        />
        <circle cx="22" cy="80" r="5" fill="#ffffff" />
        <circle cx="78" cy="24" r="9.5" fill="#ffffff" />
      </g>
    </svg>
    <span
      v-if="wordmark"
      class="font-rounded font-extrabold tracking-tight text-ink-900 dark:text-white"
      :style="{ fontSize: `${size * 0.62}px` }"
    >
      {{ label }}
    </span>
  </span>
</template>
