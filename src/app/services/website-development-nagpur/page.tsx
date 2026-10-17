import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection, { FAQ } from '@/components/ui/FAQSection';
import { SITE_URL, SITE_NAME, BRAND_NAME, SOCIAL_LINKS } from '@/config/site';
import { ArrowRight, CheckCircle2, Code2, Database, Shield, Zap, Layers, Server, Globe } from 'lucide-react';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'Website Development Company in Nagpur | Bizleap Development',
  description:
    'Custom website development company in Nagpur. We engineer fast Next.js corporate portals, web applications, and responsive websites built for business growth.',
  alternates: {
    canonical: '/services/website-development-nagpur',
  },
  openGraph: {
    title: 'Website Development Company in Nagpur | Bizleap Development',
    description:
      'Custom website development company in Nagpur. We engineer fast Next.js corporate portals, web applications, and responsive websites built for business growth.',
    url: `${SITE_URL}/services/website-development-nagpur`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Nagpur | Bizleap Development',
    description:
      'Custom website development company in Nagpur. We engineer fast Next.js corporate portals, web applications, and responsive websites built for business growth.',
  },
};

const websiteFaqs: FAQ[] = [
  {
    question: 'How do custom Next.js websites outperform template builders like WordPress?',
    answer: 'Unlike generic WordPress themes that load dozens of conflicting plugins, unoptimized stylesheets, and heavy database queries, custom Next.js websites are compiled into lightweight static HTML and pre-rendered JavaScript. This results in sub-second page loads, near-zero server overhead, immunity to common CMS database vulnerabilities, and superior Core Web Vitals scores that directly improve search rankings and mobile conversion rates.',
  },
  {
    question: 'What types of businesses in Nagpur do you build custom websites for?',
    answer: 'We build tailored digital platforms for a wide range of enterprises across Nagpur and Maharashtra, including industrial manufacturers, healthcare clinics and diagnostic networks, professional training institutes, financial advisory firms, educational academies, and high-growth commercial enterprises. Every build is architected around the client’s unique workflow, user journey, and brand identity.',
  },
  {
    question: 'What is your standard development lifecycle and timeline for a corporate website?',
    answer: 'A standard custom website development project typically spans 2 to 4 weeks from project kickoff to production release. Our delivery process consists of five distinct phases: technical discovery, interactive Figma UI prototyping, component-driven frontend and backend engineering, cross-browser QA with performance audits, and edge cloud deployment with SSL and DNS mapping.',
  },
  {
    question: 'How do you preserve existing search rankings when rebuilding an established website?',
    answer: 'Before writing any code, our engineers perform a complete crawl of your existing domain to map every legacy URL, canonical tag, and meta structure. We then implement automated 1:1 server-side 301 redirect tables, match heading hierarchies, and enhance schema markup so that all accumulated organic authority transfers seamlessly to the modern Next.js platform without traffic disruption.',
  },
  {
    question: 'Do you provide ongoing maintenance and feature enhancement after launch?',
    answer: 'Yes. Every website we build includes post-launch warranty support covering uptime monitoring, dependency updates, and bug fixes. We also offer ongoing engineering retainers for enterprises that require continuous feature additions, conversion rate experiments, database tuning, and API integrations.',
  },
  {
    question: 'How can our company get started with a website project in Nagpur?',
    answer: 'You can initiate an engagement by submitting your project specifications through our online contact form or calling our Nagpur office directly. Our software engineering leads will review your requirements, conduct an initial architectural consultation, and deliver a detailed scope document with concrete deliverables and delivery timelines.',
  },
];

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
          <span className={styles.badge}>Custom Web Engineering • Nagpur, Maharashtra</span>
          <h1 className={styles.title}>Website Development Company in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development engineers high-performance, bespoke corporate websites and scalable web applications for businesses in Nagpur and across India. We replace slow, generic templates with tailor-made Next.js and React architectures engineered to turn casual traffic into qualified commercial leads.
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
          <h2>Why Custom Engineering Matters for Modern Businesses</h2>
          <p>
            Your corporate website is the digital headquarters of your company. When potential clients, institutional partners, or enterprise buyers evaluate your organization, the performance, visual authority, and responsiveness of your web portal directly shape their perception of your credibility. Traditional agencies often rely on bloated CMS themes and pre-built site builders that suffer from sluggish response times, fragile third-party plugins, and poor mobile responsiveness.
          </p>
          <p>
            At Bizleap Development, headquartered on Wardha Road in Nagpur, we approach web development as an engineering discipline. Every website we build is authored using clean, maintainable TypeScript, modular components, and server-side rendering. This architectural rigor ensures sub-second initial server responses, near-instantaneous page transitions, and effortless scalability as your monthly visitor volume grows.
          </p>

          <h2>Who Our Website Development Services Are Built For</h2>
          <p>
            Our web engineering practice is specifically designed for ambitious organizations that have outgrown off-the-shelf website solutions and require custom digital infrastructure:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Mid-Market &amp; Enterprise Corporations</h4>
              <p>Industrial manufacturers, chemical producers, and logistics providers needing authoritative digital platforms to showcase complex capabilities and secure global trade partnerships.</p>
            </div>
            <div className={styles.card}>
              <h4>Healthcare &amp; Clinical Networks</h4>
              <p>Hospitals, diagnostic chains, and medical specialists requiring patient trust indicators, secure consultation inquiry workflows, and frictionless mobile navigation.</p>
            </div>
            <div className={styles.card}>
              <h4>Educational &amp; Training Institutes</h4>
              <p>Colleges, professional academies, and ed-tech companies needing modular course catalogues, student lead capture funnels, and multimedia curriculum displays.</p>
            </div>
            <div className={styles.card}>
              <h4>Professional &amp; Financial Services</h4>
              <p>Wealth advisory firms, chartered accountancies, and legal practices requiring institutional credibility, encrypted inquiry forms, and high-converting landing pages.</p>
            </div>
          </div>

          <h2>What We Deliver: Comprehensive Technical Scope</h2>
          <p>
            When you partner with Bizleap Development, you receive an end-to-end web platform delivered with production-grade engineering standards:
          </p>
          <ul>
            <li>
              <strong>Custom Full-Stack Architecture:</strong> Frontend interfaces built with React and Next.js App Router, coupled with secure Node.js microservices and relational or document database integration where dynamic state is required.
            </li>
            <li>
              <strong>Server-Side Rendering &amp; Static Generation:</strong> Pre-rendered DOM structures that serve complete HTML content instantaneously to both users and search engine crawlers, eliminating blank-screen loading states.
            </li>
            <li>
              <strong>Mobile-First Fluid Interfaces:</strong> Responsive layouts engineered across standard breakpoints (320px to 4K ultra-wide) ensuring effortless usability across smartphones, tablets, and desktop workstations.
            </li>
            <li>
              <strong>Technical SEO &amp; Schema Integration:</strong> Native implementation of self-referencing canonical URLs, automated XML sitemaps, Open Graph metadata, and rich Schema.org structured data (Organization, LocalBusiness, BreadcrumbList, Service).
            </li>
            <li>
              <strong>Enterprise Security &amp; Compliance:</strong> Automated SSL certificate provisioning, Content Security Policy headers, sanitized form validation, and protection against common OWASP vulnerabilities.
            </li>
          </ul>

          <h2>Our Modern Technology Stack</h2>
          <p>
            We intentionally select technologies that offer proven stability, developer productivity, and optimal runtime performance:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Frontend Framework</h4>
              <p>Next.js 15/16 and React 19 leveraging React Server Components, streaming SSR, and optimized client bundles.</p>
            </div>
            <div className={styles.card}>
              <h4>Type Safety &amp; Logic</h4>
              <p>100% strict TypeScript for predictable component contracts, eliminating runtime type errors and easing long-term code maintenance.</p>
            </div>
            <div className={styles.card}>
              <h4>Styling &amp; Animations</h4>
              <p>Modular CSS Modules and lightweight Framer Motion for hardware-accelerated, fluid micro-interactions without performance overhead.</p>
            </div>
            <div className={styles.card}>
              <h4>Cloud &amp; Edge Hosting</h4>
              <p>Deployment across global edge networks with instant caching, automated zero-downtime rollouts, and automatic asset compression.</p>
            </div>
          </div>

          <h2>Our 5-Stage Web Engineering Lifecycle</h2>
          <p>
            Every client build follows a structured, milestone-driven delivery process designed to prevent scope creep and ensure timely delivery:
          </p>
          <ul>
            <li><strong>Stage 1 — Discovery &amp; Strategy:</strong> We analyze your business requirements, customer journeys, target conversion funnels, and technical constraints to establish a clear architectural specification.</li>
            <li><strong>Stage 2 — Wireframing &amp; Interactive Prototyping:</strong> Our design team builds full-fidelity Figma prototypes of every key page, allowing your leadership team to validate UX and layouts before coding begins.</li>
            <li><strong>Stage 3 — Component Engineering &amp; Integration:</strong> Software engineers author clean, semantic TypeScript code, build reusable component libraries, and integrate backend APIs and lead delivery webhooks.</li>
            <li><strong>Stage 4 — QA, Performance Audits &amp; SEO Checks:</strong> Rigorous cross-device testing across iOS, Android, macOS, and Windows devices to achieve 90+ Google Lighthouse metrics for performance, accessibility, and SEO.</li>
            <li><strong>Stage 5 — Production Deployment &amp; Handoff:</strong> Seamless DNS configuration, edge CDN routing, SSL certification, search console registration, and administrative documentation.</li>
          </ul>

          <h2>Selected Web Builds Delivered by Our Nagpur Studio</h2>
          <p>
            Explore live production web architectures engineered and deployed by Bizleap Development:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>ASMA Training Institute</h4>
              <p><strong>Education &amp; Training:</strong> Modern web portal with modular course listings, faculty credentials, and digital inquiry funnels.</p>
              <Link href="/work/asma" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View ASMA Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>Chemora Life Science</h4>
              <p><strong>Chemical Manufacturing:</strong> Clean corporate website showcasing life science solutions, chemical specifications, and international export channels.</p>
              <Link href="/work/chemora" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View Chemora Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>Wealth Acumen</h4>
              <p><strong>Financial Services:</strong> High-trust financial advisory portal emphasizing wealth management compliance, transparency, and consultation bookings.</p>
              <Link href="/work/wealth-acumen" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View Wealth Acumen Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <h2>Explore Related Software Engineering Disciplines</h2>
          <p>
            Bizleap Development provides specialized engineering services that complement our custom website builds:
          </p>
          <ul>
            <li>
              <Link href="/services/ecommerce-website-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                E-Commerce Website Development in Nagpur
              </Link> — High-volume storefronts, payment gateways, and inventory synchronization.
            </li>
            <li>
              <Link href="/services/mobile-app-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Mobile App Development in Nagpur
              </Link> — Cross-platform iOS and Android mobile engineering using React Native and Flutter.
            </li>
            <li>
              <Link href="/services/ui-ux-design-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                UI/UX Design Services in Nagpur
              </Link> — User research, interactive wireframing, and conversion-centred Figma design systems.
            </li>
            <li>
              <Link href="/services/nextjs-development" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Next.js Development Company
              </Link> — Specialized enterprise Next.js App Router engineering and legacy platform modernizations.
            </li>
          </ul>

          <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Looking for Search Engine Optimization or Paid Campaigns?</h4>
            <p style={{ margin: 0, fontSize: '0.925rem', color: '#555', lineHeight: 1.6 }}>
              Bizleap Development specializes exclusively in software, web, and mobile app engineering. For specialized SEO audits, Google Ads management, Meta performance marketing, and creative campaigns, our clients partner with our sister agency{' '}
              <a 
                href={SOCIAL_LINKS.marketingPartner} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}
              >
                BizLeap Digital Marketing Partner (bizleap.in)
              </a>.
            </p>
          </div>

          <div className={styles.ctaRow} style={{ marginTop: '3rem' }}>
            <Link href="/contact" className={styles.primaryCta}>
              Start Your Nagpur Website Project
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              View All Services
            </Link>
          </div>
        </article>

        {/* 6 Rendered FAQs with matching FAQPage Schema */}
        <div style={{ marginTop: '4rem' }}>
          <FAQSection
            faqs={websiteFaqs}
            title={
              <>
                Website Development <span className={styles.accentText}>FAQs</span>
              </>
            }
            subtitle="Common questions about our website engineering technologies, timelines, and delivery process in Nagpur."
            id="website-faq"
            renderSchema={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
