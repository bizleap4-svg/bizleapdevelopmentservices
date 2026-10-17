'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Phone, Loader2 } from 'lucide-react';
import { CONTACT_EMAIL } from '@/config/site';
import { submitContactForm, ContactFormState } from './actions';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<ContactFormState | null>(null);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientErrors({});
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const phone = (formData.get('phone') as string)?.trim() || '';
    const message = (formData.get('message') as string)?.trim() || '';

    const errors: Record<string, string> = {};
    if (!name || name.length < 2) {
      errors.name = 'Please provide your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (phone && phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!message || message.length < 10) {
      errors.message = 'Please provide brief project details (at least 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      setClientErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactForm(
        { success: false, message: '' },
        formData
      );
      setFormState(result);
    } catch {
      setFormState({
        success: false,
        message: 'A network error occurred while submitting. Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState(null);
    setClientErrors({});
  };

  if (formState?.success) {
    return (
      <div 
        className={`${styles.alert} ${styles.alertSuccess}`} 
        style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '2rem', gap: '1rem', borderRadius: '12px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <CheckCircle2 size={24} color="#059669" />
          <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#065f46', fontWeight: 700 }}>
            Inquiry Received Successfully!
          </h3>
        </div>
        <p style={{ margin: 0, color: '#065f46', fontSize: '1rem', lineHeight: 1.6 }}>
          {formState.message}
        </p>
        <p style={{ margin: 0, color: '#047857', fontSize: '0.925rem' }}>
          Our software engineering team in Nagpur will review your requirements and reach out within 24 hours.
        </p>
        <button
          type="button"
          onClick={handleReset}
          style={{
            marginTop: '0.5rem',
            padding: '0.65rem 1.25rem',
            backgroundColor: '#065f46',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  const errors = clientErrors || formState?.errors || {};

  return (
    <div>
      {formState && !formState.success && (
        <div className={`${styles.alert} ${styles.alertError}`} style={{ marginBottom: '1.5rem' }}>
          <AlertCircle size={20} />
          <span>{formState.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div>
          <label htmlFor="contact-name" className={styles.label}>
            Your Name <span className={styles.required}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>

        <div className={styles.rowGrid}>
          <div>
            <label htmlFor="contact-email" className={styles.label}>
              Work Email <span className={styles.required}>*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="rahul@company.com"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            />
            {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
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
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            />
            {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
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
            <option value="ui-ux-design">UI/UX Interface &amp; Product Design</option>
            <option value="website-redesign">Legacy Platform Migration / Redesign</option>
            <option value="other">Other Software Engineering Consultation</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={styles.label}>
            Project Scope &amp; Requirements <span className={styles.required}>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Briefly describe your objectives, functional features, timeline, and current platform challenges..."
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          />
          {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitBtn}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Submitting...
              </>
            ) : (
              <>
                Send Project Inquiry <Send size={16} />
              </>
            )}
          </button>

          {/* Secondary Mailto Option */}
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
            Prefer direct email? Send your project brief directly to{' '}
            <a 
              href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry%20via%20Website`} 
              style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}
            >
              {CONTACT_EMAIL}
            </a>.
          </p>
        </div>
      </form>
    </div>
  );
}
