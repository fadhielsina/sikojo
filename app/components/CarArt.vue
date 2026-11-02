<script setup lang="ts">
// Ilustrasi mobil sederhana (pengganti foto unit sampai foto asli tersedia).
const props = defineProps<{ color: string; tall?: boolean }>()
const roof = computed(() => (props.tall ? 'M58 62 L88 34 H176 L206 62' : 'M66 62 L96 38 H168 L198 62'))
</script>

<template>
  <svg viewBox="0 0 260 120" class="w-full" aria-hidden="true">
    <ellipse cx="130" cy="104" rx="110" ry="6" fill="#000" opacity="0.08" />
    <path :d="roof" :fill="color" stroke="#0a0a0a" stroke-width="3" stroke-linejoin="round" />
    <path :d="tall ? 'M70 60 L92 40 H128 V60 Z' : 'M78 60 L99 42 H128 V60 Z'" fill="#cfe3ef" stroke="#0a0a0a" stroke-width="2" />
    <path :d="tall ? 'M136 60 V40 H172 L194 60 Z' : 'M136 60 V42 H165 L186 60 Z'" fill="#cfe3ef" stroke="#0a0a0a" stroke-width="2" />
    <rect x="22" y="60" width="216" height="32" rx="12" :fill="color" stroke="#0a0a0a" stroke-width="3" />
    <rect x="226" y="68" width="10" height="6" rx="2" fill="#ffc727" />
    <rect x="24" y="68" width="8" height="6" rx="2" fill="#e24a3b" />
    <path d="M110 72 h14" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" />
    <path d="M150 72 h14" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" />
    <circle cx="70" cy="92" r="15" fill="#0a0a0a" /><circle cx="70" cy="92" r="6" fill="#d6d3cc" />
    <circle cx="190" cy="92" r="15" fill="#0a0a0a" /><circle cx="190" cy="92" r="6" fill="#d6d3cc" />
  </svg>
</template>
