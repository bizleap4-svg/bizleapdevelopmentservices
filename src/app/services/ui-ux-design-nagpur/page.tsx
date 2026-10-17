import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection, { FAQ } from '@/components/ui/FAQSection';
import { SITE_URL, SITE_NAME, BRAND_NAME, SOCIAL_LINKS } from '@/config/site';
import { ArrowRight, Layout, Palette, MousePointerClick, Layers, CheckCircle2, Eye, Compass, Smartphone } from 'lucide-react';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'UI/UX Design Company in Nagpur | Bizleap Development',
  description:
    'UI/UX design company in Nagpur. We create user research-backed Figma prototypes, design systems, and conversion-focused web and mobile interfaces.',
  alternates: {
    canonical: '/services/ui-ux-design-nagpur',
  },
  openGraph: {
    title: 'UI/UX Design Company in Nagpur | Bizleap Development',
    description:
      'UI/UX design company in Nagpur. We create user research-backed Figma prototypes, design systems, and conversion-focused web and mobile interfaces.',
    url: `${SITE_URL}/services/ui-ux-design-nagpur`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Company in Nagpur | Bizleap Development',
    description:
      'UI/UX design company in Nagpur. We create user research-backed Figma prototypes, design systems, and conversion-focused web and mobile interfaces.',
  },
};

const uiUxFaqs: FAQ[] = [
  {
    question: 'What is the primary difference between UI design and UX design in your workflow?',
    answer: 'User Experience (UX) design focuses on the architectural logic of the digital product: understanding user behavior, conducting user journey mapping, streamlining navigation, and removing friction from conversion funnels. User Interface (UI) design encompasses the visual and emotional aesthetics: color theory, typography pairings, micro-interactions, responsive grid systems, and component states that align with your brand authority.',
  },
  {
    question: 'What concrete deliverables do we receive at the conclusion of a UI/UX design sprint?',
    answer: 'You receive complete, production-ready design artifacts in Figma. These include clickable interactive prototypes demonstrating user flows, a comprehensive design system featuring color tokens, responsive typographic scales, reusable component libraries with all interactive states (hover, focus, active, disabled, error), and optimized SVG asset exports ready for developer ingestion.',
  },
  {
    question: 'How does investing in UI/UX prototyping reduce downstream software development costs?',
    answer: 'Modifying an interface or rearranging user flows in a Figma prototype takes minutes. Making the same structural revisions once frontend code and backend APIs have been written can take days or weeks of expensive developer refactoring. High-fidelity prototyping guarantees all stakeholder feedback and usability validations are resolved before engineering begins, preventing costly scope reworks.',
  },
  {
    question: 'Can you redesign our existing application interface without rebuilding the entire backend?',
    answer: 'Yes. If your underlying backend APIs and databases function reliably but your frontend interface looks dated or confuses users, our UI/UX team can perform a comprehensive interface overhaul. We preserve your existing data contracts while delivering modern, intuitive frontend screens that dramatically elevate user satisfaction and conversion metrics.',
  },
  {
    question: 'How do your designers ensure seamless handoff to frontend software developers?',
    answer: 'Because Bizleap Development is an integrated engineering studio, our designers author every screen using Figma auto-layout, 8pt responsive spatial grids, and rem-based variables that translate 1:1 into CSS Modules, Tailwind CSS, or React Native stylesheets. We provide full property specs, animation timings, and component contracts that frontend engineers can implement without guesswork.',
  },
  {
    question: 'How long does a typical custom UI/UX design engagement take?',
    answer: 'A focused UI/UX design sprint for a standard business web platform typically spans 1 to 3 weeks. Comprehensive design initiatives for complex SaaS dashboards, multi-sided marketplace platforms, or mobile application suites generally require 3 to 6 weeks, structured across iterative milestone reviews and feedback rounds.',
  },
];

export default function UiUxDesignNagpurPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/ui-ux-design-nagpur#service`,
    name: 'UI/UX Design Company in Nagpur',
    serviceType: 'UI/UX Design',
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
      'Professional UI/UX interface design, interactive Figma prototyping, responsive design systems, and user conversion optimization in Nagpur, Maharashtra.',
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
            { name: 'UI/UX Design Nagpur', url: '/services/ui-ux-design-nagpur' },
          ]}
        />

        <header className={styles.hero}>
          <span className={styles.badge}>Digital Interface Design • Nagpur</span>
          <h1 className={styles.title}>UI/UX Design Company in Nagpur</h1>
          <p className={styles.lead}>
            Bizleap Development crafts research-backed, conversion-focused user interfaces for web platforms and mobile applications. By combining behavioural psychology, minimalist aesthetics, and systematic Figma design architectures, we transform complex software into intuitive digital experiences that users love.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta}>
              Book a UI/UX Design Consultation
            </Link>
            <Link href="/work" className={styles.secondaryCta}>
              View Live Interface Designs
            </Link>
          </div>
        </header>

        <article className={styles.bodyContent}>
          <h2>Design as a Strategic Driver of Commercial Conversion</h2>
          <p>
            An interface is never just decoration; it is the functional medium through which your customers experience your business. When users arrive on your web application or mobile app, they form an unconscious judgment regarding your credibility within 50 milliseconds. If the visual hierarchy is cluttered, the typography difficult to scan, or the primary call-to-action ambiguous, visitors abandon the platform before discovering your products or services.
          </p>
          <p>
            At Bizleap Development in Nagpur, we treat UI/UX design as an empirical discipline focused on measurable human outcomes. Our design team combines rigorous user research, wireframing, and interactive prototyping to build frictionless digital interfaces. We ensure every button, form field, and interactive transition guides users toward key conversion milestones with maximum clarity and zero confusion.
          </p>

          <h2>Who Our UI/UX Design Practice Is Built For</h2>
          <p>
            We collaborate with companies in Nagpur and across India seeking to elevate their digital brand authority and user engagement:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>SaaS &amp; B2B Web Application Founders</h4>
              <p>Product teams needing intuitive multi-tenant dashboards, complex data visualization, role-based navigation, and simplified user onboarding flows.</p>
            </div>
            <div className={styles.card}>
              <h4>Consumer &amp; DTC E-Commerce Merchants</h4>
              <p>Retail brands needing friction-free mobile checkout funnels, thumb-friendly product detail pages (PDP), and optimized collection navigation.</p>
            </div>
            <div className={styles.card}>
              <h4>Luxury, Interior Architecture &amp; Creative Studios</h4>
              <p>Bespoke brands requiring opulent visual storytelling, generous whitespace, refined typography, and immersive multimedia portfolio galleries.</p>
            </div>
            <div className={styles.card}>
              <h4>Legacy Enterprise Platforms Modernizing UX</h4>
              <p>Corporations with dated desktop software seeking a clean, intuitive web-based interface that boosts employee productivity and slashes training time.</p>
            </div>
          </div>

          <h2>What We Deliver: End-to-End Design Deliverables</h2>
          <p>
            Every UI/UX design engagement produces comprehensive, production-tested assets tailored for flawless developer handoff:
          </p>
          <ul>
            <li>
              <strong>User Persona &amp; Journey Mapping:</strong> In-depth documentation of core user workflows, informational architecture (IA), and decision trees before visual styling begins.
            </li>
            <li>
              <strong>Low-Fidelity Wireframes:</strong> Structural layouts designed to establish functional hierarchy, content priorities, and navigational flows without aesthetic distractions.
            </li>
            <li>
              <strong>Interactive High-Fidelity Figma Prototypes:</strong> Clickable, fully animated prototypes that accurately simulate production software behavior on real mobile and desktop screens.
            </li>
            <li>
              <strong>Comprehensive Design Systems &amp; Tokens:</strong> Reusable design systems featuring color tokens, responsive typographic scales, iconography, spacing units, and states (hover, focus, disabled, error).
            </li>
            <li>
              <strong>Accessibility &amp; Contrast Validation:</strong> Strict adherence to WCAG 2.1 AA accessibility guidelines, ensuring optimal contrast ratios, legible type hierarchy, and keyboard navigability.
            </li>
          </ul>

          <h2>Our Design Tools &amp; Prototyping Stack</h2>
          <p>
            We leverage industry-standard design tools and modern interface engineering workflows:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Interface Design &amp; Prototyping</h4>
              <p>Figma for collaborative component authoring, variant states, auto-layout 5.0, and interactive prototypes.</p>
            </div>
            <div className={styles.card}>
              <h4>Design Tokens &amp; Variables</h4>
              <p>Structured rem-based spatial scales, responsive typography fluid variables, and semantic color mapping.</p>
            </div>
            <div className={styles.card}>
              <h4>Micro-Interactions</h4>
              <p>Physics-based motion prototyping specifying exact easing curves, spring parameters, and animation durations.</p>
            </div>
            <div className={styles.card}>
              <h4>Developer Documentation</h4>
              <p>Comprehensive developer handoff notes detailing layout flex structures, breakpoints, and dynamic edge cases.</p>
            </div>
          </div>

          <h2>Our 5-Stage UI/UX Design Methodology</h2>
          <p>
            Our design sprints follow an iterative, human-centered framework designed to eliminate guesswork:
          </p>
          <ul>
            <li><strong>Stage 1 — Empathize &amp; Discover:</strong> Conducting stakeholder interviews, competitor benchmarking, and user persona profiling to establish core design goals.</li>
            <li><strong>Stage 2 — Information Architecture &amp; Wireframing:</strong> Structuring page schematics, content models, and low-fidelity wireframes to establish logical product flow.</li>
            <li><strong>Stage 3 — Visual Styling &amp; Design System Creation:</strong> Developing brand-aligned typography, modern color palettes, tactile surfaces, and reusable component libraries.</li>
            <li><strong>Stage 4 — Interactive Prototyping &amp; Review:</strong> Linking wireframes into clickable user journeys for stakeholder reviews, usability testing, and interaction tuning.</li>
            <li><strong>Stage 5 — Developer Handoff &amp; Design QA:</strong> Providing inspectable Figma files, exporting optimized SVG assets, and reviewing engineering builds to guarantee 1:1 fidelity with designs.</li>
          </ul>

          <h2>Selected UI/UX Design Case Studies by Bizleap Development</h2>
          <p>
            Explore real design systems and digital interfaces created by our Nagpur studio:
          </p>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>Art Interiorz</h4>
              <p><strong>Interior Architecture:</strong> Visually driven portfolio gallery showcasing luxury residential and commercial transformations with generous whitespace and high-res imagery.</p>
              <Link href="/work/art-interiorz" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View Art Interiorz Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>MYSA</h4>
              <p><strong>Haute Couture &amp; Luxury Fashion:</strong> Premium digital brand presence reflecting haute couture aesthetics, bespoke typography pairings, and micro-animated gestures.</p>
              <Link href="/work/mysa" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View MYSA Case Study <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.card}>
              <h4>Oswal Jewellers</h4>
              <p><strong>Luxury Store &amp; Jewellery Commerce:</strong> Opulent fine jewellery browsing experience with custom quote requests, store visit scheduling, and mobile-first catalogue filtering.</p>
              <Link href="/work/oswal-jewellers" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#111', fontWeight: 600, marginTop: '0.75rem', textDecoration: 'underline' }}>
                View Oswal Jewellers Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <h2>Explore Related Engineering Disciplines</h2>
          <p>
            Turn your Figma designs into production code with our engineering services:
          </p>
          <ul>
            <li>
              <Link href="/services/website-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Website Development Company in Nagpur
              </Link> — Converting Figma prototypes into lightning-fast corporate websites.
            </li>
            <li>
              <Link href="/services/ecommerce-website-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                E-Commerce Website Development in Nagpur
              </Link> — High-conversion retail storefronts with optimized checkout flows.
            </li>
            <li>
              <Link href="/services/mobile-app-development-nagpur" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Mobile App Development in Nagpur
              </Link> — Native feel iOS and Android apps crafted from mobile design tokens.
            </li>
            <li>
              <Link href="/services/nextjs-development" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                Next.js Development Company
              </Link> — Full-stack Next.js App Router engineering with 100% design fidelity.
            </li>
          </ul>

          <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Looking for Creative Ad Visuals or Marketing Collateral?</h4>
            <p style={{ margin: 0, fontSize: '0.925rem', color: '#555', lineHeight: 1.6 }}>
              Bizleap Development specializes exclusively in digital product UI/UX and software engineering. For creative ad banners, social media marketing assets, and brand performance campaigns, explore our sister agency{' '}
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
              Book a UI/UX Design Sprint
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              Explore All Services
            </Link>
          </div>
        </article>

        {/* 6 Rendered FAQs with matching FAQPage Schema */}
        <div style={{ marginTop: '4rem' }}>
          <FAQSection
            faqs={uiUxFaqs}
            title={
              <>
                UI/UX Design <span className={styles.accentText}>FAQs</span>
              </>
            }
            subtitle="Common questions regarding our user experience methodology, Figma prototypes, and developer handoff in Nagpur."
            id="ui-ux-faq"
            renderSchema={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
