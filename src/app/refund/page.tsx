import Link from 'next/link'

export const metadata = {
  title: 'Refund Policy',
  alternates: {
    canonical: 'https://appbuildingblueprint.com/refund',
  },
  robots: {
    index: false,
  },
}

export default function RefundPage() {
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
          Refund Policy
        </h1>
        <p style={{ color: '#475569', fontSize: 13, fontFamily: 'var(--font-space-mono)', marginBottom: 48 }}>Last updated: April 12, 2026</p>

        {[
          {
            title: '1. Our Commitment',
            body: 'We want you to be happy with your purchase. If App Building Blueprint isn\'t what you expected, we\'ll make it right.',
          },
          {
            title: '2. 7-Day Refund Window',
            body: 'If you\'re not satisfied with your purchase for any reason, you may request a full refund within 7 days of your purchase date. No questions asked.',
          },
          {
            title: '3. How to Request a Refund',
            body: 'To request a refund, email us at support@appbuildingblueprint.com with your purchase email address and order details. We\'ll process your refund within 3–5 business days.',
          },
          {
            title: '4. After the 7-Day Window',
            body: 'Refund requests made after 7 days of purchase will be reviewed on a case-by-case basis. We reserve the right to decline refund requests after this window, but we\'ll always try to find a fair resolution.',
          },
          {
            title: '5. Digital Product Notice',
            body: 'App Building Blueprint is a digital product. Access is granted immediately upon purchase. By completing your purchase, you acknowledge that you are buying a digital product and agree to this refund policy.',
          },
          {
            title: '6. Contact',
            body: 'For any refund-related questions, contact us at support@appbuildingblueprint.com.',
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
            <Link href="/privacy" style={{ color: '#475569', textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
