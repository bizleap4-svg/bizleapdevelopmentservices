import React from 'react';
import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  BRAND_NAME,
  CONTACT_PHONE_CLEAN,
  CONTACT_EMAIL,
  ADDRESS,
  GEO,
  SOCIAL_LINKS,
} from '@/config/site';

export default function GlobalSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo-dark.png`,
          width: 200,
          height: 60,
        },
        parentOrganization: {
          '@type': 'Organization',
          name: 'Bizleap Digital Marketing',
          url: SOCIAL_LINKS.marketingPartner,
        },
        sameAs: [
          SOCIAL_LINKS.marketingPartner,
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.linkedin,
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONTACT_PHONE_CLEAN,
          contactType: 'customer support',
          email: CONTACT_EMAIL,
          areaServed: ['IN', 'Nagpur', 'Maharashtra'],
          availableLanguage: ['English', 'Hindi', 'Marathi'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        description:
          'Bizleap Development is a premier website, mobile app, and e-commerce development company in Nagpur. Scalable engineering for growth.',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#professionalservice`,
        name: SITE_NAME,
        image: `${SITE_URL}/images/bizleap_laptop_mockup.jpg`,
        url: SITE_URL,
        telephone: CONTACT_PHONE_CLEAN,
        email: CONTACT_EMAIL,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.streetAddress,
          addressLocality: ADDRESS.addressLocality,
          addressRegion: ADDRESS.addressRegion,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '21:00',
          },
        ],
        areaServed: [
          {
            '@type': 'City',
            name: 'Nagpur',
          },
          {
            '@type': 'Country',
            name: 'India',
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
