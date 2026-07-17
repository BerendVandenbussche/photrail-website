<script setup lang="ts">
import { computed, defineAsyncComponent, ref, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon, { type IconName } from '@/components/AppIcon.vue'

const { t, locale } = useI18n()

// Map is heavy + only needed once a geotagged photo is dropped.
const ExifMap = defineAsyncComponent(() => import('@/components/ExifMap.vue'))

type Status = 'idle' | 'parsing' | 'done' | 'error'

const status = ref<Status>('idle')
const dragging = ref(false)
const errorMsg = ref('')
const fileName = ref('')
const imageUrl = ref<string | null>(null)
const inputEl = ref<HTMLInputElement | null>(null)

const gps = ref<{ lat: number; lng: number; altitude: number | null } | null>(null)
// shallowRef: the parsed tag bag is plain data, no deep reactivity needed.
const raw = shallowRef<Record<string, any> | null>(null)

interface Field {
  icon: IconName
  label: string
  value: string
}

function fmtExposure(sec?: number): string | null {
  if (sec == null) return null
  return sec >= 1 ? `${sec}s` : `1/${Math.round(1 / sec)} s`
}
function fmtDate(d?: Date | string): string | null {
  if (!d) return null
  const date = d instanceof Date ? d : new Date(d)
  if (isNaN(date.getTime())) return null
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

// Build the visible field list, skipping anything the photo doesn't carry.
// Labels come from i18n, so the list re-renders when the language changes.
const fields = computed<Field[]>(() => {
  const r = raw.value
  if (!r) return []
  const out: Field[] = []
  const push = (icon: IconName, label: string, value: string | null | undefined) => {
    if (value != null && value !== '') out.push({ icon, label, value })
  }

  push('clock', t('exifDemo.fields.captureDate'), fmtDate(r.DateTimeOriginal ?? r.CreateDate ?? r.ModifyDate))
  const camera = [r.Make, r.Model].filter(Boolean).join(' ').trim()
  push('camera', t('exifDemo.fields.camera'), camera)
  push('aperture', t('exifDemo.fields.lens'), (r.LensModel ?? r.LensMake ?? '').toString().trim())
  push(
    'mountain',
    t('exifDemo.fields.altitude'),
    gps.value?.altitude != null ? t('exifDemo.altitudeValue', { m: Math.round(gps.value.altitude) }) : null,
  )
  push(
    'image',
    t('exifDemo.fields.orientation'),
    r.Orientation != null ? t(`exifDemo.orientation.${r.Orientation}`) : null,
  )
  push('aperture', t('exifDemo.fields.aperture'), r.FNumber != null ? `f/${r.FNumber}` : null)
  push('clock', t('exifDemo.fields.shutter'), fmtExposure(r.ExposureTime))
  const iso = r.ISO ?? r.ISOSpeedRatings
  push('aperture', t('exifDemo.fields.iso'), iso != null ? `ISO ${Array.isArray(iso) ? iso[0] : iso}` : null)
  if (r.FocalLength != null) {
    const fl = Math.round(r.FocalLength)
    const eq = r.FocalLengthIn35mmFormat ? Math.round(r.FocalLengthIn35mmFormat) : null
    push('camera', t('exifDemo.fields.focal'), eq && eq !== fl ? `${fl} mm (${eq} mm eq.)` : `${fl} mm`)
  }
  return out
})

const hasAnyData = computed(() => fields.value.length > 0 || gps.value != null)

function reset() {
  status.value = 'idle'
  errorMsg.value = ''
  fileName.value = ''
  if (imageUrl.value) URL.revokeObjectURL(imageUrl.value)
  imageUrl.value = null
  gps.value = null
  raw.value = null
  if (inputEl.value) inputEl.value.value = ''
}

async function handleFile(file: File) {
  if (!file.type.startsWith('image/')) {
    status.value = 'error'
    errorMsg.value = t('exifDemo.notImage')
    return
  }
  reset()
  status.value = 'parsing'
  fileName.value = file.name
  imageUrl.value = URL.createObjectURL(file)

  try {
    const exifr = (await import('exifr')).default
    // Parse everything, then pull GPS separately for reliable decimal degrees.
    const [parsed, coords] = await Promise.all([
      // `tiff: true` pulls in IFD0 (Make/Model/Orientation) + EXIF + GPS + interop.
      exifr.parse(file, { tiff: true, exif: true, gps: true }).catch(() => null),
      exifr.gps(file).catch(() => null),
    ])
    raw.value = parsed ?? {}
    if (coords && typeof coords.latitude === 'number' && typeof coords.longitude === 'number') {
      gps.value = {
        lat: coords.latitude,
        lng: coords.longitude,
        altitude: typeof parsed?.GPSAltitude === 'number' ? parsed.GPSAltitude : null,
      }
    }
    status.value = 'done'
  } catch (e) {
    status.value = 'error'
    errorMsg.value = t('exifDemo.readError')
  }
}

function onDrop(e: DragEvent) {
  dragging.value = false
  const file = e.dataTransfer?.files?.[0]
  if (file) handleFile(file)
}
function onPick(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) handleFile(file)
}
</script>

<template>
  <section id="exif-demo" class="section">
    <div class="container-page">
      <!-- Education lead-in lives just above in App.vue; this is the live demo. -->
      <div class="mx-auto max-w-2xl text-center">
        <p v-reveal class="eyebrow">{{ t('exifDemo.eyebrow') }}</p>
        <h2 v-reveal="80" class="display mt-3 text-balance text-3xl sm:text-4xl lg:text-5xl">
          {{ t('exifDemo.heading') }}
        </h2>
        <p v-reveal="140" class="mt-4 text-balance text-lg text-muted">
          {{ t('exifDemo.subhead') }}
        </p>
      </div>

      <!-- Privacy notice -->
      <div v-reveal class="mx-auto mt-8 flex max-w-md items-center justify-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-2.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
        <AppIcon name="lock" :size="16" />
        {{ t('exifDemo.notice') }}
      </div>

      <div class="mx-auto mt-8 max-w-5xl">
        <!-- IDLE / DROPZONE -->
        <div
          v-if="status === 'idle' || status === 'error'"
          class="relative"
        >
          <label
            class="group flex min-h-[18rem] cursor-pointer flex-col items-center justify-center rounded-4xl border-2 border-dashed p-10 text-center transition-all duration-300"
            :class="dragging
              ? 'border-brand-500 bg-brand-500/[0.06] scale-[1.01]'
              : 'border-ink-900/15 bg-ink-900/[0.015] hover:border-brand-400 hover:bg-brand-500/[0.03] dark:border-white/15 dark:bg-white/[0.02]'"
            @dragover.prevent="dragging = true"
            @dragenter.prevent="dragging = true"
            @dragleave.prevent="dragging = false"
            @drop.prevent="onDrop"
          >
            <input ref="inputEl" type="file" accept="image/*" class="sr-only" @change="onPick" />
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-violet2-500 text-white shadow-glow transition-transform duration-300 group-hover:-translate-y-1">
              <AppIcon name="upload" :size="28" />
            </div>
            <p class="font-rounded text-xl font-bold">{{ t('exifDemo.dropTitle') }}</p>
            <p class="mt-1.5 text-sm text-muted">{{ t('exifDemo.dropHintPrefix') }}<span class="font-semibold text-brand-500 dark:text-brand-300">{{ t('exifDemo.browse') }}</span>{{ t('exifDemo.formats') }}</p>
            <p class="mt-4 max-w-sm text-xs text-muted">
              {{ t('exifDemo.tip') }}
            </p>
          </label>
          <p v-if="status === 'error'" class="mt-3 text-center text-sm font-medium text-rose-500">{{ errorMsg }}</p>
        </div>

        <!-- PARSING -->
        <div v-else-if="status === 'parsing'" class="card flex min-h-[18rem] flex-col items-center justify-center p-10">
          <div class="h-10 w-10 animate-spin rounded-full border-2 border-brand-500/30 border-t-brand-500" />
          <p class="mt-4 text-sm font-medium text-muted">{{ t('exifDemo.parsing') }}</p>
        </div>

        <!-- RESULT -->
        <div v-else class="grid gap-5 lg:grid-cols-2">
          <!-- Left: preview + fields -->
          <div class="card overflow-hidden">
            <div class="flex items-center gap-3 border-b border-ink-900/5 p-4 dark:border-white/5">
              <img
                v-if="imageUrl"
                :src="imageUrl"
                :alt="fileName"
                class="h-14 w-14 shrink-0 rounded-xl object-cover"
              />
              <div class="min-w-0">
                <p class="truncate font-rounded text-sm font-bold">{{ fileName }}</p>
                <p class="text-xs text-muted">{{ t('exifDemo.analyzedOn') }}</p>
              </div>
              <button type="button" class="btn btn-ghost ml-auto !px-4 !py-2 text-xs" @click="reset">
                {{ t('exifDemo.tryAnother') }}
              </button>
            </div>

            <div v-if="hasAnyData" class="grid grid-cols-1 gap-px bg-ink-900/5 sm:grid-cols-2 dark:bg-white/5">
              <div
                v-for="f in fields"
                :key="f.label"
                class="bg-white p-4 dark:bg-ink-900"
              >
                <p class="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-muted">
                  <AppIcon :name="f.icon" :size="13" class="text-brand-500 dark:text-brand-300" />
                  {{ f.label }}
                </p>
                <p class="mt-1 font-mono text-[13px] font-semibold text-ink-900 dark:text-white">{{ f.value }}</p>
              </div>
              <div v-if="gps" class="bg-white p-4 dark:bg-ink-900">
                <p class="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-muted">
                  <AppIcon name="pin" :size="13" class="text-brand-500 dark:text-brand-300" />
                  {{ t('exifDemo.fields.gps') }}
                </p>
                <p class="mt-1 font-mono text-[13px] font-semibold text-ink-900 dark:text-white">
                  {{ gps.lat.toFixed(5) }}, {{ gps.lng.toFixed(5) }}
                </p>
              </div>
            </div>

            <!-- No metadata found -->
            <div v-else class="p-8 text-center">
              <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900/5 text-2xl dark:bg-white/5">🔍</div>
              <p class="font-rounded font-bold">{{ t('exifDemo.noMetaTitle') }}</p>
              <p class="mx-auto mt-2 max-w-sm text-sm text-muted">
                {{ t('exifDemo.noMetaBody') }}
              </p>
            </div>
          </div>

          <!-- Right: map or explanation -->
          <div>
            <ExifMap v-if="gps" :lat="gps.lat" :lng="gps.lng" :altitude="gps.altitude" />
            <p v-if="gps" class="mt-3 text-center text-sm text-muted">
              {{ t('exifDemo.mapCaption') }}
            </p>

            <div v-else class="card flex h-full min-h-[16rem] flex-col items-center justify-center p-8 text-center">
              <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900/5 text-2xl dark:bg-white/5">🗺️</div>
              <p class="font-rounded font-bold">{{ t('exifDemo.noLocTitle') }}</p>
              <p class="mx-auto mt-2 max-w-xs text-sm text-muted">
                {{ t('exifDemo.noLocBody') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
