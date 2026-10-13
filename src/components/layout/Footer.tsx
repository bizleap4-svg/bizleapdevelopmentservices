import Image from 'next/image';
import Link from 'next/link';
import {
  BRAND_NAME,
  LEGAL_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_CLEAN,
  CONTACT_PHONE_ALT,
  CONTACT_PHONE_ALT_CLEAN,
  ADDRESS,
  SOCIAL_LINKS,
} from '@/config/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" style={{ display: 'inline-flex' }} aria-label="Bizleap Development Home">
              <Image src="/logo-dark.png" alt={`${BRAND_NAME} Logo`} width={200} height={60} style={{ objectFit: 'contain' }} />
            </Link>
            <p className={styles.brandDesc}>
              Built to ship. Not just impress. We engineer high-performance web applications, custom software, and scalable e-commerce platforms.
            </p>
            <div style={{ marginTop: '0.5rem', padding: '0.85rem 1rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '3px solid var(--accent-yellow)', maxWidth: '340px' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#444', lineHeight: 1.5 }}>
                Looking for SEO, Meta Ads, and performance marketing? Partner with our digital marketing agency at{' '}
                <a 
                  href={SOCIAL_LINKS.marketingPartner} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#000', fontWeight: 600, textDecoration: 'underline' }}
                >
                  bizleap.in
                </a>.
              </p>
            </div>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Development Services</h4>
            <Link href="/services/website-development-nagpur">Website Development</Link>
            <Link href="/services/ecommerce-website-development-nagpur">E-Commerce Development</Link>
            <Link href="/services/mobile-app-development-nagpur">Mobile App Development</Link>
            <Link href="/services/ui-ux-design-nagpur">UI/UX Design</Link>
            <Link href="/services/nextjs-development">Next.js Engineering</Link>
            <Link href="/services">All Services</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Company</h4>
            <Link href="/about">About Bizleap</Link>
            <Link href="/work">Our Work</Link>
            <Link href="/contact">Contact Us</Link>
            <a 
              href={SOCIAL_LINKS.marketingPartner} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
            >
              Digital Marketing Partner ↗
            </a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Contact</h4>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> {CONTACT_EMAIL}
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-grey)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                <a href={`tel:${CONTACT_PHONE_CLEAN}`}>{CONTACT_PHONE}</a>
                <span>/</span>
                <a href={`tel:${CONTACT_PHONE_ALT_CLEAN}`}>{CONTACT_PHONE_ALT}</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--muted-grey)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                {ADDRESS.streetAddress},<br />
                {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
            <Link href="/terms-and-conditions">TERMS & CONDITIONS</Link>
            <Link href="/cookie-policy">COOKIE POLICY</Link>
          </div>
          <div className={styles.credit}>
            Crafted with <span className={styles.heart}>♥</span> by <span className={styles.creditBrand}>BizLeap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
