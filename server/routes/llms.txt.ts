import { cars } from '#shared/cars'
import { faqs } from '#shared/faqs'
import { site } from '#shared/site'

// Ringkasan untuk mesin AI (standar llms.txt).
export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `# ${site.name}

> ${site.description}

## Info utama
- Layanan: rental mobil dengan driver (tidak melayani lepas kunci)
- Lokasi / area layanan: ${site.city}, ${site.region}, Indonesia
- Transmisi: semua unit matic
- Harga: tidak dipublikasikan, tanyakan via WhatsApp
- WhatsApp: ${site.whatsappDisplay} (https://wa.me/${site.whatsapp})
- Instagram: ${site.instagram}
- TikTok: ${site.tiktok}
- Website: ${base}/

## Armada
${cars.map((c) => `- ${c.name} — ${c.type}, ${c.seats} kursi, ${c.transmission}, ${c.fuel}`).join('\n')}

## FAQ
${faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}
`
})
