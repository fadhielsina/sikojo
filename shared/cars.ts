// Semua unit disewakan dengan driver. Harga tidak ditampilkan — tanya via WhatsApp.
export type Car = {
  name: string
  type: 'MPV' | 'Premium MPV' | 'SUV'
  seats: number
  transmission: 'Matic'
  fuel: 'Bensin' | 'Diesel'
  tall?: boolean
  color: string
}

export const cars: Car[] = [
  { name: 'Toyota Avanza', type: 'MPV', seats: 7, transmission: 'Matic', fuel: 'Bensin', color: '#d6d3cc' },
  { name: 'Toyota Innova Reborn', type: 'MPV', seats: 7, transmission: 'Matic', fuel: 'Diesel', color: '#1f2328' },
  { name: 'Toyota Voxy', type: 'Premium MPV', seats: 7, transmission: 'Matic', fuel: 'Bensin', tall: true, color: '#f2f2ee' },
  { name: 'Nissan Elgrand', type: 'Premium MPV', seats: 7, transmission: 'Matic', fuel: 'Bensin', tall: true, color: '#111111' },
  { name: 'Nissan Terra', type: 'SUV', seats: 7, transmission: 'Matic', fuel: 'Diesel', tall: true, color: '#9aa5b1' },
]
