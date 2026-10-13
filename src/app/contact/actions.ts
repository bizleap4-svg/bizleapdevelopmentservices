'use server';

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

  // TODO: Owner review required — Connect this server action to the preferred CRM,
  // Resend/SendGrid API key, or internal mail webhook (e.g., forwarding to bizleapinc@gmail.com).
  console.log('[Contact Form Submission Received]', {
    name,
    email,
    phone,
    service,
    message,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: 'Thank you! Your project inquiry has been received. Our engineering team will review your specifications and respond within 24 hours.',
  };
}
