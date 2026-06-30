<script setup lang="ts">
// A realistic iPhone frame (Dynamic Island + thin titanium bezel) that renders
// any slotted screen. The screen area is a fixed 9:19.5 aspect ratio.
withDefaults(defineProps<{ width?: number; glow?: boolean; island?: boolean }>(), {
  width: 300,
  glow: true,
  island: true,
})
</script>

<template>
  <div
    class="relative mx-auto"
    :style="{ width: `${width}px` }"
  >
    <div
      v-if="glow"
      class="pointer-events-none absolute -inset-8 -z-10 rounded-[40%] bg-brand-500/25 blur-2xl dark:bg-brand-500/35"
      aria-hidden="true"
    />
    <div
      class="relative rounded-[3rem] border border-white/15 bg-gradient-to-b from-zinc-700 to-zinc-900 p-[3px] shadow-phone dark:from-zinc-600 dark:to-black"
    >
      <div class="relative overflow-hidden rounded-[2.85rem] bg-black p-[3px]">
        <div
          class="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.6rem] bg-ink-900"
        >
          <!-- Dynamic Island -->
          <div
            v-if="island"
            class="absolute left-1/2 top-2.5 z-20 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black"
            aria-hidden="true"
          />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
