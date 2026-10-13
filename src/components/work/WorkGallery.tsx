'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '@/data/portfolio';
import styles from '@/app/work/work.module.css';
import pageStyles from '@/app/page.module.css';

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const displayedWork = activeCategory === 'All' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className={styles.portfolioSection}>
      {/* Sticky Filter Tabs (Desktop) */}
      <div className={`${styles.filterTabs} ${pageStyles.desktopFilterTabs}`}>
        <button 
          className={`${styles.filterTab} ${activeCategory === 'All' ? styles.activeTab : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All Work
        </button>
        {PORTFOLIO_CATEGORIES.map((cat, idx) => (
          <button 
            key={idx}
            className={`${styles.filterTab} ${activeCategory === cat ? styles.activeTab : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile Filter Custom Dropdown */}
      <div className={pageStyles.mobileFilterDropdown}>
        <div 
          className={`${pageStyles.filterSelectHeader} ${isDropdownOpen ? pageStyles.filterSelectHeaderOpen : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{activeCategory === 'All' ? 'ALL WORK' : activeCategory}</span>
          <ChevronDown className={pageStyles.filterSelectIcon} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }} />
        </div>
        
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div 
              className={pageStyles.filterSelectList}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className={`${pageStyles.filterSelectOption} ${activeCategory === 'All' ? pageStyles.filterSelectOptionActive : ''}`}
                onClick={() => { setActiveCategory('All'); setIsDropdownOpen(false); }}
              >
                ALL WORK
              </div>
              {PORTFOLIO_CATEGORIES.map((cat, idx) => (
                <div 
                  key={idx}
                  className={`${pageStyles.filterSelectOption} ${activeCategory === cat ? pageStyles.filterSelectOptionActive : ''}`}
                  onClick={() => { setActiveCategory(cat); setIsDropdownOpen(false); }}
                >
                  {cat}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.workList}>
        {displayedWork.length > 0 ? (
          displayedWork.map((work, idx) => (
            <motion.div
              key={`${activeCategory}-${work.slug}`}
              className={`${styles.workCard} ${idx % 2 === 0 ? styles.row : styles.rowReverse}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.workVisual}>
                <Link href={`/work/${work.slug}`}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                  >
                    <Image 
                      src={work.img} 
                      alt={work.imgAlt} 
                      width={1920}
                      height={1080}
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={idx < 2}
                    />
                  </motion.div>
                </Link>
              </div>
              
              <div className={styles.workInfo}>
                <div className={styles.workTags}>
                  {work.tags.map((t, i) => (
                    <span key={i} className={styles.workTag}>{t.trim()}</span>
                  ))}
                </div>
                <h2 className={styles.workTitle}>
                  <Link href={`/work/${work.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {work.name}
                  </Link>
                </h2>
                <p className={styles.workDesc}>{work.desc}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <Link href={`/work/${work.slug}`} className={styles.viewBtn}>
                    Read Case Study <ArrowRight size={18} />
                  </Link>
                  {work.liveUrl && (
                    <a 
                      href={work.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#555', fontSize: '0.95rem', fontWeight: 500 }}
                    >
                      Live Website <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '6rem 1rem', width: '100%', color: 'var(--muted-grey)' }}>
            <p style={{ fontSize: '1.2rem', letterSpacing: '0.02em' }}>Projects in this category coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
