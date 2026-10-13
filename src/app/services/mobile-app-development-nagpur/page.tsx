import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME, BRAND_NAME } from '@/config/site';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in Nagpur | Bizleap',
  description:
    'Premium mobile app development company in Nagpur. We build high-performance iOS and Android applications using React Native, Flutter, and cloud APIs.',
  alternates: {
    canonical: '/services/mobile-app-development-nagpur',
  },
  openGraph: {
    title: 'Mobile App Development Company in Nagpur | Bizleap',
    description:
      'Premium mobile app development company in Nagpur. We build high-performance iOS and Android applications using React Native, Flutter, and cloud APIs.',
    url: `${SITE_URL}/services/mobile-app-development-nagpur`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company in Nagpur | Bizleap',
    description:
      'Premium mobile app development company in Nagpur. We build high-performance iOS and Android applications using React Native, Flutter, and cloud APIs.',
  },
};

export default function MobileAppDevelopmentNagpurPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/mobile-app-development-nagpur#service`,
    name: 'Mobile App Development Company in Nagpur',
    serviceType: 'Mobile App Development',
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
      'Native and cross-platform mobile app development for iOS and Android in Nagpur, Maharashtra using React Native and Flutter.',
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
          <span className={styles.badge}>iOS & Android Engineering • Nagpur</span>
          <h1 className={styles.title}>Mobile App Development Company in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development designs and engineers intuitive, high-performance mobile applications for iOS and Android in Nagpur. We build cross-platform apps using React Native and Flutter alongside custom backend APIs, delivering fluid 60fps animations, robust offline sync, and enterprise reliability.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Discuss Your Mobile App Idea
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              View Mobile & Web Portfolio
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Native Performance with Cross-Platform Efficiency</h2>
          <p>
            In today’s digital landscape, mobile apps represent the direct communication line between your company and your most valuable customers. Whether you require an internal enterprise operations application, an on-demand booking platform, a fitness tracking application, or an e-commerce mobile companion, an unstable or slow app immediately damages brand reputation.
          </p>
          <p>
            At Bizleap Development, our mobile app engineers focus on building cross-platform applications that look, feel, and perform identically to native software. By utilizing single-codebase architectures like React Native and Flutter, we cut development timelines in half while maintaining full access to native camera, Bluetooth, GPS, biometric security, and push notification APIs.
          </p>

          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Fluid 60fps UI Interactions</h4>
              <p>Hardware-accelerated gesture navigation, micro-interactions, and instant feedback that make your application feel exceptionally responsive.</p>
            </div>
            <div className={styles.card}>
              <h4>Offline-First Data Sync</h4>
              <p>Local SQLite and MMKV caching allowing users to browse content and log information seamlessly even in low-connectivity environments.</p>
            </div>
            <div className={styles.card}>
              <h4>Cloud API Engineering</h4>
              <p>Scalable RESTful and GraphQL backend endpoints built with Node.js, Python, and PostgreSQL with tokenized JWT authorization.</p>
            </div>
          </div>

          <h2>Our Mobile Application Engineering Services</h2>
          <p>
            From conceptual wireframes to App Store submission, our Nagpur team provides comprehensive lifecycle execution:
          </p>
          <ul>
            <li>
              <strong>iOS & Android App Engineering:</strong> Dual-platform deployment ensuring your application reaches the entire mobile ecosystem simultaneously.
            </li>
            <li>
              <strong>On-Demand Service & Booking Apps:</strong> Real-time geolocation, driver/service partner assignment, routing, and live status tracking (similar to transport and clinic apps).
            </li>
            <li>
              <strong>Retail & M-Commerce Applications:</strong> Mobile-optimized shopping apps with persistent cart states, one-tap biometric payments, and personalized recommendations.
            </li>
            <li>
              <strong>Enterprise Internal Tools:</strong> Secure workforce apps for field staff, inventory auditing, route management, and corporate reporting.
            </li>
          </ul>

          <div className={styles.todoBox}>
            <strong>TODO for Owner Review:</strong> Confirm mobile development technology specializations (e.g., React Native vs Flutter) and app store maintenance/annual deployment support pricing models.
          </div>

          <h2>Full Lifecycle App Store & Play Store Deployment</h2>
          <p>
            Navigating Apple App Store and Google Play Store submission policies can be complex. We handle the entire deployment pipeline on your behalf:
          </p>
          <ul>
            <li><strong>Security Auditing:</strong> Encryption of local data storage, SSL certificate pinning, and biometric biometric authentication (FaceID / Fingerprint).</li>
            <li><strong>Store Guidelines Compliance:</strong> Verification against Apple Human Interface Guidelines and Google Material Design standards to eliminate rejection risks.</li>
            <li><strong>Automated CI/CD Builds:</strong> Continuous integration pipelines compiling build artifacts and delivering internal beta tests through TestFlight and Play Console.</li>
            <li><strong>Analytics & Crash Reporting:</strong> Integration of Sentry, Firebase Crashlytics, and behavioral analytics to proactively monitor app stability in production.</li>
          </ul>

          <div className={styles.ctaRow} style={{ marginTop: '3rem' }}>
            <Link href="/contact" className={styles.primaryCta}>
              Schedule a Mobile App Strategy Call
            </Link>
            <Link href="/services/ui-ux-design-nagpur" className={styles.secondaryCta}>
              Learn About UI/UX Design
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
