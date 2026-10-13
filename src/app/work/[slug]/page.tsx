import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '@/data/portfolio';
import { SITE_URL, SITE_NAME, BRAND_NAME } from '@/config/site';
import { ArrowUpRight, ArrowLeft, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';
import styles from '../work.module.css';
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
  const description = `Read how Bizleap Development engineered a custom ${project.category} solution for ${project.name}: technical architecture, stack, and results in Nagpur.`;

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

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${SITE_URL}/work/${project.slug}#article`,
    headline: `${project.name} Case Study: Custom ${project.category} Solution`,
    description: `Engineering overview and architecture of the ${project.name} digital platform by Bizleap Development.`,
    image: `${SITE_URL}${project.img}`,
    dateModified: project.lastMod,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/work/${project.slug}`,
  };

  return (
    <div className={serviceStyles.pageContainer}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <main className={serviceStyles.contentWrapper} style={{ maxWidth: '1000px' }}>
        <Breadcrumbs
          items={[
            { name: 'Our Work', url: '/work' },
            { name: project.name, url: `/work/${project.slug}` },
          ]}
        />

        <div style={{ margin: '1rem 0 2rem' }}>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#666', textDecoration: 'none', fontSize: '0.925rem', fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to All Portfolio Builds
          </Link>
        </div>

        <header className={serviceStyles.hero} style={{ marginBottom: '2.5rem' }}>
          <span className={serviceStyles.badge}>{project.category} • {project.desc}</span>
          <h1 className={serviceStyles.title}>{project.name}</h1>
          <p className={serviceStyles.lead}>
            A comprehensive overview of how Bizleap Development architected and deployed the digital platform for <strong>{project.name}</strong>.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {project.tags.map((tag, i) => (
              <span key={i} style={{ padding: '0.25rem 0.75rem', backgroundColor: '#f0f0f0', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>
                {tag}
              </span>
            ))}
          </div>

          {project.liveUrl ? (
            <div className={serviceStyles.ctaRow}>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={serviceStyles.primaryCta}
              >
                Visit Live Website <ArrowUpRight size={18} />
              </a>
              <Link href="/contact" className={serviceStyles.secondaryCta}>
                Build a Similar Project
              </Link>
            </div>
          ) : (
            <div className={serviceStyles.ctaRow}>
              <Link href="/contact" className={serviceStyles.primaryCta}>
                Request Similar Architecture
              </Link>
            </div>
          )}

          {project.stagingNote && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1rem', background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '8px', color: '#92400e', fontSize: '0.9rem', marginTop: '1rem' }}>
              <AlertTriangle size={18} style={{ flexShrink: 0 }} />
              <span>{project.stagingNote}</span>
            </div>
          )}
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
          <h2>1. The Challenge</h2>
          <p>
            Every ambitious digital project must overcome specific operational and technical obstacles. For {project.name}, the objective was to engineer a digital platform capable of serving target audiences reliably while reflecting brand authority.
          </p>
          <div className={serviceStyles.todoBox}>
            <strong>Owner Review Note:</strong> {project.challenge}
          </div>

          <h2>2. Our Solution & Engineering Strategy</h2>
          <p>
            {project.solution}
          </p>
          <p>
            Bizleap Development deployed our standard full-stack engineering workflow: component-driven development, strict TypeScript interfaces, responsive CSS architecture, and server-side rendering for optimal Core Web Vitals and technical SEO compliance.
          </p>

          <h2>3. Technology Stack & Architecture</h2>
          <div className={serviceStyles.gridCards}>
            {project.stack.map((item, idx) => (
              <div key={idx} className={serviceStyles.card} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.25rem' }}>
                <Layers size={20} color="var(--accent-yellow, #E5B82E)" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 600, color: '#111', fontSize: '1rem' }}>{item}</span>
              </div>
            ))}
          </div>

          <h2>4. Business Results & Impact</h2>
          <p>
            The deployed platform provides {project.name} with an authoritative, fast, and scalable digital foundation.
          </p>
          <div className={serviceStyles.todoBox}>
            <strong>Owner Review Note:</strong> {project.results}
          </div>

          <div className={serviceStyles.ctaRow} style={{ marginTop: '3.5rem', borderTop: '1px solid #eaeaea', paddingTop: '2.5rem' }}>
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
