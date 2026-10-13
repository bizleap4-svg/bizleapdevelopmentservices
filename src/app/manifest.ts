import type { MetadataRoute } from 'next';
import { BRAND_NAME, SITE_NAME } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: BRAND_NAME,
    description: 'Premier Website & Mobile App Development Company in Nagpur. We engineer high-performance web applications, custom software, and scalable e-commerce solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080808',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
