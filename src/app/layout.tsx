import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import DynamicTitle from '@/components/ui/DynamicTitle';
import GlobalSchema from '@/components/seo/GlobalSchema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bizdevelopment.in';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bizleap | Digital Marketing & Website Development Company Nagpur',
    template: '%s | Bizleap Development Services',
  },
  description:
    'Bizleap is a premier digital marketing and website development agency in Nagpur. We engineer high-performance web applications, custom software, mobile apps, and scalable digital solutions for ambitious brands.',
  keywords: [
    'website development company nagpur',
    'web development company in nagpur',
    'digital marketing company nagpur',
    'digital marketing agency nagpur',
    'full stack web development',
    'custom web application development',
    'ecommerce website development nagpur',
    'mobile app development company nagpur',
    'UI UX design agency',
    'Next.js development services',
    'software company nagpur',
    'Bizleap development services',
  ],
  authors: [{ name: 'Bizleap Development Services', url: siteUrl }],
  creator: 'Bizleap Development Services',
  publisher: 'Bizleap Development Services',
  category: 'technology',
  applicationName: 'Bizleap Development Services',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Bizleap Development Services',
    title: 'Bizleap | Digital Marketing & Website Development Company Nagpur',
    description:
      'Bizleap is a premier digital marketing and website development agency in Nagpur. We engineer high-performance web applications, custom software, mobile apps, and scalable digital solutions.',
    images: [
      {
        url: '/images/bizleap_laptop_mockup.jpg',
        width: 1200,
        height: 630,
        alt: 'Bizleap Development Services - Digital Marketing & Website Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bizleap | Digital Marketing & Website Development Company Nagpur',
    description:
      'Bizleap is a premier digital marketing and website development agency in Nagpur. We engineer high-performance web applications, custom software, and scalable digital solutions.',
    images: ['/images/bizleap_laptop_mockup.jpg'],
    creator: '@bizleap',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/favicon2.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icon.png', sizes: '180x180' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GlobalSchema />
      </head>
      <body suppressHydrationWarning>
        <DynamicTitle />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

