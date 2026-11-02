import { cars } from './cars'
import { faqs } from './faqs'
import { site } from './site'

// Structured data (schema.org) untuk Google & mesin AI.
export function buildSchema(url: string) {
  const base = url.replace(/\/$/, '')
  const businessId = `${base}/#business`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoRental',
        '@id': businessId,
        name: site.name,
        alternateName: site.legalName,
        description: site.description,
        url: `${base}/`,
        logo: `${base}/logo.png`,
        image: `${base}/logo.png`,
        telephone: site.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: 'ID',
        },
        areaServed: { '@type': 'City', name: site.city },
        sameAs: [site.instagram, site.tiktok],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: site.phone,
          contactType: 'customer service',
          availableLanguage: ['id', 'en'],
          url: `https://wa.me/${site.whatsapp}`,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Armada Sewa Mobil dengan Driver',
          itemListElement: cars.map((c) => ({
            '@type': 'Offer',
            name: `Sewa ${c.name} dengan driver di ${site.city}`,
            businessFunction: 'http://purl.org/goodrelations/v1#LeaseOut',
            itemOffered: {
              '@type': 'Car',
              name: c.name,
              vehicleTransmission: 'AutomaticTransmission',
              seatingCapacity: c.seats,
              fuelType: c.fuel === 'Diesel' ? 'Diesel' : 'Gasoline',
              bodyType: c.type,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: `${base}/`,
        name: site.name,
        inLanguage: 'id-ID',
        publisher: { '@id': businessId },
      },
      {
        '@type': 'FAQPage',
        '@id': `${base}/#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}
