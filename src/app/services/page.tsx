import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import styles from '../page.module.css';
import { ArrowRight, Code2, Smartphone, Layout, Server, Zap, Database, Cloud, BarChart3, Fingerprint, MousePointerClick, ShieldCheck, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';
import { SITE_URL, SITE_NAME, BRAND_NAME, BIZLEAP_CONTACT_URL } from '@/config/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Web, App & E-Commerce Development Services Nagpur | Bizleap',
  },
  description:
    'Explore custom website development, Next.js engineering, mobile app development, e-commerce solutions, and UI/UX design in Nagpur by Bizleap Development.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Web, App & E-Commerce Development Services Nagpur | Bizleap',
    description:
      'Explore custom website development, Next.js engineering, mobile app development, e-commerce solutions, and UI/UX design in Nagpur by Bizleap Development.',
    url: `${SITE_URL}/services`,
    type: 'website',
    siteName: BRAND_NAME,
    images: [
      {
        url: '/images/full_stack_final.png',
        width: 1200,
        height: 630,
        alt: 'Bizleap Web, App & E-Commerce Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web, App & E-Commerce Development Services Nagpur | Bizleap',
    description:
      'Explore custom website development, Next.js engineering, mobile app development, e-commerce solutions, and UI/UX design in Nagpur by Bizleap Development.',
    images: ['/images/full_stack_final.png'],
    creator: '@bizleap',
  },
};

const servicesFaqs = [
  {
    question: 'What web development technologies do you use in Nagpur?',
    answer: 'As a modern website development company in Nagpur, we build scalable platforms using React, Next.js, Node.js, and TypeScript. This ensures blazing fast load times, enterprise security, and strong search engine rankings.',
  },
  {
    question: 'Do you provide full-stack web development services in Nagpur?',
    answer: 'Yes, we provide end-to-end full-stack web development services in Nagpur and across Maharashtra. Our services include frontend design, backend architecture, API integrations, database design, and cloud deployment.',
  },
  {
    question: 'How much does a custom e-commerce website cost in Nagpur?',
    answer: 'E-commerce development costs vary based on features, inventory size, custom integrations, and whether you need Shopify or a fully custom Next.js/Node.js stack. Contact us for a transparent estimate tailored to your enterprise goals.',
  },
  {
    question: 'Do you offer mobile app development services in Nagpur?',
    answer: 'Yes, alongside web engineering, we develop high-performance mobile applications in Nagpur for iOS and Android using React Native and Flutter, with seamless backend API integrations.',
  },
  {
    question: 'Can you redesign our existing website for better speed and conversions?',
    answer: 'Absolutely. If your current website is slow, outdated, or failing to convert visitors, our UI/UX and web engineering teams can completely re-architect it with Next.js for maximum performance and conversion rates.',
  },
];

const services = [
  {
    title: <>Full-Stack <br /><span className={styles.accentText}>Web Development</span></>,
    desc: 'We build highly scalable, blazingly fast, and completely custom web applications using modern tech stacks like Next.js, React, and Node.js. Engineered to handle high traffic and deliver flawless user experiences.',
    mainIcon: Code2,
    serviceUrl: '/services/website-development-nagpur',
    secondaryUrl: '/services/nextjs-development',
    secondaryLabel: 'Next.js Engineering',
    tags: [
      { name: 'Custom Logic', icon: Code2 },
      { name: 'Architecture', icon: Database },
      { name: 'Cloud Deploy', icon: Cloud }
    ],
    img: '/images/full_stack_final.png',
    altText: 'Full-Stack Web Development in Nagpur'
  },
  {
    title: <>Premium <br /><span className={styles.accentText}>App Development</span></>,
    desc: 'From iOS to Android, we engineer fluid, high-performance mobile applications that users love. We focus on seamless animations, battery efficiency, offline caching, and intuitive navigation.',
    mainIcon: Smartphone,
    serviceUrl: '/services/mobile-app-development-nagpur',
    secondaryUrl: BIZLEAP_CONTACT_URL,
    secondaryLabel: 'Start a Project',
    tags: [
      { name: 'Native Feel', icon: Smartphone },
      { name: 'High Speed', icon: Zap },
      { name: 'Analytics', icon: BarChart3 }
    ],
    img: '/images/app_mockup_4k.jpg',
    altText: 'Mobile App Development in Nagpur'
  },
  {
    title: <>High-End <br /><span className={styles.accentText}>UI/UX Design</span></>,
    desc: "We design interfaces that don't just look stunning—they convert. By combining psychological design principles with modern aesthetics, we create digital products that feel effortless and memorable.",
    mainIcon: Layout,
    serviceUrl: '/services/ui-ux-design-nagpur',
    secondaryUrl: BIZLEAP_CONTACT_URL,
    secondaryLabel: 'Start a Project',
    tags: [
      { name: 'Wireframing', icon: Layout },
      { name: 'Brand Identity', icon: Fingerprint },
      { name: 'Prototyping', icon: MousePointerClick }
    ],
    img: '/images/b582ee14-957f-4386-bc01-00494302c534.png',
    altText: 'High-End UI/UX Design Services'
  },
  {
    title: <>Enterprise <br /><span className={styles.accentText}>E-Commerce</span></>,
    desc: 'We architect robust e-commerce platforms that process high-volume transactions with lightning-fast checkouts, custom payment gateways, and advanced inventory management systems.',
    mainIcon: ShoppingCart,
    serviceUrl: '/services/ecommerce-website-development-nagpur',
    secondaryUrl: BIZLEAP_CONTACT_URL,
    secondaryLabel: 'Start a Project',
    tags: [
      { name: 'Scalability', icon: Server },
      { name: 'Security', icon: ShieldCheck },
      { name: 'Conversions', icon: Zap }
    ],
    img: '/images/e3f7114d-6823-4c2b-a29f-0ee669d486cc.png',
    altText: 'Enterprise E-Commerce Development in Nagpur'
  }
];

export default function ServicesPage() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#web-development`,
        'name': 'Full-Stack Web Development',
        'provider': {
          '@type': 'Organization',
          'name': SITE_NAME,
          'url': SITE_URL,
        },
        'description':
          'Highly scalable, blazingly fast, and completely custom web applications built with Next.js, React, and Node.js.',
        'areaServed': [
          { '@type': 'City', 'name': 'Nagpur' },
          { '@type': 'Country', 'name': 'India' },
        ],
        'serviceType': 'Web Development',
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#mobile-app-development`,
        'name': 'Mobile App Development',
        'provider': {
          '@type': 'Organization',
          'name': SITE_NAME,
          'url': SITE_URL,
        },
        'description':
          'Native and cross-platform mobile apps for iOS and Android with fluid animations and backend integrations.',
        'areaServed': [
          { '@type': 'City', 'name': 'Nagpur' },
          { '@type': 'Country', 'name': 'India' },
        ],
        'serviceType': 'App Development',
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#ecommerce-development`,
        'name': 'Enterprise E-Commerce Development',
        'provider': {
          '@type': 'Organization',
          'name': SITE_NAME,
          'url': SITE_URL,
        },
        'description':
          'Conversion-focused custom and Shopify e-commerce platforms with payment integrations and inventory systems.',
        'areaServed': [
          { '@type': 'City', 'name': 'Nagpur' },
          { '@type': 'Country', 'name': 'India' },
        ],
        'serviceType': 'E-Commerce Development',
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#uiux-design`,
        'name': 'UI/UX Design & Prototyping',
        'provider': {
          '@type': 'Organization',
          'name': SITE_NAME,
          'url': SITE_URL,
        },
        'description':
          'Modern UI/UX design, wireframing, interactive prototyping, and brand identity design that drives conversions.',
        'areaServed': [
          { '@type': 'City', 'name': 'Nagpur' },
          { '@type': 'Country', 'name': 'India' },
        ],
        'serviceType': 'UI/UX Design',
      },
    ],
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      
      <section className={`${styles.heroSplit} ${styles.servicesHero}`} style={{ minHeight: '100vh', backgroundColor: '#f5f2f1' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image 
            src="/images/94c6354f-1211-49bc-8953-58898d5f2dbb.png" 
            alt="Bizleap Development Services Hero Background" 
            fill 
            className={styles.servicesHeroImage}
            priority
          />
        </div>
        <div className={styles.heroSplitGrid} style={{ minHeight: '100vh', alignItems: 'center' }}>
          <div className={styles.heroSplitLeft} style={{ padding: '0 5vw', justifyContent: 'center', height: '100%', paddingTop: '8rem' }}>
            <Breadcrumbs items={[{ name: 'Services', url: '/services' }]} />
            <h1 className={`${styles.heroSplitTitle} ${styles.servicesHeroTitle}`}>
              <span>Our</span> <span className={styles.accent}>Expertise.</span>
            </h1>
            <p className={`${styles.heroSplitSubline} ${styles.servicesHeroSubline}`} style={{ maxWidth: '450px', fontSize: '1.15rem', marginLeft: '0.25rem' }}>
              We engineer custom websites, mobile applications, and scalable digital architectures that drive measurable business growth.
            </p>
          </div>
          <div className={styles.hiddenMobile}></div>
        </div>
      </section>
      
      {/* Premium Bento Grid Layout */}
      <section className={styles.bentoGridSection}>
        <div className={styles.bentoGrid}>
          {services.map((s, idx) => (
            <div key={idx} className={styles.bentoCard}>
              
              <div className={styles.bentoContent}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoTitleIcon}>
                    <s.mainIcon size={26} strokeWidth={2.5} />
                  </div>
                  <h2 className={styles.bentoTitle}>{s.title}</h2>
                </div>
                
                <p className={styles.bentoDesc}>{s.desc}</p>
                
                <div className={styles.bentoTags}>
                  {s.tags.map((Tag, i) => (
                    <span key={i} className={styles.bentoTag}>
                      <Tag.icon size={14} /> {Tag.name}
                    </span>
                  ))}
                </div>

                <div className={styles.bentoActions}>
                  <Link 
                    href={s.serviceUrl} 
                    className={styles.bentoBtnPrimary}
                  >
                    Explore Service <ArrowRight size={15} />
                  </Link>
                  {s.secondaryUrl && (
                    s.secondaryUrl.startsWith('http') ? (
                      <a 
                        href={s.secondaryUrl} 
                        className={styles.bentoBtnSecondary}
                      >
                        {s.secondaryLabel} <ArrowRight size={15} />
                      </a>
                    ) : (
                      <Link 
                        href={s.secondaryUrl} 
                        className={styles.bentoBtnSecondary}
                      >
                        {s.secondaryLabel} <ArrowRight size={15} />
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div className={styles.bentoVisual}>
                <Image 
                  src={s.img} 
                  alt={s.altText} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            </div>
          ))}
        </div>
      </section>

      <FAQSection 
        faqs={servicesFaqs} 
        title={<>Service <span style={{ color: 'var(--accent-yellow)' }}>FAQs</span></>} 
        subtitle="Common questions about our web and app development services in Nagpur."
      />

      <Footer />
    </main>
  );
}
