import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME, BRAND_NAME } from '@/config/site';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'Next.js Development Company | Bizleap Development',
  description:
    'Enterprise Next.js development services. We build high-speed App Router web applications, headless commerce, and scalable SSR platforms for modern brands.',
  alternates: {
    canonical: '/services/nextjs-development',
  },
  openGraph: {
    title: 'Next.js Development Company | Bizleap Development',
    description:
      'Enterprise Next.js development services. We build high-speed App Router web applications, headless commerce, and scalable SSR platforms for modern brands.',
    url: `${SITE_URL}/services/nextjs-development`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Development Company | Bizleap Development',
    description:
      'Enterprise Next.js development services. We build high-speed App Router web applications, headless commerce, and scalable SSR platforms for modern brands.',
  },
};

export default function NextjsDevelopmentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/nextjs-development#service`,
    name: 'Next.js Web Development Services',
    serviceType: 'Next.js Development',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'City', name: 'Nagpur' },
      { '@type': 'Country', name: 'India' },
    ],
    description:
      'Custom Next.js App Router engineering, React Server Components, server actions, and enterprise performance optimization.',
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className={styles.contentWrapper}>
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: 'Next.js Development', url: '/services/nextjs-development' },
          ]}
        />

        <header className={styles.hero}>
          <span className={styles.badge}>Next.js Engineering • React Specialists</span>
          <h1 className={styles.title}>Next.js Web Development Services</h1>
          <p className={styles.lead}>
            Bizleap Development specializes in production-grade Next.js development. We engineer lightning-fast web applications, enterprise corporate portals, and headless e-commerce storefronts leveraging the Next.js App Router, React Server Components (RSC), and edge-native serverless infrastructure.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Start a Next.js Project
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              See Next.js Case Studies
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Why Next.js is the Gold Standard for Modern Web Applications</h2>
          <p>
            For ambitious companies that depend on organic search traffic and user conversion rates, legacy content management systems and client-only Single Page Applications (SPAs) present severe handicaps. Client-rendered SPAs force search engine crawlers to execute heavy JavaScript before seeing page content, causing severe indexing delays and poor Core Web Vitals scores.
          </p>
          <p>
            Next.js bridges this gap completely. By blending server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) with React Server Components, Next.js delivers pure, pre-rendered HTML to both search engines and end users in milliseconds. At Bizleap Development, Next.js is our core technology foundation.
          </p>

          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>React Server Components (RSC)</h4>
              <p>Keep heavy dependencies on the server, shipping zero client-side JavaScript for content-heavy sections and speeding up time-to-interactive (TTI).</p>
            </div>
            <div className={styles.card}>
              <h4>Flawless Core Web Vitals</h4>
              <p>Built-in next/image and next/font optimizations delivering sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).</p>
            </div>
            <div className={styles.card}>
              <h4>Native App Router Architecture</h4>
              <p>Modern nested layouts, streaming server rendering via React Suspense, and resilient parallel and intercepting route capabilities.</p>
            </div>
          </div>

          <h2>Our Next.js Development Solutions</h2>
          <p>
            We leverage Next.js to solve complex business and engineering challenges:
          </p>
          <ul>
            <li>
              <strong>Custom Full-Stack Next.js Applications:</strong> End-to-end architectures utilizing Server Actions, robust data validation (Zod), and secure PostgreSQL or Prisma database backends.
            </li>
            <li>
              <strong>Headless E-Commerce Frontends:</strong> Blazingly fast Next.js storefronts connected to Shopify or custom headless commerce backends, maximizing sales conversion.
            </li>
            <li>
              <strong>WordPress / PHP Migration to Next.js:</strong> Re-platforming sluggish legacy websites onto modern Next.js without losing established search traffic, backed by strict 301 redirect maps.
            </li>
            <li>
              <strong>Performance Audits & Speed Optimization:</strong> Deep profiling of bundle size, waterfall API requests, hydration mismatches, and memory leaks on existing Next.js codebases.
            </li>
          </ul>

          <div className={styles.todoBox}>
            <strong>TODO for Owner Review:</strong> Confirm enterprise SLA terms for ongoing Next.js framework version upgrades (e.g. Next.js 15/16 migration retainers) and cloud hosting maintenance policies.
          </div>

          <h2>Technical SEO Advantages Built Directly into Next.js</h2>
          <p>
            Our Next.js engineering pipeline strictly integrates Google’s latest search recommendations:
          </p>
          <ul>
            <li><strong>Next.js Metadata API:</strong> Dynamic, type-safe generation of canonical URLs, Open Graph images, Twitter cards, and alternate language tags.</li>
            <li><strong>Automated Dynamic Sitemaps:</strong> Dynamic XML sitemaps generated at build or request time reflecting verified content modification dates.</li>
            <li><strong>Edge-Cached Delivery:</strong> Global CDN deployment via Vercel or Cloudflare, delivering instantaneous responses to users across India and international markets.</li>
          </ul>

          <div className={styles.ctaRow} style={{ marginTop: '3rem' }}>
            <Link href="/contact" className={styles.primaryCta}>
              Discuss Your Next.js Architecture
            </Link>
            <Link href="/services/website-development-nagpur" className={styles.secondaryCta}>
              Website Development in Nagpur
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
