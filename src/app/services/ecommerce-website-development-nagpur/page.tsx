import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME, BRAND_NAME } from '@/config/site';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'E-Commerce Website Development in Nagpur | Bizleap',
  description:
    'Custom e-commerce website development company in Nagpur. Scalable online stores, Shopify builds, payment gateways, and high-conversion checkouts.',
  alternates: {
    canonical: '/services/ecommerce-website-development-nagpur',
  },
  openGraph: {
    title: 'E-Commerce Website Development in Nagpur | Bizleap',
    description:
      'Custom e-commerce website development company in Nagpur. Scalable online stores, Shopify builds, payment gateways, and high-conversion checkouts.',
    url: `${SITE_URL}/services/ecommerce-website-development-nagpur`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Website Development in Nagpur | Bizleap',
    description:
      'Custom e-commerce website development company in Nagpur. Scalable online stores, Shopify builds, payment gateways, and high-conversion checkouts.',
  },
};

export default function EcommerceWebsiteDevelopmentNagpurPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/ecommerce-website-development-nagpur#service`,
    name: 'E-Commerce Website Development Company in Nagpur',
    serviceType: 'E-Commerce Development',
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
      'Custom e-commerce web development, headless commerce, payment gateway integration, and high-conversion online stores in Nagpur.',
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
            { name: 'E-Commerce Development Nagpur', url: '/services/ecommerce-website-development-nagpur' },
          ]}
        />

        <header className={styles.hero}>
          <span className={styles.badge}>Scalable Online Retail • Nagpur</span>
          <h1 className={styles.title}>E-Commerce Website Development Company in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development builds high-conversion e-commerce websites and custom digital storefronts for retail brands, fashion labels, and wholesale merchants in Nagpur. From custom Next.js storefronts to high-volume Shopify setups, we build digital retail experiences engineered to maximize transaction velocity and customer retention.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Launch Your E-Commerce Store
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              Explore E-Commerce Builds
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Digital Commerce Engineered for Conversion Velocity</h2>
          <p>
            Running a successful online retail brand requires far more than listing products on a generic template. Modern shoppers demand sub-second page loads, instant search and filtering, frictionless mobile navigation, and secure, single-step payment checkouts. Even a one-second delay in mobile load time can reduce conversion rates by upwards of 20%.
          </p>
          <p>
            At Bizleap Development, our software engineers build high-performance e-commerce architectures tailored to your business model. We integrate dependable payment gateways (UPI, Razorpay, Cashfree, Stripe, PayU), real-time inventory management, shipping logistics APIs, and automated order notification systems.
          </p>

          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Lightning-Fast Checkouts</h4>
              <p>Optimized one-page checkout experiences designed specifically for Indian consumers, featuring UPI auto-redirect, credit cards, and COD verification.</p>
            </div>
            <div className={styles.card}>
              <h4>Scalable Product Catalogues</h4>
              <p>Structured database architectures capable of handling thousands of SKUs, complex product variations, dynamic pricing, and stock alerts.</p>
            </div>
            <div className={styles.card}>
              <h4>Logistics & ERP Integrations</h4>
              <p>Direct integration with automated shipping aggregators (Shiprocket, Delhivery, Bluedart) for automated label generation and tracking.</p>
            </div>
          </div>

          <h2>Custom Next.js Storefronts vs Shopify</h2>
          <p>
            We help retail businesses select the right e-commerce architecture based on their catalogue complexity and growth targets:
          </p>
          <ul>
            <li>
              <strong>Headless / Custom Next.js Storefronts:</strong> Ideal for ambitious brands requiring bespoke UI design, extreme page speed, zero recurring app subscription costs, and full control over database logic.
            </li>
            <li>
              <strong>Custom Shopify Development:</strong> Tailored Shopify store setup, Liquid theme customizations, private app connections, and checkout enhancements for established merchant workflows.
            </li>
            <li>
              <strong>B2B Wholesale Portals:</strong> Specialized B2B platforms featuring tiered wholesale pricing, minimum order quantities (MOQ), bulk order quotation requests, and credit terms.
            </li>
            <li>
              <strong>Multi-Vendor Marketplace Platforms:</strong> Scalable marketplaces featuring vendor onboarding dashboards, split commission handling, and automated payouts.
            </li>
          </ul>

          <div className={styles.todoBox}>
            <strong>TODO for Owner Review:</strong> Confirm preferred payment gateway partner rates, local logistics integrations in Central India, and typical client delivery timelines (e.g. 3–5 weeks).
          </div>

          <h2>Security, Performance & Technical SEO for Retail</h2>
          <p>
            Every e-commerce build shipped by Bizleap Development adheres to rigorous compliance and indexing standards:
          </p>
          <ul>
            <li><strong>PCI-DSS Compliance:</strong> All financial transactions are securely tokenized through encrypted gateways, safeguarding sensitive customer card data.</li>
            <li><strong>Rich Product Schema Markup:</strong> Implementation of Schema.org <code>Product</code>, <code>Offer</code>, and <code>AggregateRating</code> structured data so your products display price, availability, and review rich snippets on Google search results.</li>
            <li><strong>Automated Image Optimization:</strong> High-resolution product photography compressed dynamically into Next.js responsive WebP and AVIF formats without visual degradation.</li>
            <li><strong>Abandoned Cart Recovery:</strong> Automated notification funnels to re-engage prospective buyers via WhatsApp and email automation.</li>
          </ul>

          <div className={styles.ctaRow} style={{ marginTop: '3rem' }}>
            <Link href="/contact" className={styles.primaryCta}>
              Book a Free E-Commerce Consultation
            </Link>
            <Link href="/services/website-development-nagpur" className={styles.secondaryCta}>
              View Web Development Services
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
