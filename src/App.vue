<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useTheme } from '@/composables/useTheme'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'

const TrustSection = defineAsyncComponent(() => import('@/components/TrustSection.vue'))
const FeatureGrid = defineAsyncComponent(() => import('@/components/FeatureGrid.vue'))
const HowItWorks = defineAsyncComponent(() => import('@/components/HowItWorks.vue'))
const PrivacySection = defineAsyncComponent(() => import('@/components/PrivacySection.vue'))
const ExifEducation = defineAsyncComponent(() => import('@/components/ExifEducation.vue'))
const ExifDemo = defineAsyncComponent(() => import('@/components/ExifDemo.vue'))
const YearInTravelSection = defineAsyncComponent(() => import('@/components/YearInTravelSection.vue'))
const ScreenshotCarousel = defineAsyncComponent(() => import('@/components/ScreenshotCarousel.vue'))
const OpenSourceSection = defineAsyncComponent(() => import('@/components/OpenSourceSection.vue'))
const AppStoreCTA = defineAsyncComponent(() => import('@/components/AppStoreCTA.vue'))
const SiteFooter = defineAsyncComponent(() => import('@/components/SiteFooter.vue'))

useTheme()
</script>

<template>
  <a
    href="#features"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
  >
    Skip to content
  </a>

  <NavBar />

  <main>
    <HeroSection />
    <TrustSection />
    <FeatureGrid />
    <HowItWorks />
    <PrivacySection />

    <!-- EXIF education + interactive demo -->
    <section class="section pb-0">
      <div class="container-page">
        <ExifEducation />
      </div>
    </section>
    <ExifDemo />

    <YearInTravelSection />
    <ScreenshotCarousel />
    <OpenSourceSection />
    <AppStoreCTA />
  </main>

  <SiteFooter />
</template>
