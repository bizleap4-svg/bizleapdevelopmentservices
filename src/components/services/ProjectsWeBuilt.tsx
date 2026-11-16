import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/data/portfolio';
import styles from '@/app/services/service-page.module.css';

interface ProjectsWeBuiltProps {
  serviceHref: string;
}

export default function ProjectsWeBuilt({ serviceHref }: ProjectsWeBuiltProps) {
  const mappedProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.hasLiveDomain && p.primaryService?.href === serviceHref
  );

  if (mappedProjects.length === 0) {
    return null;
  }

  return (
    <section style={{ margin: '3.5rem 0' }}>
      <h2>Projects we built</h2>
      <p>
        Explore production platforms and client architectures delivered under this practice:
      </p>
      <div className={styles.gridCards}>
        {mappedProjects.map((project) => (
          <div key={project.slug} className={styles.card}>
            {project.img && (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  background: '#f0f0f0',
                }}
              >
                <Link href={`/work/${project.slug}`}>
                  <Image
                    src={project.img}
                    alt={project.imgAlt || `${project.name} Showcase`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              </div>
            )}
            <h4>
              <Link
                href={`/work/${project.slug}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {project.name}
              </Link>
            </h4>
            <p style={{ margin: '0.25rem 0 1rem', fontSize: '0.95rem', color: '#666' }}>
              <strong>Industry:</strong> {project.industry}
            </p>
            <Link
              href={`/work/${project.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#111',
                fontWeight: 600,
                textDecoration: 'underline',
                fontSize: '0.925rem',
              }}
            >
              View {project.name} Case Study <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
