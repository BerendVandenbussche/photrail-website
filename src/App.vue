<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import TrustSection from '@/components/TrustSection.vue'
import FeatureGrid from '@/components/FeatureGrid.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import PrivacySection from '@/components/PrivacySection.vue'
import ExifEducation from '@/components/ExifEducation.vue'
import ExifDemo from '@/components/ExifDemo.vue'
import YearInTravelSection from '@/components/YearInTravelSection.vue'
import ScreenshotCarousel from '@/components/ScreenshotCarousel.vue'
import OpenSourceSection from '@/components/OpenSourceSection.vue'
import AppStoreCTA from '@/components/AppStoreCTA.vue'
import SiteFooter from '@/components/SiteFooter.vue'

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
