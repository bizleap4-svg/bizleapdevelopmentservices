import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, LEGAL_NAME, BRAND_NAME, CONTACT_EMAIL, ADDRESS } from '@/config/site';
import styles from '../services/service-page.module.css';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Bizleap Development Services',
  description:
    'Review the terms of service and client engagement conditions for Bizleap Development Services (BizLeap India Pvt. Ltd., Nagpur). Quality engineering standards.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | Bizleap Development Services',
    description:
      'Review the terms of service and client engagement conditions for Bizleap Development Services (BizLeap India Pvt. Ltd., Nagpur). Quality engineering standards.',
    url: `${SITE_URL}/terms-and-conditions`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | Bizleap Development Services',
    description:
      'Review the terms of service and client engagement conditions for Bizleap Development Services (BizLeap India Pvt. Ltd., Nagpur). Quality engineering standards.',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.contentWrapper}>
        <Breadcrumbs items={[{ name: 'Terms & Conditions', url: '/terms-and-conditions' }]} />

        <header className={styles.hero}>
          <span className={styles.badge}>Service Terms • Commercial Agreement</span>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.lead}>
            Effective Date: October 2026. These Terms and Conditions govern your use of the Bizleap Development Services website (<a href={SITE_URL}>{SITE_URL}</a>) and any software development contracts executed with {LEGAL_NAME}.
          </p>
        </header>

        <article className={styles.bodyContent}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website, submitting inquiry forms, or entering into a Statement of Work (SOW) with {LEGAL_NAME}, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree to these terms, you must refrain from using this website or engaging our services.
          </p>

          <h2>2. Scope of Development Services</h2>
          <p>
            Bizleap Development provides custom software engineering, website development, mobile application programming, e-commerce architectures, and UI/UX design services. The precise scope, milestones, deliverables, payment terms, and timeline for any specific project are governed by an individualized Statement of Work executed between both parties.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All custom source code, design assets, and documentation produced for a client are assigned to the client upon full and final payment of all agreed project invoices, subject to standard non-exclusive rights for pre-existing open-source libraries (e.g., React, Next.js, MIT-licensed utilities).
          </p>
          <p>
            Bizleap Development retains the right to reference the completed work, project name, and publicly available screenshots in our portfolio, case studies, and marketing materials, unless a formal Non-Disclosure Agreement (NDA) with specific portfolio restrictions is explicitly executed in writing.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>
            Successful software delivery depends on collaborative partnership. The client agrees to:
          </p>
          <ul>
            <li>Provide timely feedback, design sign-offs, and necessary project collateral (logos, copy, product data, API credentials).</li>
            <li>Ensure all client-provided materials do not infringe upon any third-party intellectual property or copyright.</li>
            <li>Designate a primary project point of contact with decision-making authority.</li>
          </ul>

          <h2>5. Warranty, Support & Bug Fixing</h2>
          <p>
            We stand behind our code. All custom websites and applications delivered by Bizleap Development include a standard 30-day post-launch warranty period during which any defects or bugs deviating from the approved Statement of Work are remediated at zero additional cost.
          </p>
          <p>
            Subsequent maintenance, feature enhancements, server infrastructure management, and third-party API changes are covered under our ongoing support retainers.
          </p>

          <h2>6. Limitation of Liability & Governing Law</h2>
          <p>
            To the maximum extent permitted by applicable law, {LEGAL_NAME} shall not be liable for any indirect, incidental, consequential, or punitive damages arising from site downtime, third-party hosting outages, or cyber incidents beyond reasonable engineering control.
          </p>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any legal disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Nagpur, Maharashtra.
          </p>

          <h2>7. Contact Inquiries</h2>
          <p>
            For legal notices or questions regarding these terms:
          </p>
          <p>
            <strong>{LEGAL_NAME}</strong><br />
            Address: {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India<br />
            Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
