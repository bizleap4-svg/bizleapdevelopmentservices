import React from 'react';
import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  BRAND_NAME,
  CONTACT_PHONE_CLEAN,
  CONTACT_PHONE,
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
          name: LEGAL_NAME,
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
          contactType: 'sales and customer support',
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
          'Bizleap Development builds custom websites, e-commerce stores, and mobile apps in Nagpur. Scalable Next.js engineering tailored for business growth.',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${SITE_URL}/#professionalservice`,
        name: SITE_NAME,
        image: `${SITE_URL}/images/bizleap_laptop_mockup.jpg`,
        url: SITE_URL,
        telephone: CONTACT_PHONE_CLEAN,
        email: CONTACT_EMAIL,
        priceRange: '₹₹',
        parentOrganization: {
          '@type': 'Organization',
          name: LEGAL_NAME,
          url: SOCIAL_LINKS.marketingPartner,
        },
        sameAs: [
          SOCIAL_LINKS.marketingPartner,
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.linkedin,
        ],
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
