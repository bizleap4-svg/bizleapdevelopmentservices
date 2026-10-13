import React from 'react';
import Link from 'next/link';
import { SITE_URL } from '@/config/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaList = [
    { name: 'Home', url: SITE_URL },
    ...items,
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaList.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.875rem' }}>
        <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <span style={{ color: '#999', userSelect: 'none' }}>/</span>
                <li>
                  {isLast ? (
                    <span style={{ color: '#111', fontWeight: 600 }} aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.url} style={{ color: '#666', textDecoration: 'none' }}>
                      {item.name}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
