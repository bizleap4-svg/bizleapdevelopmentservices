'use client';

import { useActionState } from 'react';
import { submitContactForm, ContactFormState } from './actions';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

const initialState: ContactFormState = {
  success: false,
  message: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className={styles.form}>
      {state.message && (
        <div
          role="alert"
          className={`${styles.alert} ${state.success ? styles.alertSuccess : styles.alertError}`}
        >
          {state.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <span>{state.message}</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className={styles.label}>
          Your Name <span className={styles.required}>*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="e.g. Rahul Sharma"
          required
          disabled={isPending || state.success}
          className={`${styles.input} ${state.errors?.name ? styles.inputError : ''}`}
        />
        {state.errors?.name && (
          <p className={styles.errorMessage}>{state.errors.name}</p>
        )}
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
            placeholder="rahul@company.com"
            required
            disabled={isPending || state.success}
            className={`${styles.input} ${state.errors?.email ? styles.inputError : ''}`}
          />
          {state.errors?.email && (
            <p className={styles.errorMessage}>{state.errors.email}</p>
          )}
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
            disabled={isPending || state.success}
            className={`${styles.input} ${state.errors?.phone ? styles.inputError : ''}`}
          />
          {state.errors?.phone && (
            <p className={styles.errorMessage}>{state.errors.phone}</p>
          )}
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
          disabled={isPending || state.success}
          className={`${styles.select} ${state.errors?.service ? styles.inputError : ''}`}
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
          Project Scope &amp; Requirements <span className={styles.required}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Briefly describe your goals, timeline, and current website or application challenges..."
          required
          disabled={isPending || state.success}
          className={`${styles.textarea} ${state.errors?.message ? styles.inputError : ''}`}
        />
        {state.errors?.message && (
          <p className={styles.errorMessage}>{state.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending || state.success}
        className={`${styles.submitBtn} ${state.success ? styles.submitBtnSuccess : ''}`}
      >
        {isPending ? 'Sending Project Inquiry...' : state.success ? 'Inquiry Sent Successfully' : (
          <>
            Send Project Inquiry <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
