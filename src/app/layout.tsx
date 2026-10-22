import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import DynamicTitle from '@/components/ui/DynamicTitle';
import GlobalSchema from '@/components/seo/GlobalSchema';
import { SITE_URL, BRAND_NAME, WEBSITE_NAME } from '@/config/site';

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
    default: 'BizDevelopment | Website & App Development in Nagpur',
    template: '%s',
  },
  description:
    'BizDevelopment is the website and app development arm of Bizleap in Nagpur. Explore custom websites, e-commerce stores, mobile apps and our project portfolio.',
  authors: [{ name: 'BizDevelopment by Bizleap', url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: 'technology',
  applicationName: WEBSITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: WEBSITE_NAME,
    title: 'BizDevelopment | Website & App Development in Nagpur',
    description:
      'BizDevelopment is the website and app development arm of Bizleap in Nagpur. Explore custom websites, e-commerce stores, mobile apps and our project portfolio.',
    images: [
      {
        url: '/images/bizleap_laptop_mockup.jpg',
        width: 1200,
        height: 630,
        alt: 'BizDevelopment by Bizleap - Website & App Development in Nagpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BizDevelopment | Website & App Development in Nagpur',
    description:
      'BizDevelopment is the website and app development arm of Bizleap in Nagpur. Explore custom websites, e-commerce stores, mobile apps and our project portfolio.',
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
