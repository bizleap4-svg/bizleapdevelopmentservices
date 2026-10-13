'use server';

import nodemailer from 'nodemailer';
import { CONTACT_EMAIL } from '@/config/site';

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get('name') as string)?.trim() || '';
  const email = (formData.get('email') as string)?.trim() || '';
  const phone = (formData.get('phone') as string)?.trim() || '';
  const service = (formData.get('service') as string)?.trim() || '';
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
    errors.message = 'Please tell us a bit about your project (at least 10 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the highlighted form fields before submitting.',
      errors,
    };
  }

  const timestampIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || CONTACT_EMAIL; // bizleapinc@gmail.com
  const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || CONTACT_EMAIL;
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
  const resendApiKey = process.env.RESEND_API_KEY;

  let emailSent = false;

  // 1. Send via Gmail SMTP (Nodemailer) if configured
  if (gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: `"Bizleap Website Lead" <${gmailUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Project Inquiry from ${name} [${service}]`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #e5b82e; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #111827; font-size: 20px;">New Website / App Development Lead</h2>
              <p style="margin: 4px 0 0; color: #6b7280; font-size: 14px;">Submitted via www.bizdevelopment.in</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tbody>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 140px; font-weight: 600;">Client Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: 600;">Work Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: 600;">Phone Number</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">
                    <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone || 'Not provided'}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: 600;">Service Needed</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px; font-weight: 600;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: 600;">Date & Time</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #4b5563; font-size: 14px;">${timestampIST} (IST)</td>
                </tr>
              </tbody>
            </table>

            <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #f3f4f6;">
              <strong style="display: block; color: #111827; font-size: 14px; margin-bottom: 8px;">Project Scope & Message:</strong>
              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f3f4f6; text-align: center;">
              <a href="mailto:${email}?subject=Re: Your Project Inquiry with Bizleap Development" style="display: inline-block; background-color: #111827; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Reply Directly to ${name}
              </a>
            </div>
          </div>
        `,
      });
      emailSent = true;
      console.log(`[Email Dispatched via Gmail SMTP to ${recipientEmail}]`);
    } catch (err) {
      console.error('[Nodemailer Dispatch Error]:', err);
    }
  } else if (resendApiKey) {
    // 2. Send via Resend API if configured
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Bizleap Leads <onboarding@resend.dev>',
          to: [recipientEmail],
          reply_to: email,
          subject: `New Project Inquiry from ${name} [${service}]`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Service:</strong> ${service}</p><p><strong>Message:</strong> ${message}</p>`,
        }),
      });
      if (res.ok) {
        emailSent = true;
        console.log(`[Email Dispatched via Resend to ${recipientEmail}]`);
      }
    } catch (err) {
      console.error('[Resend Dispatch Error]:', err);
    }
  }

  // Always log inquiry to console so leads are preserved under all circumstances
  console.log('[Contact Form Submission Received]', {
    name,
    email,
    phone,
    service,
    message,
    timestamp: timestampIST,
    recipientEmail,
    emailSent,
  });

  return {
    success: true,
    message: emailSent
      ? `Thank you! Your project inquiry has been sent to our team at ${recipientEmail}. We will review your specifications and contact you within 24 hours.`
      : `Thank you! Your project inquiry has been received. Our team will review your requirements and respond at ${email} shortly.`,
  };
}
