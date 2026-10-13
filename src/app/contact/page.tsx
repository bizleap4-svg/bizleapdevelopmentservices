import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContactForm from './ContactForm';
import {
  SITE_URL,
  SITE_NAME,
  BRAND_NAME,
  LEGAL_NAME,
  CONTACT_PHONE,
  CONTACT_PHONE_CLEAN,
  CONTACT_PHONE_ALT,
  CONTACT_PHONE_ALT_CLEAN,
  CONTACT_EMAIL,
  ADDRESS,
} from '@/config/site';
import styles from '../services/service-page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Bizleap Development Services Nagpur',
  description:
    'Contact Bizleap Development in Nagpur for website development, mobile apps, e-commerce, and UI/UX design. Request a consultation or project estimate.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Bizleap Development Services Nagpur',
    description:
      'Contact Bizleap Development in Nagpur for website development, mobile apps, e-commerce, and UI/UX design. Request a consultation or project estimate.',
    url: `${SITE_URL}/contact`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Bizleap Development Services Nagpur',
    description:
      'Contact Bizleap Development in Nagpur for website development, mobile apps, e-commerce, and UI/UX design. Request a consultation or project estimate.',
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#webpage`,
    name: 'Contact Bizleap Development Services',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
      telephone: CONTACT_PHONE_CLEAN,
      email: CONTACT_EMAIL,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className={styles.contentWrapper}>
        <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />

        <header className={styles.hero}>
          <span className={styles.badge}>Start a Project • Get in Touch</span>
          <h1 className={styles.title}>Contact Bizleap Development</h1>
          <p className={styles.lead}>
            Ready to build a high-performance website, mobile application, or custom e-commerce solution? Share your project requirements below, and our engineering team will get back to you within 24 hours.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', marginTop: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700 }}>Send Us a Message</h2>
            <ContactForm />
          </div>

          <aside style={{ backgroundColor: '#fafafa', padding: '2.5rem', borderRadius: '16px', border: '1px solid #eaeaea', height: 'fit-content' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', fontWeight: 700 }}>Direct Contact Details</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Headquarters & Office
                </strong>
                <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6, color: '#111' }}>
                  <strong>{LEGAL_NAME}</strong><br />
                  {ADDRESS.streetAddress}<br />
                  {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India
                </p>
              </div>

              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Direct Phone Lines
                </strong>
                <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
                  <a href={`tel:${CONTACT_PHONE_CLEAN}`} style={{ color: '#111', textDecoration: 'none', fontWeight: 600 }}>
                    {CONTACT_PHONE}
                  </a>
                  <span style={{ color: '#999', margin: '0 0.5rem' }}>/</span>
                  <a href={`tel:${CONTACT_PHONE_ALT_CLEAN}`} style={{ color: '#111', textDecoration: 'none', fontWeight: 600 }}>
                    {CONTACT_PHONE_ALT}
                  </a>
                </p>
              </div>

              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Email Inquiries
                </strong>
                <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#111', textDecoration: 'underline' }}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>

              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #e5e5e5' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Digital Marketing Partner
                </strong>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}>
                  For SEO, social media, and paid ads, contact our digital marketing arm at{' '}
                  <a href="https://www.bizleap.in" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: 600, textDecoration: 'underline' }}>
                    bizleap.in ↗
                  </a>.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
