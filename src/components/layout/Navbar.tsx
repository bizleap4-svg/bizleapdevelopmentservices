'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
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
          <a href="tel:+917097095152" className={styles.secondaryButton}>
            Let's Talk
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
        </div>
      )}
    </nav>
  );
}
