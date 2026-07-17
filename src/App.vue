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
import ContributeSection from '@/components/ContributeSection.vue'
import AppStoreCTA from '@/components/AppStoreCTA.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'

// Initialise the theme controller once at the root.
useTheme()

// Keep <html lang>, the document title and meta description in sync with the
// active locale (important for SEO + accessibility).
const { locale, t } = useI18n()
const { syncDocument } = useLocale()
onMounted(syncDocument)
watch(locale, syncDocument)
</script>

<template>
  <a
    href="#features"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
  >
    {{ t('common.skipToContent') }}
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
    <ContributeSection />
    <AppStoreCTA />
  </main>

  <SiteFooter />
</template>
