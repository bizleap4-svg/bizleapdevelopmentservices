import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection, { FAQ } from '@/components/ui/FAQSection';
import { SITE_URL, SITE_NAME, BRAND_NAME, SOCIAL_LINKS } from '@/config/site';
import { ArrowRight, ShoppingCart, CreditCard, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Truck } from 'lucide-react';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'E-Commerce Website Development in Nagpur | Bizleap Development',
  description:
    'Custom e-commerce website development in Nagpur. We engineer high-converting online storefronts, payment gateways, and scalable retail platforms.',
  alternates: {
    canonical: '/services/ecommerce-website-development-nagpur',
  },
  openGraph: {
    title: 'E-Commerce Website Development in Nagpur | Bizleap Development',
    description:
      'Custom e-commerce website development in Nagpur. We engineer high-converting online storefronts, payment gateways, and scalable retail platforms.',
    url: `${SITE_URL}/services/ecommerce-website-development-nagpur`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Website Development in Nagpur | Bizleap Development',
    description:
      'Custom e-commerce website development in Nagpur. We engineer high-converting online storefronts, payment gateways, and scalable retail platforms.',
  },
};

const ecommerceFaqs: FAQ[] = [
  {
    question: 'Should our retail business choose custom Next.js e-commerce or Shopify?',
    answer: 'The choice depends on your business model and scaling goals. Shopify is effective for straightforward retail catalogues with standard checkout requirements. However, custom Next.js headless storefronts provide unmatched advantages: sub-second page loads, complete freedom over checkout UX, zero ongoing third-party app subscription fees, deep custom B2B pricing logic, and complete ownership of your customer data and technical architecture.',
  },
  {
    question: 'Which Indian and international payment gateways do you integrate?',
    answer: 'We integrate all leading payment gateway providers compliant with RBI tokenization regulations and international PCI-DSS protocols. In India, we routinely integrate Razorpay, Cashfree, PayU, and CCAvenue with support for UPI, Net Banking, credit/debit cards, and EMI options. For international commerce, we configure Stripe and PayPal with multi-currency dynamic conversion.',
  },
  {
    question: 'Can you synchronize our online store with our existing ERP or warehouse inventory?',
    answer: 'Yes. Our software engineers build secure automated webhooks and bi-directional REST APIs that synchronize your online catalogue with warehouse management systems, Tally, Zoho Inventory, SAP, or proprietary enterprise ERP databases. This prevents overselling, synchronizes stock counts in real-time, and automates order fulfillment workflows.',
  },
  {
    question: 'How do you optimize mobile e-commerce checkout speed to reduce cart abandonment?',
    answer: 'We eliminate checkout friction through thumb-zone optimized interfaces, instant address autofill, single-screen checkouts, automated OTP-based authentication, and localized UPI intent triggers on mobile devices. By ensuring the checkout step completes in seconds without page reloads, we significantly lower abandoned cart drop-offs.',
  },
  {
    question: 'Do you build B2B wholesale e-commerce portals with tiered customer pricing?',
    answer: 'Yes. In addition to direct-to-consumer (DTC) storefronts, we build specialized B2B wholesale platforms. These portals feature customer verification, tiered wholesale pricing, minimum order quantities (MOQ), bulk order quotation requests, tax invoice generation (GST), and repeat reordering dashboards.',
  },
  {
    question: 'How does Bizleap Development implement rich product snippet SEO for search engines?',
    answer: 'We implement complete Schema.org Product, Offer, AggregateRating, and ItemList microdata into every product page. This allows Google and other search engines to display rich snippets directly on search results pages, showing product prices, stock availability, ratings, and shipping information, which dramatically increases organic click-through rates.',
  },
];

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
      'Custom e-commerce website development, headless commerce storefronts, payment gateway integrations, and online retail architectures in Nagpur, Maharashtra.',
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
          <span className={styles.badge}>Online Retail Engineering • Nagpur</span>
          <h1 className={styles.title}>E-Commerce Website Development in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development engineers high-performance, conversion-focused e-commerce storefronts and custom retail platforms. We build lightning-fast online stores equipped with seamless payment gateways, automated inventory management, and intuitive mobile checkouts that maximize average order value.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Discuss Your E-Commerce Store
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              View Live Storefront Builds
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Engineering Storefronts Built for Revenue and Conversion</h2>
          <p>
            In modern online retail, page loading speed directly impacts the bottom line. Research across major global retailers consistently demonstrates that every additional 100 milliseconds of latency results in a measurable decline in checkout conversions. When potential shoppers in Nagpur, across India, or abroad encounter a sluggish product catalogue or a convoluted multi-step checkout form, they abandon their carts and purchase from competitors.
          </p>
          <p>
            At Bizleap Development, our e-commerce engineering practice replaces sluggish off-the-shelf templates with custom, high-velocity storefront architectures. By utilizing modern React frameworks, Next.js App Router, edge image optimization, and lightweight client state management, we ensure your entire catalogue loads instantaneously, browsing remains fluid on mobile devices, and customer transactions execute without friction.
          </p>

          <h2>Who Our E-Commerce Development Services Are Designed For</h2>
          <p>
            We partner with growing merchants and established enterprises across Central India and nationally to build scalable digital commerce solutions:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Direct-to-Consumer (DTC) Fashion &amp; Apparel Brands</h4>
              <p>Clothing brands, boutique ethnic wear labels, and footwear merchants requiring visual lookbooks, instant variant switching, and fluid size selection.</p>
            </div>
            <div className={styles.card}>
              <h4>Jewellery &amp; Luxury Goods Retailers</h4>
              <p>Fine jewellery stores, gemstone dealers, and luxury lifestyle brands requiring high-trust security protocols, appointment scheduling, and custom quote workflows.</p>
            </div>
            <div className={styles.card}>
              <h4>B2B Manufacturers &amp; Wholesale Suppliers</h4>
              <p>Industrial distributors, corporate apparel providers, and bulk goods suppliers requiring tier-based pricing models, minimum order quantities, and custom invoicing.</p>
            </div>
            <div className={styles.card}>
              <h4>Artisanal Food, Bakeries &amp; Quick Service Dining</h4>
              <p>Local culinary brands, bakeries, and cloud kitchens requiring radius-based local delivery rules, daily fresh inventory caps, and instant UPI mobile ordering.</p>
            </div>
          </div>

          <h2>What We Deliver: Complete Commerce Architecture</h2>
          <p>
            Every e-commerce solution engineered by our team includes complete technical, transactional, and operational infrastructure:
          </p>
          <ul>
            <li>
              <strong>Custom Storefront &amp; Catalogue Engineering:</strong> Dynamic filtering by size, color, brand, and price, with instant client-side transitions and zero page reloads.
            </li>
            <li>
              <strong>Secure Indian &amp; Global Payment Integration:</strong> Frictionless integration of Razorpay, Cashfree, PayU, Stripe, and Apple Pay/Google Pay with full RBI compliance and 3D Secure verification.
            </li>
            <li>
              <strong>Optimized Mobile Checkout Funnel:</strong> One-page or streamlined checkout workflows with autofill, postal code validation, and localized UPI intent triggers for rapid payment completion.
            </li>
            <li>
              <strong>Inventory &amp; Order Management Dashboards:</strong> Administrative control centers allowing your operations team to track orders, manage stock levels, update SKU pricing, and print shipping labels.
            </li>
            <li>
              <strong>Automated Logistics &amp; Courier Integration:</strong> Webhook connections with logistics aggregators such as Shiprocket, Delhivery, and Blue Dart for automated airway bill (AWB) generation and real-time customer tracking notifications.
            </li>
          </ul>

          <h2>Our Modern E-Commerce Technology Stack</h2>
          <p>
            We construct commerce architectures using robust, battle-tested technologies that eliminate vendor lock-in and support high concurrent traffic:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Frontend Storefront</h4>
              <p>Next.js with React Server Components for instantaneous initial product page loads and near-zero JavaScript bundle sizes.</p>
            </div>
            <div className={styles.card}>
              <h4>Backend &amp; Commerce APIs</h4>
              <p>Scalable Node.js microservices, MedusaJS headless commerce engines, or custom Shopify Storefront API integrations.</p>
            </div>
            <div className={styles.card}>
              <h4>Database &amp; Caching</h4>
              <p>PostgreSQL relational models for ACID transaction safety, backed by Redis in-memory caches for instant product catalog lookups.</p>
            </div>
            <div className={styles.card}>
              <h4>Edge Media Optimization</h4>
              <p>Automated conversion of high-resolution product photography into responsive WebP and AVIF formats delivered via global CDNs.</p>
            </div>
          </div>

          <h2>Our 5-Stage E-Commerce Engineering Process</h2>
          <p>
            Every commerce deployment is executed under strict quality milestones to safeguard inventory data and customer transactions:
          </p>
          <ul>
            <li><strong>Stage 1 — Catalogue &amp; Workflow Architecture:</strong> We map product taxonomy, variant structures, shipping zones, tax rules (GST), and payment workflows before starting design.</li>
            <li><strong>Stage 2 — High-Fidelity UX &amp; Prototyping:</strong> We design desktop and mobile shopping interfaces in Figma, including cart flyouts, product detail pages (PDP), and multi-step checkouts.</li>
            <li><strong>Stage 3 — Storefront &amp; API Development:</strong> Our team codes the responsive frontend, establishes secure database schemas, and connects payment gateways and warehouse webhooks.</li>
            <li><strong>Stage 4 — Transactional QA &amp; Security Auditing:</strong> End-to-end sandbox testing of credit cards, UPI flows, failed payment handling, webhook retries, and SSL encryption.</li>
            <li><strong>Stage 5 — Launch, Indexing &amp; Monitoring:</strong> Production deployment on edge cloud infrastructure, Schema.org product data verification in Google Search Console, and continuous performance tracking.</li>
          </ul>

          <h2>Live E-Commerce Case Studies Built by Bizleap Development</h2>
          <p>
            Review successful digital storefronts engineered and launched by our Nagpur team:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>MIRAYA</h4>
              <p><strong>Fashion &amp; Apparel Retail:</strong> High-conversion fashion e-commerce storefront with fluid collection showcases and responsive mobile browsing.</p>
              <Link href="/work/miraya" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View MIRAYA Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>SUKO Corporate Wear</h4>
              <p><strong>B2B &amp; Apparel Commerce:</strong> Scalable Next.js platform tailored for corporate uniform catalogues and bulk quotation inquiries.</p>
              <Link href="/work/suko" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View SUKO Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>Taubys</h4>
              <p><strong>Food &amp; Bakery Delivery:</strong> Visual menu ordering platform with local delivery scheduling, inventory caps, and mobile payment processing.</p>
              <Link href="/work/taubys" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View Taubys Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <h2>Explore Related Engineering Disciplines</h2>
          <p>
            Complement your e-commerce platform with our specialized software services:
          </p>
          <ul>
            <li>
              <Link href="/services/website-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Website Development Company in Nagpur
              </Link> — High-performance corporate websites and enterprise portals.
            </li>
            <li>
              <Link href="/services/mobile-app-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Mobile App Development in Nagpur
              </Link> — Native feel iOS and Android e-commerce shopping apps.
            </li>
            <li>
              <Link href="/services/ui-ux-design-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                UI/UX Design in Nagpur
              </Link> — Checkout optimization, cart usability audits, and interactive design systems.
            </li>
            <li>
              <Link href="/services/nextjs-development" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Next.js Development Company
              </Link> — Headless e-commerce storefronts and high-speed API integrations.
            </li>
          </ul>

          <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Need Paid Ad Funnels or Meta Ads for Your Store?</h4>
            <p style={{ margin: 0, fontSize: '0.925rem', color: '#555', lineHeight: 1.6 }}>
              Bizleap Development focuses purely on commerce engineering and technical infrastructure. For performance advertising, Meta Ads campaigns, and Google Shopping management, our clients partner with our sister agency{' '}
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
              Start Your E-Commerce Store Build
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              Explore All Services
            </Link>
          </div>
        </article>

        {/* 6 Rendered FAQs with matching FAQPage Schema */}
        <div style={{ marginTop: '4rem' }}>
          <FAQSection
            faqs={ecommerceFaqs}
            title={
              <>
                E-Commerce Development <span className={styles.accentText}>FAQs</span>
              </>
            }
            subtitle="Common questions about our online store architecture, payment gateways, and checkout engineering in Nagpur."
            id="ecommerce-faq"
            renderSchema={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
