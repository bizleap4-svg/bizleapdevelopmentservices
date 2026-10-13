import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Home, Code, Briefcase, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 5vw 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-yellow, #E5B82E)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Error 404
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, margin: '1rem 0 1.5rem', lineHeight: 1.1 }}>
            Page Not Found
          </h1>
          <p style={{ color: '#888888', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            The requested page does not exist or has been moved. Explore our core services or browse our recent portfolio builds below.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            <Link 
              href="/" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '10px', backgroundColor: '#141414', border: '1px solid #262626', color: '#fff', textDecoration: 'none' }}
            >
              <Home size={18} color="var(--accent-yellow, #E5B82E)" />
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem' }}>Homepage</strong>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>Back to start</span>
              </div>
            </Link>

            <Link 
              href="/services" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '10px', backgroundColor: '#141414', border: '1px solid #262626', color: '#fff', textDecoration: 'none' }}
            >
              <Code size={18} color="var(--accent-yellow, #E5B82E)" />
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem' }}>Services</strong>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>Web & App Engineering</span>
              </div>
            </Link>

            <Link 
              href="/work" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '10px', backgroundColor: '#141414', border: '1px solid #262626', color: '#fff', textDecoration: 'none' }}
            >
              <Briefcase size={18} color="var(--accent-yellow, #E5B82E)" />
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem' }}>Our Work</strong>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>17 Case Studies</span>
              </div>
            </Link>

            <Link 
              href="/contact" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '10px', backgroundColor: '#141414', border: '1px solid #262626', color: '#fff', textDecoration: 'none' }}
            >
              <Mail size={18} color="var(--accent-yellow, #E5B82E)" />
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem' }}>Contact</strong>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>Start a project</span>
              </div>
            </Link>
          </div>

          <Link 
            href="/" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--accent-yellow, #E5B82E)', color: '#000', padding: '0.85rem 1.6rem', borderRadius: '10px', fontWeight: 700, fontFamily: "var(--font-button, 'Poppins', sans-serif)", textDecoration: 'none' }}
          >
            <ArrowLeft size={18} /> Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
