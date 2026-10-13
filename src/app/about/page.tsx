import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  SITE_URL,
  SITE_NAME,
  BRAND_NAME,
  LEGAL_NAME,
  ADDRESS,
  SOCIAL_LINKS,
} from '@/config/site';
import styles from '../services/service-page.module.css';

export const metadata: Metadata = {
  title: 'About Bizleap Development | Website & App Engineering',
  description:
    'Learn about Bizleap Development Services, the web and mobile app development arm of BizLeap India Pvt. Ltd. based in Nagpur. Scalable engineering for growth.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Bizleap Development | Website & App Engineering',
    description:
      'Learn about Bizleap Development Services, the web and mobile app development arm of BizLeap India Pvt. Ltd. based in Nagpur. Scalable engineering for growth.',
    url: `${SITE_URL}/about`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bizleap Development | Website & App Engineering',
    description:
      'Learn about Bizleap Development Services, the web and mobile app development arm of BizLeap India Pvt. Ltd. based in Nagpur. Scalable engineering for growth.',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#webpage`,
    name: 'About Bizleap Development Services',
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
      parentOrganization: {
        '@type': 'Organization',
        name: 'Bizleap Digital Marketing',
        url: SOCIAL_LINKS.marketingPartner,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.streetAddress,
        addressLocality: ADDRESS.addressLocality,
        addressRegion: ADDRESS.addressRegion,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.addressCountry,
      },
    },
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className={styles.contentWrapper}>
        <Breadcrumbs
          items={[{ name: 'About Us', url: '/about' }]}
        />

        <header className={styles.hero}>
          <span className={styles.badge}>Our Studio • Nagpur, Maharashtra</span>
          <h1 className={styles.title}>About Bizleap Development Services</h1>
          <p className={styles.lead}>
            Bizleap Development Services is the specialized web and mobile application development division of <strong>{LEGAL_NAME}</strong>, headquartered in Nagpur. We engineer high-performance web applications, custom digital architectures, and scalable e-commerce systems for brands that demand measurable business growth.
          </p>
        </header>

        <article className={styles.bodyContent}>
          <h2>Engineering Excellence Rooted in Central India</h2>
          <p>
            Founded in Nagpur, Maharashtra, Bizleap Development was established to bridge a critical divide in software development: the gap between visual aesthetics and deep engineering performance. All too often, businesses are forced to choose between creative design agencies that cannot build scalable software, or legacy IT consultancies whose products feel clunky, outdated, and uninspiring to users.
          </p>
          <p>
            We operate at the exact intersection of both disciplines. Our team of software developers, product strategists, and interface designers builds modern digital experiences using production-proven frameworks like Next.js, React, Node.js, and React Native. Every project we ship is optimized for Core Web Vitals, enterprise security, and seamless mobile responsiveness.
          </p>

          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Headquarters</h4>
              <p>{ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India.</p>
            </div>
            <div className={styles.card}>
              <h4>Core Focus</h4>
              <p>Full-stack web applications, custom Next.js engineering, iOS & Android mobile apps, and enterprise e-commerce platforms.</p>
            </div>
            <div className={styles.card}>
              <h4>Partner Network</h4>
              <p>Affiliated with BizLeap India Pvt. Ltd. with partnerships serving clients in Nagpur, Pune, Mumbai, and internationally.</p>
            </div>
          </div>

          <h2>Distinct Separation: Development vs Digital Marketing</h2>
          <p>
            To maintain uncompromising quality, BizLeap operates with dedicated, focused divisions:
          </p>
          <ul>
            <li>
              <strong>Bizleap Development Services (this website, <a href={SITE_URL}>{SITE_URL}</a>):</strong> Dedicated entirely to technical software engineering, website development, React & Next.js architectures, mobile application engineering, and custom UI/UX design systems.
            </li>
            <li>
              <strong>Bizleap Digital Marketing Partner (<a href={SOCIAL_LINKS.marketingPartner} target="_blank" rel="noopener noreferrer">bizleap.in</a>):</strong> Our affiliated full-service digital marketing division specializing in search engine optimization (SEO), Meta advertising, Google Ads management, social media strategy, and ROI-driven performance marketing campaigns.
            </li>
          </ul>
          <p>
            If your business requires comprehensive marketing campaigns or paid lead generation, visit our digital marketing partner at{' '}
            <a 
              href={SOCIAL_LINKS.marketingPartner} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ fontWeight: 600, textDecoration: 'underline', color: '#111' }}
            >
              https://www.bizleap.in ↗
            </a>.
          </p>

          <div className={styles.todoBox}>
            <strong>TODO for Owner Review:</strong> Confirm company founding year, team headcount disclosures, and any registered certifications or ISO accreditations held by BizLeap India Pvt. Ltd.
          </div>

          <h2>Our Core Engineering Principles</h2>
          <p>
            We adhere to four non-negotiable principles across all client engagements:
          </p>
          <ul>
            <li><strong>1. Speed is a Feature:</strong> Slow websites lose users and revenue. We target sub-second initial server responses and near-perfect Google PageSpeed scores on mobile devices.</li>
            <li><strong>2. Code Sustainability:</strong> We write clean, typed TypeScript and modular components with comprehensive documentation, ensuring our applications are easy to maintain and scale.</li>
            <li><strong>3. Transparent Communication:</strong> We eliminate agency jargon. Clients receive direct access to engineers, milestone demos, and straightforward project tracking.</li>
            <li><strong>4. Zero Fabrication:</strong> We publish real portfolio builds and authentic case studies, never exaggerating metrics or fabricating client claims.</li>
          </ul>

          <div className={styles.ctaRow} style={{ marginTop: '3rem' }}>
            <Link href="/contact" className={styles.primaryCta}>
              Connect with Our Engineering Team
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              Explore Our Portfolio
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
