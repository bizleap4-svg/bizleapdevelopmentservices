import Link from 'next/link';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS } from '@/data/portfolio';
import styles from '@/app/services/service-page.module.css';

interface ProjectsWeBuiltProps {
  serviceHref: string;
}

export default function ProjectsWeBuilt({ serviceHref }: ProjectsWeBuiltProps) {
  const mappedProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.primaryService?.href === serviceHref
  ).slice(0, 6);

  if (mappedProjects.length === 0) {
    return null;
  }

  return (
    <section style={{ margin: '3.5rem 0' }}>
      <h2>Projects we built</h2>
      <p>
        Case studies and client architectures delivered under this practice:
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
                <Image
                  src={project.img}
                  alt={project.imgAlt || `${project.name} Showcase`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <h4>
              <Link
                href={`/work/${project.slug}`}
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                {project.client} - {project.desc}
              </Link>
            </h4>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.95rem', color: '#666' }}>
              <strong>Industry:</strong> {project.industry}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
