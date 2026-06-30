<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import 'leaflet/dist/leaflet.css'
import type { Map as LeafletMap, TileLayer, Marker } from 'leaflet'
import { useTheme } from '@/composables/useTheme'

const props = defineProps<{ lat: number; lng: number; altitude?: number | null }>()

const { isDark } = useTheme()
const el = ref<HTMLDivElement | null>(null)

let L: typeof import('leaflet') | null = null
let map: LeafletMap | null = null
let tiles: TileLayer | null = null
let marker: Marker | null = null

// Clean, label-light raster tiles that read close to Apple Maps. No API key.
const LIGHT = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const DARK = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
const ATTR =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'

function brandPin(): import('leaflet').DivIcon {
  return L!.divIcon({
    className: '',
    html: `<div style="position:relative;transform:translate(-50%,-100%)">
      <div style="width:24px;height:24px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);
        background:linear-gradient(135deg,#4f45e6,#8c4dd9);box-shadow:0 6px 16px -4px rgba(79,69,230,.8);
        border:2px solid #fff"></div>
      <div style="position:absolute;top:7px;left:9px;width:6px;height:6px;border-radius:50%;background:#fff"></div>
    </div>`,
    iconSize: [24, 24],
    iconAnchor: [0, 0],
  })
}

async function init() {
  if (!el.value) return
  L = await import('leaflet')
  map = L.map(el.value, {
    center: [props.lat, props.lng],
    zoom: 12,
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: true,
  })
  tiles = L.tileLayer(isDark.value ? DARK : LIGHT, { attribution: ATTR, maxZoom: 19 }).addTo(map)
  marker = L.marker([props.lat, props.lng], { icon: brandPin() }).addTo(map)
}

watch(
  () => [props.lat, props.lng],
  () => {
    if (map && marker) {
      map.setView([props.lat, props.lng], 12)
      marker.setLatLng([props.lat, props.lng])
    }
  },
)

watch(isDark, (dark) => {
  if (map && tiles && L) {
    tiles.remove()
    tiles = L.tileLayer(dark ? DARK : LIGHT, { attribution: ATTR, maxZoom: 19 }).addTo(map)
  }
})

onMounted(init)
onBeforeUnmount(() => {
  map?.remove()
  map = null
})
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-ink-900/10 dark:border-white/10">
    <div ref="el" class="h-64 w-full" role="application" aria-label="Map showing where the photo was taken" />
    <div class="flex flex-wrap items-center gap-x-6 gap-y-1 border-t border-ink-900/10 bg-white/60 px-4 py-3 text-xs dark:border-white/10 dark:bg-white/[0.03]">
      <span><span class="text-muted">Latitude</span> <span class="font-mono font-semibold">{{ lat.toFixed(5) }}</span></span>
      <span><span class="text-muted">Longitude</span> <span class="font-mono font-semibold">{{ lng.toFixed(5) }}</span></span>
      <span v-if="altitude != null"><span class="text-muted">Altitude</span> <span class="font-mono font-semibold">{{ Math.round(altitude) }} m</span></span>
    </div>
  </div>
</template>
