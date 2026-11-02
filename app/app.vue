<script setup lang="ts">
import { cars, type Car } from '#shared/cars'
import { faqs } from '#shared/faqs'
import { buildSchema } from '#shared/schema'
import { site, waLink } from '#shared/site'

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
const ogImage = `${siteUrl}/logo.png`

useSeoMeta({
  title: site.title,
  description: site.description,
  robots: 'index, follow, max-image-preview:large',
  ogType: 'website',
  ogLocale: 'id_ID',
  ogSiteName: site.name,
  ogUrl: `${siteUrl}/`,
  ogTitle: site.title,
  ogDescription: site.description,
  ogImage,
  ogImageWidth: 726,
  ogImageHeight: 675,
  ogImageAlt: 'Logo Sikojo Rent',
  twitterCard: 'summary',
  twitterTitle: site.title,
  twitterDescription: site.description,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/` }],
  meta: [
    { name: 'geo.region', content: 'ID-JB' },
    { name: 'geo.placename', content: site.city },
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(buildSchema(siteUrl)) }],
})

const bookMessage = (c: Car) => `Halo Sikojo, saya mau tanya harga sewa ${c.name} dengan driver. Tanggal: ... Durasi: ...`

const perks = [
  { icon: 'sparkle', title: 'Unit Bersih & Terawat', text: 'Setiap mobil dicek dan dibersihkan sebelum menjemput kamu.' },
  { icon: 'shield', title: 'Driver Berpengalaman', text: 'Driver ramah dan hafal jalanan Bandung — kamu tinggal duduk santai.' },
  { icon: 'clock', title: 'Respon Cepat', text: 'Tanya harga, cek jadwal, sampai booking — cukup chat WhatsApp.' },
  { icon: 'pin', title: 'Jemput di Mana Saja', text: 'Dijemput di rumah, hotel, stasiun, atau bandara di area Bandung.' },
] as const

const steps = [
  { title: 'Pilih mobil', text: 'Lihat daftar armada dan tentukan unit yang cocok untuk perjalananmu.' },
  { title: 'Chat WhatsApp', text: 'Kirim tanggal, durasi, dan rute — admin akan kirim penawaran harga.' },
  { title: 'Konfirmasi & DP', text: 'Bayar DP untuk mengunci jadwal dan unit.' },
  { title: 'Dijemput driver', text: 'Driver kami datang ke lokasimu tepat waktu.' },
]

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('is-visible'), io.unobserve(e.target))),
    { threshold: 0.12 },
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
})
</script>

<template>
  <div class="overflow-x-hidden">
    <SiteHeader />

    <main>
    <!-- Hero -->
    <section class="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div class="pointer-events-none absolute -right-24 top-16 size-80 rounded-full bg-accent/40 blur-3xl sm:size-[28rem]" />
      <div class="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <span class="size-2 rounded-full bg-green-500" /> Rental Mobil di {{ site.city }}
          </p>
          <h1 class="mt-5 font-display text-4xl font-extrabold leading-[1.1] sm:text-6xl">
            Jalan-jalan di Bandung,
            <span class="squiggle">pakai mobil Sikojo.</span>
          </h1>
          <p class="mt-6 max-w-lg text-lg text-black/65">
            Sewa mobil matic lengkap dengan driver. Unit bersih, driver berpengalaman, dan booking cukup lewat WhatsApp.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="waLink()"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white shadow-lg shadow-black/10 hover:bg-black/80"
            >
              <AppIcon name="whatsapp" class="size-5" /> Booking via WhatsApp
            </a>
            <a href="#armada" class="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-white">
              Lihat Armada <AppIcon name="arrow" class="size-4" />
            </a>
          </div>
          <dl class="mt-10 grid max-w-md grid-cols-3 gap-4">
            <div><dt class="text-xs text-black/55">Pilihan unit</dt><dd class="font-display text-xl font-bold">{{ cars.length }}</dd></div>
            <div><dt class="text-xs text-black/55">Transmisi</dt><dd class="font-display text-xl font-bold">Matic</dd></div>
            <div><dt class="text-xs text-black/55">Layanan</dt><dd class="font-display text-xl font-bold">+ Driver</dd></div>
          </dl>
        </div>

        <div class="relative mx-auto w-full max-w-md">
          <div class="rotate-2 rounded-[2rem] border-2 border-ink bg-white p-8 shadow-[8px_8px_0_#0a0a0a]">
            <img src="/logo.png" alt="Logo Sikojo Rent" width="726" height="675" fetchpriority="high" class="mx-auto h-auto w-full max-w-xs" />
          </div>
          <div class="absolute -bottom-5 -left-3 -rotate-3 rounded-2xl bg-accent px-4 py-3 font-display text-sm font-bold shadow-md sm:-left-8">
            Sewa mobil + driver
          </div>
        </div>
      </div>
    </section>

    <!-- Armada -->
    <section id="armada" class="bg-ink py-20 text-white sm:py-28">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="reveal max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-widest text-accent">Armada</p>
          <h2 class="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Pilih mobil untuk perjalananmu</h2>
          <p class="mt-3 text-white/60">Semua unit transmisi matic dan disewakan lengkap dengan driver.</p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="c in cars"
            :key="c.name"
            class="group relative flex flex-col rounded-3xl bg-white p-5 text-ink transition hover:-translate-y-1"
          >
            <div class="rounded-2xl bg-paper px-3 pt-6 pb-2">
              <CarArt :color="c.color" :tall="c.tall" />
            </div>
            <p class="mt-4 text-xs font-semibold uppercase tracking-wider text-black/45">{{ c.type }}</p>
            <h3 class="font-display text-lg font-bold">{{ c.name }}</h3>
            <ul class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-black/60">
              <li class="flex items-center gap-1.5"><AppIcon name="seat" class="size-4" />{{ c.seats }} kursi</li>
              <li class="flex items-center gap-1.5"><AppIcon name="gear" class="size-4" />{{ c.transmission }}</li>
              <li class="flex items-center gap-1.5"><AppIcon name="fuel" class="size-4" />{{ c.fuel }}</li>
            </ul>
            <div class="mt-auto pt-5">
              <a
                :href="waLink(bookMessage(c))"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center gap-2 rounded-full bg-ink py-2.5 text-sm font-semibold text-white group-hover:bg-accent group-hover:text-ink"
              >
                <AppIcon name="whatsapp" class="size-4" /> Tanya Harga
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Keunggulan -->
    <section id="keunggulan" class="py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="reveal max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-widest text-black/50">Kenapa Sikojo?</p>
          <h2 class="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Sewa mobil tanpa ribet.</h2>
        </div>
        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="p in perks" :key="p.title" class="reveal rounded-3xl border-2 border-ink bg-white p-6 shadow-[5px_5px_0_#0a0a0a]">
            <div class="grid size-12 place-items-center rounded-2xl bg-accent"><AppIcon :name="p.icon" class="size-6" /></div>
            <h3 class="mt-5 font-display text-lg font-bold">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-black/60">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cara sewa + syarat -->
    <section id="cara-sewa" class="bg-white py-20 sm:py-28">
      <div class="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div class="reveal">
          <p class="text-sm font-semibold uppercase tracking-widest text-black/50">Cara Sewa</p>
          <h2 class="mt-2 font-display text-3xl font-extrabold sm:text-4xl">4 langkah, langsung jalan.</h2>
          <ol class="mt-10 space-y-6">
            <li v-for="(s, i) in steps" :key="s.title" class="flex gap-5">
              <span class="grid size-11 shrink-0 place-items-center rounded-full bg-ink font-display font-bold text-accent">{{ i + 1 }}</span>
              <div>
                <h3 class="font-display text-lg font-bold">{{ s.title }}</h3>
                <p class="text-black/60">{{ s.text }}</p>
              </div>
            </li>
          </ol>
        </div>
        <div class="reveal self-start rounded-3xl bg-paper p-7 sm:p-8">
          <h3 class="font-display text-xl font-bold">Yang perlu disiapkan</h3>
          <ul class="mt-5 space-y-3">
            <li v-for="r in ['Tanggal & durasi sewa', 'Lokasi penjemputan', 'Rute / tujuan perjalanan', 'Jumlah penumpang']" :key="r" class="flex gap-3">
              <AppIcon name="check" class="mt-0.5 size-5 shrink-0 text-green-600" />
              <span class="text-black/75">{{ r }}</span>
            </li>
          </ul>
          <p class="mt-6 text-sm text-black/50">Tanpa perlu SIM — driver kami yang menyetir.</p>
        </div>
      </div>
    </section>

    <!-- Tentang -->
    <section id="tentang" class="py-20 sm:py-28">
      <div class="reveal mx-auto max-w-3xl px-4 sm:px-6">
        <p class="text-sm font-semibold uppercase tracking-widest text-black/50">Tentang Sikojo</p>
        <h2 class="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Rental mobil dengan driver di Bandung</h2>
        <div class="mt-6 space-y-4 text-lg text-black/70">
          <p>
            <strong class="text-ink">Sikojo Rent</strong> adalah layanan sewa mobil dengan driver yang berbasis di {{ site.city }}, {{ site.region }}.
            Kami melayani perjalanan dalam kota, wisata, acara keluarga, hingga perjalanan bisnis — lengkap dengan driver yang mengenal jalanan Bandung.
          </p>
          <p>
            Armada kami terdiri dari {{ cars.map((c) => c.name).join(', ') }}. Semua unit bertransmisi matic dan hanya disewakan dengan driver (tidak lepas kunci).
            Untuk harga dan ketersediaan, hubungi WhatsApp <a :href="waLink()" target="_blank" rel="noopener" class="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">{{ site.whatsappDisplay }}</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="bg-white py-20 sm:py-28">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 class="reveal text-center font-display text-3xl font-extrabold sm:text-4xl">Pertanyaan yang sering ditanya</h2>
        <div class="mt-10 space-y-3">
          <details v-for="f in faqs" :key="f.q" class="group rounded-2xl border border-black/10 bg-white px-5 py-4 open:shadow-sm">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
              {{ f.q }}
              <span class="grid size-7 shrink-0 place-items-center rounded-full bg-paper text-lg transition group-open:rotate-45">+</span>
            </summary>
            <p class="mt-3 text-black/65">{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-4 py-20 sm:px-6">
      <div class="reveal mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-accent px-6 py-14 text-center sm:px-12">
        <h2 class="font-display text-3xl font-extrabold sm:text-5xl">Siap keliling Bandung?</h2>
        <p class="mx-auto mt-4 max-w-xl text-black/70">Cek ketersediaan unit dan dapatkan penawaran terbaik. Admin kami siap membantu.</p>
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white hover:bg-black/80"
        >
          <AppIcon name="whatsapp" class="size-5" /> Chat {{ site.whatsappDisplay }}
        </a>
      </div>
    </section>
    </main>

    <!-- Footer -->
    <footer class="bg-ink py-12 text-white">
      <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-4">
          <img src="/logo.png" alt="Sikojo Rent" width="726" height="675" loading="lazy" class="h-14 w-auto rounded-lg bg-white p-1" />
          <address class="not-italic">
            <p class="font-display text-lg font-bold">Sikojo Rent</p>
            <p class="text-sm text-white/55">Rental mobil dengan driver · {{ site.city }}, {{ site.region }}</p>
          </address>
        </div>
        <div class="flex flex-wrap gap-3">
          <a :href="waLink()" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-ink">
            <AppIcon name="whatsapp" class="size-4" /> {{ site.whatsappDisplay }}
          </a>
          <a :href="site.instagram" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-ink">
            <AppIcon name="instagram" class="size-4" /> {{ site.instagramHandle }}
          </a>
          <a :href="site.tiktok" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-ink">
            <AppIcon name="tiktok" class="size-4" /> {{ site.tiktokHandle }}
          </a>
        </div>
      </div>
      <p class="mx-auto mt-10 max-w-6xl px-4 text-xs text-white/40 sm:px-6">© {{ new Date().getFullYear() }} Sikojo Rent. All rights reserved.</p>
    </footer>

    <!-- Floating WhatsApp -->
    <a
      :href="waLink()"
      target="_blank"
      rel="noopener"
      aria-label="Chat WhatsApp Sikojo"
      class="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <AppIcon name="whatsapp" class="size-7" />
    </a>
  </div>
</template>
