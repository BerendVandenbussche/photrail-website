<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/AppIcon.vue'

const cards: Array<{ icon: IconName; title: string; desc: string }> = [
  { icon: 'device', title: '100% on-device', desc: 'Every insight is computed on your iPhone using bundled offline maps — instantly, with no server in the loop.' },
  { icon: 'eye-off', title: 'No account', desc: 'No sign-up, no email, no profile. Open the app and your travel history is just there.' },
  { icon: 'cloud-off', title: 'No cloud uploads', desc: 'Your photos and their location data stay in your library. Photrail never uploads a single image.' },
  { icon: 'github', title: 'Open source', desc: 'The full source is on GitHub. Read exactly what runs — or build it yourself.' },
  { icon: 'shield', title: 'Privacy-first', desc: 'No tracking, no ads, no privacy-invasive analytics. Built to respect you by default.' },
]
</script>

<template>
  <section class="section pt-12 sm:pt-16">
    <div class="container-page">
      <p v-reveal class="eyebrow text-center">Built on trust</p>
      <h2 v-reveal="80" class="display mx-auto mt-3 max-w-2xl text-balance text-center text-3xl sm:text-4xl lg:text-5xl">
        Private by design — not as a setting.
      </h2>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(c, i) in cards"
          :key="c.title"
          v-reveal="i * 60"
          class="card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          :class="i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''"
        >
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet2-500 text-white shadow-glow">
            <AppIcon :name="c.icon" :size="22" />
          </div>
          <h3 class="font-rounded text-lg font-bold">{{ c.title }}</h3>
          <p class="mt-1.5 text-sm text-muted">{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
