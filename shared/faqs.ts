import { cars } from './cars'

export const faqs = [
  {
    q: 'Mobil apa saja yang tersedia di Sikojo Rent?',
    a: `Sikojo Rent menyediakan ${cars.map((c) => c.name).join(', ')}. Semua unit bertransmisi matic.`,
  },
  { q: 'Apakah bisa sewa lepas kunci?', a: 'Tidak. Semua unit Sikojo disewakan dengan driver supaya perjalananmu lebih aman dan nyaman.' },
  { q: 'Berapa harga sewanya?', a: 'Harga tergantung unit, tanggal, durasi, dan rute. Chat WhatsApp kami untuk mendapatkan penawaran terbaik.' },
  { q: 'Bagaimana cara booking?', a: 'Chat WhatsApp +62 818-0235-1783 dengan menyebutkan unit, tanggal, durasi, dan lokasi penjemputan, lalu bayar DP untuk mengunci jadwal.' },
  { q: 'Bagaimana jika melebihi waktu sewa?', a: 'Kelebihan waktu dikenakan biaya overtime per jam. Detailnya akan kami jelaskan saat booking.' },
  { q: 'Apakah bisa dipakai ke luar kota?', a: 'Bisa. Informasikan tujuan perjalanan saat booking agar kami siapkan unit dan ketentuannya.' },
  { q: 'Bisa diantar ke stasiun atau bandara?', a: 'Bisa, layanan antar-jemput tersedia di area Bandung dengan biaya tambahan sesuai jarak.' },
]
