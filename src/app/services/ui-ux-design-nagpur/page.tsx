import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME, BRAND_NAME } from '@/config/site';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'UI/UX Design Company in Nagpur | Bizleap Development',
  description:
    'Strategic UI/UX design company in Nagpur. We create user research, wireframes, interactive Figma prototypes, and high-converting product interfaces.',
  alternates: {
    canonical: '/services/ui-ux-design-nagpur',
  },
  openGraph: {
    title: 'UI/UX Design Company in Nagpur | Bizleap Development',
    description:
      'Strategic UI/UX design company in Nagpur. We create user research, wireframes, interactive Figma prototypes, and high-converting product interfaces.',
    url: `${SITE_URL}/services/ui-ux-design-nagpur`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Company in Nagpur | Bizleap Development',
    description:
      'Strategic UI/UX design company in Nagpur. We create user research, wireframes, interactive Figma prototypes, and high-converting product interfaces.',
  },
};

export default function UiUxDesignNagpurPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/ui-ux-design-nagpur#service`,
    name: 'UI/UX Design Company in Nagpur',
    serviceType: 'UI/UX Design',
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
      'Human-centric UI/UX design, Figma wireframing, design systems, and conversion-focused product interfaces in Nagpur, Maharashtra.',
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
            { name: 'UI/UX Design Nagpur', url: '/services/ui-ux-design-nagpur' },
          ]}
        />

        <header className={styles.hero}>
          <span className={styles.badge}>Product Design • Nagpur</span>
          <h1 className={styles.title}>UI/UX Design Agency in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development creates purposeful, high-converting digital product designs for web apps, SaaS platforms, and mobile products. We combine behavioural psychology, thorough user journey mapping, and clean modern aesthetics in Figma to build interfaces that feel effortless to navigate.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Start a Design Project
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              View Design Case Studies
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Design Grounded in Conversion Science & Usability</h2>
          <p>
            An exceptional user interface is not decorative art—it is a functional business engine designed to eliminate user confusion, communicate product value instantly, and guide visitors toward clear decisions. When digital products suffer from high bounce rates or abandoned user onboarding, the underlying failure is almost always architectural usability.
          </p>
          <p>
            At Bizleap Development in Nagpur, our UI/UX design team designs from real user mental models. Before producing visual polish, we map out informational hierarchies, user personas, interactive states, and edge cases. Because our designers work directly alongside our frontend software engineers, every Figma file we deliver is production-ready, accessible, and structured for code reusability.
          </p>

          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Interactive Figma Prototypes</h4>
              <p>High-fidelity clickable prototypes that allow stakeholders and prospective users to experience real interaction flows before engineering begins.</p>
            </div>
            <div className={styles.card}>
              <h4>Scalable Design Systems</h4>
              <p>Comprehensive design token libraries, typography hierarchies, reusable UI components, and documented micro-interactions.</p>
            </div>
            <div className={styles.card}>
              <h4>Accessibility & Usability Testing</h4>
              <p>WCAG 2.1 AA compliance testing ensuring clear color contrast, readable text scaling, screen reader compatibility, and touch-target sizes.</p>
            </div>
          </div>

          <h2>Our Core UI/UX Design Specializations</h2>
          <p>
            We deliver tailored design solutions for businesses ranging from emerging tech startups to established regional enterprises:
          </p>
          <ul>
            <li>
              <strong>Web Application & SaaS UI:</strong> Intuitive administrative dashboards, data visualization tables, complex filter panels, and customer account settings.
            </li>
            <li>
              <strong>Mobile App Interaction Design:</strong> Thumb-zone optimized iOS and Android layouts, fluid bottom sheets, custom iconography, and micro-animated gestures.
            </li>
            <li>
              <strong>E-Commerce Conversion Optimization:</strong> Strategic checkout redesigns, high-impact product detail pages (PDP), and intuitive category filtering.
            </li>
            <li>
              <strong>Brand Identity & Digital Design Systems:</strong> Cohesive modern brand guidelines including color palettes, typography pairings, and digital asset kits.
            </li>
          </ul>

          <div className={styles.todoBox}>
            <strong>TODO for Owner Review:</strong> Confirm standard Figma design sprint deliverables (e.g. 2-week sprint packages) and whether usability test recordings are included in standard client contracts.
          </div>

          <h2>From Figma to Next.js Code: Seamless Developer Handoff</h2>
          <p>
            The greatest design is worthless if it breaks during technical implementation. At Bizleap Development, our design and engineering workflows are tightly integrated:
          </p>
          <ul>
            <li><strong>Auto-Layout & Responsive Tokens:</strong> Every screen is engineered using Figma auto-layout and rem-based variables that translate 1:1 into CSS Modules or Tailwind code.</li>
            <li><strong>State Documentation:</strong> Complete visual specifications for hover, active, focus, disabled, loading skeleton, and error empty states.</li>
            <li><strong>Asset Export Pipeline:</strong> Optimized SVG vector assets and lossless image formats ready for direct ingestion into Next.js components.</li>
          </ul>

          <div className={styles.ctaRow} style={{ marginTop: '3rem' }}>
            <Link href="/contact" className={styles.primaryCta}>
              Book a UI/UX Design Consultation
            </Link>
            <Link href="/services/website-development-nagpur" className={styles.secondaryCta}>
              Explore Web Development Services
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
