import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, LEGAL_NAME, BRAND_NAME, CONTACT_EMAIL, ADDRESS } from '@/config/site';
import styles from '../services/service-page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bizleap Development Services',
  description:
    'Read the Privacy Policy of Bizleap Development Services (BizLeap India Pvt. Ltd., Nagpur). Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Bizleap Development Services',
    description:
      'Read the Privacy Policy of Bizleap Development Services (BizLeap India Pvt. Ltd., Nagpur). Learn how we collect, use, and protect your personal information.',
    url: `${SITE_URL}/privacy-policy`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Bizleap Development Services',
    description:
      'Read the Privacy Policy of Bizleap Development Services (BizLeap India Pvt. Ltd., Nagpur). Learn how we collect, use, and protect your personal information.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.contentWrapper}>
        <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

        <header className={styles.hero}>
          <span className={styles.badge}>Legal Transparency • Compliance</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lead}>
            Effective Date: October 2026. This Privacy Policy outlines how {LEGAL_NAME} (&ldquo;Bizleap Development&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, processes, and protects information gathered through our website (<a href={SITE_URL}>{SITE_URL}</a>).
          </p>
        </header>

        <article className={styles.bodyContent}>
          <h2>1. Information We Collect</h2>
          <p>
            When you visit our website or communicate with our engineering and sales teams, we may collect information in the following categories:
          </p>
          <ul>
            <li>
              <strong>Directly Provided Contact Details:</strong> When you submit a project inquiry through our contact form or contact us via email, we collect your name, business email address, phone number, company name, and project specifications.
            </li>
            <li>
              <strong>Automatically Collected Technical Data:</strong> When you navigate our pages, our servers automatically log non-personally identifiable technical telemetry including your IP address, browser type, operating system version, referral URLs, time spent on pages, and device viewport dimensions.
            </li>
            <li>
              <strong>Cookies and Local Storage:</strong> We use essential session cookies and performance telemetry to remember user preferences, maintain website security, and analyze aggregate traffic trends.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            Bizleap Development uses the collected data solely for legitimate business operations:
          </p>
          <ul>
            <li>To evaluate your project requirements and provide engineering estimates, architectural proposals, and technical consultations.</li>
            <li>To communicate project milestones, service agreements, and support deliverables.</li>
            <li>To optimize the performance, security, and Core Web Vitals of our web infrastructure.</li>
            <li>To comply with applicable Indian legal, taxation, and regulatory mandates.</li>
          </ul>

          <h2>3. Data Protection and Confidentiality</h2>
          <p>
            We implement industry-standard administrative, physical, and technical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of client information. All communications transmitted through our forms are encrypted using Transport Layer Security (TLS 1.3).
          </p>
          <p>
            We do not sell, rent, trade, or monetize your personal or corporate data to third-party data brokers or advertisers under any circumstances. Information is only shared with trusted cloud infrastructure providers (e.g., hosting providers and communication APIs) who are bound by strict non-disclosure obligations.
          </p>

          <h2>4. Your Data Protection Rights</h2>
          <p>
            In accordance with applicable data protection regulations and the Digital Personal Data Protection Act (DPDP), you possess the right to:
          </p>
          <ul>
            <li>Request a copy of the personal information we hold concerning your inquiries.</li>
            <li>Request corrections to any inaccurate or incomplete personal data.</li>
            <li>Request the deletion or erasure of your contact details from our records, provided there are no pending contractual or legal retention requirements.</li>
            <li>Withdraw your consent to receive non-essential business communications at any time.</li>
          </ul>

          <h2>5. Contact Our Privacy Officer</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data management practices, please contact:
          </p>
          <p>
            <strong>{LEGAL_NAME}</strong><br />
            Attention: Privacy & Compliance Officer<br />
            Address: {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India<br />
            Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
