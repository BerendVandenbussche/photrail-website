<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { SCREENS, type ScreenKey } from '@/data/screens'

// Renders a real screenshot for the given screen if one exists in /public,
// otherwise falls back to the built-in SVG mockup. A failed image load (e.g.
// the file hasn't been added yet) silently switches to the fallback.
const props = defineProps<{ screen: ScreenKey }>()
const { t } = useI18n()
const entry = SCREENS[props.screen]
const failed = ref(false)
</script>

<template>
  <img
    v-if="entry.image && !failed"
    :src="entry.image"
    :alt="`Photrail — ${t(`screens.${screen}.title`)}`"
    loading="lazy"
    decoding="async"
    class="absolute inset-0 h-full w-full object-cover"
    @error="failed = true"
  />
  <component :is="entry.fallback" v-else />
</template>
