<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import PhoneMockup from '@/components/PhoneMockup.vue'
import AppIcon from '@/components/AppIcon.vue'
import AppScreen from '@/components/AppScreen.vue'
import { SCREENS, CAROUSEL_ORDER } from '@/data/screens'

const slides = CAROUSEL_ORDER.map((key) => ({ key, ...SCREENS[key] }))

const track = ref<HTMLDivElement | null>(null)
const active = ref(0)

function scrollToIndex(i: number) {
  const el = track.value
  if (!el) return
  const card = el.children[i] as HTMLElement | undefined
  if (!card) return
  const diff = card.getBoundingClientRect().left - el.getBoundingClientRect().left
  el.scrollBy({ left: diff - (el.clientWidth - card.clientWidth) / 2, behavior: 'smooth' })
}
function step(dir: number) {
  scrollToIndex(Math.min(slides.length - 1, Math.max(0, active.value + dir)))
}
function onScroll() {
  const el = track.value
  if (!el) return
  const center = el.scrollLeft + el.clientWidth / 2
  let best = 0
  let bestDist = Infinity
  Array.from(el.children).forEach((c, i) => {
    const card = c as HTMLElement
    const cc = card.offsetLeft + card.clientWidth / 2 - el.offsetLeft
    const d = Math.abs(cc - center)
    if (d < bestDist) {
      bestDist = d
      best = i
    }
  })
  active.value = best
}

onMounted(() => track.value?.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => track.value?.removeEventListener('scroll', onScroll))
</script>

<template>
  <section class="section overflow-hidden">
    <div class="container-page">
      <div class="flex flex-col items-end justify-between gap-4 sm:flex-row">
        <div class="max-w-xl">
          <p v-reveal class="eyebrow">A look inside</p>
          <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-5xl">
            Designed to make you want to keep traveling.
          </h2>
        </div>
        <div class="hidden gap-2 sm:flex">
          <button type="button" class="btn btn-ghost h-11 w-11 !p-0" aria-label="Previous screenshot" @click="step(-1)">
            <AppIcon name="chevron-left" :size="20" />
          </button>
          <button type="button" class="btn btn-ghost h-11 w-11 !p-0" aria-label="Next screenshot" @click="step(1)">
            <AppIcon name="chevron-right" :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- Track -->
    <div
      ref="track"
      class="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <figure
        v-for="(s, i) in slides"
        :key="s.key"
        class="shrink-0 snap-center"
      >
        <div class="transition-all duration-500" :class="active === i ? 'opacity-100' : 'opacity-50 sm:scale-95'">
          <PhoneMockup :width="252" :glow="active === i">
            <AppScreen :screen="s.key" />
          </PhoneMockup>
        </div>
        <figcaption class="mt-5 text-center">
          <p class="font-rounded font-bold">{{ s.title }}</p>
          <p class="text-sm text-muted">{{ s.desc }}</p>
        </figcaption>
      </figure>
    </div>

    <!-- Dots -->
    <div class="mt-2 flex justify-center gap-2">
      <button
        v-for="(s, i) in slides"
        :key="`dot-${i}`"
        type="button"
        class="h-2 rounded-full transition-all duration-300"
        :class="active === i ? 'w-6 bg-brand-500' : 'w-2 bg-ink-900/20 dark:bg-white/20'"
        :aria-label="`Go to ${s.title}`"
        @click="scrollToIndex(i)"
      />
    </div>
  </section>
</template>
