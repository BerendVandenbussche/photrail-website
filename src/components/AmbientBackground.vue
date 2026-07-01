<script setup lang="ts">
// Subtle gradient field behind the hero and CTA. Decorative only.
// Deliberately STATIC: animating large blur radii forces the compositor to
// re-rasterize huge layers every frame, which tanks scroll performance on
// mobile Safari. A static gradient looks near-identical and composites for free.
withDefaults(defineProps<{ grid?: boolean }>(), { grid: true })
</script>

<template>
  <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      class="absolute -left-1/4 -top-1/3 h-[55vh] w-[55vh] rounded-full bg-brand-500/15 dark:bg-brand-500/20 sm:bg-brand-500/25 sm:blur-[90px] sm:dark:bg-brand-500/35"
    />
    <div
      class="absolute -right-1/4 top-0 h-[50vh] w-[50vh] rounded-full bg-violet2-500/10 dark:bg-violet2-500/15 sm:bg-violet2-500/20 sm:blur-[90px] sm:dark:bg-violet2-500/25"
    />
    <div
      v-if="grid"
      class="absolute inset-0 hidden opacity-[0.4] dark:opacity-[0.25] sm:block"
      style="
        background-image: linear-gradient(to right, rgba(79, 69, 230, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(79, 69, 230, 0.08) 1px, transparent 1px);
        background-size: 56px 56px;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%);
        -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%);
      "
    />
  </div>
</template>
