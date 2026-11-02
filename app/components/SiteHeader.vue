<script setup lang="ts">
import { waLink } from '#shared/site'

const open = ref(false)
const scrolled = ref(false)
const links = [
  { href: '#armada', label: 'Armada' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#cara-sewa', label: 'Cara Sewa' },
  { href: '#faq', label: 'FAQ' },
]

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 8)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition-all"
    :class="scrolled || open ? 'bg-paper/90 backdrop-blur border-b border-black/10' : 'bg-transparent'"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <a href="#" class="flex items-center gap-2.5" @click="open = false">
        <img src="/logo.png" alt="Sikojo Rent" width="726" height="675" class="h-10 w-auto rounded-md bg-white" />
        <span class="font-display text-lg font-extrabold tracking-wide">SIKOJO</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a v-for="l in links" :key="l.href" :href="l.href" class="text-sm font-medium text-black/70 hover:text-black">{{ l.label }}</a>
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-black/80"
        >
          <AppIcon name="whatsapp" class="size-4" /> Pesan Sekarang
        </a>
      </div>

      <button class="grid size-10 place-items-center rounded-full md:hidden" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <AppIcon :name="open ? 'close' : 'menu'" class="size-6" />
      </button>
    </nav>

    <div v-if="open" class="border-t border-black/10 px-4 pb-6 pt-2 md:hidden">
      <a v-for="l in links" :key="l.href" :href="l.href" class="block py-3 text-base font-medium" @click="open = false">{{ l.label }}</a>
      <a
        :href="waLink()"
        target="_blank"
        rel="noopener"
        class="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 font-semibold text-white"
      >
        <AppIcon name="whatsapp" class="size-5" /> Pesan via WhatsApp
      </a>
    </div>
  </header>
</template>
