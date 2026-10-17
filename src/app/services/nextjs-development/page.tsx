import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection, { FAQ } from '@/components/ui/FAQSection';
import { SITE_URL, SITE_NAME, BRAND_NAME, SOCIAL_LINKS } from '@/config/site';
import { ArrowRight, Code2, Server, Zap, Shield, Database, Cloud, RefreshCw, Cpu } from 'lucide-react';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'Next.js Development Company | Bizleap Development Services',
  description:
    'Expert Next.js development company in Nagpur. We engineer high-speed Next.js App Router web applications, headless commerce storefronts, and cloud APIs.',
  alternates: {
    canonical: '/services/nextjs-development',
  },
  openGraph: {
    title: 'Next.js Development Company | Bizleap Development Services',
    description:
      'Expert Next.js development company in Nagpur. We engineer high-speed Next.js App Router web applications, headless commerce storefronts, and cloud APIs.',
    url: `${SITE_URL}/services/nextjs-development`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Development Company | Bizleap Development Services',
    description:
      'Expert Next.js development company in Nagpur. We engineer high-speed Next.js App Router web applications, headless commerce storefronts, and cloud APIs.',
  },
};

const nextjsFaqs: FAQ[] = [
  {
    question: 'Why has Next.js App Router become the premier framework for modern web development?',
    answer: 'Next.js App Router fundamentally improves web performance through React Server Components (RSC). By executing data fetching, authentication, and HTML generation entirely on the server or at the edge, RSC drastically cuts the volume of JavaScript sent to the client browser. This delivers near-zero First Contentful Paint (FCP), eliminates client-side hydration bottlenecks, and achieves 95+ Core Web Vitals scores out of the box.',
  },
  {
    question: 'How do you migrate an existing WordPress or PHP website to Next.js without losing SEO rankings?',
    answer: 'We execute structured migration protocols. First, we map all existing URLs, canonical tags, and structured schema microdata from your legacy CMS. Next, we build equivalent or improved Next.js routes, establish permanent server-side 301 redirects for any altered paths, and verify indexing through Google Search Console. This preserves your accumulated domain authority while upgrading your website to modern edge speeds.',
  },
  {
    question: 'Can Next.js handle high-traffic spikes and enterprise-level scale?',
    answer: 'Yes. Next.js is utilized by many of the largest global web properties. Combined with Incremental Static Regeneration (ISR), static assets and pre-rendered pages are cached across worldwide Content Delivery Networks (CDNs) such as Vercel or Cloudflare. Pages serve instantly from edge caches in milliseconds without placing load on origin databases, allowing your application to handle traffic surges effortlessly.',
  },
  {
    question: 'What is the difference between Static Site Generation (SSG) and Server-Side Rendering (SSR) in Next.js?',
    answer: 'Static Site Generation (SSG) compiles pages into static HTML at build time, serving them with instantaneous CDN speed, making it ideal for marketing pages, documentation, and blogs. Server-Side Rendering (SSR) renders pages dynamically on each request, making it essential for authenticated dashboards, real-time pricing feeds, and personalized user states. Next.js allows us to seamlessly blend SSG, SSR, and ISR within a single application.',
  },
  {
    question: 'How does Next.js improve technical SEO compared to single-page applications (SPAs)?',
    answer: 'Traditional single-page React applications (like Create React App or standard Vite SPAs) send an empty HTML shell that relies entirely on client-side JavaScript execution, which can delay or impair crawler indexing. In contrast, Next.js renders the full HTML markup directly on the server. Search engine bots immediately receive complete, semantic HTML, rich Open Graph tags, canonical links, and Schema.org structured data on the initial crawl.',
  },
  {
    question: 'How can our enterprise initiate a Next.js development or modernization project?',
    answer: 'You can reach out through our contact form with your application requirements or legacy codebase details. Our Next.js engineering architects will analyze your existing architecture, review your performance goals, and provide a comprehensive proposal covering migration strategy, sprint roadmap, and deployment specifications.',
  },
];

export default function NextJsDevelopmentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/nextjs-development#service`,
    name: 'Next.js Development Company',
    serviceType: 'Next.js Web Application Development',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description:
      'Enterprise Next.js web application development, App Router engineering, React Server Components, and WordPress-to-Next.js migrations in Nagpur, India.',
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
          <span className={styles.badge}>Enterprise React &amp; Next.js Engineering</span>
          <h1 className={styles.title}>Next.js Development Company in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development is a specialized Next.js engineering studio. We architect blazingly fast web applications, enterprise platforms, and headless e-commerce storefronts using the Next.js App Router, React Server Components (RSC), and edge cloud computing.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Discuss Your Next.js Architecture
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              View Live Next.js Builds
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Why Next.js Is the Gold Standard for Production Web Applications</h2>
          <p>
            For years, development teams faced a difficult tradeoff: choose traditional server-rendered frameworks that are fast for search engine crawlers but clunky for interactive user experiences, or choose client-side single-page applications (SPAs) that feel fluid but suffer from heavy JavaScript bundles, slow initial page loads, and fragile SEO indexing.
          </p>
          <p>
            Next.js eliminates this compromise entirely. By pairing the component elegance of React with native server-side rendering, streaming HTML, and React Server Components, Next.js delivers the fastest possible time-to-first-byte (TTFB) while maintaining dynamic client-side interactivity. At Bizleap Development, our software engineers build full-stack web platforms on Next.js 15 and 16, maximizing Core Web Vitals compliance, developer maintainability, and organic search indexing.
          </p>

          <h2>Who Our Next.js Engineering Services Are Designed For</h2>
          <p>
            We deliver advanced Next.js development for organizations with rigorous technical standards:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>High-Growth Technology Companies &amp; SaaS</h4>
              <p>Platforms requiring dynamic authenticated customer portals, role-based dashboards, and rapid feature velocity without sacrificing initial load speeds.</p>
            </div>
            <div className={styles.card}>
              <h4>Headless E-Commerce Retailers</h4>
              <p>Brands decoupling their frontend from Shopify, Medusa, or custom ERPs to achieve sub-second product page loads and bespoke checkout funnels.</p>
            </div>
            <div className={styles.card}>
              <h4>Enterprises Migrating from Legacy CMS</h4>
              <p>Corporations upgrading outdated WordPress, Drupal, or PHP codebases onto modern edge-rendered Next.js platforms to eliminate plugin vulnerabilities.</p>
            </div>
            <div className={styles.card}>
              <h4>High-Traffic Content &amp; Media Portals</h4>
              <p>Publishers and institutional networks requiring Incremental Static Regeneration (ISR) to serve millions of cached page views with minimal origin server load.</p>
            </div>
          </div>

          <h2>What We Deliver: Deep Next.js Engineering Scope</h2>
          <p>
            Our Next.js engineering engagements provide enterprise-grade codebases built according to official Vercel architectural guidelines:
          </p>
          <ul>
            <li>
              <strong>App Router &amp; React Server Components (RSC):</strong> Modern route trees leveraging layouts, templates, error boundaries, and nested parallel routes, keeping non-interactive JavaScript off the client bundle.
            </li>
            <li>
              <strong>Streaming SSR with Suspense:</strong> Progressive HTML streaming allowing fast, instant page skeletons while data-heavy database queries resolve asynchronously in the background.
            </li>
            <li>
              <strong>Server Actions &amp; API Routes:</strong> Type-safe form mutations and REST/JSON endpoints executing directly on the server without needing third-party API gateway middleware.
            </li>
            <li>
              <strong>Automated Dynamic Metadata &amp; OpenGraph:</strong> Server-generated canonical URLs, Twitter cards, social preview images, and JSON-LD schema generated dynamically per route.
            </li>
            <li>
              <strong>Incremental Static Regeneration (ISR):</strong> Zero-downtime, on-demand or time-based background revalidation of static content, keeping cached pages up-to-date without full site rebuilds.
            </li>
          </ul>

          <h2>Our Next.js Engineering Tech Stack</h2>
          <p>
            We integrate Next.js into a modern, type-safe full-stack ecosystem:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Core Framework</h4>
              <p>Next.js 15/16 App Router paired with React 19 and strict TypeScript compiler configurations.</p>
            </div>
            <div className={styles.card}>
              <h4>Styling Architecture</h4>
              <p>CSS Modules with native scoped selectors and modern CSS variables for zero-runtime styling overhead.</p>
            </div>
            <div className={styles.card}>
              <h4>Database &amp; ORM</h4>
              <p>PostgreSQL and MongoDB integrated via Prisma ORM or Drizzle for type-safe query compilation and migration management.</p>
            </div>
            <div className={styles.card}>
              <h4>Edge Deployment</h4>
              <p>Global Vercel Edge Network or AWS CloudFront/Lambda@Edge with automated branch previews and continuous integration.</p>
            </div>
          </div>

          <h2>Our 5-Stage Next.js Engineering Methodology</h2>
          <p>
            We manage every development sprint through transparent, milestone-based code deliveries:
          </p>
          <ul>
            <li><strong>Stage 1 — Architecture &amp; Data Schema Design:</strong> Structuring domain models, API contracts, route hierarchies, and caching strategies before building UI.</li>
            <li><strong>Stage 2 — Component Library &amp; Server Layouts:</strong> Building accessible, semantic UI components, root layouts, navigation headers, and responsive footers.</li>
            <li><strong>Stage 3 — Server Component Integration &amp; Mutations:</strong> Writing secure server actions, database queries, authentication guards, and third-party webhook receivers.</li>
            <li><strong>Stage 4 — Core Web Vitals Profiling:</strong> Auditing bundle analyzer outputs, eliminating unnecessary client dependencies, and verifying 100/100 Lighthouse performance metrics.</li>
            <li><strong>Stage 5 — Production Cloud Deployment:</strong> Configuring custom domain DNS, SSL certificates, edge cache revalidation hooks, and error tracking via Sentry.</li>
          </ul>

          <h2>Selected Next.js Platforms Built by Bizleap Development</h2>
          <p>
            Review production Next.js applications engineered and deployed by our team:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>MIRAYA</h4>
              <p><strong>Next.js Fashion Commerce:</strong> High-performance e-commerce architecture built with Next.js App Router, CSS Modules, and fluid collection showcases.</p>
              <Link href="/work/miraya" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View MIRAYA Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>BINOUS Gym &amp; Lab</h4>
              <p><strong>Next.js Membership Platform:</strong> High-energy lifestyle web application with Stripe payments, dynamic tier billing, and international subscription flows.</p>
              <Link href="/work/binous" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View BINOUS Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>ASMA Training Institute</h4>
              <p><strong>Next.js Educational Portal:</strong> Fast academic web platform with modular curriculum displays, faculty portfolios, and digital admission inquiry funnels.</p>
              <Link href="/work/asma" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View ASMA Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <h2>Explore Related Engineering Disciplines</h2>
          <p>
            Connect your Next.js application with our full-stack capabilities:
          </p>
          <ul>
            <li>
              <Link href="/services/website-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Website Development Company in Nagpur
              </Link> — Custom corporate web platforms, institutional portals, and business sites.
            </li>
            <li>
              <Link href="/services/ecommerce-website-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                E-Commerce Website Development in Nagpur
              </Link> — High-conversion retail storefronts with Razorpay and Stripe checkouts.
            </li>
            <li>
              <Link href="/services/mobile-app-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Mobile App Development in Nagpur
              </Link> — Native feel iOS and Android mobile applications using React Native.
            </li>
            <li>
              <Link href="/services/ui-ux-design-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                UI/UX Design in Nagpur
              </Link> — Research-backed Figma prototypes and conversion-centred design systems.
            </li>
          </ul>

          <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Looking for Organic Growth or Paid Acquisition for Your Next.js App?</h4>
            <p style={{ margin: 0, fontSize: '0.925rem', color: '#555', lineHeight: 1.6 }}>
              Bizleap Development specializes strictly in software architecture, web engineering, and cloud deployment. For specialized search marketing, programmatic advertising, and performance marketing campaigns, our clients partner with our sister agency{' '}
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
              Start Your Next.js Architecture Build
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              Explore All Services
            </Link>
          </div>
        </article>

        {/* 6 Rendered FAQs with matching FAQPage Schema */}
        <div style={{ marginTop: '4rem' }}>
          <FAQSection
            faqs={nextjsFaqs}
            title={
              <>
                Next.js Engineering <span className={styles.accentText}>FAQs</span>
              </>
            }
            subtitle="Common questions regarding Next.js App Router, React Server Components, and legacy platform migrations."
            id="nextjs-faq"
            renderSchema={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
