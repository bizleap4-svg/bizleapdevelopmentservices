'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';

export type FAQ = {
  question: string;
  answer: string;
};

export const defaultHomeFaqs: FAQ[] = [
  {
    question: 'How much does a website development project cost in Nagpur?',
    answer: 'Website development costs in Nagpur typically range from ₹15,000 for standard business sites to ₹1,50,000+ for custom Next.js web applications and feature-rich e-commerce platforms. Final pricing depends on integrations, custom UI/UX design, database architecture, and performance requirements.',
  },
  {
    question: 'Next.js vs WordPress: Which platform is better for our business?',
    answer: 'Next.js offers superior page speed, enterprise-grade security, tailored workflows, and perfect Core Web Vitals, making it ideal for modern brands and scalable web applications. WordPress is suitable for basic content blogs, but Next.js delivers higher conversion rates, zero plugin bloat, and unmatched scalability.',
  },
  {
    question: 'What is the typical timeline to build and launch a custom website?',
    answer: 'A standard business website typically takes 2 to 3 weeks from initial wireframes to production deployment. Complex custom web applications, multi-vendor e-commerce portals, and enterprise platforms usually require 4 to 8 weeks, including thorough QA testing and mobile optimization.',
  },
  {
    question: 'Do you provide native and cross-platform mobile app development?',
    answer: 'Yes, Bizleap Development engineers native and cross-platform mobile applications for both iOS and Android using modern frameworks like React Native and Flutter. We provide end-to-end services from UI/UX design and API engineering to App Store and Google Play deployment.',
  },
  {
    question: 'Can you redesign our existing website without losing our current SEO rankings?',
    answer: 'Yes. We specialize in website redesigns and legacy modernization. We map out all existing URL structures, implement strict 301 redirects, preserve established metadata, and improve site speed and mobile usability to protect and enhance your search rankings.',
  },
  {
    question: 'What website maintenance and ongoing support packages do you offer?',
    answer: 'We provide comprehensive website maintenance plans covering continuous uptime monitoring, security patches, regular backups, Core Web Vitals optimization, database performance tuning, and on-demand feature updates to keep your application fast and secure.',
  },
];

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: React.ReactNode;
  subtitle?: string;
  id?: string;
  renderSchema?: boolean;
}

export default function FAQSection({ 
  faqs = defaultHomeFaqs,
  title = (
    <>
      Frequently Asked <span className={styles.accentText}>Questions</span>
    </>
  ),
  subtitle,
  id = 'faq',
  renderSchema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id={id}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>{title}</h2>
          {subtitle && <p className={styles.faqSubtitle}>{subtitle}</p>}
        </div>
        
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const formattedQuestion = faq.question.match(/^\d+\.\s/)
              ? faq.question
              : `${idx + 1}. ${faq.question}`;
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <h3 className={styles.faqQuestionText}>{formattedQuestion}</h3>
                  <ChevronDown 
                    className={styles.faqIcon} 
                    size={20}
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                  />
                </button>
                {/* CSS Grid ensures answer is server-rendered in the initial HTML DOM */}
                <div 
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`${styles.faqAnswerWrapper} ${isOpen ? styles.faqAnswerWrapperOpen : ''}`}
                >
                  <div className={styles.faqAnswerInner}>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* FAQ Schema: strictly rendered only where visible FAQ text exists */}
      {renderSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': faqs.map((f, idx) => ({
                '@type': 'Question',
                'name': f.question.match(/^\d+\.\s/) ? f.question : `${idx + 1}. ${f.question}`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': f.answer,
                },
              })),
            }),
          }}
        />
      )}
    </section>
  );
}
