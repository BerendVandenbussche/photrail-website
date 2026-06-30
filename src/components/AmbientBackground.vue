<script setup lang="ts">
// Subtle animated gradient field used behind the hero and CTA. Decorative only.
withDefaults(defineProps<{ grid?: boolean }>(), { grid: true })
</script>

<template>
  <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      class="absolute -left-1/4 -top-1/3 h-[60vh] w-[60vh] rounded-full bg-brand-500/30 blur-[120px] animate-gradient-pan dark:bg-brand-500/40"
    />
    <div
      class="absolute -right-1/4 top-0 h-[55vh] w-[55vh] rounded-full bg-violet2-500/25 blur-[120px] animate-gradient-pan dark:bg-violet2-500/30"
      style="animation-delay: -6s"
    />
    <div
      class="absolute bottom-0 left-1/3 h-[45vh] w-[45vh] rounded-full bg-brand-400/20 blur-[120px] animate-gradient-pan"
      style="animation-delay: -12s"
    />
    <div
      v-if="grid"
      class="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
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
