'use client';

import { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { BIZLEAP_CONTACT_URL } from '@/config/site';
import { submitContactForm } from './actions';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirect = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsRedirecting(true);

    // If user filled in any fields, asynchronously dispatch lead in background
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      if (formData.get('name') || formData.get('email') || formData.get('message')) {
        submitContactForm(null as any, formData).catch(() => {});
      }
    }

    // Direct redirection to bizleap.in contact page
    window.location.href = BIZLEAP_CONTACT_URL;
  };

  return (
    <form ref={formRef} onSubmit={handleRedirect} className={styles.form}>
      <div>
        <label htmlFor="contact-name" className={styles.label}>
          Your Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="e.g. Rahul Sharma"
          className={styles.input}
        />
      </div>

      <div className={styles.rowGrid}>
        <div>
          <label htmlFor="contact-email" className={styles.label}>
            Work Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="rahul@company.com"
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={styles.label}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className={styles.input}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className={styles.label}>
          Service Needed
        </label>
        <select
          id="contact-service"
          name="service"
          defaultValue="website-development"
          className={styles.select}
        >
          <option value="website-development">Website Development (Nagpur)</option>
          <option value="nextjs-engineering">Next.js &amp; React Web Application</option>
          <option value="ecommerce-development">E-Commerce Website Development</option>
          <option value="mobile-app-development">Mobile App Development (iOS &amp; Android)</option>
          <option value="ui-ux-design">UI/UX Interface Design</option>
          <option value="website-redesign">Website Redesign &amp; Speed Optimization</option>
          <option value="other">Other Software Engineering Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={styles.label}>
          Project Scope &amp; Requirements
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Briefly describe your goals, timeline, and current website or application challenges..."
          className={styles.textarea}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', alignItems: 'flex-start' }}>
        <button
          type="button"
          onClick={() => handleRedirect()}
          disabled={isRedirecting}
          className={styles.submitBtn}
        >
          {isRedirecting ? (
            'Redirecting to bizleap.in...'
          ) : (
            <>
              Send Project Inquiry <Send size={16} />
            </>
          )}
        </button>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>
          Redirects directly to our primary project form at{' '}
          <a
            href={BIZLEAP_CONTACT_URL}
            style={{ color: '#111827', fontWeight: 600, textDecoration: 'underline' }}
          >
            bizleap.in/contact ↗
          </a>
        </p>
      </div>
    </form>
  );
}
