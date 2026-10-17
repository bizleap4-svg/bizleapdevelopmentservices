import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import DynamicTitle from '@/components/ui/DynamicTitle';
import GlobalSchema from '@/components/seo/GlobalSchema';
import { SITE_URL, BRAND_NAME } from '@/config/site';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

const isPreview = process.env.VERCEL_ENV === 'preview';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Website & App Development Company in Nagpur | Bizleap Development',
    template: '%s',
  },
  description:
    'Bizleap Development builds custom websites, e-commerce stores, and mobile apps in Nagpur. Scalable Next.js engineering tailored for business growth.',
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: 'technology',
  applicationName: BRAND_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: 'Website & App Development Company in Nagpur | Bizleap Development',
    description:
      'Bizleap Development builds custom websites, e-commerce stores, and mobile apps in Nagpur. Scalable Next.js engineering tailored for business growth.',
    images: [
      {
        url: '/images/bizleap_laptop_mockup.jpg',
        width: 1200,
        height: 630,
        alt: 'Bizleap Development - Website & App Development Company Nagpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website & App Development Company in Nagpur | Bizleap Development',
    description:
      'Bizleap Development builds custom websites, e-commerce stores, and mobile apps in Nagpur. Scalable Next.js engineering tailored for business growth.',
    images: ['/images/bizleap_laptop_mockup.jpg'],
    creator: '@bizleap',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/images/favicon2.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icon.png', sizes: '180x180' }],
  },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    googleBot: {
      index: !isPreview,
      follow: !isPreview,
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
    <html lang="en-IN">
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
