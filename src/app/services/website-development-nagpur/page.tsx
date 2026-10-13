import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME, BRAND_NAME } from '@/config/site';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'Website Development Company in Nagpur | Bizleap',
  description:
    'Custom website development company in Nagpur. We engineer fast Next.js websites, corporate portals, and responsive web applications built for growth.',
  alternates: {
    canonical: '/services/website-development-nagpur',
  },
  openGraph: {
    title: 'Website Development Company in Nagpur | Bizleap',
    description:
      'Custom website development company in Nagpur. We engineer fast Next.js websites, corporate portals, and responsive web applications built for growth.',
    url: `${SITE_URL}/services/website-development-nagpur`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Nagpur | Bizleap',
    description:
      'Custom website development company in Nagpur. We engineer fast Next.js websites, corporate portals, and responsive web applications built for growth.',
  },
};

export default function WebsiteDevelopmentNagpurPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/website-development-nagpur#service`,
    name: 'Website Development Company in Nagpur',
    serviceType: 'Website Development',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Nagpur',
    },
    description:
      'Full-stack website development, custom corporate web portals, and performant Next.js engineering in Nagpur, Maharashtra.',
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
            { name: 'Website Development Nagpur', url: '/services/website-development-nagpur' },
          ]}
        />

        <header className={styles.hero}>
          <span className={styles.badge}>Custom Web Engineering • Nagpur</span>
          <h1 className={styles.title}>Website Development Company in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development builds high-performance, custom-coded websites and scalable web applications for businesses in Nagpur and across India. We replace slow, generic templates with tailor-made Next.js and React architectures engineered to convert traffic into real commercial revenue.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Discuss Your Website Project
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              View Live Client Builds
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Engineered for Business Outcomes, Not Just Aesthetics</h2>
          <p>
            Your website is the single most critical asset in your digital operations. When potential clients in Nagpur or international partners discover your company, your site’s speed, visual authority, and navigational clarity dictate whether they contact your sales team or bounce to a competitor. At Bizleap Development, our approach combines engineering rigour with human-centred interface design.
          </p>
          <p>
            Rather than relying on bloated content management systems with excessive third-party plugins, we build full-stack web applications using modern JavaScript frameworks. Every line of code is structured for rapid initial page load, seamless mobile responsiveness, and robust search engine crawlability.
          </p>

          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Full-Stack Architecture</h4>
              <p>Frontend built with React and Next.js, backed by scalable Node.js APIs and relational databases for flawless reliability.</p>
            </div>
            <div className={styles.card}>
              <h4>Technical SEO Foundation</h4>
              <p>Self-referencing canonicals, automated XML sitemaps, server-side rendered DOM, and valid Schema.org microdata baked in.</p>
            </div>
            <div className={styles.card}>
              <h4>Flawless Mobile Experience</h4>
              <p>Mobile-first responsive fluid grids ensuring intuitive usability across smartphones, tablets, laptops, and ultra-wide screens.</p>
            </div>
          </div>

          <h2>Our Website Development Capabilities in Nagpur</h2>
          <p>
            We partner with regional manufacturers, retail brands, healthcare providers, educational institutions, and professional service firms across Nagpur to create tailored web platforms:
          </p>
          <ul>
            <li>
              <strong>Corporate Websites & Portals:</strong> Authoritative web presences highlighting company capabilities, executive leadership, client portfolios, and secure lead inquiry channels.
            </li>
            <li>
              <strong>Custom Web Applications:</strong> Dynamic web apps with authenticated user dashboards, custom logic, appointment bookings, and third-party CRM integrations.
            </li>
            <li>
              <strong>Modernization & Code Refactoring:</strong> Complete re-architecting of outdated WordPress, PHP, or Wix websites onto modern Next.js stacks while safeguarding existing search rankings with 301 redirects.
            </li>
            <li>
              <strong>High-Converting Landing Pages:</strong> Laser-focused landing pages designed specifically for marketing campaigns, with fast loading times to maximize return on ad spend.
            </li>
          </ul>

          <h2>Why Choose Bizleap Development Over Traditional Agencies?</h2>
          <p>
            Most traditional agencies treat web development as an afterthought, relying on fragile drag-and-drop website builders that suffer from severe performance bottlenecks and security vulnerabilities. Bizleap operates as a dedicated development studio headquartered in Nagpur. Our software engineers build modular codebases that scale smoothly as your operations expand.
          </p>
          <p>
            Furthermore, our sister company, BizLeap India Pvt. Ltd., handles digital marketing, giving our engineering team deep insight into performance marketing demands, Core Web Vitals optimization, and conversion rate science.
          </p>

          <div className={styles.todoBox}>
            <strong>TODO for Owner Review:</strong> Confirm standard starter pricing tiers (e.g. ₹15,000 to ₹1,50,000+) and specific SLA delivery guarantees for corporate website builds in the Vidarbha region.
          </div>

          <h2>Our 5-Stage Engineering Process</h2>
          <p>
            Every engagement follows a structured delivery pipeline designed to minimize project risk and guarantee on-time deployment:
          </p>
          <ul>
            <li><strong>1. Discovery & Strategy:</strong> Deep dive into your business goals, target customer personas, and functional requirements.</li>
            <li><strong>2. Wireframing & UI Prototyping:</strong> Designing responsive layouts in Figma for full review before writing production code.</li>
            <li><strong>3. Component Engineering:</strong> Writing clean, semantic, accessible code with comprehensive unit and integration checks.</li>
            <li><strong>4. QA & Core Web Vitals Audit:</strong> Rigorous cross-browser testing on iOS, Android, macOS, and Windows to achieve top Lighthouse scores.</li>
            <li><strong>5. Cloud Deployment & Handoff:</strong> Deployment to high-performance edge networks with SSL certificates, DNS configuration, and documentation.</li>
          </ul>

          <div className={styles.ctaRow} style={{ marginTop: '3rem' }}>
            <Link href="/contact" className={styles.primaryCta}>
              Start Your Nagpur Website Project
            </Link>
            <Link href="/services/nextjs-development" className={styles.secondaryCta}>
              Explore Next.js Development
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
