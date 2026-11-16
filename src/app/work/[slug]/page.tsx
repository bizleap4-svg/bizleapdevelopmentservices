import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '@/data/portfolio';
import { SITE_URL, SITE_NAME, BRAND_NAME } from '@/config/site';
import { ArrowUpRight, ArrowLeft, Layers, Building2, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import serviceStyles from '../../services/service-page.module.css';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function getCaseStudyTitle(project: PortfolioProject): string {
  switch (project.slug) {
    case 'miraya':
      return 'MIRAYA | E-Commerce Website for Fashion | BizDevelopment';
    case 'suko':
      return 'SUKO | E-Commerce Store for Corporate Wear | BizDevelopment';
    case 'rajwadi':
      return 'Rajwadi | E-Commerce Store for Ethnic Wear | BizDevelopment';
    case 'asma':
      return 'ASMA | Website Development for Education | BizDevelopment';
    case 'binous':
      return 'BINOUS | Next.js Website for Fitness & Gym | BizDevelopment';
    case 'shutter-school':
      return 'Shutter School | EdTech Platform for Media | BizDevelopment';
    case 'chemora':
      return 'Chemora | Corporate Website for Chemicals | BizDevelopment';
    case 'urban-taxi':
      return 'URBAN TAXI | Web App for Fleet Logistics | BizDevelopment';
    case 'art-interiorz':
      return 'Art Interiorz | UI/UX Design for Interiors | BizDevelopment';
    case 'mysa':
      return 'MYSA | UI/UX Design for Luxury Fashion | BizDevelopment';
    case 'wealth-acumen':
      return 'Wealth Acumen | Website for Wealth Advisory | BizDevelopment';
    case 'oswal-jewellers':
      return 'Oswal Jewellers | E-Commerce for Jewellery | BizDevelopment';
    case 'taubys':
      return 'Taubys | E-Commerce Website for Bakeries | BizDevelopment';
    case 'mmm-hotels':
      return 'MMM Hotels | Website Development for Hotels | BizDevelopment';
    case 'miles-along-smiles':
      return 'Miles Along Smiles | Web App for Clinics | BizDevelopment';
    case 'form-6':
      return 'Form 6 | Web Platform for Pharma Solutions | BizDevelopment';
    case 'genekon':
      return 'Genekon | Web Portal for Health Diagnostics | BizDevelopment';
    default: {
      const fallback = `${project.name} | ${project.category} | BizDevelopment`;
      return fallback.length >= 50 && fallback.length <= 60
        ? fallback
        : `${project.name} Case Study | Bizleap Development`;
    }
  }
}

export function getCaseStudyDescription(project: PortfolioProject): string {
  switch (project.slug) {
    case 'miraya':
      return 'Explore the MIRAYA case study: high-conversion fashion e-commerce storefront with fluid showcases, responsive design, and checkout by BizDevelopment.';
    case 'suko':
      return 'Case study for SUKO (Corporate Apparel & Uniforms). Scalable Next.js e-commerce architecture and image delivery engineered by BizDevelopment in Nagpur.';
    case 'rajwadi':
      return 'Case study for Rajwadi (Ethnic Wear & Traditional Apparel). High-performance e-commerce platform, checkout flows, and mobile UI by BizDevelopment.';
    case 'asma':
      return 'Case study for ASMA (Professional Education & Training). Modern modular web presence, academic curriculum showcase, and inquiry funnels by BizDevelopment.';
    case 'binous':
      return 'Case study for BINOUS (Fitness, Training & Nutrition). High-energy fitness web platform with Stripe payment integration engineered by BizDevelopment.';
    case 'shutter-school':
      return 'Case study for Shutter School (Creative Education & Media Arts). Ed-tech learning portal with video streaming integration engineered by BizDevelopment.';
    case 'chemora':
      return 'Case study for Chemora (Chemical Formulations & Life Sciences). Clean corporate web portal showcasing life sciences solutions by BizDevelopment in Nagpur.';
    case 'urban-taxi':
      return 'Case study for URBAN TAXI (Transport, Mobility & Fleet Logistics). Fleet logistics web application with route inquiry forms by BizDevelopment in Nagpur.';
    case 'art-interiorz':
      return 'Case study for Art Interiorz (Architectural & Interior Design). Visually driven portfolio showcasing residential transformations by BizDevelopment.';
    case 'mysa':
      return 'Case study for MYSA (Haute Couture & Luxury Fashion). Premium digital storefront reflecting luxury interaction design engineered by BizDevelopment in Nagpur.';
    case 'wealth-acumen':
      return 'Case study for Wealth Acumen (Wealth Management). Secure financial services web platform and confidential consultation booking by BizDevelopment in Nagpur.';
    case 'oswal-jewellers':
      return 'Case study for Oswal Jewellers (Fine Jewellery Retail). Opulent fine jewellery e-commerce catalogue and quote request system by BizDevelopment in Nagpur.';
    case 'taubys':
      return 'Case study for Taubys (Artisanal Bakery & Dining). Food ordering and bakery e-commerce experience with visual menus and scheduling by BizDevelopment.';
    case 'mmm-hotels':
      return 'Case study for MMM Hotels (Hospitality & Luxury Hotels). Conversion-oriented hotel web platform with room gallery tours and booking by BizDevelopment.';
    case 'miles-along-smiles':
      return 'Case study for Miles Along Smiles (Healthcare & Dental Care). Interactive clinic web application with automated booking workflows by BizDevelopment.';
    case 'form-6':
      return 'Case study for Form 6 (Pharmaceutical Documentation & Compliance). Corporate web platform highlighting B2B partner solutions by BizDevelopment.';
    case 'genekon':
      return 'Case study for Genekon (Diagnostic Healthcare & Genetics). Healthcare web portal with clinical clarity, fast loads, and inquiry handling by BizDevelopment.';
    default:
      return `Case study for ${project.name} (${project.industry}). Explore the engineering architecture, tech stack, and deployment by Bizleap Development in Nagpur.`;
  }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Bizleap Development',
    };
  }

  const title = getCaseStudyTitle(project);
  const description = getCaseStudyDescription(project);

  return {
    title,
    description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/work/${project.slug}`,
      type: 'article',
      siteName: BRAND_NAME,
      images: [
        {
          url: project.img,
          width: 1200,
          height: 630,
          alt: project.imgAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.img],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/work/${project.slug}#project`,
    name: `${project.name} - ${project.industry}`,
    headline: `${project.name} Case Study`,
    description: project.solution,
    image: `${SITE_URL}${project.img}`,
    dateModified: project.lastMod,
    creator: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    about: {
      '@type': 'Thing',
      name: project.industry,
    },
    mainEntityOfPage: `${SITE_URL}/work/${project.slug}`,
  };

  return (
    <div className={serviceStyles.pageContainer}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <main className={serviceStyles.contentWrapper} style={{ maxWidth: '1000px' }}>
        <Breadcrumbs
          items={[
            { name: 'Our Work', url: '/work' },
            { name: project.name, url: `/work/${project.slug}` },
          ]}
        />

        <div style={{ margin: '1rem 0 2rem' }}>
          <Link
            href="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#555',
              textDecoration: 'none',
              fontSize: '0.925rem',
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={16} /> Back to All Portfolio Builds
          </Link>
        </div>

        <header className={serviceStyles.hero} style={{ marginBottom: '2.5rem' }}>
          <span className={serviceStyles.badge}>{project.category} • {project.desc}</span>
          <h1 className={serviceStyles.title}>{project.name}</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', margin: '1.5rem 0 2rem', padding: '1.25rem', background: '#fafafa', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                <Building2 size={14} /> Client
              </span>
              <p style={{ margin: '0.25rem 0 0', fontWeight: 600, color: '#111', fontSize: '1rem' }}>
                {project.client}
              </p>
            </div>
            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                <Briefcase size={14} /> Industry
              </span>
              <p style={{ margin: '0.25rem 0 0', fontWeight: 600, color: '#111', fontSize: '1rem' }}>
                {project.industry}
              </p>
            </div>
            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                <Layers size={14} /> Primary Practice
              </span>
              <p style={{ margin: '0.25rem 0 0', fontWeight: 600, fontSize: '0.95rem' }}>
                <Link href={project.primaryService.href} style={{ color: '#111', textDecoration: 'underline' }}>
                  {project.primaryService.title}
                </Link>
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {project.tags.map((tag, i) => (
              <span key={i} style={{ padding: '0.3rem 0.8rem', backgroundColor: '#f0f0f0', borderRadius: '6px', fontSize: '0.825rem', fontWeight: 600, color: '#333' }}>
                {tag}
              </span>
            ))}
          </div>

          <div className={serviceStyles.ctaRow}>
            {project.liveUrl ? (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={serviceStyles.primaryCta}
              >
                Visit Live Platform <ExternalLink size={18} />
              </a>
            ) : null}
            <Link href="/contact" className={project.liveUrl ? serviceStyles.secondaryCta : serviceStyles.primaryCta}>
              Discuss a Similar Build <ArrowRight size={18} />
            </Link>
          </div>
        </header>

        {/* Project Visual Showcase */}
        <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', marginBottom: '3.5rem', border: '1px solid #eaeaea' }}>
          <Image
            src={project.img}
            alt={project.imgAlt}
            width={1920}
            height={1080}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </div>

        <article className={serviceStyles.bodyContent}>
          {/* What Was Built */}
          <h2>Platform Overview &amp; Engineering Scope</h2>
          <p>
            {project.solution}
          </p>

          {/* Render Challenge ONLY if real data is provided */}
          {project.challenge ? (
            <>
              <h2>Technical &amp; Architecture Challenge</h2>
              <p>{project.challenge}</p>
            </>
          ) : null}

          {/* Technology Stack & Architecture */}
          <h2>Technology Stack &amp; Implementation</h2>
          <p>
            Architected and deployed using production-tested frameworks to guarantee Core Web Vitals compliance, security, and responsive performance:
          </p>
          <div className={serviceStyles.gridCards}>
            {project.stack.map((item, idx) => (
              <div key={idx} className={serviceStyles.card} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.25rem' }}>
                <Layers size={20} color="var(--accent-yellow, #E5B82E)" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 600, color: '#111', fontSize: '1rem' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Render Results ONLY if real data is provided */}
          {project.results ? (
            <>
              <h2>Business Outcomes &amp; Performance Metrics</h2>
              <p>{project.results}</p>
            </>
          ) : null}

          {/* Service Linking */}
          <div style={{ margin: '3rem 0', padding: '1.75rem', background: '#fcfcfc', borderRadius: '12px', border: '1px solid #eeeeee' }}>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
              Interested in similar engineering?
            </h3>
            <p style={{ margin: '0 0 1rem', color: '#555', fontSize: '0.975rem', lineHeight: 1.6 }}>
              This project was delivered under our <strong>{project.primaryService.title}</strong> practice. Learn more about our technical process, deliverables, and service scopes:
            </p>
            <Link
              href={project.primaryService.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#111',
                fontWeight: 600,
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              Explore {project.primaryService.title} <ArrowRight size={16} />
            </Link>
          </div>

          <div className={serviceStyles.ctaRow} style={{ marginTop: '2.5rem', borderTop: '1px solid #eaeaea', paddingTop: '2.5rem' }}>
            <Link href="/contact" className={serviceStyles.primaryCta}>
              Start Your Custom Build
            </Link>
            <Link href="/work" className={serviceStyles.secondaryCta}>
              Explore More Case Studies
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
