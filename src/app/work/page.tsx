import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import styles from './work.module.css';
import pageStyles from '../page.module.css';
import Image from 'next/image';
import FAQSection from '@/components/ui/FAQSection';
import WorkGallery from '@/components/work/WorkGallery';
import { SITE_URL, SITE_NAME, BRAND_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: {
    absolute: "Our Work: Websites & Web Apps We've Built | Bizleap Development",
  },
  description:
    'Explore our portfolio of custom websites, mobile applications, and high-converting e-commerce platforms engineered in Nagpur by Bizleap Development.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: "Our Work: Websites & Web Apps We've Built | Bizleap Development",
    description:
      'Explore our portfolio of custom websites, mobile applications, and high-converting e-commerce platforms engineered in Nagpur by Bizleap Development.',
    url: `${SITE_URL}/work`,
    type: 'website',
    siteName: BRAND_NAME,
    images: [
      {
        url: '/images/bizleap_laptop_mockup.jpg',
        width: 1200,
        height: 630,
        alt: 'Bizleap Development Portfolio & Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Work: Websites & Web Apps We've Built | Bizleap Development",
    description:
      'Explore our portfolio of custom websites, mobile applications, and high-converting e-commerce platforms engineered in Nagpur by Bizleap Development.',
    images: ['/images/bizleap_laptop_mockup.jpg'],
    creator: '@bizleap',
  },
};

const workFaqs = [
  {
    question: 'What types of projects does Bizleap Development build?',
    answer: 'Our portfolio features a diverse range of builds including high-traffic corporate websites, dynamic e-commerce stores, custom B2B software, and native mobile applications engineered with Next.js and React.',
  },
  {
    question: 'Do you only build websites for clients in Nagpur?',
    answer: 'No. While we are headquartered in Nagpur, Maharashtra, our portfolio includes successful deployments for brands across Pune, Mumbai, across India, and international markets.',
  },
  {
    question: 'Can you show examples of your e-commerce development?',
    answer: 'Yes! We have built numerous custom e-commerce platforms for fashion, retail, and B2B clients using modern Next.js and Shopify architectures to maximize speed and sales conversion rates.',
  },
  {
    question: 'How do you measure the success of a web project?',
    answer: 'As an engineering-focused web development company, we measure success by your core business metrics: improved load times, higher search engine visibility, increased lead generation, and better conversion rates.',
  },
];

export default function WorkPage() {
  const workJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/work/#portfolio`,
        'name': 'Bizleap Work Portfolio & Case Studies',
        'url': `${SITE_URL}/work`,
        'description':
          'Curated portfolio of modern digital platforms, high-conversion e-commerce stores, and custom software engineered by Bizleap Development.',
        'creator': {
          '@type': 'Organization',
          'name': SITE_NAME,
          'url': SITE_URL,
        },
      },
    ],
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workJsonLd) }}
      />
      
      <section className={pageStyles.heroSplit} style={{ minHeight: '80vh', backgroundColor: '#f4f4f4' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image 
            src="/images/266786c3-2fa0-47ec-9795-4d733d8a3982.png" 
            alt="Bizleap Development Work Hero Background" 
            fill 
            className={styles.workHeroImage}
            priority
          />
        </div>
        <div className={pageStyles.heroSplitGrid} style={{ minHeight: '80vh', alignItems: 'center' }}>
          <div className={pageStyles.heroSplitLeft} style={{ padding: '0 5vw', justifyContent: 'center', height: '100%', paddingTop: '8rem', background: 'transparent' }}>
            <Breadcrumbs items={[{ name: 'Our Work', url: '/work' }]} />
            <h1 className={pageStyles.heroSplitTitle} style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1' }}>
              Selected <br /><span className={pageStyles.accent}>Builds.</span>
            </h1>
            <p className={pageStyles.heroSplitSubline} style={{ maxWidth: '450px', fontSize: '1.15rem', marginLeft: '0.25rem' }}>
              A curation of our recent website, app, and e-commerce engineering. Built for impact, shipped to scale.
            </p>
          </div>
          <div></div>
        </div>
      </section>

      <WorkGallery />

      <FAQSection 
        faqs={workFaqs} 
        title={<>Portfolio <span style={{ color: 'var(--accent-yellow)' }}>FAQs</span></>} 
        subtitle="Common questions about our past web, app, and e-commerce projects."
      />

      <Footer />
    </main>
  );
}
