import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection, { FAQ } from '@/components/ui/FAQSection';
import { SITE_URL, SITE_NAME, BRAND_NAME, SOCIAL_LINKS } from '@/config/site';
import { ArrowRight, Smartphone, Code2, Zap, Lock, Bell, BarChart3, Cloud, ShieldCheck } from 'lucide-react';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in Nagpur | Bizleap Development',
  description:
    'Custom mobile app development company in Nagpur. We build high-performance iOS and Android applications using React Native and Flutter with scalable cloud APIs.',
  alternates: {
    canonical: '/services/mobile-app-development-nagpur',
  },
  openGraph: {
    title: 'Mobile App Development Company in Nagpur | Bizleap Development',
    description:
      'Custom mobile app development company in Nagpur. We build high-performance iOS and Android applications using React Native and Flutter with scalable cloud APIs.',
    url: `${SITE_URL}/services/mobile-app-development-nagpur`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company in Nagpur | Bizleap Development',
    description:
      'Custom mobile app development company in Nagpur. We build high-performance iOS and Android applications using React Native and Flutter with scalable cloud APIs.',
  },
};

const mobileFaqs: FAQ[] = [
  {
    question: 'Should our business build a native app (Swift/Kotlin) or cross-platform (React Native/Flutter)?',
    answer: 'For 95% of commercial, retail, logistics, and service enterprises, modern cross-platform frameworks like React Native or Flutter are the optimal choice. They share a single unified codebase across both Apple iOS and Google Android, slashing development costs and maintenance overhead by nearly 50% while delivering 60 FPS animations, native hardware access, and rapid feature iterations.',
  },
  {
    question: 'How do you handle Apple App Store and Google Play Store submission and approval?',
    answer: 'We manage the complete store submission lifecycle from start to finish. Our team conducts pre-submission audits against Apple Human Interface Guidelines and Google Developer Policies, configures App Store Connect and Google Play Console credentials, compiles cryptographically signed production builds, and resolves any review feedback directly with Apple and Google review teams.',
  },
  {
    question: 'Can your mobile apps function offline when users have intermittent connectivity?',
    answer: 'Yes. For mobility, field service, retail, and internal corporate tools, we architect robust offline-first functionality using local client databases (such as SQLite or WatermelonDB). Changes made while offline are queued locally and automatically synchronized with the central cloud database as soon as network connectivity is restored, ensuring zero data loss.',
  },
  {
    question: 'How do you engineer push notifications to drive user engagement and retention?',
    answer: 'We integrate enterprise notification infrastructures like Firebase Cloud Messaging (FCM) and OneSignal. We configure segmented notification channels, automated transactional triggers (e.g. order dispatched, booking confirmed, payment received), and rich media notifications with actionable buttons that launch specific deep-linked screens within the app.',
  },
  {
    question: 'What is the typical development timeline for an iOS and Android mobile app?',
    answer: 'A standard cross-platform MVP application typically takes 4 to 8 weeks from initial requirements to app store deployment. Complex platforms featuring real-time GPS tracking, multi-role user dashboards, payment escrow, or video streaming typically require 8 to 12 weeks, including comprehensive beta testing via TestFlight and Google Play Internal Testing.',
  },
  {
    question: 'Who owns the intellectual property and source code of the completed mobile application?',
    answer: 'Upon project completion and final milestone settlement, your company retains 100% intellectual property ownership of the entire source code repository, UI design files, API documentation, and store developer account credentials. We provide clean, fully documented repositories with complete setup guides.',
  },
];

export default function MobileAppDevelopmentNagpurPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/mobile-app-development-nagpur#service`,
    name: 'Mobile App Development Company in Nagpur',
    serviceType: 'Mobile Application Development',
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
      'Cross-platform iOS and Android mobile app development, React Native engineering, Flutter applications, and backend API integration in Nagpur, Maharashtra.',
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
            { name: 'Mobile App Development Nagpur', url: '/services/mobile-app-development-nagpur' },
          ]}
        />

        <header className={styles.hero}>
          <span className={styles.badge}>iOS &amp; Android Engineering • Nagpur</span>
          <h1 className={styles.title}>Mobile App Development Company in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development engineers high-performance, intuitive mobile applications for iOS and Android. Built with React Native and Flutter, our mobile platforms combine native responsiveness, seamless offline caching, secure payment processing, and fluid gesture interactions that keep users engaged.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Discuss Your Mobile App Idea
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              View Live Applications
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Why Native Performance and Intuitive UX Define App Success</h2>
          <p>
            Users today expect mobile applications to launch instantly, respond effortlessly to touch gestures, and function reliably even with patchy cellular coverage. When an application stutters, suffers from memory leaks, or consumes excessive device battery, users uninstall it within seconds. Building a winning mobile application requires far more than wrapping a responsive website into a native shell; it demands genuine software engineering.
          </p>
          <p>
            At Bizleap Development, our mobile app engineering division in Nagpur crafts bespoke mobile experiences that bridge native operating system capabilities with modern cross-platform agility. Whether engineering an on-demand mobility platform, an internal field-workforce utility, a clinical healthcare portal, or a consumer m-commerce application, we write performant code that maximizes user retention.
          </p>

          <h2>Who Our Mobile App Development Services Are Engineered For</h2>
          <p>
            We partner with regional businesses, enterprise clients, and funded startups looking to build durable mobile products:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>On-Demand Logistics &amp; Transport Fleets</h4>
              <p>Fleet operators, cab services, and delivery networks requiring real-time geolocation tracking, driver assignment algorithms, and automated fare calculation.</p>
            </div>
            <div className={styles.card}>
              <h4>Healthcare &amp; Clinical Appointment Apps</h4>
              <p>Clinics, dental practices, and diagnostic labs needing automated doctor scheduling, secure digital prescription vaults, and instant push reminders.</p>
            </div>
            <div className={styles.card}>
              <h4>Retail &amp; Mobile-First Commerce</h4>
              <p>Consumer lifestyle brands and specialty retailers seeking to convert mobile browsers into recurring purchasers via one-tap biometrics and tailored feeds.</p>
            </div>
            <div className={styles.card}>
              <h4>Enterprise Operations &amp; Field Workforce Tools</h4>
              <p>Industrial companies and field service teams requiring offline-capable inspection tools, digital signature capture, and inventory audit apps.</p>
            </div>
          </div>

          <h2>What We Deliver: End-to-End Mobile App Capabilities</h2>
          <p>
            Our mobile development engagements cover every layer of technical execution, from architectural specification to store approval:
          </p>
          <ul>
            <li>
              <strong>Unified Cross-Platform Codebase:</strong> High-velocity engineering using React Native or Flutter to simultaneously target iOS and Android, ensuring feature parity while reducing maintenance overhead.
            </li>
            <li>
              <strong>Offline-First Data Architecture:</strong> Local caching and database persistence (SQLite/WatermelonDB) that enables uninterrupted workflow during network drops with automated cloud sync.
            </li>
            <li>
              <strong>Native Hardware &amp; Sensor Integration:</strong> Smooth integration with device camera, biometric authentication (Touch ID, Face ID, Fingerprint), GPS location services, Bluetooth, and accelerometer sensors.
            </li>
            <li>
              <strong>Real-Time Communication &amp; Alerts:</strong> WebSockets and Firebase Cloud Messaging (FCM) integration for instant chat, live tracking, and segmented push notifications.
            </li>
            <li>
              <strong>Scalable Backend &amp; API Infrastructure:</strong> High-concurrency Node.js and GraphQL/REST microservices hosted on AWS or Google Cloud, engineered for rapid response times.
            </li>
          </ul>

          <h2>Our Mobile Technology Stack</h2>
          <p>
            We build with premier modern frameworks that give your application a native look, feel, and performance:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Mobile Frameworks</h4>
              <p>React Native and Flutter for near-native 60 FPS UI rendering, smooth animations, and rapid multi-platform deployment.</p>
            </div>
            <div className={styles.card}>
              <h4>Backend Services</h4>
              <p>Node.js, Express, and NestJS backends with PostgreSQL or MongoDB databases and Redis caching layers.</p>
            </div>
            <div className={styles.card}>
              <h4>Cloud &amp; DevOps</h4>
              <p>AWS EC2/Lambda, Docker containerization, and automated CI/CD build pipelines using GitHub Actions and Fastlane.</p>
            </div>
            <div className={styles.card}>
              <h4>Crash &amp; Health Monitoring</h4>
              <p>Integration of Sentry and Firebase Crashlytics to catch runtime exceptions and monitor device performance in production.</p>
            </div>
          </div>

          <h2>Our 5-Stage Mobile Engineering Lifecycle</h2>
          <p>
            Every mobile build is executed under a rigorous delivery methodology designed to eliminate release bottlenecks:
          </p>
          <ul>
            <li><strong>Stage 1 — Product Strategy &amp; User Flow Architecture:</strong> Mapping technical user personas, core interaction paths, system dependencies, and backend integration requirements.</li>
            <li><strong>Stage 2 — UI/UX Wireframing &amp; Interactive Prototyping:</strong> Designing platform-specific human interface guidelines (iOS HIG and Android Material Design 3) in Figma.</li>
            <li><strong>Stage 3 — Mobile Sprint Engineering:</strong> Developing modular components, managing application state, implementing secure API authentication (JWT/OAuth), and writing unit tests.</li>
            <li><strong>Stage 4 — Real-Device QA &amp; Beta Testing:</strong> Deploying beta builds to real devices via Apple TestFlight and Google Play Internal Testing to audit performance across varying screen sizes and OS versions.</li>
            <li><strong>Stage 5 — Store Submission &amp; Post-Launch Warranty:</strong> Managing store metadata, privacy policy disclosures, security compliance reviews, and launch monitoring.</li>
          </ul>

          <h2>Selected Mobility &amp; Web App Builds by Our Studio</h2>
          <p>
            Explore real applications engineered and deployed by Bizleap Development:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>URBAN TAXI</h4>
              <p><strong>Fleet &amp; Mobility Logistics:</strong> Interactive fleet booking and route dispatch web application engineered with real-time route calculators.</p>
              <Link href="/work/urban-taxi" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View URBAN TAXI Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>BINOUS Gym &amp; Lab</h4>
              <p><strong>Fitness &amp; Lifestyle App:</strong> High-energy lifestyle commerce platform integrated with Stripe for frictionless member subscription workflows.</p>
              <Link href="/work/binous" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View BINOUS Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>Taubys</h4>
              <p><strong>Food Delivery &amp; Ordering:</strong> Mobile-optimized food ordering interface with instant checkout flows and direct fulfillment dispatch.</p>
              <Link href="/work/taubys" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View Taubys Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <h2>Explore Related Software Engineering Disciplines</h2>
          <p>
            Connect your mobile application with our full-stack web capabilities:
          </p>
          <ul>
            <li>
              <Link href="/services/website-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Website Development Company in Nagpur
              </Link> — High-performance corporate web portals and marketing landing pages.
            </li>
            <li>
              <Link href="/services/ecommerce-website-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                E-Commerce Website Development in Nagpur
              </Link> — Scalable online stores, custom carts, and multi-gateway payment processing.
            </li>
            <li>
              <Link href="/services/ui-ux-design-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                UI/UX Design in Nagpur
              </Link> — Mobile wireframing, bottom sheet gestures, and interactive Figma prototypes.
            </li>
            <li>
              <Link href="/services/nextjs-development" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Next.js Development Company
              </Link> — High-speed companion web portals, admin panels, and REST/GraphQL APIs.
            </li>
          </ul>

          <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Looking for App Store Optimization (ASO) or Paid User Acquisition?</h4>
            <p style={{ margin: 0, fontSize: '0.925rem', color: '#555', lineHeight: 1.6 }}>
              Bizleap Development specializes exclusively in mobile engineering, architecture, and deployment. For dedicated user acquisition funnels, App Store Optimization (ASO), and paid mobile advertising, explore our sister agency{' '}
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
              Schedule a Mobile App Strategy Call
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              Explore All Services
            </Link>
          </div>
        </article>

        {/* 6 Rendered FAQs with matching FAQPage Schema */}
        <div style={{ marginTop: '4rem' }}>
          <FAQSection
            faqs={mobileFaqs}
            title={
              <>
                Mobile App Development <span className={styles.accentText}>FAQs</span>
              </>
            }
            subtitle="Common questions regarding our cross-platform mobile engineering, store submissions, and backend architectures."
            id="mobile-faq"
            renderSchema={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
