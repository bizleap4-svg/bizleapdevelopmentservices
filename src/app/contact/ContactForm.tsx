'use client';

import { useActionState } from 'react';
import { submitContactForm, ContactFormState } from './actions';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const initialState: ContactFormState = {
  success: false,
  message: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {state.message && (
        <div
          role="alert"
          style={{
            padding: '1rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: state.success ? '#ecfdf5' : '#fef2f2',
            border: `1px solid ${state.success ? '#10b981' : '#ef4444'}`,
            color: state.success ? '#065f46' : '#991b1b',
            fontSize: '0.95rem',
          }}
        >
          {state.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <span>{state.message}</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>
          Your Name <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="e.g. Rahul Sharma"
          required
          disabled={isPending || state.success}
          style={{
            width: '100%',
            padding: '0.85rem 1rem',
            borderRadius: '8px',
            border: `1px solid ${state.errors?.name ? '#ef4444' : '#d1d5db'}`,
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        {state.errors?.name && (
          <p style={{ margin: '0.35rem 0 0', color: '#ef4444', fontSize: '0.85rem' }}>{state.errors.name}</p>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div>
          <label htmlFor="contact-email" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>
            Work Email <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="rahul@company.com"
            required
            disabled={isPending || state.success}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              border: `1px solid ${state.errors?.email ? '#ef4444' : '#d1d5db'}`,
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          {state.errors?.email && (
            <p style={{ margin: '0.35rem 0 0', color: '#ef4444', fontSize: '0.85rem' }}>{state.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            disabled={isPending || state.success}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              border: `1px solid ${state.errors?.phone ? '#ef4444' : '#d1d5db'}`,
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          {state.errors?.phone && (
            <p style={{ margin: '0.35rem 0 0', color: '#ef4444', fontSize: '0.85rem' }}>{state.errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>
          Service Needed
        </label>
        <select
          id="contact-service"
          name="service"
          disabled={isPending || state.success}
          style={{
            width: '100%',
            padding: '0.85rem 1rem',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            fontSize: '1rem',
            outline: 'none',
            backgroundColor: '#ffffff',
          }}
        >
          <option value="website-development">Website Development (Nagpur)</option>
          <option value="nextjs-engineering">Next.js & React Web Application</option>
          <option value="ecommerce-development">E-Commerce Website Development</option>
          <option value="mobile-app-development">Mobile App Development (iOS & Android)</option>
          <option value="ui-ux-design">UI/UX Interface Design</option>
          <option value="website-redesign">Website Redesign & Speed Optimization</option>
          <option value="other">Other Software Engineering Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>
          Project Scope & Requirements <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Briefly describe your goals, timeline, and current website or application challenges..."
          required
          disabled={isPending || state.success}
          style={{
            width: '100%',
            padding: '0.85rem 1rem',
            borderRadius: '8px',
            border: `1px solid ${state.errors?.message ? '#ef4444' : '#d1d5db'}`,
            fontSize: '1rem',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />
        {state.errors?.message && (
          <p style={{ margin: '0.35rem 0 0', color: '#ef4444', fontSize: '0.85rem' }}>{state.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending || state.success}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          backgroundColor: state.success ? '#10b981' : '#111111',
          color: '#ffffff',
          padding: '0.95rem 1.75rem',
          borderRadius: '10px',
          fontWeight: 600,
          fontSize: '1rem',
          border: 'none',
          cursor: isPending || state.success ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s ease',
        }}
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
