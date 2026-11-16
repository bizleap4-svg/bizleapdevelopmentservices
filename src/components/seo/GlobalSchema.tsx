import React from 'react';
import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  BRAND_NAME,
  ALT_BRAND_NAME,
  WEBSITE_NAME,
  CONTACT_PHONE_CLEAN,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  ADDRESS,
  GEO,
  SOCIAL_LINKS,
  GBP_URL,
} from '@/config/site';

export default function GlobalSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: WEBSITE_NAME,
        alternateName: ALT_BRAND_NAME,
        legalName: LEGAL_NAME,
        url: `${SITE_URL}/`,
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
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.linkedin,
          ...(GBP_URL ? [GBP_URL] : []),
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
        url: 'https://www.bizdevelopment.in/',
        name: 'BizDevelopment',
        alternateName: 'Bizleap Development',
        description:
          'BizDevelopment is the website and app development arm of Bizleap in Nagpur. Explore custom websites, e-commerce stores, mobile apps and our project portfolio.',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${SITE_URL}/#professionalservice`,
        name: `${WEBSITE_NAME} by Bizleap`,
        alternateName: ALT_BRAND_NAME,
        image: `${SITE_URL}/images/bizleap_laptop_mockup.jpg`,
        url: `${SITE_URL}/`,
        telephone: CONTACT_PHONE_CLEAN,
        email: CONTACT_EMAIL,
        priceRange: '₹₹',
        parentOrganization: {
          '@type': 'Organization',
          name: LEGAL_NAME,
          url: SOCIAL_LINKS.marketingPartner,
        },
        sameAs: [
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.linkedin,
          ...(GBP_URL ? [GBP_URL] : []),
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
