import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  alternates: {
    canonical: 'https://appbuildingblueprint.com/privacy',
  },
  robots: {
    index: false,
  },
}

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e2e8f0' }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 17, letterSpacing: '-0.02em', color: '#fff', textDecoration: 'none' }}>
            App Building Blueprint
          </Link>
          <Link href="/" style={{ fontFamily: 'var(--font-space-mono)', fontSize: 12, color: '#64748b', textDecoration: 'none' }}>
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 100px' }}>
        <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase' }}>Legal</span>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '-0.03em', color: '#fff', margin: '12px 0 8px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#475569', fontSize: 13, fontFamily: 'var(--font-space-mono)', marginBottom: 48 }}>Last updated: April 12, 2026</p>

        {[
          {
            title: '1. Overview',
            body: 'App Building Blueprint ("we", "us") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.',
          },
          {
            title: '2. Information We Collect',
            body: 'When you make a purchase, your payment is processed by Paddle (our payment provider). Paddle collects your name, email address, and payment details directly — we do not store your payment card information. We may receive your email address and purchase details from Paddle to fulfill your order.',
          },
          {
            title: '3. How We Use Your Information',
            body: 'We use your email address to deliver access to your purchase and to send important product updates. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
          },
          {
            title: '4. Cookies & Analytics',
            body: 'We may use basic analytics tools (such as Vercel Analytics) to understand how visitors use our site. This data is anonymized and does not identify individual users. We do not use advertising cookies or tracking pixels.',
          },
          {
            title: '5. Data Storage',
            body: 'Your checklist progress is saved locally in your browser using localStorage. This data never leaves your device and is not sent to our servers.',
          },
          {
            title: '6. Third-Party Services',
            body: 'We use Paddle for payment processing. Paddle\'s privacy practices are governed by their own Privacy Policy, available at paddle.com. Our site is hosted on Vercel, which may collect standard server logs.',
          },
          {
            title: '7. Your Rights',
            body: 'You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at support@appbuildingblueprint.com.',
          },
          {
            title: '8. Changes to This Policy',
            body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page.',
          },
          {
            title: '9. Contact',
            body: 'If you have questions about this Privacy Policy, contact us at support@appbuildingblueprint.com.',
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 18, color: '#e2e8f0', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
              {section.title}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              {section.body}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '36px 24px', fontFamily: 'var(--font-space-mono)', fontSize: 12 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ color: '#334155' }}>© {new Date().getFullYear()} App Building Blueprint</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/terms" style={{ color: '#475569', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/refund" style={{ color: '#475569', textDecoration: 'none' }}>Refund Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
