export const site = {
  name: 'Sikojo Rent',
  legalName: 'Sikojo',
  city: 'Bandung',
  region: 'Jawa Barat',
  title: 'Sikojo Rent — Rental Mobil dengan Driver di Bandung',
  description:
    'Sikojo Rent adalah rental mobil dengan driver di Bandung. Pilihan unit matic: Toyota Avanza, Innova Reborn, Voxy, Nissan Elgrand, dan Nissan Terra. Booking cepat via WhatsApp.',
  whatsapp: '6281802351783',
  whatsappDisplay: '+62 818-0235-1783',
  phone: '+62-818-0235-1783',
  instagram: 'https://www.instagram.com/sikojo.to/',
  instagramHandle: '@sikojo.to',
  tiktok: 'https://www.tiktok.com/@sikojo.to',
  tiktokHandle: '@sikojo.to',
}

export function waLink(message = 'Halo Sikojo, saya mau tanya soal sewa mobil.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
