'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_CLEAN, BIZLEAP_CONTACT_URL } from '@/config/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }} aria-label="Bizleap Development Home">
            <Image src="/logo-dark.png" alt="Bizleap Development Logo" width={150} height={40} style={{ objectFit: 'contain' }} priority />
          </Link>
        </div>
        
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.ctaGroup}>
          <a
            href={`tel:${CONTACT_PHONE_CLEAN}`}
            className={styles.secondaryButton}
            aria-label={`Call Bizleap Development at ${CONTACT_PHONE}`}
          >
            <Phone size={14} /> Let&apos;s Talk
          </a>
          <Link href="/contact" className={styles.primaryButton}>
            Start a Project <ArrowRight size={16} />
          </Link>
          
          <button 
            className={styles.hamburgerBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} color="#111" /> : <Menu size={24} color="#111" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/work" onClick={() => setMobileMenuOpen(false)}>Work</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
          <div className={styles.mobileCtaGroup}>
            <Link
              href="/contact"
              className={styles.mobilePrimaryButton}
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_CLEAN}`}
              className={styles.mobileSecondaryButton}
              aria-label={`Call ${CONTACT_PHONE}`}
            >
              <Phone size={16} /> Let&apos;s Talk ({CONTACT_PHONE})
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
