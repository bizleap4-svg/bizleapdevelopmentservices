'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalSchema() {
  const pathname = usePathname();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bizdevelopment.in';
  const currentUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Bizleap Development Services',
        legalName: 'BizLeap India Pvt. Ltd.',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo-dark.png`,
          width: 200,
          height: 60,
        },
        sameAs: [
          'https://www.instagram.com/bizleap.in/reels/',
          'https://www.linkedin.com/company/bizleapinc',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-70970-95152',
          contactType: 'customer support',
          email: 'bizleapinc@gmail.com',
          areaServed: ['IN', 'Nagpur', 'Pune', 'Mumbai', 'Maharashtra'],
          availableLanguage: ['English', 'Hindi', 'Marathi'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Bizleap Development Services',
        description:
          'Bizleap is a premier digital marketing and website development agency in Nagpur. We engineer high-performance web apps, mobile apps, and scalable digital solutions.',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#localbusiness`,
        name: 'Bizleap Development Services',
        image: `${siteUrl}/images/bizleap_laptop_mockup.jpg`,
        url: siteUrl,
        telephone: '+91-70970-95152',
        email: 'bizleapinc@gmail.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2, Wardha Rd, Near Sai Mandir, Sawarkar Nagar, Gajanan Nagar',
          addressLocality: 'Nagpur',
          addressRegion: 'Maharashtra',
          postalCode: '440015',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '21.107778',
          longitude: '79.055833',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '21:00',
          },
        ],
        areaServed: ['Nagpur', 'Pune', 'Mumbai', 'Maharashtra', 'India'],
      },
      // FAQ Page Schema
      {
        '@type': 'FAQPage',
        '@id': `${currentUrl}#faq`,
        url: currentUrl,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does Bizleap provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bizleap provides a range of digital services including Website Development, App Development, Digital Marketing, SEO, and UI/UX Design.',
            }
          },
          {
            '@type': 'Question',
            name: 'Where is Bizleap located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are located in Nagpur, Maharashtra at 2, Wardha Rd, Near Sai Mandir, Sawarkar Nagar, Gajanan Nagar, 440015.',
            }
          },
          {
            '@type': 'Question',
            name: 'How can I contact Bizleap for a project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can reach out to us at bizleapinc@gmail.com or call us at +91-70970-95152.',
            }
          }
        ]
      },
      // Individual WebPages included in graph
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'Home - Bizleap Development Services',
        isPartOf: { '@id': `${siteUrl}/#website` }
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/services#webpage`,
        url: `${siteUrl}/services`,
        name: 'Services - Bizleap Development Services',
        isPartOf: { '@id': `${siteUrl}/#website` }
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/work#webpage`,
        url: `${siteUrl}/work`,
        name: 'Our Work - Bizleap Development Services',
        isPartOf: { '@id': `${siteUrl}/#website` }
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
