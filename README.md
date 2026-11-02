# Sikojo Rent

Website rental mobil Sikojo (Bandung) — Nuxt 4 + Tailwind CSS 4.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Ubah data

- Kontak, sosmed & deskripsi SEO: `shared/site.ts`
- Daftar mobil: `shared/cars.ts`
- FAQ (tampil di halaman + structured data): `shared/faqs.ts`
- Logo: `public/logo.png`

## Deploy ke Vercel

1. Push folder ini ke repo GitHub.
2. Di vercel.com → **Add New → Project** → import repo.
3. Vercel otomatis mendeteksi Nuxt. Klik **Deploy**.
4. Di **Settings → Environment Variables** tambahkan `NUXT_PUBLIC_SITE_URL` = domain asli (mis. `https://sikojo.com`), lalu redeploy. Ini dipakai untuk canonical, Open Graph, sitemap, dan structured data.

## SEO & GEO

- Meta title/description, Open Graph, Twitter card, canonical, geo tag (ID-JB, Bandung)
- Structured data JSON-LD: `AutoRental` (bisnis + armada), `WebSite`, `FAQPage` — `shared/schema.ts`
- `/robots.txt` (crawler AI seperti GPTBot, ClaudeBot, PerplexityBot diizinkan), `/sitemap.xml`, `/llms.txt`
- Setelah live: daftarkan ke Google Search Console (submit sitemap) dan buat Google Business Profile.
