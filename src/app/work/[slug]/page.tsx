import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { PORTFOLIO_PROJECTS } from '@/data/portfolio';
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

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Bizleap Development',
    };
  }

  const title = `${project.name} Case Study | Bizleap Development`;
  const description = `Case study for ${project.name} (${project.industry}). Explore the engineering architecture, tech stack, and deployment by Bizleap Development in Nagpur.`;

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
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
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
