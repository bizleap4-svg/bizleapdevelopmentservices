import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, LEGAL_NAME, BRAND_NAME, CONTACT_EMAIL, ADDRESS } from '@/config/site';
import styles from '../services/service-page.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy | Bizleap Development Services',
  description:
    'Learn how Bizleap Development Services uses cookies, analytics tokens, and local storage to optimize your browsing experience and safeguard web security.',
  alternates: {
    canonical: '/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | Bizleap Development Services',
    description:
      'Learn how Bizleap Development Services uses cookies, analytics tokens, and local storage to optimize your browsing experience and safeguard web security.',
    url: `${SITE_URL}/cookie-policy`,
    type: 'website',
    siteName: BRAND_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Bizleap Development Services',
    description:
      'Learn how Bizleap Development Services uses cookies, analytics tokens, and local storage to optimize your browsing experience and safeguard web security.',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.contentWrapper}>
        <Breadcrumbs items={[{ name: 'Cookie Policy', url: '/cookie-policy' }]} />

        <header className={styles.hero}>
          <span className={styles.badge}>Technical Transparency • Cookies</span>
          <h1 className={styles.title}>Cookie Policy</h1>
          <p className={styles.lead}>
            Effective Date: October 2026. This Cookie Policy explains what cookies are, how {LEGAL_NAME} uses cookies and similar technologies on <a href={SITE_URL}>{SITE_URL}</a>, and how you can manage your browser preferences.
          </p>
        </header>

        <article className={styles.bodyContent}>
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text data files downloaded to your computer or mobile device when you visit a website. Cookies allow web applications to recognize your browser, persist user preferences across sessions, verify security tokens, and analyze aggregate traffic performance.
          </p>

          <h2>2. Types of Cookies We Utilize</h2>
          <p>
            Bizleap Development utilizes cookies and browser local storage strictly for functional and optimization purposes:
          </p>
          <ul>
            <li>
              <strong>Strictly Necessary Cookies:</strong> These cookies are essential for the fundamental operation of the website. They manage security tokens, protect forms from CSRF attacks, and enable responsive navigation. Disabling these cookies may break core site functionality.
            </li>
            <li>
              <strong>Performance and Analytics Cookies:</strong> We collect aggregate, anonymized metrics concerning page load times, popular navigation paths, and Core Web Vitals telemetry. This data assists our engineering team in identifying bottlenecks and refining device performance.
            </li>
            <li>
              <strong>Functional & Preference Cookies:</strong> These tokens record user preferences such as your preferred theme mode, animation reduced-motion settings, or previously viewed portfolio categories.
            </li>
          </ul>

          <h2>3. Third-Party Analytics and Pixels</h2>
          <p>
            Our website does not deploy aggressive third-party behavioral advertising trackers. Any analytics tools utilized operate in privacy-compliant modes, anonymizing visitor IP addresses to preserve personal privacy while providing actionable performance insights.
          </p>

          <h2>4. Managing and Disabling Cookies</h2>
          <p>
            Most modern web browsers permit you to manage or delete cookies via your browser settings:
          </p>
          <ul>
            <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies.</li>
            <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data.</li>
            <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
            <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and Site Permissions.</li>
          </ul>
          <p>
            Please note that blocking all cookies may impact your user experience and prevent interactive features—such as contact form state management—from operating as designed.
          </p>

          <h2>5. Policy Updates & Inquiries</h2>
          <p>
            We may update this Cookie Policy periodically to reflect technological adjustments or regulatory standards. For any queries regarding our cookie practices:
          </p>
          <p>
            <strong>{LEGAL_NAME}</strong><br />
            Address: {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India<br />
            Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
