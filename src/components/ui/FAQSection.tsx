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
    question: 'What website and web application development services does Bizleap provide in Nagpur?',
    answer: 'Bizleap Development delivers comprehensive web and mobile engineering services in Nagpur. Our capabilities include custom website development, enterprise Next.js and React web applications, high-conversion e-commerce storefronts, cross-platform mobile apps for iOS and Android, and UI/UX interface design. All software is custom engineered to meet specific business objectives.',
  },
  {
    question: 'What technologies and programming frameworks do you use for web and app development?',
    answer: 'We build on a modern, production-proven technology stack centred around Next.js, React, TypeScript, and Node.js on the backend. For mobile development, we utilize React Native and Flutter for near-native performance across iOS and Android. Our database and cloud solutions leverage PostgreSQL, MongoDB, Redis, and high-availability edge deployments on Vercel and AWS.',
  },
  {
    question: 'What is the typical timeline to build and launch a custom website or application?',
    answer: 'Project timelines depend on technical scope and architecture complexity. A standard custom corporate website is typically delivered within 2 to 4 weeks. Full-scale web applications, custom e-commerce storefronts, and mobile applications usually require 4 to 8 weeks, including UI prototyping in Figma, API engineering, Core Web Vitals optimization, and multi-device QA.',
  },
  {
    question: 'Why should businesses choose a Nagpur-based development company?',
    answer: 'Partnering with a Nagpur-based engineering studio gives you direct access to local software engineers, real-time collaboration, and transparent sprint reviews without offshore communication barriers or timezone delays. We support enterprises across Nagpur, the Vidarbha region, and clients across India with international software quality standards.',
  },
  {
    question: 'Can you rebuild an existing website without losing current search engine rankings?',
    answer: 'Yes. We specialize in legacy platform migrations and website rebuilds from WordPress, PHP, or older frameworks to Next.js. We implement meticulous 301 URL redirect maps, preserve existing meta architecture, and enhance Core Web Vitals to protect your established organic authority and improve user conversion.',
  },
  {
    question: 'How does Bizleap Development coordinate with digital marketing campaigns?',
    answer: 'Bizleap Development focuses strictly on web, mobile, and software engineering. For specialized SEO audits, Google Ads management, Meta performance marketing, and creative campaigns, we coordinate seamlessly with our digital marketing partner, BizLeap India Pvt. Ltd. (bizleap.in), ensuring your web platform is technically primed for marketing conversions.',
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
      
      {/* FAQ Schema: strictly rendered where visible FAQ text exists */}
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
